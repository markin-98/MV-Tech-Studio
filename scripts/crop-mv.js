const sharp = require("sharp");

const SRC = process.argv[2] || "C:/Users/nikol/Downloads/Logo MV Tech.png";
const OUT = process.argv[3] || "C:/Users/nikol/Documents/Marcus/SItePortifolio/public/mv-logo.png";

(async () => {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;
  const idx = (x, y) => (y * W + x) * C;
  const isLight = (i) => data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200;

  // flood-fill background from borders
  const bg = new Uint8Array(W * H);
  const stack = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const p = y * W + x;
    if (bg[p] || !isLight(idx(x, y))) return;
    bg[p] = 1;
    stack.push(x, y);
  };
  for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
  for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
  while (stack.length) {
    const y = stack.pop(), x = stack.pop();
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
  }

  // apply transparency + feather; collect SOLID-pixel row counts (alpha kept high)
  const rowCount = new Uint32Array(H);
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      const p = y * W + x, i = idx(x, y);
      if (bg[p]) { data[i + 3] = 0; continue; }
      const veryLight = data[i] > 225 && data[i + 1] > 225 && data[i + 2] > 225;
      const touchesBg = veryLight && (
        (x > 0 && bg[p - 1]) || (x < W - 1 && bg[p + 1]) ||
        (y > 0 && bg[p - W]) || (y < H - 1 && bg[p + W]));
      if (touchesBg) data[i + 3] = 90;
      if (data[i + 3] > 200) rowCount[y]++; // solid only → ignores faint specks
    }

  const peak = Math.max(...rowCount);
  const filled = (y) => rowCount[y] > peak * 0.08;

  // first contiguous run of filled rows = the MV block
  let a = 0; while (a < H && !filled(a)) a++;
  let b = a; while (b < H && filled(b)) b++;
  // tolerate tiny gaps inside MV: extend across short gaps
  for (let y = b; y < H; y++) {
    if (filled(y)) { let gap = y - b; if (gap <= 12) b = y + 1; else break; }
  }
  const mvTop = a, mvBottom = b;

  // horizontal bbox using only MV rows and solid columns
  const colCount = new Uint32Array(W);
  for (let y = mvTop; y < mvBottom; y++)
    for (let x = 0; x < W; x++)
      if (data[idx(x, y) + 3] > 200) colCount[x]++;
  const colPeak = Math.max(...colCount);
  let minX = 0; while (minX < W && colCount[minX] <= colPeak * 0.02) minX++;
  let maxX = W - 1; while (maxX > 0 && colCount[maxX] <= colPeak * 0.02) maxX--;

  const pad = 10;
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, mvTop - pad);
  const right = Math.min(W - 1, maxX + pad);
  const bottom = Math.min(H - 1, mvBottom - 1 + pad);
  const cw = right - left + 1, ch = bottom - top + 1;

  await sharp(data, { raw: { width: W, height: H, channels: C } })
    .extract({ left, top, width: cw, height: ch })
    .png()
    .toFile(OUT);

  console.log(JSON.stringify({ peak, mvTop, mvBottom, crop: { left, top, cw, ch } }));
})();

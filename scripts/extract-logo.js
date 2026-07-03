const sharp = require("sharp");
const fs = require("fs");

const SRC = process.argv[2] || "C:/Users/nikol/Downloads/Logo MV Tech.png";
const OUT = process.argv[3] || "C:/Users/nikol/Documents/Marcus/SItePortifolio/public/mv-logo-full.png";

(async () => {
  const img = sharp(SRC).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;
  const idx = (x, y) => (y * W + x) * C;

  // background = light pixel (all channels high) connected to the border
  const isLight = (i) => data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200;
  const bg = new Uint8Array(W * H);
  const stack = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    const p = y * W + x;
    if (bg[p]) return;
    if (!isLight(idx(x, y))) return;
    bg[p] = 1;
    stack.push(x, y);
  };
  for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
  for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
  while (stack.length) {
    const y = stack.pop(), x = stack.pop();
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
  }

  // apply transparency; soften near-white edges that survived (anti-alias halo)
  let minX = W, minY = H, maxX = 0, maxY = 0;
  const rowCount = new Uint32Array(H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const p = y * W + x, i = idx(x, y);
      if (bg[p]) {
        data[i + 3] = 0;
      } else {
        // feather: if a kept pixel is very light and touches background, lower alpha
        const veryLight = data[i] > 225 && data[i + 1] > 225 && data[i + 2] > 225;
        if (veryLight) {
          const touchesBg =
            (x > 0 && bg[p - 1]) || (x < W - 1 && bg[p + 1]) ||
            (y > 0 && bg[p - W]) || (y < H - 1 && bg[p + W]);
          if (touchesBg) data[i + 3] = 90;
        }
        if (data[i + 3] > 0) {
          rowCount[y]++;
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
  }

  await sharp(data, { raw: { width: W, height: H, channels: C } })
    .png()
    .toFile(OUT);

  // print a compact vertical profile (content density per 5% band) to locate TECH STUDIO
  const bands = 20;
  const prof = [];
  for (let b = 0; b < bands; b++) {
    let sum = 0;
    const y0 = Math.floor((b / bands) * H), y1 = Math.floor(((b + 1) / bands) * H);
    for (let y = y0; y < y1; y++) sum += rowCount[y];
    prof.push(Math.round(sum / ((y1 - y0) * W) * 100));
  }
  console.log(JSON.stringify({ W, H, bbox: { minX, minY, maxX, maxY }, profilePct: prof }));
})();

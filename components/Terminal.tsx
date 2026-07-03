"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile, projects, skillGroups } from "@/lib/data";

type Line = { kind: "cmd" | "out" | "accent" | "muted"; text: string };

const PROMPT = "mv ~ %";
const CHIPS = ["whoami", "projetos", "skills", "formação", "contato", "cv"];

const techs = skillGroups.flatMap((g) => g.skills.map((s) => s.name)).join(" · ");

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return [];

  switch (cmd) {
    case "help":
      return [
        { kind: "muted", text: "comandos disponíveis:" },
        { kind: "out", text: "  whoami     quem é o Marcus" },
        { kind: "out", text: "  sobre      resumo profissional" },
        { kind: "out", text: "  skills     stack e ferramentas" },
        { kind: "out", text: "  projetos   projetos em destaque" },
        { kind: "out", text: "  formacao   formação acadêmica" },
        { kind: "out", text: "  contato    canais de contato" },
        { kind: "out", text: "  cv         baixar currículo (PDF)" },
        { kind: "out", text: "  clear      limpar o terminal" },
      ];
    case "whoami":
      return [
        { kind: "accent", text: profile.name },
        { kind: "out", text: profile.role + " · " + profile.location },
      ];
    case "sobre":
    case "about":
      return [{ kind: "out", text: profile.summary[0] }];
    case "skills":
    case "stack":
      return [
        { kind: "muted", text: "// stack" },
        { kind: "out", text: techs },
      ];
    case "projetos":
    case "projects":
    case "ls":
      scrollTo("projetos");
      return [
        ...projects.map((p) => ({
          kind: "out" as const,
          text: "  ▸ " + p.title,
        })),
        { kind: "muted", text: "→ abrindo a seção Projetos…" },
      ];
    case "formacao":
    case "formação":
      return [
        { kind: "out", text: "ADS · PUC Minas — São Gabriel (2023–2027)" },
        { kind: "out", text: "Designer Gráfico · Escola Saga (2018–2020)" },
      ];
    case "contato":
    case "contact":
      scrollTo("contato");
      return [
        { kind: "out", text: "email    " + profile.email },
        { kind: "out", text: "whatsapp " + profile.phone },
        { kind: "out", text: "github   " + profile.github.replace("https://", "") },
        { kind: "out", text: "linkedin /in/marcusviniciusfc" },
        { kind: "muted", text: "→ abrindo a seção Contato…" },
      ];
    case "cv":
    case "curriculo":
    case "currículo": {
      const a = document.createElement("a");
      a.href = profile.cvUrl;
      a.download = "";
      a.click();
      return [{ kind: "accent", text: "⬇ baixando currículo…" }];
    }
    case "sudo hire-me":
    case "hire-me":
    case "hireme":
      scrollTo("contato");
      return [
        { kind: "accent", text: "acesso concedido ✓" },
        { kind: "muted", text: "vamos conversar? → seção Contato" },
      ];
    case "clear":
    case "cls":
      return [{ kind: "muted", text: "__CLEAR__" }];
    default:
      return [
        { kind: "muted", text: `comando não encontrado: ${cmd}` },
        { kind: "muted", text: "digite 'help' para ver as opções" },
      ];
  }
}

const BOOT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "accent", text: profile.name },
  { kind: "out", text: profile.role },
  { kind: "cmd", text: "cat stack.txt" },
  { kind: "out", text: "React · C# .NET · TypeScript · SQL · Node.js" },
  { kind: "muted", text: "digite ou toque num comando abaixo ↓  (tente 'help')" },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence (typewriter-ish); instant if reduced motion
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLines(BOOT);
      setBooted(true);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      setLines(BOOT.slice(0, i + 1));
      i++;
      if (i < BOOT.length) {
        timer = setTimeout(step, BOOT[i].kind === "cmd" ? 320 : 200);
      } else {
        setBooted(true);
      }
    };
    timer = setTimeout(step, 350);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const submit = useCallback((raw: string) => {
    const out = runCommand(raw);
    if (out.some((l) => l.text === "__CLEAR__")) {
      setLines([]);
      return;
    }
    setLines((prev) => [...prev, { kind: "cmd", text: raw }, ...out]);
  }, []);

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      submit(input);
      setInput("");
    }
  };

  const color = (k: Line["kind"]) =>
    k === "accent"
      ? "text-sky-300"
      : k === "muted"
        ? "text-slate-500"
        : k === "cmd"
          ? "text-slate-300"
          : "text-slate-200";

  return (
    <div
      className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e17] shadow-2xl shadow-black/40 ring-1 ring-black/40"
      onClick={() => inputRef.current?.focus()}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex items-center gap-2 font-mono text-xs text-slate-400">
          <img
            src={profile.avatar}
            alt=""
            className="h-4 w-4 rounded-full object-cover"
          />
          marcus@mv-tech: ~
        </span>
      </div>

      {/* body */}
      <div
        ref={bodyRef}
        className="h-[240px] overflow-y-auto p-4 font-mono text-[13px] leading-relaxed sm:h-[320px]"
      >
        {lines.map((l, i) => (
          <div key={i} className={`whitespace-pre-wrap break-words ${color(l.kind)}`}>
            {l.kind === "cmd" ? (
              <>
                <span className="text-emerald-400">{PROMPT}</span>{" "}
                <span>{l.text}</span>
              </>
            ) : (
              l.text
            )}
          </div>
        ))}

        {/* live input line */}
        {booted && (
          <>
            {/* mobile: non-typing prompt with blinking cursor (typing on touch is awkward) */}
            <div className="mt-1 flex items-center sm:hidden">
              <span className="text-emerald-400">{PROMPT}</span>
              <span className="ml-2 inline-block h-4 w-[7px] animate-pulse rounded-[1px] bg-emerald-400/80" />
            </div>
            {/* tablet/desktop: interactive input */}
            <div className="mt-1 hidden items-center sm:flex">
              <span className="text-emerald-400">{PROMPT}</span>
              <span className="relative ml-2 flex-1">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  spellCheck={false}
                  autoCapitalize="off"
                  autoComplete="off"
                  aria-label="Digite um comando"
                  className="w-full bg-transparent text-slate-200 caret-emerald-400 outline-none placeholder:text-slate-600"
                  placeholder="help"
                />
              </span>
            </div>
          </>
        )}
      </div>

      {/* command chips */}
      <div className="flex flex-wrap gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-3">
        {CHIPS.map((c) => (
          <button
            key={c}
            onClick={() => submit(c)}
            className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300 active:border-emerald-400/60"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

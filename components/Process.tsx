import { Search, PenTool, Code2, Rocket, LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { process } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Search, PenTool, Code2, Rocket };

export default function Process() {
  return (
    <section id="processo" className="section-pad">
      <Reveal>
        <p className="eyebrow">
          Processo
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          Como eu trabalho
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Um fluxo simples e transparente, da ideia à entrega.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {process.map((p, i) => {
          const Icon = icons[p.icon] ?? Search;
          return (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute right-5 top-4 font-mono text-4xl font-extrabold text-line/5 transition-colors group-hover:text-brand-500/20">
                  {p.step}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600 transition-colors group-hover:bg-brand-500/25 dark:text-brand-300">
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

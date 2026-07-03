import { Zap, Palette, MessageCircle, Code2, LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { differentials } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Zap,
  Palette,
  MessageCircle,
  Code2,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-pad">
      <Reveal>
        <p className="eyebrow">
          Diferenciais
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          Por que me contratar
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Mais do que código: o que eu trago para um time e para um projeto.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {differentials.map((d, i) => {
          const Icon = icons[d.icon] ?? Zap;
          return (
            <Reveal key={d.title} dir="scale" delay={(i % 2) * 0.1}>
              <div className="group glass relative flex h-full gap-4 overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600 transition-colors group-hover:bg-brand-500/25 dark:text-brand-300">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {d.text}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

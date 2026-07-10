import { Github, ExternalLink, Award, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" className="section-pad">
      <Reveal>
        <p className="eyebrow">Portfólio</p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          Projetos em destaque
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Uma seleção do que já construí. O código completo está no meu GitHub.
        </p>
      </Reveal>

      {/* Featured — the award-winning project leads */}
      <Reveal delay={0.05}>
        <article className="group glass relative mt-10 overflow-hidden rounded-2xl p-6 ring-1 ring-brand-500/20 transition-all hover:-translate-y-1 hover:ring-brand-500/40 md:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {featured.realClient && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                    <BadgeCheck size={13} /> Cliente real
                  </span>
                )}
                {featured.award && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-500 dark:text-amber-300">
                    <Award size={13} /> {featured.award}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-fg">
                {featured.title}
              </h3>
              {featured.role && (
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {featured.role}
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-500"
                >
                  <Github size={16} /> Ver código
                </a>
                {featured.demo && (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line/15 px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-line/5"
                  >
                    <ExternalLink size={16} /> Ver demo
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end md:self-start">
              {featured.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line/10 bg-line/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>

      {/* The rest */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.title} dir={i % 2 ? "right" : "left"} delay={(i % 2) * 0.1}>
            <article className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <h3 className="font-display text-xl font-semibold text-fg">
                {p.title}
              </h3>
              {p.role && (
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-brand-600 dark:text-brand-400/80">
                  {p.role}
                </p>
              )}

              {p.realClient && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                  <BadgeCheck size={13} /> Cliente real
                </p>
              )}

              {p.award && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-500 dark:text-amber-300">
                  <Award size={13} /> {p.award}
                </p>
              )}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line/10 bg-line/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-line/10 pt-4">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  <Github size={16} /> Código
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/markin-98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line/15 px-6 py-3 font-medium text-fg transition-colors hover:bg-line/5"
          >
            <Github size={18} /> Ver todos no GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}

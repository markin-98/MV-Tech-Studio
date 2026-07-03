import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <Reveal>
        <p className="eyebrow">
          Stack
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          Tecnologias que uso
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Ferramentas e linguagens com que trabalho no dia a dia, do front-end
          ao back-end.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <div
                    key={s.name}
                    className="group flex items-center gap-2 rounded-xl border border-line/5 bg-line/[0.02] px-3 py-2 transition-all hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-line/5"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}.svg`}
                      alt={s.name}
                      className={`h-6 w-6${s.mono ? " brightness-0 invert" : ""}`}
                      loading="lazy"
                    />
                    <span className="text-sm text-muted">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { GraduationCap, Palette, LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

const icons: Record<string, LucideIcon> = { GraduationCap, Palette };

export default function Education() {
  return (
    <section id="formacao" className="section-pad">
      <Reveal>
        <p className="eyebrow">
          Formação
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          Formação & cursos
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Minha base acadêmica em tecnologia e a formação anterior em design que
          molda o cuidado com cada interface.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((e, i) => {
          const Icon = icons[e.icon] ?? GraduationCap;
          return (
            <Reveal key={e.course} delay={i * 0.1}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <span className="inline-flex shrink-0 rounded-xl bg-brand-500/15 p-3 text-brand-600 transition-colors group-hover:bg-brand-500/25 dark:text-brand-300">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {e.course}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                      {e.org}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                      {e.period}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {e.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

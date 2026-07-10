import { Globe, Layers, Server, Rocket, LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Globe, Layers, Server, Rocket };

export default function Services() {
  return (
    <section id="servicos" className="section-pad">
      <Reveal>
        <p className="eyebrow">
          Como posso contribuir
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          O que eu faço
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Como posso ajudar sua empresa ou projeto a sair do papel.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Globe;
          return (
            <Reveal key={s.title} dir="scale" delay={i * 0.08}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 inline-flex rounded-xl bg-brand-500/15 p-3 text-brand-600 transition-colors group-hover:bg-brand-500/25 dark:text-brand-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import { MapPin, GraduationCap, Code2, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const highlights = [
  { icon: GraduationCap, label: "Formação", value: "ADS · PUC Minas · 2023–2027" },
  { icon: Code2, label: "Foco", value: "Desenvolvimento Full Stack" },
  { icon: MapPin, label: "Localização", value: "Belo Horizonte, MG — Brasil" },
  { icon: CheckCircle2, label: "Disponibilidade", value: "Estágio · CLT · Freelance" },
];

export default function About() {
  return (
    <section id="sobre" className="section-pad">
      <Reveal>
        <p className="eyebrow">
          Sobre mim
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
          Quem é o Marcus
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <Reveal dir="left">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-muted">{profile.pitch}</p>
          </div>
        </Reveal>

        <Reveal dir="right" delay={0.15}>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted">
              Em resumo
            </h3>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-300">
                    <h.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {h.label}
                    </span>
                    <span className="block text-sm text-fg">
                      {h.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

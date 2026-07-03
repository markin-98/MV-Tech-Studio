import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "E-mail",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: profile.phone,
      href: `https://wa.me/${profile.phoneRaw}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/marcusviniciusfc",
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/markin-98",
      href: profile.github,
    },
  ];

  return (
    <section id="contato" className="section-pad">
      <Reveal>
        <div className="glass overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">
                Contato
              </p>
              <h2 className="mt-2 text-3xl font-display font-bold text-fg sm:text-4xl">
                Vamos construir algo juntos
              </h2>
              <p className="mt-4 text-muted">
                Tem um projeto, vaga ou ideia? Estou aberto a estágio, CLT e
                projetos freelance. Respondo rápido — escolha o canal que
                preferir.
              </p>
              <a
                href={`https://wa.me/${profile.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 font-medium text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
              >
                <MessageCircle size={18} /> Chamar no WhatsApp
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-line/5 bg-line/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-line/5"
                >
                  <span className="inline-flex rounded-xl bg-brand-500/15 p-2.5 text-brand-600 dark:text-brand-300">
                    <c.icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm text-fg">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "./Logo";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line/5">
      {/* Centered layout keeps content clear of the bottom-right floating buttons at every width */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 pb-32 pt-12 text-center">
        <a href="#" className="flex items-center gap-2.5" aria-label="MV Tech Studio">
          <Logo className="h-9 w-auto" />
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            Tech <span className="text-brand-600 dark:text-brand-400">Studio</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-fg"
            aria-label="E-mail"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.brand} · {profile.name} · Feito
          com Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

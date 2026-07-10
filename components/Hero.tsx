"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import Terminal from "./Terminal";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 animate-aurora rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] animate-aurora rounded-full bg-brand-500/10 blur-[120px] [animation-delay:-6s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-28 pb-16 md:grid-cols-[0.92fr_1.08fr] md:pt-0">
        {/* Intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-14 w-14 rounded-full border-2 border-line/10 object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-green-400" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              &lt;/&gt; desenvolvedor full stack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-display font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.4rem]"
          >
            Olá, sou{" "}
            <span className="gradient-text whitespace-nowrap">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md text-lg text-muted"
          >
            {profile.valueProp}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-3 font-mono text-sm text-brand-600 dark:text-brand-400/90"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-line/10 bg-line/5 px-4 py-1.5 text-sm text-brand-600 dark:text-brand-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Disponível para estágio, CLT e projetos freelance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="rounded-full bg-brand-600 px-7 py-3 font-medium text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Ver projetos
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line/15 px-7 py-3 font-medium text-fg transition-colors hover:bg-line/5"
            >
              <Download size={18} /> Baixar CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-fg"
              aria-label="E-mail"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* Signature: interactive terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-fg"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}

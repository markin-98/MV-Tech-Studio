# MV Tech Studio — Portfólio de Marcus Vinicius

Portfólio pessoal de desenvolvedor Full Stack, construído com **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

🔗 **Site no ar:** https://mv-tech-studio.vercel.app

## Destaques

- Tema **claro/escuro** com `next-themes`
- **Terminal interativo** no hero (digite ou toque em comandos: `whoami`, `projetos`, `cv`…)
- Tipografia com personalidade (Space Grotesk + JetBrains Mono) e animações de scroll
- Totalmente **responsivo** e otimizado para recrutadores

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Editar conteúdo

Todo o conteúdo (perfil, projetos, skills, serviços, formação) está centralizado em
[`lib/data.ts`](lib/data.ts). Basta editar esse arquivo para atualizar o site.

## Deploy

Hospedado na **Vercel** com deploy automático: cada `git push` na branch `main`
publica a nova versão em produção.

## Estrutura

```
app/            # Layout, página principal e estilos globais
components/     # Seções e elementos (Hero, Terminal, Projects, ThemeToggle, …)
lib/data.ts    # Todo o conteúdo editável
public/        # Logo, currículo (PDF) e assets
```

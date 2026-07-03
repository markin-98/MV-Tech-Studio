# Portfólio — Marcus Vinicius

Site portfólio pessoal construído com **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

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

## Deploy (recomendado: Vercel)

1. Suba este projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. A Vercel detecta o Next.js automaticamente — é só clicar em **Deploy**.

## Editar conteúdo

Todo o conteúdo (perfil, projetos, skills, serviços) está centralizado em
[`lib/data.ts`](lib/data.ts). Basta editar esse arquivo para atualizar o site.

## Estrutura

```
app/            # Layout, página principal e estilos globais
components/      # Seções: Hero, About, Skills, Projects, Services, Contact, Footer
lib/data.ts     # Todo o conteúdo editável
```

export const profile = {
  name: "Marcus Vinicius",
  brand: "MV Tech Studio",
  role: "Desenvolvedor Full Stack",
  headline:
    "Front-end & Back-end · React · C# .NET · TypeScript · SQL",
  location: "Belo Horizonte, Minas Gerais — Brasil",
  email: "marcusv2354@gmail.com",
  phone: "+55 31 97140-4129",
  phoneRaw: "5531971404129",
  github: "https://github.com/markin-98",
  linkedin: "https://www.linkedin.com/in/marcusviniciusfc/",
  avatar: "https://avatars.githubusercontent.com/u/106634907?v=4",
  cvUrl: "/Marcus-Vinicius-Curriculo.pdf",
  summary: [
    "Sou desenvolvedor Full Stack e curso Análise e Desenvolvimento de Sistemas na PUC Minas. Gosto de construir aplicações web que funcionam bem e são fáceis de manter.",
    "Trabalho com React, Angular e TypeScript no front-end e com C#/.NET e Node.js no back-end, integrando APIs REST e bancos de dados como SQL Server e MySQL.",
  ],
  pitch:
    "Procuro minha primeira oportunidade na área para crescer em equipe e colocar em prática o que venho aprendendo.",
};

export type Skill = { name: string; icon: string; mono?: boolean };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Front-end",
    skills: [
      { name: "React", icon: "react/react-original" },
      { name: "Angular", icon: "angularjs/angularjs-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "HTML5", icon: "html5/html5-original" },
      { name: "CSS3", icon: "css3/css3-original" },
    ],
  },
  {
    title: "Back-end & Dados",
    skills: [
      { name: "C#", icon: "csharp/csharp-original" },
      { name: ".NET", icon: "dotnetcore/dotnetcore-original" },
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "MySQL", icon: "mysql/mysql-original" },
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
    ],
  },
  {
    title: "Mobile & Ferramentas",
    skills: [
      { name: "Flutter", icon: "flutter/flutter-original" },
      { name: "Dart", icon: "dart/dart-original" },
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original", mono: true },
      { name: "Visual Studio", icon: "visualstudio/visualstudio-original" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  highlight?: boolean;
  award?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    title: "Fiuza Nails — Agendamento Online",
    description:
      "Aplicativo web instalável para um estúdio de unhas. O cliente agenda o horário, paga o sinal por Pix e acompanha o programa de fidelidade; o admin gerencia a agenda, os serviços, os clientes e os relatórios. Backend em Supabase, login pelo Google e tema claro/escuro.",
    tags: ["JavaScript", "PWA", "Supabase", "Pix", "Auth"],
    repo: "https://github.com/markin-98/FiuzaNailsApp",
    highlight: true,
    role: "Projeto completo — do front ao back",
  },
  {
    title: "Projeto EZ — Dashboard Angular",
    description:
      "Aplicação Angular com fluxo completo de autenticação — login, criação de senha e rotas protegidas com Guards — e um dashboard com KPIs, gráficos e tabela. Foco em componentização, formulários reativos e separação de responsabilidades via services.",
    tags: ["Angular", "TypeScript", "SCSS", "Auth", "Dashboard"],
    repo: "https://github.com/markin-98/Projeto-EZ",
    highlight: true,
    role: "Desenvolvimento individual",
  },
  {
    title: "EcoArtes — E-commerce Sustentável",
    description:
      "Plataforma de venda e divulgação de produtos artesanais e naturais, com seção de tutoriais sustentáveis. Projeto acadêmico com documentação completa de contexto, especificação, arquitetura e teste de usabilidade.",
    tags: ["HTML", "JavaScript", "CSS", "Handlebars"],
    repo: "https://github.com/markin-98/Trabalho_EcoArtes",
    highlight: true,
    award: "Melhor trabalho do semestre",
    role: "Projeto acadêmico premiado",
  },
  {
    title: "Hotel Pet — App Flutter",
    description:
      "Aplicativo mobile para hotel de pets, desenvolvido como desafio técnico para a empresa Pluritech em 5 dias. Primeiro contato com Flutter e Node.js, mostrando capacidade de aprender tecnologias novas sob prazo.",
    tags: ["Flutter", "Dart", "Node.js", "Mobile"],
    repo: "https://github.com/markin-98/testePluritech",
    highlight: true,
    role: "Front-end mobile + back-end",
  },
];

export const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web modernas, responsivas e performáticas com React, Angular e TypeScript.",
    icon: "Globe",
  },
  {
    title: "Aplicações Full Stack",
    description:
      "Sistemas completos com front-end, APIs REST, autenticação e banco de dados relacional.",
    icon: "Layers",
  },
  {
    title: "APIs & Back-end",
    description:
      "Integração e construção de APIs REST com C# .NET e Node.js, seguindo Clean Code e SOLID.",
    icon: "Server",
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de apresentação para marcas e negócios, com foco em conversão e identidade visual.",
    icon: "Rocket",
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Projetos desenvolvidos" },
  { value: 15, suffix: "+", label: "Tecnologias na bagagem" },
  { value: 4, suffix: "º", label: "Período em ADS" },
  { value: 1, suffix: "", label: "Prêmio acadêmico" },
];

export const differentials = [
  {
    icon: "Zap",
    title: "Aprendizado rápido",
    text: "Pego tecnologias novas sob prazo — entreguei um app em Flutter + Node.js em apenas 5 dias no meu primeiro contato com a stack.",
  },
  {
    icon: "Palette",
    title: "Olhar de design",
    text: "Formação em Design Gráfico que se traduz em interfaces limpas, usáveis e com identidade visual cuidada.",
  },
  {
    icon: "MessageCircle",
    title: "Comunicação clara",
    text: "Perfil comunicativo e colaborativo, acostumado a trabalhar em equipe e alinhar expectativas do início ao fim.",
  },
  {
    icon: "Code2",
    title: "Código organizado",
    text: "Aplico Clean Code, SOLID e boas práticas para entregar software fácil de manter e evoluir.",
  },
];

export const process = [
  {
    step: "01",
    icon: "Search",
    title: "Descoberta",
    text: "Entendo o objetivo, o público e os requisitos do projeto antes de escrever a primeira linha de código.",
  },
  {
    step: "02",
    icon: "PenTool",
    title: "Planejamento",
    text: "Defino arquitetura, telas e tecnologias, organizando o trabalho em etapas claras e mensuráveis.",
  },
  {
    step: "03",
    icon: "Code2",
    title: "Desenvolvimento",
    text: "Construo a aplicação com código limpo, componentização e integração de APIs e banco de dados.",
  },
  {
    step: "04",
    icon: "Rocket",
    title: "Entrega",
    text: "Testo, ajusto e publico a solução, com documentação e suporte para evoluções futuras.",
  },
];

export const education = [
  {
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    org: "PUC Minas — São Gabriel",
    period: "2023 — 2027 · Cursando 4º período",
    description:
      "Foco em desenvolvimento Full Stack, POO, estruturas de dados, bancos de dados relacionais e boas práticas de arquitetura de software.",
    icon: "GraduationCap",
  },
  {
    course: "Designer Gráfico",
    org: "Escola Saga",
    period: "set/2018 — ago/2020",
    description:
      "Formação presencial em design e comunicação visual, base que reforça o olhar para UI, usabilidade e identidade visual nos projetos.",
    icon: "Palette",
  },
];

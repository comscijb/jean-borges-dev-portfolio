import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "caldeirao-da-bruxa",
    title: "Caldeirão da Bruxa",
    slug: "caldeirao-da-bruxa",
    category: "Site completo restaurante",
    description:
      "Site completo para o restaurante Caldeirão da Bruxa, focado em conversão, com visual premium e cardápio incluso.",
    image: "/projects/caldeirao-da-bruxa.jpg",
    tags: ["React", "TypeScript", "Chakra UI"],
    linkType: "external",
    externalUrl: "https://caldeiraodabruxa.com",
    featured: true,
  },
  {
    id: "construiq",
    title: "ConstruiQ Landing Page",
    slug: "construiq-landing-page",
    category: "Marketplace B2B",
    description:
      "Landing page para plataforma de contratação de profissionais b2b da construção civil, com reputação verificável, contratos digitais, avaliações e mediação de disputas.",
    image: "/projects/construiq-cover.jpg",
    tags: ["React", "TypeScript", "Chakra UI", "Node.js", "PostgreSQL"],
    linkType: "internal",
    featured: true,
    caseStudy: {
      eyebrow: "Marketplace B2B para construção civil",
      headline:
        "Uma plataforma para reduzir o risco na contratação de mão de obra em obras.",
      problem:
        "Contratantes da construção civil dependem muito de indicações informais, grupos públicos e tentativa e erro para encontrar profissionais confiáveis. Isso aumenta risco de atraso, retrabalho, conflito e perda de reputação com o cliente final.",
      solution:
        "A ConstruiQ organiza o fluxo de contratação em uma plataforma com perfis de trabalhadores e contratantes, candidaturas, contratos digitais, validação administrativa, avaliações justificadas e mediação de disputas.",
      result:
        "MVP funcional com fluxos principais para contratante, trabalhador e administrador, incluindo base para reputação verificável, gestão de contratos e evolução futura do marketplace.",
      role:
        "Desenvolvimento full stack, arquitetura do MVP, UX/UI, regras de negócio e implementação dos fluxos principais.",
      year: "2026",
      metrics: [
        { label: "Perfis principais", value: "3" },
        {
          label: "Fluxos centrais",
          value: "Contratação, reputação e disputa",
        },
        { label: "Status", value: "MVP avançado" },
      ],
      features: [
        "Cadastro e autenticação por tipo de usuário.",
        "Perfis separados para contratante, trabalhador e administrador.",
        "Criação de obras e vagas por contratantes.",
        "Candidatura de trabalhadores em vagas abertas.",
        "Contratos digitais com aceite do trabalhador.",
        "Validação administrativa e controle de permissões.",
        "Sistema de avaliações com justificativa obrigatória para notas baixas.",
        "Mediação de disputas com participação do administrador.",
      ],
      images: [
        {
          src: "/projects/construiq-hero.jpg",
          alt: "Hero section da landing page da ConstruiQ",
          title: "Landing page",
          description: "Primeira dobra da página com proposta de valor.",
        },
        {
          src: "/projects/construiq-players.jpg",
          alt: "Benefícios para usuários",
          title: "Benefícios para os usuários",
          description: "Seção completa com os benefícios da plataforma para cada tipo de usuário.",
        },
        {
          src: "/projects/construiq-diffs.jpg",
          alt: "Diferenciais da ConstruiQ",
          title: "Diferenciais da plataforma",
          description: "O que diferencia a ConstruiQ de outras soluções e métodos de contratação.",
        },
        {
          src: "/projects/construiq-pain-solution.jpg",
          alt: "Dor e solução da ConstruiQ",
          title: "Dor e solução",
          description: "Uma seção que apresenta a dor do público-alvo e como a ConstruiQ resolve esse problema.",
        },
      ],
    },
  },
  {
    id: "external-demo",
    title: "Projeto Externo",
    slug: "projeto-externo",
    category: "Site institucional",
    description:
      "Projeto publicado fora do portfólio, com navegação direcionada para o site em produção.",
    image: "/projects/external-demo.jpg",
    tags: ["Web", "SEO", "Performance"],
    linkType: "external",
    externalUrl: "https://example.com",
    featured: true,
  },
]

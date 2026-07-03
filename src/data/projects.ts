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
    id: "clima-prime",
    title: "Clima Prime Refrigeração",
    slug: "clima-prime",
    category: "Landing Page de Conversão",
    description:
      "Landing page premium para empresa fictícia de refrigeração, criada para gerar leads pelo WhatsApp e apresentar serviços de instalação, higienização e manutenção de ar-condicionado.",
    image: "/projects/clima-prime-cover.jpg",
    tags: ["React", "TypeScript", "Chakra UI", "Vite", "Netlify"],
    linkType: "internal",
    externalUrl: "https://clima-prime.netlify.app/",
    featured: true,
    caseStudy: {
      eyebrow: "Landing page para serviço local",
      headline:
        "Uma página direta ao ponto para transformar visitantes em pedidos de orçamento pelo WhatsApp.",
      problem:
        "Empresas locais de refrigeração muitas vezes dependem apenas de indicação ou redes sociais, sem uma página clara que explique serviços, reduza dúvidas e conduza o visitante para o orçamento.",
      solution:
        "Criação de uma landing page com hero de conversão, dores do cliente, serviços, oferta principal, processo de atendimento, seção para empresas, FAQ e CTA final para WhatsApp.",
      result:
        "Projeto publicado no Netlify, com layout responsivo, estrutura modular e comunicação comercial voltada para captação de leads.",
      role:
        "Desenvolvimento frontend, estruturação da landing page, organização dos componentes, copy orientada à conversão e preparação para deploy.",
      year: "2026",
      metrics: [
        { label: "Tipo", value: "Landing page" },
        { label: "Objetivo", value: "Leads via WhatsApp" },
        { label: "Deploy", value: "Netlify" }
      ],
      features: [
        "Hero com proposta de valor clara.",
        "CTA principal direcionado para WhatsApp.",
        "Seção de dores para aumentar identificação.",
        "Cards de serviços organizados por intenção de contratação.",
        "Oferta principal com redução de risco.",
        "Fluxo de atendimento em quatro passos.",
        "FAQ para remover objeções.",
        "Layout responsivo para desktop e mobile."
      ],
      images: [
        {
          src: "/projects/clima-prime-hero.jpg",
          alt: "Hero section da landing page Clima Prime",
          title: "Hero de conversão",
          description: "Primeira dobra com headline, CTAs e elementos de confiança."
        },
        {
          src: "/projects/clima-prime-services.jpg",
          alt: "Seção de serviços da Clima Prime",
          title: "Serviços",
          description: "Cards organizados para instalação, higienização e manutenção."
        },
        {
          src: "/projects/clima-prime-offer.jpg",
          alt: "Oferta principal da Clima Prime",
          title: "Oferta principal",
          description: "Bloco comercial com inclusos, bônus e redução de risco."
        },
        {
          src: "/projects/clima-prime-mobile.jpg",
          alt: "Versão mobile da landing page Clima Prime",
          title: "Responsividade",
          description: "Layout adaptado para navegação em dispositivos móveis."
        }
      ]
    }
  },
]

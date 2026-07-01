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
    id: "portfolio",
    title: "Portfólio Dev Web",
    slug: "portfolio-dev-web",
    category: "Landing Page",
    description:
      "Site pessoal orientado à conversão para apresentação de serviços, projetos e contato comercial.",
    image: "/projects/portfolio.jpg",
    tags: ["React", "Chakra UI", "TypeScript"],
    linkType: "internal",
    featured: true,
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
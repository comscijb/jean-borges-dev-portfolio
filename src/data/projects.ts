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
    category: "Landing Page",
    description:
      "Landing page para a ConstruiQ, startup b2b de construção civil, com foco nos clientes e direcionada ao tráfego para a plataforma.",
    image: "/projects/construiq-cover.jpg",
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
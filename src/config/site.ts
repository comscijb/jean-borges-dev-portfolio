export const siteConfig = {
  name: "Jean Borges | Desenvolvedor Full Stack",
  shortName: "Jean Borges",
  title: "Jean Borges | Full Stack Developer",
  description:
    "Portfólio de Jean Borges, desenvolvedor Full Stack com foco em TypeScript, React, Node.js, NestJS, PostgreSQL e AWS.",
  url: "https://jeanborgesdev.com",
  ogImage: "https://jeanborgesdev.com/og-image.png",
  locale: "pt_BR",
  language: "pt-BR",
  author: "Jean Borges",
  email: "comscijb@gmail.com",
  sameAs: [
    "https://github.com/comscijb",
    "https://www.linkedin.com/in/jean-guilherme-borges-b91823272",
  ],
} as const

export const homeSeo = {
  title: "Jean Borges | Full Stack Developer | React, Node.js & TypeScript",
  description:
    "Desenvolvedor Full Stack em Porto Alegre, com foco em React, TypeScript, Node.js, NestJS, PostgreSQL e AWS. Ciência da Computação, conclusão em dezembro de 2026.",
} as const

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path

  const baseUrl = siteConfig.url.replace(/\/+$/, "")
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${baseUrl}${normalizedPath}`
}

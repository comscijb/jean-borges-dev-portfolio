export const siteConfig = {
  name: "Jean Borges | Desenvolvedor Full Stack",
  shortName: "Jean Borges",
  title: "Jean Borges | Desenvolvimento Web, Landing Pages e Sistemas",
  description:
    "Portfolio de Jean Borges, desenvolvedor full stack focado em landing pages comerciais, sites profissionais e sistemas sob medida para empresas.",
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

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path

  const baseUrl = siteConfig.url.replace(/\/+$/, "")
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${baseUrl}${normalizedPath}`
}

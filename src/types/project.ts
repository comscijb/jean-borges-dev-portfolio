export type ProjectLinkType = "internal" | "external"

export type Project = {
  id: string
  title: string
  slug: string
  category: string
  description: string
  image: string
  tags: string[]
  linkType: ProjectLinkType
  externalUrl?: string
  featured?: boolean
}
export type ProjectLinkType = "internal" | "external"

export type ProjectImage = {
  src: string
  alt: string
  title: string
  description?: string
}

export type ProjectMetric = {
  label: string
  value: string
}

export type ProjectCaseStudy = {
  eyebrow?: string
  headline?: string
  problem: string
  solution: string
  result: string
  role: string
  year?: string
  metrics?: ProjectMetric[]
  features: string[]
  images: ProjectImage[]
}

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
  caseStudy?: ProjectCaseStudy
}

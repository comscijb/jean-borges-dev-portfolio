import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import { absoluteUrl, siteConfig } from "@/config/site"

type SEOProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article"
  noIndex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function SEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const metaTitle = title ?? siteConfig.title
  const metaDescription = description ?? siteConfig.description
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = image ? absoluteUrl(image) : siteConfig.ogImage
  const robots = noIndex ? "noindex,nofollow" : "index,follow"
  const structuredData = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  useEffect(() => {
    document.documentElement.lang = siteConfig.language

    const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector)

      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }

      element.setAttribute("content", content)
    }

    const setCanonical = (href: string) => {
      let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

      if (!element) {
        element = document.createElement("link")
        element.setAttribute("rel", "canonical")
        document.head.appendChild(element)
      }

      element.setAttribute("href", href)
    }

    setMeta('meta[name="description"]', "name", "description", metaDescription)
    setMeta('meta[name="robots"]', "name", "robots", robots)
    setCanonical(canonicalUrl)
  }, [canonicalUrl, metaDescription, robots])

  return (
    <Helmet>
      <html lang={siteConfig.language} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}

import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

// Keep this URL synchronized with src/config/site.ts before publishing.
const siteUrl = "https://jeanborgesdev.com"

// Internal project routes currently defined in src/data/projects.ts.
const internalProjectSlugs = ["construiq-landing-page", "clima-prime"]

const canonicalBaseUrl = siteUrl.replace(/\/+$/, "")
const lastmod = new Date().toISOString().slice(0, 10)
const routes = ["/", ...internalProjectSlugs.map((slug) => `/projetos/${slug}`)]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${canonicalBaseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`

const publicDir = path.resolve("public")
await mkdir(publicDir, { recursive: true })
await writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8")

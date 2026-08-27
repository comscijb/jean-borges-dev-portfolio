import { Box } from "@chakra-ui/react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { AboutMeSection } from "@/components/sections/AboutMeSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { SEO } from "@/components/seo/SEO"
import { absoluteUrl, homeSeo, siteConfig } from "@/config/site"

export function HomePage() {
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description: homeSeo.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@type": "Person",
        name: siteConfig.author,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.author,
      url: absoluteUrl("/"),
      sameAs: siteConfig.sameAs,
      description: homeSeo.description,
      jobTitle: "Desenvolvedor Full Stack",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Porto Alegre",
        addressRegion: "RS",
        addressCountry: "BR",
      },
    },
  ]

  return (
    <Box minH="100vh" bg="bg.canvas">
      <SEO
        title={homeSeo.title}
        description={homeSeo.description}
        path="/"
        jsonLd={homeJsonLd}
      />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <AboutMeSection />
      <FinalCTASection />
      <Footer />
    </Box>
  )
}

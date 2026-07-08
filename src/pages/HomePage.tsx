import { Box } from "@chakra-ui/react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ClientPainSection } from "@/components/sections/ClientPainSection"
import { BenefitsStrip } from "@/components/sections/BenefitsStrip"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { GuaranteeSection } from "@/components/sections/GuaranteeSection"
import { AudienceFitSection } from "@/components/sections/AudienceFitSection"
import { AudienceNotFitSection } from "@/components/sections/AudienceNotFitSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { AboutMeSection } from "@/components/sections/AboutMeSection"
import { SEO } from "@/components/seo/SEO"
import { absoluteUrl, siteConfig } from "@/config/site"

export function HomePage() {
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description: siteConfig.description,
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
      description: siteConfig.description,
    },
  ]

  return (
    <Box minH="100vh" bg="bg.canvas">
      <SEO
        title="Jean Borges | Desenvolvedor Web para Landing Pages e Sistemas"
        description="Desenvolvimento de landing pages, sites profissionais e sistemas web com foco em clareza, conversão e geração de oportunidades para empresas."
        path="/"
        jsonLd={homeJsonLd}
      />
      <Header />
      <HeroSection />
      <ClientPainSection />
      <ServicesSection />
      <BenefitsStrip />
      <GuaranteeSection />
      <AudienceFitSection />
      <AudienceNotFitSection />
      <ProjectsSection />
      <AboutMeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </Box>
  )
}

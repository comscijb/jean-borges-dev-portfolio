import { Box } from "@chakra-ui/react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { BenefitsStrip } from "@/components/sections/BenefitsStrip"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { GuaranteeSection } from "@/components/sections/GuaranteeSection"
import { AudienceFitSection } from "@/components/sections/AudienceFitSection"
import { AudienceNotFitSection } from "@/components/sections/AudienceNotFitSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { AboutMeSection } from "@/components/sections/AboutMeSection"

export function HomePage() {
  return (
    <Box minH="100vh" bg="bg.canvas">
      <Header />
      <HeroSection />
      <BenefitsStrip />
      <ServicesSection />
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

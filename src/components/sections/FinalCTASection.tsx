import { Box, Button, Container, Grid, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { FiDownload, FiLinkedin, FiMail } from "react-icons/fi"
import { resumeConfig } from "@/config/resume"
import { siteConfig } from "@/config/site"

export function FinalCTASection() {
  const linkedinUrl = siteConfig.sameAs.find((url) => url.includes("linkedin.com"))
  const enabledResumes = Object.values(resumeConfig).filter((resume) => resume.enabled)

  return (
    <Box id="contato" position="relative" overflow="hidden" bg="bg.sectionDeep" py={{ base: "14", md: "20" }} animation="section-enter 0.8s ease-in both">
      <Box position="absolute" inset="0" bgGradient="to-br" gradientFrom="brand.subtle" gradientVia="bg.sectionDeep" gradientTo="cta.subtle" opacity="0.7" pointerEvents="none" />
      <Container maxW="1180px" position="relative">
        <Grid templateColumns={{ base: "1fr", lg: "1fr auto" }} alignItems="center" gap="8" p={{ base: "7", md: "10" }} rounded="3xl" border="1px solid" borderColor="border.muted" bg="bg.card" boxShadow="elevated">
          <Stack gap="4">
            <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.16em">CONTATO</Text>
            <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "4xl" }} maxW="760px">
              Estou buscando minha próxima oportunidade em desenvolvimento Full Stack.
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" maxW="760px">
              Procuro uma posição Full Stack Jr. ou Software Engineer de entrada em que eu possa contribuir em produtos reais, trabalhar com uma equipe de desenvolvimento e continuar aprofundando minha experiência em TypeScript, backend e cloud.
            </Text>
          </Stack>

          <Stack gap="3" minW={{ lg: "260px" }}>
            {linkedinUrl && (
              <Button asChild size="lg" bg="brand.solid" color="brand.contrast" fontWeight="900">
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  Falar pelo LinkedIn <Icon as={FiLinkedin} />
                </a>
              </Button>
            )}
            <Button asChild size="lg" variant="outline" borderColor="border.muted" color="fg">
              <a href={`mailto:${siteConfig.email}`}>
                Enviar e-mail <Icon as={FiMail} />
              </a>
            </Button>

            {enabledResumes.map((resume) => (
              <Button key={resume.path} asChild size="lg" variant="outline" borderColor="border.brandSoft" color="brand.fg">
                <a href={resume.path} download>
                  {resume.label} <Icon as={FiDownload} />
                </a>
              </Button>
            ))}

            {enabledResumes.length === 0 && (
              <HStack justify="center" gap="2" color="fg.subtle" fontSize="sm" pt="2">
                <Icon as={FiDownload} />
                <Text>Currículos PT-BR e EN em preparação</Text>
              </HStack>
            )}
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

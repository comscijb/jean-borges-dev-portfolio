import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FiArrowRight, FiBriefcase, FiMessageCircle, FiSearch } from "react-icons/fi"
import { Link as RouterLink } from "react-router"
import { SEO } from "@/components/seo/SEO"
import { getWhatsAppUrlJean, getWhatsAppUrlJenni } from "@/lib/whatsapp"

const analysisMessage =
  "Olá, gostaria que você analisasse a minha presença online. Minhas redes/site: "

const whatsappMessage = "Olá, quero mais informações sobre o seu serviço."

export function LinksPage() {
  return (
    <Box
      minH="100vh"
      bg="bg.canvas"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        inset: "0",
        bgImage: "url('/background-main.png')",
        bgSize: "cover",
        backgroundPosition: "center",
        opacity: "0.20",
      }}
    >
      <SEO
        title="Links úteis | Jean Borges"
        description="Escolha entre solicitar uma análise gratuita, ver projetos ou falar diretamente pelo WhatsApp."
        path="/links"
        noIndex
      />

      <Box
        position="absolute"
        inset="0"
        bgGradient="to-br"
        gradientFrom="brand.subtle"
        gradientVia="bg.canvas"
        gradientTo="cta.subtle"
        opacity="0.8"
        pointerEvents="none"
      />

      <Container
        maxW="560px"
        minH="100vh"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: "5", md: "6" }}
        py={{ base: "10", md: "14" }}
      >
        <Stack
          w="100%"
          maxW="500px"
          gap="7"
          align="center"
          textAlign="center"
          p={{ base: "7", md: "9" }}
          rounded="3xl"
          border="1px solid"
          borderColor="border.muted"
          bg="bg.card"
          boxShadow="elevated"
          animation="section-enter 0.5s ease-in both"
        >
          <Stack gap="4" align="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="64px"
              rounded="2xl"
              bg="brand.badge"
              border="1px solid"
              borderColor="border.brandIcon"
            >
              <Icon as={FiMessageCircle} color="brand.fg" boxSize="8" />
            </Box>

            <Stack gap="3">
              <Heading as="h1" color="fg" fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.08">
                Vamos melhorar sua presença online?
              </Heading>

              <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
                Escolha uma opção abaixo para ver meus projetos, pedir uma análise gratuita ou falar comigo pelo WhatsApp.
              </Text>
            </Stack>
          </Stack>

          <Stack gap="3" w="100%">
            <Button
              asChild
              size="lg"
              w="100%"
              minH="54px"
              bg="cta.solid"
              color="cta.contrast"
              fontWeight="900"
              _hover={{ bg: "cta.hover", transform: "translateY(-1px)" }}
              transition="all 0.25s ease-in"
            >
              <a href={getWhatsAppUrlJean(analysisMessage)} target="_blank" rel="noreferrer">
                <Icon as={FiSearch} />
                Solicitar análise gratuita
                <Icon as={FiArrowRight} />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              w="100%"
              minH="52px"
              variant="outline"
              borderColor="brand.solid"
              color="brand.fg"
              bg="brand.subtle"
              fontWeight="800"
              _hover={{ bg: "brand.muted", transform: "translateY(-1px)" }}
              transition="all 0.25s ease-in"
            >
              <RouterLink to="/#projetos">
                <Icon as={FiBriefcase} />
                Ver projetos
              </RouterLink>
            </Button>

            <Button
              asChild
              size="lg"
              w="100%"
              minH="52px"
              variant="outline"
              borderColor="border.muted"
              color="fg"
              bg="bg.elevated"
              fontWeight="800"
              _hover={{ borderColor: "border.brandHover", color: "brand.fg", transform: "translateY(-1px)" }}
              transition="all 0.25s ease-in"
            >
              <a href={getWhatsAppUrlJenni(whatsappMessage)} target="_blank" rel="noreferrer">
                <Icon as={FiMessageCircle} />
                Falar no WhatsApp
              </a>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

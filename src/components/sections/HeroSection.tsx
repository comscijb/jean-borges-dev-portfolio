import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react"
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi"
import { resumeConfig } from "@/config/resume"

const coreStack = ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "AWS"]

export function HeroSection() {
  return (
    <Box
      id="inicio"
      position="relative"
      overflow="hidden"
      bg="bg.sectionDeep"
      borderBottom="1px solid"
      borderColor="border"
      animation="section-enter 0.5s ease-in both"
      _before={{
        content: '""',
        position: "absolute",
        inset: "0",
        bgImage: "url('/background-main.png')",
        bgSize: "cover",
        backgroundPosition: "center",
        opacity: "0.30",
      }}
    >
      <Box
        position="absolute"
        inset="0"
        bgGradient="to-br"
        gradientFrom="brand.subtle"
        gradientVia="bg.sectionDeep"
        gradientTo="cta.subtle"
        opacity="0.7"
        pointerEvents="none"
      />

      <Container maxW="1180px" position="relative" py={{ base: "16", md: "24" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <Stack gap="7">
            <Badge
              w="fit-content"
              px="3"
              py="1"
              rounded="full"
              bg="brand.subtle"
              color="brand.fg"
              border="1px solid"
              borderColor="brand.emphasized"
              letterSpacing="0.12em"
              whiteSpace="normal"
              lineHeight="1.5"
            >
              FULL STACK DEVELOPER · PORTO ALEGRE, RS
            </Badge>

            <Stack gap="5">
              <Heading
                as="h1"
                maxW="760px"
                fontSize={{ base: "4xl", md: "6xl" }}
                lineHeight="1.02"
                color="fg"
                letterSpacing="0"
              >
                Desenvolvo aplicações web de ponta a ponta com{" "}
                <Box as="span" color="brand.fg">
                  TypeScript.
                </Box>
              </Heading>

              <Text maxW="660px" fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.8">
                Estou no último semestre de Ciência da Computação e trabalho principalmente com React,
                Node.js/NestJS e PostgreSQL. Atualmente desenvolvo a ConstruiQ, um marketplace B2B com
                autenticação, contratos, pagamentos e infraestrutura AWS.
              </Text>
            </Stack>

            <HStack gap="2" flexWrap="wrap">
              {coreStack.map((technology) => (
                <Badge
                  key={technology}
                  bg="brand.badge"
                  color="brand.fg"
                  border="1px solid"
                  borderColor="border.brandSoft"
                >
                  {technology}
                </Badge>
              ))}
            </HStack>

            <HStack flexWrap="wrap" gap="4">
              <Button
                asChild
                size="lg"
                bg="brand.solid"
                color="brand.contrast"
                fontWeight="800"
                transition="all 0.25s ease-in"
                _hover={{ opacity: 0.9, transform: "translateY(-1px)" }}
              >
                <a href="#projetos">
                  Ver projetos
                  <Icon as={FiArrowRight} />
                </a>
              </Button>

              {resumeConfig.ptBr.enabled ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  borderColor="brand.solid"
                  color="brand.fg"
                  _hover={{ bg: "brand.subtle", transform: "translateY(-1px)" }}
                >
                  <a href={resumeConfig.ptBr.path} download>
                    Baixar currículo
                    <Icon as={FiDownload} />
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled variant="outline" borderColor="border.muted" color="fg.subtle">
                  Currículo em breve
                </Button>
              )}

              <HStack gap="4" px="2">
                <Link
                  href="https://github.com/comscijb"
                  target="_blank"
                  rel="noreferrer"
                  color="fg.muted"
                  fontWeight="800"
                  _hover={{ color: "brand.fg", textDecoration: "none" }}
                >
                  <Icon as={FiGithub} mr="2" /> GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jean-guilherme-borges-b91823272/"
                  target="_blank"
                  rel="noreferrer"
                  color="fg.muted"
                  fontWeight="800"
                  _hover={{ color: "brand.fg", textDecoration: "none" }}
                >
                  <Icon as={FiLinkedin} mr="2" /> LinkedIn
                </Link>
              </HStack>
            </HStack>

            <HStack gap="3" color="fg.muted" fontSize="sm">
              <Icon as={FiMapPin} color="positive.fg" />
              <Text fontWeight="700">Buscando oportunidades Full Stack Jr. e Software Engineer de entrada.</Text>
            </HStack>
          </Stack>

          <Stack position="relative" gap="5" maxW={{ base: "560px", lg: "none" }} mx={{ base: "auto", lg: "0" }}>
            <Box
                w="100%"
                h={{ base: "360px", md: "390px", lg: "430px" }}
                rounded="3xl"
                bgGradient="to-br"
                gradientFrom="bg.elevated"
                gradientTo="bg.canvas"
                overflow="hidden"
                position="relative"
                transition="all 0.3s ease-in"
                >
                <Box
                    position="absolute"
                    inset="0"
                    bg="bg.heroGlow"
                    pointerEvents="none"
                />

                <Image
                    src="/hero-image.png"
                    alt="Foto profissional de Jean Borges"
                    position="absolute"
                    bottom="0"
                    right={{ base: "50%", md: "8" }}
                    transform={{ base: "translateX(50%)", md: "none" }}
                    h={{ base: "92%", md: "100%" }}
                    maxW={{ base: "92%", md: "82%" }}
                    objectFit="contain"
                    objectPosition="bottom center"
                    pointerEvents="none"
                    userSelect="none"
                />
                </Box>

            <HStack
              gap="3"
              p="4"
              rounded="2xl"
              border="1px solid"
              borderColor="border.muted"
              bg="bg.elevated"
            >
              <Icon as={FiCode} color="brand.fg" />
              <Stack gap="0">
                <Text color="fg" fontSize="sm" fontWeight="800">Desenvolvimento Full Stack</Text>
                <Text color="fg.muted" fontSize="sm">Frontend, API, banco de dados, testes e infraestrutura.</Text>
              </Stack>
            </HStack>

            <Icon
              as={FiCode}
              position="absolute"
              right="6"
              top="4"
              color="brand.emphasized"
              boxSize="16"
            />
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

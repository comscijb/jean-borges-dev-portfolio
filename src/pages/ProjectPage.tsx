import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Link as RouterLink, useParams } from "react-router"
import { projects } from "@/data/projects"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <Box minH="100vh" bg="bg.canvas">
        <Header />
        <Container maxW="900px" py="24">
          <Stack gap="5">
            <Heading color="fg">Projeto não encontrado</Heading>
            <Button asChild w="fit-content">
              <RouterLink to="/">Voltar para o início</RouterLink>
            </Button>
          </Stack>
        </Container>
        <Footer />
      </Box>
    )
  }

  return (
    <Box minH="100vh" bg="bg.canvas">
      <Header />

      <Container maxW="980px" py={{ base: "16", md: "24" }}>
        <Stack gap="8" animation="section-enter 0.55s ease-in both">
          <Stack gap="4">
            <Text color="brand.fg" fontWeight="800" letterSpacing="0.14em">
              ESTUDO DE CASO
            </Text>

            <Heading color="fg" fontSize={{ base: "4xl", md: "6xl" }}>
              {project.title}
            </Heading>

            <Text color="fg.muted" fontSize="lg" maxW="760px">
              {project.description}
            </Text>

            <HStack gap="3" flexWrap="wrap">
              {project.tags.map((tag) => (
                <Box
                  key={tag}
                  px="3"
                  py="1"
                  rounded="full"
                  bg="brand.badge"
                  color="brand.fg"
                  border="1px solid"
                  borderColor="border.brandSoft"
                  fontSize="sm"
                  fontWeight="700"
                >
                  {tag}
                </Box>
              ))}
            </HStack>
          </Stack>

          <Box
            p="8"
            rounded="2xl"
            border="1px solid"
            borderColor="border.muted"
            bg="bg.card"
            boxShadow="card"
          >
            <Stack gap="5">
              <Heading color="fg" fontSize="2xl">
                Estrutura recomendada para este estudo de caso
              </Heading>

              <Text color="fg.muted">
                Aqui entram problema, contexto, objetivos, arquitetura, decisões
                técnicas, telas, funcionalidades e próximos passos. Essa página deve
                vender raciocínio técnico, não apenas mostrar imagem.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  )
}

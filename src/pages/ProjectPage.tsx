import { useState, type ReactNode } from "react"
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  FiArrowLeft,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiImage,
  FiX,
} from "react-icons/fi"
import { Link as RouterLink, useParams } from "react-router"
import { projects } from "@/data/projects"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import type { Project } from "@/types/project"

type TagListProps = {
  tags: string[]
}

function TagList({ tags }: TagListProps) {
  return (
    <HStack gap="3" flexWrap="wrap">
      {tags.map((tag) => (
        <Badge
          key={tag}
          bg="brand.badge"
          color="brand.fg"
          border="1px solid"
          borderColor="border.brandSoft"
        >
          {tag}
        </Badge>
      ))}
    </HStack>
  )
}

type CaseCardProps = {
  title: string
  children: ReactNode
}

function CaseCard({ title, children }: CaseCardProps) {
  return (
    <Stack
      gap="3"
      h="100%"
      minH="260px"
      p="6"
      rounded="2xl"
      border="1px solid"
      borderColor="border.muted"
      bg="bg.card"
      boxShadow="card"
    >
      <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">
        {title}
      </Text>
      <Text color="fg.muted" lineHeight="1.8">
        {children}
      </Text>
    </Stack>
  )
}

type FallbackProjectProps = {
  project: Project
}

function FallbackProject({ project }: FallbackProjectProps) {
  return (
    <Stack gap="8" animation="section-enter 0.55s ease-in both">
      <Stack gap="4">
        <Button asChild w="fit-content" variant="outline" borderColor="border.muted">
          <RouterLink to="/#projetos">
            <Icon as={FiArrowLeft} />
            Voltar ao portfólio
          </RouterLink>
        </Button>

        <Text color="brand.fg" fontWeight="800" letterSpacing="0.14em">
          PROJETO
        </Text>

        <Heading color="fg" fontSize={{ base: "4xl", md: "6xl" }}>
          {project.title}
        </Heading>

        <Text color="fg.muted" fontSize="lg" maxW="760px">
          {project.description}
        </Text>

        <TagList tags={project.tags} />
      </Stack>

      <Grid templateColumns={{ base: "1fr", lg: "1fr 0.9fr" }} gap="6" alignItems="stretch">
        <Box rounded="2xl" overflow="hidden" bg="bg.card" border="1px solid" borderColor="border.muted">
          <Image
            src={project.image}
            alt={project.title}
            w="100%"
            h={{ base: "260px", md: "420px" }}
            objectFit="cover"
          />
        </Box>

        <Stack
          gap="5"
          p="8"
          rounded="2xl"
          border="1px solid"
          borderColor="border.muted"
          bg="bg.card"
          boxShadow="card"
        >
          <Heading color="fg" fontSize="2xl">
            Estudo de caso em preparação
          </Heading>

          <Text color="fg.muted" lineHeight="1.8">
            Este projeto já está cadastrado e acessível no portfólio. A página
            detalhada será complementada com problema, solução, decisões técnicas,
            imagens e resultados quando o conteúdo estiver finalizado.
          </Text>
        </Stack>
      </Grid>
    </Stack>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

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

  const caseStudy = project.caseStudy
  const images = caseStudy?.images ?? []
  const activeImage = activeImageIndex === null ? undefined : images[activeImageIndex]
  const canBrowseImages = images.length > 1

  function openLightbox(index: number) {
    setActiveImageIndex(index)
  }

  function closeLightbox() {
    setActiveImageIndex(null)
  }

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null || images.length === 0) return currentIndex
      return (currentIndex - 1 + images.length) % images.length
    })
  }

  function showNextImage() {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null || images.length === 0) return currentIndex
      return (currentIndex + 1) % images.length
    })
  }

  return (
    <Box minH="100vh" bg="bg.canvas">
      <Header />

      <Container maxW="1180px" py={{ base: "16", md: "24" }}>
        {!caseStudy ? (
          <FallbackProject project={project} />
        ) : (
          <Stack gap={{ base: "10", md: "14" }} animation="section-enter 0.55s ease-in both">
            <Stack gap="5">
              <Button asChild w="fit-content" variant="outline" borderColor="border.muted">
                <RouterLink to="/#projetos">
                  <Icon as={FiArrowLeft} />
                  Voltar ao portfólio
                </RouterLink>
              </Button>

              <Text color="brand.fg" fontWeight="800" letterSpacing="0.14em">
                {caseStudy.eyebrow ?? project.category}
              </Text>

              <Grid templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }} gap="8" alignItems="end">
                <Stack gap="4">
                  <Heading color="fg" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05">
                    {project.title}
                  </Heading>

                  <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }} maxW="760px">
                    {caseStudy.headline ?? project.description}
                  </Text>

                  <TagList tags={project.tags} />
                </Stack>

                <Stack gap="4" align={{ base: "start", lg: "end" }}>
                  {caseStudy.year && (
                    <Text color="fg.subtle" fontWeight="800">
                      Ano: {caseStudy.year}
                    </Text>
                  )}

                  {project.externalUrl && (
                    <Button
                      asChild
                      bg="cta.solid"
                      color="cta.contrast"
                      fontWeight="900"
                      transition="all 0.25s ease-in"
                      _hover={{ bg: "cta.hover", transform: "translateY(-1px)" }}
                    >
                      <a href={project.externalUrl} target="_blank" rel="noreferrer">
                        Acessar projeto
                        <Icon as={FiExternalLink} />
                      </a>
                    </Button>
                  )}
                </Stack>
              </Grid>
            </Stack>

            <Box rounded="3xl" overflow="hidden" border="1px solid" borderColor="border.muted" bg="bg.card">
              <Image
                src={project.image}
                alt={project.title}
                w="100%"
                h={{ base: "280px", md: "520px" }}
                objectFit="cover"
              />
            </Box>

            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="5">
                {caseStudy.metrics.map((metric) => (
                  <Stack
                    key={metric.label}
                    gap="2"
                    minH="150px"
                    p="6"
                    rounded="2xl"
                    border="1px solid"
                    borderColor="border.muted"
                    bg="bg.card"
                    boxShadow="card"
                  >
                    <Text color="fg.subtle" fontSize="sm" fontWeight="800">
                      {metric.label}
                    </Text>
                    <Text color="fg" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900">
                      {metric.value}
                    </Text>
                  </Stack>
                ))}
              </Grid>
            )}

            <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap="5">
              <CaseCard title="Problema">{caseStudy.problem}</CaseCard>
              <CaseCard title="Solução">{caseStudy.solution}</CaseCard>
              <CaseCard title="Resultado">{caseStudy.result}</CaseCard>
            </Grid>

            <Grid templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }} gap="6">
              <Stack
                gap="4"
                p="7"
                rounded="2xl"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.card"
                boxShadow="card"
              >
                <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">
                  Minha atuação
                </Text>
                <Text color="fg.muted" lineHeight="1.8">
                  {caseStudy.role}
                </Text>
              </Stack>

              <Stack
                gap="5"
                p="7"
                rounded="2xl"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.card"
                boxShadow="card"
              >
                <Heading color="fg" fontSize="2xl">
                  Funcionalidades principais
                </Heading>

                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
                  {caseStudy.features.map((feature) => (
                    <HStack key={feature} align="start" gap="3">
                      <Icon as={FiCheckCircle} color="brand.fg" boxSize="5" mt="1" flexShrink="0" />
                      <Text color="fg.muted" lineHeight="1.7">
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </Grid>
              </Stack>
            </Grid>

            {images.length > 0 && (
              <Stack gap="6">
                <Stack gap="2">
                  <Text color="brand.fg" fontWeight="800" letterSpacing="0.14em">
                    GALERIA
                  </Text>
                  <Heading color="fg" fontSize={{ base: "2xl", md: "4xl" }}>
                    Imagens do projeto
                  </Heading>
                </Stack>

                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="6">
                  {images.map((image, index) => (
                    <Box
                      as="button"
                      key={image.src}
                      textAlign="left"
                      rounded="2xl"
                      overflow="hidden"
                      border="1px solid"
                      borderColor="border.muted"
                      bg="bg.card"
                      boxShadow="card"
                      transition="all 0.25s ease-in"
                      _hover={{
                        borderColor: "border.brandHover",
                        transform: "translateY(-3px)",
                      }}
                      onClick={() => openLightbox(index)}
                    >
                      <Box h={{ base: "220px", md: "300px" }} bg="bg.elevated" overflow="hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                      </Box>

                      <Stack gap="2" p="5">
                        <HStack justify="space-between" gap="4">
                          <Text color="fg" fontWeight="900">
                            {image.title}
                          </Text>
                          <Icon as={FiImage} color="brand.fg" boxSize="5" flexShrink="0" />
                        </HStack>

                        {image.description && (
                          <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
                            {image.description}
                          </Text>
                        )}
                      </Stack>
                    </Box>
                  ))}
                </Grid>
              </Stack>
            )}
          </Stack>
        )}
      </Container>

      {activeImage && activeImageIndex !== null && (
        <Box
          position="fixed"
          inset="0"
          zIndex="modal"
          bg="bg.overlay"
          backdropFilter="blur(16px)"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          p={{ base: "4", md: "8" }}
        >
          <Stack h="100%" gap="4">
            <HStack justify="space-between" gap="4">
              <Stack gap="0">
                <Text color="brand.fg" fontWeight="800">
                  {activeImage.title}
                </Text>
                <Text color="fg.muted" fontSize="sm">
                  {activeImageIndex + 1} de {images.length}
                </Text>
              </Stack>

              <Button
                type="button"
                variant="outline"
                borderColor="border.muted"
                color="fg"
                onClick={closeLightbox}
              >
                <Icon as={FiX} />
                Fechar
              </Button>
            </HStack>

            <Grid templateColumns={{ base: "1fr", md: "auto 1fr auto" }} gap="4" flex="1" minH="0">
              <Button
                type="button"
                alignSelf="center"
                variant="outline"
                borderColor="border.muted"
                color="fg"
                disabled={!canBrowseImages}
                onClick={showPreviousImage}
              >
                <Icon as={FiChevronLeft} />
                Anterior
              </Button>

              <Stack
                minH="0"
                rounded="2xl"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.canvas"
                overflow="hidden"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  w="100%"
                  h="100%"
                  maxH="74vh"
                  objectFit="contain"
                />
              </Stack>

              <Button
                type="button"
                alignSelf="center"
                variant="outline"
                borderColor="border.muted"
                color="fg"
                disabled={!canBrowseImages}
                onClick={showNextImage}
              >
                Próxima
                <Icon as={FiChevronRight} />
              </Button>
            </Grid>

            {activeImage.description && (
              <Text color="fg.muted" textAlign="center">
                {activeImage.description}
              </Text>
            )}
          </Stack>
        </Box>
      )}

      <Footer />
    </Box>
  )
}

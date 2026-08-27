import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi"
import { Link as RouterLink } from "react-router"
import { projects } from "@/data/projects"
import { SectionHeader } from "@/components/common/SectionHeader"

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <Box id="projetos" bg="bg.sectionAlt" py={{ base: "14", md: "20" }} animation="section-enter 0.75s ease-in both">
      <Container maxW="1180px">
        <SectionHeader
          eyebrow="Projetos selecionados"
          title="Projetos que mostram como eu trabalho"
          description="Aplicações com diferentes níveis de complexidade, da arquitetura full stack à entrega em produção."
        />

        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap="6">
          {featuredProjects.map((project) => {
            const isExternal = project.linkType === "external"
            const primaryHref = isExternal ? project.externalUrl : `/projetos/${project.slug}`
            const primaryLabel = project.ctaLabel ?? (isExternal ? "Acessar projeto" : "Ver projeto")

            return (
              <Stack
                key={project.id}
                rounded="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.card"
                h="100%"
                minH="500px"
                boxShadow="card"
                _hover={{ borderColor: "border.brandHover", transform: "translateY(-4px)", boxShadow: "elevated" }}
                transition="all 0.28s ease-in"
              >
                {primaryHref && (
                  <Link
                    asChild={!isExternal}
                    href={isExternal ? primaryHref : undefined}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    _hover={{ textDecoration: "none" }}
                    aria-label={`${primaryLabel}: ${project.title}`}
                  >
                    {isExternal ? (
                      <Box as="span" display="block" h="210px" bg="bg.canvas" overflow="hidden">
                        <Image src={project.image} alt={project.title} loading="lazy" w="100%" h="100%" objectFit="cover" opacity="0.9" />
                      </Box>
                    ) : (
                      <RouterLink to={primaryHref}>
                        <Box h="210px" bg="bg.canvas" overflow="hidden">
                          <Image src={project.image} alt={project.title} loading="lazy" w="100%" h="100%" objectFit="cover" opacity="0.9" />
                        </Box>
                      </RouterLink>
                    )}
                  </Link>
                )}

                <Stack gap="4" p="6" flex="1">
                  <Stack gap="2">
                    <HStack justify="space-between" align="start" gap="3">
                      <Text color="fg" fontSize="xl" fontWeight="800">
                        {project.title}
                      </Text>
                      {project.publicCode && (
                        <Badge bg="positive.subtle" color="positive.fg" border="1px solid" borderColor="positive.emphasized">
                          Código público
                        </Badge>
                      )}
                    </HStack>

                    <Text color="brand.fg" fontSize="sm" fontWeight="700">
                      {project.category}
                    </Text>
                    <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
                      {project.description}
                    </Text>
                  </Stack>

                  <HStack gap="2" flexWrap="wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag} bg="brand.badge" color="brand.fg" border="1px solid" borderColor="border.brandSoft">
                        {tag}
                      </Badge>
                    ))}
                  </HStack>

                  <HStack gap="3" mt="auto" flexWrap="wrap">
                    {primaryHref && (
                      <Button asChild size="sm" bg="brand.solid" color="brand.contrast" fontWeight="800">
                        {isExternal ? (
                          <a href={primaryHref} target="_blank" rel="noreferrer">
                            {primaryLabel} <Icon as={FiExternalLink} />
                          </a>
                        ) : (
                          <RouterLink to={primaryHref}>
                            {primaryLabel} <Icon as={FiArrowRight} />
                          </RouterLink>
                        )}
                      </Button>
                    )}

                    {project.repositoryUrl && (
                      <Button asChild size="sm" variant="outline" borderColor="border.muted" color="fg.muted">
                        <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                          GitHub <Icon as={FiGithub} />
                        </a>
                      </Button>
                    )}
                  </HStack>
                </Stack>
              </Stack>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

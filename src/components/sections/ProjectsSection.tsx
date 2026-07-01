import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FiArrowRight, FiExternalLink } from "react-icons/fi"
import { Link as RouterLink } from "react-router"
import { projects } from "@/data/projects"
import { SectionHeader } from "@/components/common/SectionHeader"

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <Box
      id="projetos"
      bg="bg.sectionAlt"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.75s ease-in both"
    >
      <Container maxW="1180px">
        <Flex
          align={{ base: "start", md: "end" }}
          justify="space-between"
          gap="6"
          mb="8"
          direction={{ base: "column", md: "row" }}
        >
          <SectionHeader
            eyebrow="Projetos recentes"
            title="Exemplos de soluções que posso construir"
          />

          <Link
            href="#contato"
            color="brand.fg"
            fontWeight="800"
            _hover={{ textDecoration: "none", color: "cta.fg" }}
            whiteSpace="nowrap"
          >
            Solicitar orçamento <Icon as={FiArrowRight} display="inline" ml="1" />
          </Link>
        </Flex>

        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap="6">
          {featuredProjects.map((project) => {
            const isExternal = project.linkType === "external"
            const href = isExternal
              ? project.externalUrl
              : `/projetos/${project.slug}`

            const content = (
              <Stack
                rounded="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.card"
                h="100%"
                minH="470px"
                boxShadow="card"
                _hover={{
                  borderColor: "border.brandHover",
                  transform: "translateY(-4px)",
                  boxShadow: "elevated",
                }}
                transition="all 0.28s ease-in"
              >
                <Box h="210px" bg="bg.canvas" overflow="hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    opacity="0.88"
                    _hover={{ opacity: 1, transform: "scale(1.04)" }}
                    transition="all 0.3s ease-in"
                  />
                </Box>

                <Stack gap="4" p="6" flex="1">
                  <Stack gap="2">
                    <Text color="fg" fontSize="xl" fontWeight="800">
                      {project.title}
                    </Text>

                    <Text color="brand.fg" fontSize="sm" fontWeight="700">
                      {project.category}
                    </Text>

                    <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
                      {project.description}
                    </Text>
                  </Stack>

                  <HStack gap="2" flexWrap="wrap">
                    {project.tags.map((tag) => (
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

                  <HStack color="brand.fg" fontWeight="800" fontSize="sm" mt="auto">
                    <Text>{isExternal ? "Acessar site" : "Ver projeto"}</Text>
                    <Icon as={isExternal ? FiExternalLink : FiArrowRight} />
                  </HStack>
                </Stack>
              </Stack>
            )

            if (!href) return null

            if (isExternal) {
              return (
                <Link
                  key={project.id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  {content}
                </Link>
              )
            }

            return (
              <Link key={project.id} asChild _hover={{ textDecoration: "none" }}>
                <RouterLink to={href}>{content}</RouterLink>
              </Link>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

import { Badge, Box, Container, Grid, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { FiCloud, FiCode, FiDatabase, FiGitBranch, FiLink, FiServer } from "react-icons/fi"
import { SectionHeader } from "@/components/common/SectionHeader"

const stackGroups = [
  { title: "Frontend", icon: FiCode, items: ["React", "TypeScript", "JavaScript", "Vite", "Chakra UI", "React Query"] },
  { title: "Backend", icon: FiServer, items: ["Node.js", "NestJS", "Express", "REST APIs"] },
  { title: "Dados", icon: FiDatabase, items: ["PostgreSQL", "Prisma"] },
  { title: "Testes e qualidade", icon: FiGitBranch, items: ["Jest", "Vitest", "Testing Library", "TypeScript", "ESLint"] },
  { title: "Cloud e infraestrutura", icon: FiCloud, items: ["AWS", "AWS CDK", "Docker", "Git", "GitHub"] },
  { title: "Integrações", icon: FiLink, items: ["Stripe", "APIs externas"] },
]

export function TechStackSection() {
  return (
    <Box id="stack" bg="bg.sectionDeep" py={{ base: "14", md: "20" }} animation="section-enter 0.65s ease-in both">
      <Container maxW="1180px">
        <SectionHeader eyebrow="Stack" title="Tecnologias que uso nos meus projetos" />
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="5">
          {stackGroups.map((group) => (
            <Stack key={group.title} gap="4" p="6" rounded="2xl" bg="bg.card" border="1px solid" borderColor="border.muted" boxShadow="card">
              <HStack gap="3">
                <Box p="2.5" rounded="lg" bg="brand.subtle" border="1px solid" borderColor="border.brandSoft">
                  <Icon as={group.icon} color="brand.fg" boxSize="5" />
                </Box>
                <Heading as="h3" color="fg" fontSize="lg">
                  {group.title}
                </Heading>
              </HStack>
              <HStack gap="2" flexWrap="wrap">
                {group.items.map((item) => (
                  <Badge key={item} bg="brand.badge" color="brand.fg" border="1px solid" borderColor="border.brandSoft">
                    {item}
                  </Badge>
                ))}
              </HStack>
            </Stack>
          ))}
        </Grid>
        <Text color="fg.subtle" fontSize="sm" mt="6">
          Stack demonstrada nos projetos e cases deste portfólio.
        </Text>
      </Container>
    </Box>
  )
}

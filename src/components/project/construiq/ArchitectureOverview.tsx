import { Badge, Box, Grid, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { FiArrowDown, FiCloud, FiCode, FiDatabase, FiServer } from "react-icons/fi"

const layers = [
  { label: "Frontend", value: "React + TypeScript", icon: FiCode },
  { label: "Comunicação", value: "REST API", icon: FiCloud },
  { label: "Backend", value: "NestJS + Prisma", icon: FiServer },
  { label: "Dados", value: "PostgreSQL", icon: FiDatabase },
]

const stackGroups = [
  { title: "Frontend", items: ["React", "TypeScript", "Vite", "Chakra UI", "React Query"] },
  { title: "Backend", items: ["Node.js", "NestJS", "REST API"] },
  { title: "Dados", items: ["PostgreSQL", "Prisma"] },
  { title: "Integrações", items: ["Stripe", "Stripe Connect", "Serviços AWS"] },
  { title: "Qualidade", items: ["Jest", "Vitest", "TypeScript", "Lint", "Validações"] },
  { title: "Infraestrutura", items: ["Docker", "AWS CDK"] },
]

export function ArchitectureOverview() {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "0.78fr 1.22fr" }} gap="6">
      <Stack
        gap="3"
        p={{ base: "5", md: "7" }}
        rounded="2xl"
        bg="bg.cardStrong"
        border="1px solid"
        borderColor="border.muted"
      >
        {layers.map((layer, index) => (
          <Stack key={layer.label} gap="3" align="stretch">
            <HStack gap="4" p="4" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.brandSoft">
              <Box p="2.5" rounded="lg" bg="brand.subtle">
                <Icon as={layer.icon} color="brand.fg" boxSize="5" />
              </Box>
              <Stack gap="0">
                <Text color="fg.subtle" fontSize="xs" fontWeight="800" textTransform="uppercase">
                  {layer.label}
                </Text>
                <Text color="fg" fontWeight="900">
                  {layer.value}
                </Text>
              </Stack>
            </HStack>
            {index < layers.length - 1 && (
              <Icon as={FiArrowDown} color="brand.fg" alignSelf="center" aria-hidden="true" />
            )}
          </Stack>
        ))}
      </Stack>

      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap="4">
        {stackGroups.map((group) => (
          <Stack
            key={group.title}
            gap="3"
            p="5"
            rounded="xl"
            bg="bg.card"
            border="1px solid"
            borderColor="border.muted"
          >
            <Heading as="h3" color="fg" fontSize="md">
              {group.title}
            </Heading>
            <HStack gap="2" flexWrap="wrap">
              {group.items.map((item) => (
                <Badge key={item} bg="brand.subtle" color="brand.fg" border="1px solid" borderColor="border.brandSoft">
                  {item}
                </Badge>
              ))}
            </HStack>
          </Stack>
        ))}
      </Grid>
    </Grid>
  )
}

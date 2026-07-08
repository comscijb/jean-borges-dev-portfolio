import { Box, Container, Grid, Icon, Stack, Text } from "@chakra-ui/react"
import {
  FiFilter,
  FiLogOut,
  FiShield,
  FiTrendingDown,
} from "react-icons/fi"
import type { IconType } from "react-icons"
import { SectionHeader } from "@/components/common/SectionHeader"

type PainPoint = {
  title: string
  description: string
  icon: IconType
}

const painPoints: PainPoint[] = [
  {
    title: "Visitantes entram, mas não avançam",
    description:
      "A página não conduz o cliente para orçamento, contato ou compra, então o tráfego vira visualização vazia.",
    icon: FiLogOut,
  },
  {
    title: "Leads chegam desalinhados",
    description:
      "Sem uma mensagem clara, você atrai curiosos, pedidos genéricos e pessoas que não entendem o valor do seu serviço.",
    icon: FiFilter,
  },
  {
    title: "A autoridade da empresa enfraquece",
    description:
      "Um site confuso, antigo ou genérico passa a sensação de improviso, mesmo quando o serviço entregue é bom.",
    icon: FiShield,
  },
  {
    title: "O crescimento fica limitado",
    description:
      "Se sua presença online não gera demanda com consistência, a empresa continua dependendo de indicação, sorte ou esforço manual para vender.",
    icon: FiTrendingDown,
  },
]

export function ClientPainSection() {
  return (
    <Box
      as="section"
      bg="bg.sectionAlt"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.65s ease-in both"
    >
      <Container maxW="1180px">
        <SectionHeader
          eyebrow="Ter um site bonito não é o suficiente"
          title="Uma página fraca pode estar travando o crescimento da sua empresa"
          description="Quando seu site não explica com clareza o que você faz, para quem você resolve e qual é o próximo passo, o visitante sai sem agir. O resultado é simples: menos contatos qualificados, menos oportunidades reais e uma presença digital que não acompanha o potencial do seu negócio."
        />

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5">
          {painPoints.map((painPoint) => (
            <Stack
              key={painPoint.title}
              direction={{ base: "column", sm: "row" }}
              align="flex-start"
              gap="5"
              h="100%"
              p={{ base: "6", md: "7" }}
              rounded="2xl"
              border="1px solid"
              borderColor="border.muted"
              bgGradient="to-br"
              gradientFrom="bg.card"
              gradientTo="bg.cardStrong"
              boxShadow="card"
              _hover={{
                borderColor: "border.brandHover",
                transform: "translateY(-4px)",
                boxShadow: "elevated",
              }}
              transition="all 0.28s ease-in"
            >
              <Box
                display="grid"
                placeItems="center"
                flexShrink="0"
                boxSize="12"
                rounded="xl"
                bg="brand.badge"
                border="1px solid"
                borderColor="border.brandIcon"
              >
                <Icon as={painPoint.icon} color="brand.fg" boxSize="6" />
              </Box>

              <Stack gap="2">
                <Text color="fg" fontSize="xl" fontWeight="800">
                  {painPoint.title}
                </Text>
                <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
                  {painPoint.description}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

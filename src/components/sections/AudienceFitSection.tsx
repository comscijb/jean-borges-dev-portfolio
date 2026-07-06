import { Box, Container, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { FiCheckCircle } from "react-icons/fi"
import { SectionHeader } from "@/components/common/SectionHeader"

const fitItems = [
  "Prestadores de serviço",
  "Clínicas e consultórios",
  "Escritórios e profissionais liberais",
  "Restaurantes, delivery e negócios locais",
  "Empresas de manutenção, construção e serviços técnicos",
  "Pequenas empresas que dependem de orçamento pelo WhatsApp, e-mail ou plataformas de marketplace",
  "Negócios com site antigo, lento ou pouco profissional",
]

export function AudienceFitSection() {
  return (
    <Box
      bg="bg.sectionAlt"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.72s ease-in both"
    >
      <Container maxW="1180px">
        <SectionHeader
          eyebrow="Para quem é"
          title="Esse site é indicado para negócios que precisam vender com mais clareza"
        />

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
          {fitItems.map((item) => (
            <HStack
              key={item}
              align="start"
              gap="4"
              minH="92px"
              p="5"
              rounded="2xl"
              border="1px solid"
              borderColor="border.muted"
              bg="bg.card"
              boxShadow="card"
            >
              <Icon as={FiCheckCircle} color="brand.fg" boxSize="6" mt="1" flexShrink="0" />
              <Stack gap="1">
                <Text color="fg" fontWeight="800">
                  {item}
                </Text>
              </Stack>
            </HStack>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

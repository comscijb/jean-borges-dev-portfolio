import { Box, Container, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { FiShield, FiTarget, FiTrendingUp } from "react-icons/fi"

const benefits = [
  {
    title: "Mais credibilidade",
    description: "Seu negócio deixa de depender apenas de Instagram, indicação ou cartão de visita digital improvisado.",
    icon: FiShield,
  },
  {
    title: "Mais conversão",
    description: "Página construída com chamada clara, prova de valor, diferenciais e botão de contato visível.",
    icon: FiTarget,
  },
  {
    title: "Menos fricção",
    description: "O cliente entende o que você oferece, vê como falar com você e toma decisão com menos dúvida.",
    icon: FiTrendingUp,
  },
]

export function BenefitsStrip() {
  return (
    <Box
      bg="bg.section"
      py={{ base: "8", md: "10" }}
      animation="section-enter 0.55s ease-in both"
    >
      <Container maxW="1180px">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          border="1px solid"
          borderColor="border.muted"
          rounded="2xl"
          overflow="hidden"
          bg="bg.card"
          boxShadow="card"
        >
          {benefits.map((benefit) => (
            <HStack
              key={benefit.title}
              gap="5"
              p="7"
              minH="150px"
              borderRight={{ base: "0", md: "1px solid" }}
              borderBottom={{ base: "1px solid", md: "0" }}
              borderColor="border.muted"
              _last={{ borderRight: "0", borderBottom: "0" }}
            >
              <Icon as={benefit.icon} color="brand.fg" boxSize="10" />
              <Stack gap="1">
                <Text color="fg" fontWeight="800">
                  {benefit.title}
                </Text>
                <Text color="fg.muted" fontSize="sm">
                  {benefit.description}
                </Text>
              </Stack>
            </HStack>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

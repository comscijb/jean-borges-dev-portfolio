import { Box, Container, Grid, Icon, Link, Stack, Text } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"
import { services } from "@/data/services"
import { SectionHeader } from "@/components/common/SectionHeader"

export function ServicesSection() {
  return (
    <Box
      id="servicos"
      bg="bg.sectionAlt"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.65s ease-in both"
    >
      <Container maxW="1180px">
        <SectionHeader
          eyebrow="O que eu ofereço:"
          title="Site de Conversão Essencial"
          description="Um pacote direto para negócios que precisam sair do improviso e ter uma presença online profissional, sem projeto caro, demorado ou cheio de complexidade desnecessária."
        />

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="5">
          {services.map((service) => (
            <Stack
              key={service.title}
              gap="5"
              h="100%"
              minH="300px"
              p="7"
              rounded="2xl"
              border="1px solid"
              borderColor="border.muted"
              bgGradient="to-b"
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
              <Icon as={service.icon} color="brand.fg" boxSize="11" />

              <Stack gap="3" flex="1">
                <Text color="fg" fontSize="xl" fontWeight="800">
                  {service.title}
                </Text>

                <Text color="fg.muted" fontSize="sm" lineHeight="1.7">
                  {service.description}
                </Text>
              </Stack>

              <Link
                href="#contato"
                color="brand.fg"
                fontWeight="700"
                fontSize="sm"
                _hover={{ textDecoration: "none", color: "cta.fg" }}
              >
                Solicitar análise <Icon as={FiArrowRight} display="inline" ml="1" />
              </Link>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

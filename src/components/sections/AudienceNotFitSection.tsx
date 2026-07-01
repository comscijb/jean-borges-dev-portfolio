import { Box, Container, Grid, HStack, Icon, Text } from "@chakra-ui/react"
import { FiXCircle } from "react-icons/fi"
import { SectionHeader } from "@/components/common/SectionHeader"

const notFitItems = [
  "Um sistema complexo com área de login e múltiplos painéis.",
  "Uma loja virtual completa com estoque, checkout e ERP.",
  "Um projeto sem conteúdo, sem objetivo e sem oferta definida.",
  "Promessa de vendas sem tráfego, atendimento e posicionamento comercial.",
]

export function AudienceNotFitSection() {
  return (
    <Box
      bg="bg.sectionDeep"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.76s ease-in both"
    >
      <Container maxW="1180px">
        <SectionHeader
          eyebrow="Para quem não é"
          title="Esse projeto não é indicado se você procura:"
        />

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
          {notFitItems.map((item) => (
            <HStack
              key={item}
              align="start"
              gap="4"
              minH="112px"
              p="5"
              rounded="2xl"
              border="1px solid"
              borderColor="border.muted"
              bg="bg.card"
              boxShadow="card"
            >
              <Icon as={FiXCircle} color="cta.fg" boxSize="6" mt="1" flexShrink="0" />
              <Text color="fg.muted" fontWeight="700" lineHeight="1.7">
                {item}
              </Text>
            </HStack>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

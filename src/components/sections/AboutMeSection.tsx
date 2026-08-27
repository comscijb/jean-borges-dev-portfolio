import { Box, Container, Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { FiCompass } from "react-icons/fi"

export function AboutMeSection() {
  return (
    <Box id="sobre" bg="bg.sectionDeep" py={{ base: "14", md: "20" }} animation="section-enter 0.68s ease-in both">
      <Container maxW="1180px">
        <Grid templateColumns={{ base: "1fr", md: "0.34fr 1fr" }} gap={{ base: "6", md: "10" }} alignItems="center" p={{ base: "7", md: "10" }} rounded="3xl" border="1px solid" borderColor="border.muted" bg="bg.card" boxShadow="card">
          <Stack align={{ base: "start", md: "center" }} gap="3">
            <Box p="4" rounded="2xl" bg="brand.badge" border="1px solid" borderColor="border.brandIcon">
              <Icon as={FiCompass} color="brand.fg" boxSize="9" />
            </Box>
            <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.16em">SOBRE</Text>
          </Stack>
          <Stack gap="4">
            <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "4xl" }}>
              Gosto de entender o problema antes de escrever código.
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
              Minha forma de trabalhar parte das regras e do objetivo do produto. Primeiro procuro entender o fluxo, os usuários e o que o sistema precisa garantir; depois estruturo a implementação.
            </Text>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
              Antes de migrar meu foco profissional para desenvolvimento, trabalhei por anos com projetos para clientes e também em um ambiente técnico de manutenção aeronáutica. Essas experiências influenciaram a forma como organizo entregas, me comunico e lido com responsabilidade técnica.
            </Text>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

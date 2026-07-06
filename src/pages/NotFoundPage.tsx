import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router"
import { SEO } from "@/components/seo/SEO"

export function NotFoundPage() {
  return (
    <Box minH="100vh" bg="bg.canvas">
      <SEO
        title="Página não encontrada | Jean Borges"
        description="A rota acessada não existe ou foi movida."
        noIndex
      />
      <Container maxW="760px" py="24">
        <Stack gap="5" animation="section-enter 0.5s ease-in both">
          <Heading as="h1" color="fg">Página não encontrada</Heading>
          <Text color="fg.muted">A rota acessada não existe ou foi movida.</Text>
          <Button asChild w="fit-content" bg="cta.solid" color="cta.contrast">
            <RouterLink to="/">Voltar para o início</RouterLink>
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

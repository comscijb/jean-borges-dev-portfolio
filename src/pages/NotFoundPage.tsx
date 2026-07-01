import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router"

export function NotFoundPage() {
  return (
    <Box minH="100vh" bg="bg.canvas">
      <Container maxW="760px" py="24">
        <Stack gap="5" animation="section-enter 0.5s ease-in both">
          <Heading color="fg">Página não encontrada</Heading>
          <Text color="fg.muted">A rota acessada não existe ou foi movida.</Text>
          <Button asChild w="fit-content" bg="cta.solid" color="cta.contrast">
            <RouterLink to="/">Voltar para o início</RouterLink>
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

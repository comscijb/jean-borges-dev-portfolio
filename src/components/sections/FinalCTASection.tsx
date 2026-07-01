import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FiArrowRight, FiTarget } from "react-icons/fi"

export function FinalCTASection() {
  return (
    <Box
      id="contato"
      bg="bg.sectionDeep"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.8s ease-in both"
    >
      <Box
            position="absolute"
            inset="0"
            bgGradient="to-br"
            gradientFrom="brand.subtle"
            gradientVia="bg.sectionDeep"
            gradientTo="cta.subtle"
            opacity="0.7"
            pointerEvents="none"
          />
      <Container maxW="1180px">
        <Flex
          align="center"
          justify="space-between"
          gap="8"
          direction={{ base: "column", md: "row" }}
          p={{ base: "7", md: "10" }}
          rounded="3xl"
          border="1px solid"
          borderColor="border.muted"
          bgGradient="to-br"
          gradientFrom="bg.card"
          gradientTo="bg.canvas"
          boxShadow="elevated"
        >
          
          <Flex gap="6" align="center" direction={{ base: "column", md: "row" }}>
            <Flex
              align="center"
              justify="center"
              boxSize="88px"
              rounded="2xl"
              bg="brand.badge"
              border="1px solid"
              borderColor="border.brandIcon"
              flexShrink="0"
            >
              <Icon as={FiTarget} color="brand.fg" boxSize="11" />
            </Flex>

            <Stack gap="3" textAlign={{ base: "center", md: "left" }}>
              <Heading color="fg" fontSize={{ base: "2xl", md: "4xl" }}>
                Seu negócio precisa de um site mais claro e profissional?
              </Heading>
              <Text color="fg.muted" maxW="640px">
                Solicite uma análise inicial. Vou avaliar o momento do seu negócio e indicar se faz sentido
                 criar um site novo, ajustar sua presença atual ou começar por uma landing page simples.
              </Text>
            </Stack>
          </Flex>

          <Button
            asChild
            size="lg"
            bg="cta.solid"
            color="cta.contrast"
            fontWeight="900"
            minW={{ base: "100%", md: "260px" }}
            _hover={{ bg: "cta.hover", transform: "translateY(-1px)" }}
            transition="all 0.25s ease-in"
          >
            <a href="https://wa.me/5549991088198" target="_blank" rel="noreferrer">
              Solicitar orçamento pelo WhatsApp
              <Icon as={FiArrowRight} />
            </a>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

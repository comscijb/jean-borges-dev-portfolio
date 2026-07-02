import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react"
import {
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiCode,
  FiMonitor,
} from "react-icons/fi"

export function HeroSection() {
  return (
    <Box
      id="inicio"
      position="relative"
      overflow="hidden"
      bg="bg.sectionDeep"
      borderBottom="1px solid"
      borderColor="border"
      animation="section-enter 0.5s ease-in both"
      _before={{
        content: '""',
        position: "absolute",
        inset: "0",
        bgImage: "url('/background-main.png')",
        bgSize: "cover",
        backgroundPosition: "center",
        opacity: "0.30",
      }}
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

      <Container maxW="1180px" position="relative" py={{ base: "16", md: "24" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <Stack gap="7">
            <Badge
              w="fit-content"
              px="3"
              py="1"
              rounded="full"
              bg="brand.subtle"
              color="brand.fg"
              border="1px solid"
              borderColor="brand.emphasized"
              letterSpacing="0.12em"
            >
              WEBSITES PARA NEGÓCIOS LOCAIS E PME
            </Badge>

            <Stack gap="5">
              <Heading
                as="h1"
                maxW="760px"
                fontSize={{ base: "4xl", md: "6xl" }}
                lineHeight="1.02"
                color="fg"
                letterSpacing="0"
              >
                Seu negócio precisa de um site que gere contatos, não apenas{" "}
                <Box as="span" color="cta.fg">
                  uma página bonita.
                </Box>
              </Heading>

              <Text maxW="620px" fontSize={{ base: "md", md: "lg" }} color="fg.muted">
                Crio websites simples, rápidos e estratégicos para pequenos e médios negócios que precisam transmitir confiança,
                 explicar sua oferta com clareza e levar o visitante para uma ação: chamar no WhatsApp, pedir orçamento ou agendar atendimento.
              </Text>
            </Stack>

            <HStack flexWrap="wrap" gap="4">
              <Button
                asChild
                size="lg"
                bg="cta.solid"
                color="cta.contrast"
                fontWeight="800"
                transition="all 0.25s ease-in"
                _hover={{ bg: "cta.hover", transform: "translateY(-1px)" }}
              >
                <a href="#contato">
                  Solicitar orçamento
                  <Icon as={FiArrowRight} />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                borderColor="brand.solid"
                color="brand.fg"
                transition="all 0.25s ease-in"
                _hover={{ bg: "brand.subtle", transform: "translateY(-1px)" }}
              >
                <a href="#projetos">
                  Ver exemplos de sites
                  <Icon as={FiArrowRight} />
                </a>
              </Button>
            </HStack>
          </Stack>

          <Stack position="relative" gap="5">
            <Box
                w="100%"
                h={{ base: "360px", md: "390px", lg: "430px" }}
                rounded="3xl"
                bgGradient="to-br"
                gradientFrom="bg.elevated"
                gradientTo="bg.canvas"
                overflow="hidden"
                position="relative"
                transition="all 0.3s ease-in"
                >
                <Box
                    position="absolute"
                    inset="0"
                    bg="bg.heroGlow"
                    pointerEvents="none"
                />

                <Image
                    src="/hero-image.png"
                    alt="Foto profissional de Jean Borges"
                    position="absolute"
                    bottom="0"
                    right={{ base: "50%", md: "8" }}
                    transform={{ base: "translateX(50%)", md: "none" }}
                    h={{ base: "92%", md: "100%" }}
                    maxW={{ base: "92%", md: "82%" }}
                    objectFit="contain"
                    objectPosition="bottom center"
                    pointerEvents="none"
                    userSelect="none"
                />
                </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
              <Stack
                gap="2"
                minH="150px"
                p="5"
                rounded="2xl"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.elevated"
              >
                <Icon as={FiBarChart2} color="brand.fg" boxSize="7" />
                <Text color="fg" fontWeight="700">
                  Mais confiança
                </Text>
                <Text color="fg.muted" fontSize="sm">
                  Design profissional para o cliente entender que seu negócio é sério antes mesmo de conversar com você.
                </Text>
              </Stack>

              <Stack
                gap="2"
                minH="150px"
                p="5"
                rounded="2xl"
                border="1px solid"
                borderColor="brand.emphasized"
                bg="bg.elevated"
              >
                <Icon as={FiMonitor} color="cta.fg" boxSize="7" />
                <Text color="fg" fontWeight="700">
                  Mais pedidos de orçamento
                </Text>
                <Text color="fg.muted" fontSize="sm">
                  Estrutura pensada para orientar o visitante até uma ação clara, sem distração e sem excesso de informação.
                </Text>
              </Stack>
            </Grid>

            <HStack
              gap="3"
              p="4"
              rounded="2xl"
              border="1px solid"
              borderColor="border.muted"
              bg="bg.elevated"
            >
              <Icon as={FiCheckCircle} color="brand.fg" />
              <Text color="fg" fontSize="sm" fontWeight="700">
                Site Responsivo + Copy Estratégica + Publicação + Integração com WhatsApp
              </Text>
            </HStack>

            <Icon
              as={FiCode}
              position="absolute"
              right="6"
              top="4"
              color="brand.emphasized"
              boxSize="16"
            />
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

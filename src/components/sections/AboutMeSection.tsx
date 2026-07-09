import { Box, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { FiInfo } from "react-icons/fi"

export function AboutMeSection() {
  return (
    <Box
      id="sobre"
      bg="bg.sectionDeep"
      py={{ base: "14", md: "20" }}
      animation="section-enter 0.68s ease-in both"
    >
      <Container maxW="1180px">
        <Flex
          align={{ base: "start", md: "center" }}
          gap={{ base: "6", md: "8" }}
          direction={{ base: "column", md: "row" }}
          p={{ base: "7", md: "10" }}
          rounded="3xl"
          border="1px solid"
          borderColor="border.muted"
          bgGradient="to-br"
          gradientFrom="bg.card"
          gradientTo="bg.canvas"
          boxShadow="card"
        >
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
            <Icon as={FiInfo} color="brand.fg" boxSize="11" />
          </Flex>

          <Stack gap="4">
            <Stack gap="3">
              <Text
                color="brand.fg"
                fontSize="sm"
                fontWeight="800"
                letterSpacing="0.16em"
                textTransform="uppercase"
              >
                Sobre mim
              </Text>
              <Heading color="fg" fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="0">
                Desenvolvimento com visão técnica e foco comercial
              </Heading>
            </Stack>

            <Text color="fg" fontSize={{ base: "lg", md: "xl" }} fontWeight="700" maxW="850px">
              Sou Jean Guilherme Borges, desenvolvedor web e formando em Ciência da Computação. Meu foco é criar sites e
               aplicações simples, bem estruturadas e úteis para negócios reais. A prioridade não é apenas entregar uma
                página bonita, mas construir uma presença digital clara, rápida e preparada para gerar contato.
            </Text>

            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} maxW="860px">
              Trabalho com tecnologias modernas como React, TypeScript e Chakra UI, mas a escolha técnica fica nos bastidores.
               Para o cliente, o que realmente importa é ter um site funcional, profissional e fácil de usar.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

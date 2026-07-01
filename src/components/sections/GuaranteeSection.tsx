import { Box, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { FiShield } from "react-icons/fi"

export function GuaranteeSection() {
  return (
    <Box
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
            <Icon as={FiShield} color="brand.fg" boxSize="11" />
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
                Garantia
              </Text>
              <Heading color="fg" fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="0">
                Garantia de clareza
              </Heading>
            </Stack>

            <Text color="fg" fontSize={{ base: "lg", md: "xl" }} fontWeight="700" maxW="850px">
              Se a primeira versão não comunicar claramente o que seu negócio oferece,
              revisamos a estrutura da página antes da publicação final.
            </Text>

            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} maxW="860px">
              O objetivo é que qualquer visitante entenda rapidamente quem você atende,
              o que você oferece, por que confiar em você e como entrar em contato.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

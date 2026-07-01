import { Box, Container, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export function Footer() {
  return (
    <Box as="footer" bg="bg.canvas" borderTop="1px solid" borderColor="border.muted">
      <Container maxW="1180px" py="7">
        <Flex
          align="center"
          justify="space-between"
          gap="5"
          direction={{ base: "column", md: "row" }}
        >
          <Text color="fg.faint" fontSize="sm">
            © {new Date().getFullYear()} Jean Guilherme Borges | Dev Full Stack. Todos os direitos reservados.
          </Text>

          <HStack gap="4">
            <Link href="mailto:comscijb@gmail.com" color="fg.muted" _hover={{ color: "brand.fg" }}>
              <Icon as={FiMail} boxSize="5" />
            </Link>
            <Link href="https://github.com/comscijb" target="_blank" color="fg.muted" _hover={{ color: "brand.fg" }}>
              <Icon as={FiGithub} boxSize="5" />
            </Link>
            <Link href="https://www.linkedin.com/in/jean-guilherme-borges-b91823272/" target="_blank" color="fg.muted" _hover={{ color: "brand.fg" }}>
              <Icon as={FiLinkedin} boxSize="5" />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

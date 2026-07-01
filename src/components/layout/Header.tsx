import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react"
import { FiArrowUpRight, FiCode } from "react-icons/fi"
import { Link as RouterLink } from "react-router"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      borderBottom="1px solid"
      borderColor="border.muted"
      bg="bg.header"
      backdropFilter="blur(16px)"
    >
      <Container maxW="1180px" py="4">
        <Flex align="center" justify="space-between" gap="6">
          <Link asChild _hover={{ textDecoration: "none" }}>
            <RouterLink to="/">
              <HStack gap="2">
                <Icon as={FiCode} color="brand.solid" boxSize="5" />
                <Box lineHeight="1">
                  <Text fontWeight="800" color="fg" letterSpacing="0.04em">
                    DEV <Box as="span" color="brand.solid">JEAN BORGES</Box>
                  </Text>
                  <Text fontSize="xs" color="fg.muted" letterSpacing="0.18em">
                    PORTFÓLIO
                  </Text>
                </Box>
              </HStack>
            </RouterLink>
          </Link>

          <HStack
            as="nav"
            gap="7"
            display={{ base: "none", md: "flex" }}
            fontSize="sm"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                color="fg.muted"
                transition="color 0.2s ease-in"
                _hover={{ color: "brand.fg", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          <Button
            asChild
            bg="cta.solid"
            color="cta.contrast"
            fontWeight="700"
            transition="all 0.25s ease-in"
            _hover={{ bg: "cta.hover", transform: "translateY(-1px)" }}
          >
            <a href="#contato">
              Solicitar orçamento
              <Icon as={FiArrowUpRight} />
            </a>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

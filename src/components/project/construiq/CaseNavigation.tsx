import { Box, HStack, Link } from "@chakra-ui/react"

const navigationItems = [
  { label: "Visão geral", href: "#visao-geral" },
  { label: "Contratação", href: "#contratacao" },
  { label: "Contratos e pagamentos", href: "#pagamentos" },
  { label: "Reputação", href: "#reputacao" },
  { label: "Administração", href: "#administracao" },
  { label: "Arquitetura", href: "#arquitetura" },
]

export function CaseNavigation() {
  return (
    <Box
      as="nav"
      aria-label="Navegação do case ConstruiQ"
      position="sticky"
      top={{ base: "64px", md: "72px" }}
      zIndex="docked"
      mx={{ base: "-4", md: "0" }}
      px={{ base: "4", md: "3" }}
      py="3"
      rounded={{ base: "none", md: "xl" }}
      border="1px solid"
      borderColor="border.muted"
      bg="bg.header"
      backdropFilter="blur(18px)"
      overflowX="auto"
      css={{ scrollbarWidth: "thin" }}
    >
      <HStack gap="2" w="max-content">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            px="3"
            py="2"
            rounded="full"
            color="fg.muted"
            fontSize="sm"
            fontWeight="800"
            whiteSpace="nowrap"
            _hover={{ color: "brand.fg", bg: "brand.subtle", textDecoration: "none" }}
            _focusVisible={{ outline: "2px solid", outlineColor: "brand.focusRing", outlineOffset: "2px" }}
          >
            {item.label}
          </Link>
        ))}
      </HStack>
    </Box>
  )
}

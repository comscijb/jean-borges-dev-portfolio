import { Box, Icon, Stack, Text } from "@chakra-ui/react"
import { FiImage } from "react-icons/fi"

type ScreenshotPlaceholderProps = {
  label: string
  suggestedPath: string
}

export function ScreenshotPlaceholder({ label, suggestedPath }: ScreenshotPlaceholderProps) {
  return (
    <Box
      role="img"
      aria-label={`Espaço reservado para captura de tela: ${label}`}
      position="relative"
      alignSelf="center"
      w="100%"
      aspectRatio="16 / 9"
      minW="0"
      overflow="hidden"
      rounded="2xl"
      border="1px dashed"
      borderColor="border.emphasized"
      bg="bg.cardStrong"
      backgroundImage="linear-gradient(rgba(0, 194, 214, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 194, 214, 0.035) 1px, transparent 1px)"
      backgroundSize="24px 24px"
    >
      <Stack
        position="absolute"
        inset="0"
        align="center"
        justify="center"
        gap="3"
        p="6"
        textAlign="center"
      >
        <Box p="3" rounded="xl" bg="brand.subtle" border="1px solid" borderColor="border.brandSoft">
          <Icon as={FiImage} boxSize="6" color="brand.fg" />
        </Box>
        <Text color="fg" fontWeight="800">
          {label}
        </Text>
        <Text color="fg.subtle" fontSize="sm">
          Captura a inserir
        </Text>
        <Text color="brand.fg" fontFamily="mono" fontSize={{ base: "xs", md: "sm" }}>
          <Box as="span" overflowWrap="anywhere">
            {suggestedPath}
          </Box>
        </Text>
      </Stack>
    </Box>
  )
}

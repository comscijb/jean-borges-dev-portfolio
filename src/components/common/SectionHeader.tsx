import { Heading, Stack, Text } from "@chakra-ui/react"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Stack gap="3" mb="8">
      <Text
        color="brand.fg"
        fontSize="sm"
        fontWeight="800"
        letterSpacing="0.16em"
        textTransform="uppercase"
      >
        {eyebrow}
      </Text>

      <Heading
        color="fg"
        fontSize={{ base: "2xl", md: "4xl" }}
        letterSpacing="0"
      >
        {title}
      </Heading>

      {description && (
        <Text maxW="680px" color="fg.muted" fontSize={{ base: "md", md: "lg" }}>
          {description}
        </Text>
      )}
    </Stack>
  )
}

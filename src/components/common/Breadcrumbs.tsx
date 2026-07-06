import { HStack, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router"

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <HStack as="nav" aria-label="Breadcrumb" gap="2" color="fg.subtle" fontSize="sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <HStack key={`${item.label}-${index}`} gap="2">
            {item.href && !isLast ? (
              <Link asChild color="fg.subtle" fontWeight="700" _hover={{ color: "brand.fg" }}>
                <RouterLink to={item.href}>{item.label}</RouterLink>
              </Link>
            ) : (
              <Text color={isLast ? "fg.muted" : "fg.subtle"} fontWeight={isLast ? "800" : "700"}>
                {item.label}
              </Text>
            )}

            {!isLast && (
              <Text color="fg.faint" aria-hidden="true">
                /
              </Text>
            )}
          </HStack>
        )
      })}
    </HStack>
  )
}

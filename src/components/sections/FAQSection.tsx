import { Box, Collapsible, Container, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { FiChevronDown, FiHelpCircle } from "react-icons/fi"
import { SectionHeader } from "@/components/common/SectionHeader"
import { useState } from "react"

const faqItems = [
  {
    question: "Quanto tempo leva para criar o site?",
    answer:
      "Depende do escopo, mas um site simples ou landing page pode ser entregue em um prazo curto quando o conteúdo e as decisões principais estão claros.",
  },
  {
    question: "Eu preciso já ter domínio e hospedagem?",
    answer: "Não. Posso orientar a escolha e ajudar na configuração inicial.",
  },
  {
    question: "Você cria os textos?",
    answer:
      "Sim. A estrutura e os textos principais podem ser criados com foco em clareza, apresentação da oferta e conversão.",
  },
  {
    question: "O site vai funcionar no celular?",
    answer: "Sim. A estrutura deve ser responsiva, com prioridade para boa experiência mobile.",
  },
  {
    question: "Isso garante mais vendas?",
    answer:
      "Não. Um site melhora apresentação, clareza e conversão dos visitantes, mas vendas dependem também de tráfego, oferta, preço, atendimento e mercado.",
  },
  {
    question: "Posso pedir alterações?",
    answer: "Sim. O pacote deve incluir uma rodada de ajustes antes da publicação final.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Box bg="bg.sectionAlt" py={{ base: "14", md: "20" }}>
      <Container maxW="1180px">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Respostas diretas para as dúvidas mais comuns antes de iniciar um site simples ou landing page."
        />

        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap="5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <Stack
                as="button"
                key={item.question}
                gap="3"
                p="6"
                rounded="2xl"
                border="1px solid"
                borderColor="border.muted"
                bg="bg.card"
                boxShadow="card"
                textAlign="left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <HStack justify="space-between" align="flex-start">
                  <Icon as={FiHelpCircle} color="brand.fg" boxSize="7" />
                  <Icon
                    as={FiChevronDown}
                    color="brand.fg"
                    boxSize="5"
                    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    transition="transform 0.2s ease"
                  />
                </HStack>

                <Text color="fg" fontSize="lg" fontWeight="800">
                  {item.question}
                </Text>

                <Collapsible.Root open={isOpen}>
                  <Collapsible.Content>
                    <Text color="fg.muted" lineHeight="1.7">
                      {item.answer}
                    </Text>
                  </Collapsible.Content>
                </Collapsible.Root>
              </Stack>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
import { Badge, Box, Container, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { SectionHeader } from "@/components/common/SectionHeader"

const experience = [
  {
    role: "Desenvolvedor Full Stack",
    organization: "Projetos próprios e trabalhos independentes",
    period: "Jan 2026 até o presente",
    description:
      "Desenvolvimento de aplicações web com React, TypeScript e Node.js. Na ConstruiQ, atuo no frontend, backend, banco de dados, integrações, testes e infraestrutura.",
  },
  {
    role: "Produtor Musical",
    organization: "Autônomo",
    period: "Ago 2015 a Mar 2026",
    description:
      "Gestão de projetos para clientes, do entendimento da demanda à entrega, incluindo negociação, organização e cumprimento de prazos.",
  },
  {
    role: "Técnico de Manutenção Trainee",
    organization: "Azul Linhas Aéreas Brasileiras",
    period: "Ago 2012 a Out 2014",
    description:
      "Experiência em ambiente técnico, seguindo procedimentos, padrões de segurança e rotinas de trabalho em equipe.",
  },
]

export function ExperienceSection() {
  return (
    <Box id="experiencia" bg="bg.sectionAlt" py={{ base: "14", md: "20" }} animation="section-enter 0.68s ease-in both">
      <Container maxW="1180px">
        <SectionHeader eyebrow="Experiência" title="Experiência prática e formação" />
        <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap="8">
          <Stack gap="0" role="list" aria-label="Experiência profissional">
            {experience.map((item, index) => (
              <HStack key={item.role} align="stretch" gap="5" role="listitem">
                <Stack align="center" gap="0" flexShrink="0">
                  <Box boxSize="12px" mt="2" rounded="full" bg={index === 0 ? "positive.solid" : "brand.solid"} boxShadow={index === 0 ? "0 0 0 6px rgba(22, 193, 114, 0.10)" : "0 0 0 6px rgba(0, 194, 214, 0.10)"} />
                  {index < experience.length - 1 && <Box w="1px" flex="1" minH="120px" bg="border.emphasized" />}
                </Stack>
                <Stack gap="2" pb={index < experience.length - 1 ? "8" : "0"}>
                  <HStack gap="3" flexWrap="wrap">
                    <Heading as="h3" color="fg" fontSize="xl">{item.role}</Heading>
                    {index === 0 && <Badge bg="positive.subtle" color="positive.fg">Atual</Badge>}
                  </HStack>
                  <Text color="brand.fg" fontWeight="800">{item.organization}</Text>
                  <Text color="fg.subtle" fontSize="sm" fontWeight="700">{item.period}</Text>
                  <Text color="fg.muted" lineHeight="1.75" maxW="700px">{item.description}</Text>
                </Stack>
              </HStack>
            ))}
          </Stack>

          <Stack gap="5">
            <Stack gap="3" p="6" rounded="2xl" bg="bg.card" border="1px solid" borderColor="border.muted" boxShadow="card">
              <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.12em">FORMAÇÃO</Text>
              <Heading as="h3" color="fg" fontSize="xl">Ciência da Computação</Heading>
              <Text color="fg" fontWeight="800">UniRitter</Text>
              <Text color="fg.muted">Último semestre · conclusão prevista para dezembro de 2026</Text>
            </Stack>
            <Stack gap="3" p="6" rounded="2xl" bg="bg.card" border="1px solid" borderColor="border.muted" boxShadow="card">
              <HStack justify="space-between" gap="3">
                <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.12em">INGLÊS</Text>
                <Badge bg="brand.badge" color="brand.fg" border="1px solid" borderColor="border.brandSoft">C2</Badge>
              </HStack>
              <Heading as="h3" color="fg" fontSize="xl">EF SET English Certificate</Heading>
              <Text color="fg.muted">Certificado emitido em outubro de 2022.</Text>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

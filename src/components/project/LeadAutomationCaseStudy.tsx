import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiGithub,
  FiServer,
  FiTrendingUp,
} from "react-icons/fi"
import { Link as RouterLink } from "react-router"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ProjectCardImage } from "@/components/project/construiq/ImageCardConstruiq"

const repositoryUrl = "https://github.com/comscijb/lead-automation-app"
const mainStack = ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"]

const overview = [
  {
    label: "Problema",
    text: "Pequenos pipelines comerciais podem acumular contatos de diferentes origens sem um critério consistente para definir quais oportunidades merecem atenção primeiro.",
  },
  {
    label: "Solução",
    text: "A aplicação centraliza os dados dos leads e aplica regras de pontuação no backend, permitindo ordenar oportunidades por prioridade e acompanhar cada contato no pipeline.",
  },
  {
    label: "Minha atuação",
    text: "Desenvolvimento full stack do frontend, API, regras de scoring, persistência, validações e testes.",
  },
]

const flowSteps = [
  "Cadastro do lead",
  "Validação da API",
  "Cálculo de score",
  "Persistência PostgreSQL",
  "Classificação por prioridade",
  "Acompanhamento de status",
]

const features = [
  "Cadastro e validação de leads",
  "Score calculado automaticamente no backend",
  "Ordenação por prioridade",
  "Gerenciamento do status comercial",
  "Métricas resumidas do pipeline",
  "Persistência PostgreSQL via Prisma",
  "Erros tratados para o frontend",
  "Interface responsiva",
]

const decisions = [
  {
    title: "Scoring no backend",
    text: "A pontuação é calculada pela API, mantendo a regra centralizada e independente do cliente que consome o serviço.",
  },
  {
    title: "Responsabilidades separadas",
    text: "Interface, regras de negócio e acesso ao banco permanecem em camadas distintas, facilitando entendimento e manutenção.",
  },
  {
    title: "PostgreSQL e Prisma",
    text: "Leads e estados são persistidos em banco relacional, com Prisma como camada de acesso aos dados.",
  },
  {
    title: "Configuração por ambiente",
    text: "Banco de dados, origem permitida e URL da API usam variáveis de ambiente, sem infraestrutura hardcoded no código.",
  },
]

const architecture = [
  { label: "Frontend", value: "React + TypeScript", icon: FiCode },
  { label: "Comunicação", value: "REST API", icon: FiTrendingUp },
  { label: "Backend", value: "Node.js + Express", icon: FiServer },
  { label: "Regras", value: "Validação + scoring", icon: FiCheckCircle },
  { label: "Persistência", value: "Prisma + PostgreSQL", icon: FiDatabase },
]

const stackGroups = [
  { title: "Frontend", items: ["React", "TypeScript", "Vite", "Chakra UI"] },
  { title: "Backend", items: ["Node.js", "Express", "REST API"] },
  { title: "Dados", items: ["PostgreSQL", "Prisma"] },
  { title: "Testes e validação", items: ["Vitest", "Testing Library", "TypeScript"] },
]

export function LeadAutomationCaseStudy() {
  return (
    <Stack gap={{ base: "12", md: "16" }} animation="section-enter 0.55s ease-in both">
      <Stack gap="5">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Projetos", href: "/#projetos" },
            { label: "Lead Automation App" },
          ]}
        />
        <Button asChild w="fit-content" variant="outline" borderColor="border.muted">
          <RouterLink to="/#projetos">
            <Icon as={FiArrowLeft} /> Voltar ao portfólio
          </RouterLink>
        </Button>

        <Grid templateColumns={{ base: "1fr", lg: "1fr auto" }} gap="8" alignItems="end">
          <Stack gap="5" maxW="820px">
            <HStack gap="2" flexWrap="wrap">
              <Badge bg="brand.badge" color="brand.fg">FULL STACK APPLICATION</Badge>
              <Badge bg="positive.subtle" color="positive.fg">CÓDIGO PÚBLICO</Badge>
            </HStack>
            <Heading as="h1" color="fg" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.02">
              Lead Automation App
            </Heading>
            <Heading as="p" color="fg.muted" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.4">
              Uma aplicação full stack para transformar dados de leads em prioridades comerciais claras.
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
              O sistema registra leads, calcula automaticamente um score no backend, organiza oportunidades por prioridade e acompanha a evolução de cada contato dentro do pipeline comercial.
            </Text>
            <HStack gap="2" flexWrap="wrap">
              {mainStack.map((item) => (
                <Badge key={item} bg="brand.badge" color="brand.fg" border="1px solid" borderColor="border.brandSoft">{item}</Badge>
              ))}
            </HStack>
          </Stack>

          <Stack gap="3" align={{ base: "stretch", lg: "end" }}>
            <Text color="fg.subtle" fontWeight="800">Projeto de portfólio</Text>
            <Button asChild bg="cta.solid" color="cta.contrast" fontWeight="900">
              <a href={repositoryUrl} target="_blank" rel="noreferrer">
                Ver código no GitHub <Icon as={FiGithub} />
              </a>
            </Button>
          </Stack>
        </Grid>
      </Stack>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="5">
        {overview.map((item) => (
          <Stack key={item.label} gap="3" p="6" rounded="2xl" bg="bg.card" border="1px solid" borderColor="border.muted" boxShadow="card">
            <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.12em">{item.label.toUpperCase()}</Text>
            <Text color="fg.muted" lineHeight="1.75">{item.text}</Text>
          </Stack>
        ))}
      </Grid>

      <Stack gap="7">
        <Stack gap="3" maxW="760px">
          <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">FLUXO PRINCIPAL</Text>
          <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "4xl" }}>Do cadastro à prioridade comercial</Heading>
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.75">
            Cada novo lead atravessa validação, scoring e persistência antes de aparecer classificado no pipeline.
          </Text>
        </Stack>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", xl: "repeat(6, 1fr)" }} gap="3" aria-label="Etapas do fluxo de leads">
          {flowSteps.map((step, index) => (
            <Stack key={step} gap="2" p="4" minH={{ xl: "120px" }} rounded="xl" bg="brand.subtle" border="1px solid" borderColor="border.brandSoft">
              <Text color="brand.fg" fontFamily="mono" fontWeight="900">{String(index + 1).padStart(2, "0")}</Text>
              <Text color="fg" fontWeight="800" lineHeight="1.4">{step}</Text>
            </Stack>
          ))}
        </Grid>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="3">
          {features.map((feature) => (
            <HStack key={feature} align="start" gap="3" p="4" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.muted">
              <Icon as={FiCheckCircle} color="positive.fg" mt="1" flexShrink="0" />
              <Text color="fg.muted" fontSize="sm" lineHeight="1.6">{feature}</Text>
            </HStack>
          ))}
        </Grid>
      </Stack>

      <Stack gap="7">
        <Stack gap="3" maxW="800px">
          <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">ARQUITETURA</Text>
          <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "4xl" }}>Regras de negócio fora do navegador</Heading>
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.75">
            O frontend cuida da interação e apresentação. A API concentra validação, regras de scoring e persistência, evitando que o navegador seja a fonte de verdade para regras de negócio.
          </Text>
        </Stack>
        <Grid templateColumns={{ base: "1fr", lg: "0.75fr 1.25fr" }} gap="6">
          <Stack gap="3" p={{ base: "5", md: "7" }} rounded="2xl" bg="bg.cardStrong" border="1px solid" borderColor="border.muted">
            {architecture.map((layer, index) => (
              <Stack key={layer.label} gap="3">
                <HStack gap="4" p="4" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.brandSoft">
                  <Box p="2.5" rounded="lg" bg="brand.subtle"><Icon as={layer.icon} color="brand.fg" boxSize="5" /></Box>
                  <Stack gap="0">
                    <Text color="fg.subtle" fontSize="xs" fontWeight="800">{layer.label.toUpperCase()}</Text>
                    <Text color="fg" fontWeight="900">{layer.value}</Text>
                  </Stack>
                </HStack>
                {index < architecture.length - 1 && <Icon as={FiArrowDown} color="brand.fg" alignSelf="center" aria-hidden="true" />}
              </Stack>
            ))}
          </Stack>

          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap="4">
            {decisions.map((decision, index) => (
              <HStack key={decision.title} align="start" gap="4" p="5" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.muted">
                <Text color="brand.fg" fontFamily="mono" fontWeight="900">{String(index + 1).padStart(2, "0")}</Text>
                <Stack gap="2">
                  <Heading as="h3" color="fg" fontSize="lg">{decision.title}</Heading>
                  <Text color="fg.muted" fontSize="sm" lineHeight="1.7">{decision.text}</Text>
                </Stack>
              </HStack>
            ))}
          </Grid>
        </Grid>
      </Stack>

      <Stack gap="7">
        <Stack gap="3">
          <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">INTERFACE</Text>
          <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "4xl" }}>Dashboard, pipeline e cadastro</Heading>
        </Stack>
        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap="6" alignItems="start">
          <Stack gap="3">
            {/* Screenshot real copiado de docs/screenshots/dashboard.png do repositório público. */}
            <ProjectCardImage imageSrc="/projects/lead-automation/dashboard.png" alt="Dashboard do Lead Automation App com métricas, formulário e pipeline" />
            <Text color="fg" fontWeight="800">Dashboard completo</Text>
          </Stack>
          <Stack gap="3">
            {/* Screenshot real copiado de docs/screenshots/pipeline.png do repositório público. */}
            <ProjectCardImage imageSrc="/projects/lead-automation/pipeline.png" alt="Pipeline de leads ordenado por score e status" />
            <Text color="fg" fontWeight="800">Pipeline priorizado</Text>
          </Stack>
          <Stack gap="3">
            {/* Screenshot real copiado de docs/screenshots/lead-form.png do repositório público. */}
            <ProjectCardImage imageSrc="/projects/lead-automation/lead-form.png" alt="Formulário responsivo para cadastrar e pontuar um lead" />
            <Text color="fg" fontWeight="800">Cadastro de lead</Text>
          </Stack>
        </Grid>
      </Stack>

      <Stack gap="7">
        <Stack gap="3">
          <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">STACK E QUALIDADE</Text>
          <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "3xl" }}>Tecnologias confirmadas no projeto</Heading>
        </Stack>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="4">
          {stackGroups.map((group) => (
            <Stack key={group.title} gap="3" p="5" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.muted">
              <Heading as="h3" color="fg" fontSize="md">{group.title}</Heading>
              <HStack gap="2" flexWrap="wrap">
                {group.items.map((item) => <Badge key={item} bg="brand.badge" color="brand.fg">{item}</Badge>)}
              </HStack>
            </Stack>
          ))}
        </Grid>
      </Stack>

      <HStack justify="center" gap="4" flexWrap="wrap" p={{ base: "7", md: "9" }} rounded="3xl" bg="brand.subtle" border="1px solid" borderColor="border.brandSoft">
        <Button asChild bg="cta.solid" color="cta.contrast" fontWeight="900">
          <a href={repositoryUrl} target="_blank" rel="noreferrer">Ver código no GitHub <Icon as={FiGithub} /></a>
        </Button>
        <Button asChild variant="outline" borderColor="border.muted" color="fg">
          <RouterLink to="/#projetos">Voltar aos projetos <Icon as={FiArrowRight} /></RouterLink>
        </Button>
      </HStack>
    </Stack>
  )
}

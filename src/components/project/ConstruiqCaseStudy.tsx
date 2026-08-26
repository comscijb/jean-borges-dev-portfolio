import type { ReactNode } from "react"
import type { IconType } from "react-icons"
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
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCreditCard,
  FiLock,
  FiMessageSquare,
  FiSettings,
  FiShield,
  FiStar,
  FiUsers,
} from "react-icons/fi"
import { Link as RouterLink } from "react-router"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ArchitectureOverview } from "@/components/project/construiq/ArchitectureOverview"
import { CaseNavigation } from "@/components/project/construiq/CaseNavigation"
import { ProjectCardImage } from "./construiq/ImageCardConstruiq"

const mainStack = [
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Stripe",
  "AWS",
  "Docker",
]

const overview = [
  {
    label: "Problema",
    text: "A contratação de mão de obra ainda depende de indicações, grupos e processos informais, o que dificulta avaliar profissionais e administrar conflitos.",
  },
  {
    label: "Solução",
    text: "A ConstruiQ reúne descoberta, vagas, candidaturas, conversa, contratação, pagamentos, reputação e resolução de conflitos em um único fluxo.",
  },
  {
    label: "Minha atuação",
    text: "Projeto desenvolvido de ponta a ponta: arquitetura, frontend, backend, banco de dados, UX/UI, regras de negócio, integrações, testes e infraestrutura.",
  },
]

const hiringSteps = ["Obra", "Vaga", "Candidatura ou convite", "Chat", "Proposta", "Contrato", "Aceite"]

const engineeringDecisions = [
  {
    title: "Regras financeiras no backend",
    text: "Valores, tarifas e estados de pagamento são calculados e validados pela API. O navegador não é a fonte de verdade para operações financeiras.",
  },
  {
    title: "Estados explícitos de negócio",
    text: "Vagas, contratos, pagamentos e disputas avançam por estados controlados, evitando ações incompatíveis com a etapa atual do fluxo.",
  },
  {
    title: "Validação e autorização",
    text: "Operações críticas passam por validação e checagem de permissões antes de alterar dados ou liberar a próxima etapa.",
  },
  {
    title: "Infraestrutura como código",
    text: "Os recursos de infraestrutura são definidos com AWS CDK, mantendo a configuração reproduzível e versionada junto ao projeto.",
  },
]

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Stack gap="3" maxW="760px">
      <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.14em">
        {eyebrow.toUpperCase()}
      </Text>
      <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.15">
        {title}
      </Heading>
      <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.75">
        {description}
      </Text>
    </Stack>
  )
}

type FeatureListProps = {
  items: string[]
}

function FeatureList({ items }: FeatureListProps) {
  return (
    <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap="3">
      {items.map((item) => (
        <HStack key={item} align="start" gap="3">
          <Icon as={FiCheckCircle} color="positive.fg" boxSize="5" mt="0.5" flexShrink="0" />
          <Text color="fg.muted" lineHeight="1.65">
            {item}
          </Text>
        </HStack>
      ))}
    </Grid>
  )
}

type FlowCardProps = {
  icon: IconType
  title: string
  description: string
  tags: string[]
  children: ReactNode
}

function FlowCard({ icon, title, description, tags, children }: FlowCardProps) {
  return (
    <Stack
      gap="5"
      p={{ base: "5", md: "7" }}
      rounded="2xl"
      bg="bg.card"
      border="1px solid"
      borderColor="border.muted"
      boxShadow="card"
    >
      <HStack align="start" gap="4">
        <Box p="3" rounded="xl" bg="brand.subtle" border="1px solid" borderColor="border.brandSoft">
          <Icon as={icon} color="brand.fg" boxSize="6" />
        </Box>
        <Stack gap="2">
          <Heading as="h3" color="fg" fontSize={{ base: "xl", md: "2xl" }}>
            {title}
          </Heading>
          <Text color="fg.muted" lineHeight="1.7">
            {description}
          </Text>
        </Stack>
      </HStack>
      <HStack gap="2" flexWrap="wrap">
        {tags.map((tag) => (
          <Badge key={tag} bg="brand.badge" color="brand.fg" border="1px solid" borderColor="border.brandSoft">
            {tag}
          </Badge>
        ))}
      </HStack>
      {children}
    </Stack>
  )
}

export function ConstruiqCaseStudy() {
  return (
    <Stack gap={{ base: "12", md: "18" }} animation="section-enter 0.55s ease-in both">
      <Stack gap="5">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Projetos", href: "/#projetos" },
            { label: "ConstruiQ" },
          ]}
        />

        <Button asChild w="fit-content" variant="outline" borderColor="border.muted">
          <RouterLink to="/#projetos">
            <Icon as={FiArrowLeft} />
            Voltar ao portfólio
          </RouterLink>
        </Button>

        <Grid templateColumns={{ base: "1fr", lg: "1.25fr 0.75fr" }} gap="8" alignItems="end">
          <Stack gap="5">
            <Text color="brand.fg" fontWeight="800" letterSpacing="0.14em">
              PROJETO PRÓPRIO · FULL STACK
            </Text>
            <Heading as="h1" color="fg" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.02">
              ConstruiQ
            </Heading>
            <Heading as="p" color="fg.muted" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.35">
              Marketplace B2B Full Stack para contratação na construção civil
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" maxW="780px">
              Plataforma que conecta contratantes e profissionais da construção civil e organiza todo o fluxo de contratação, da publicação da vaga ao contrato, pagamento, avaliação e resolução de disputas.
            </Text>
            <HStack gap="2" flexWrap="wrap">
              {mainStack.map((technology) => (
                <Badge key={technology} bg="brand.badge" color="brand.fg" border="1px solid" borderColor="border.brandSoft">
                  {technology}
                </Badge>
              ))}
            </HStack>
          </Stack>

          <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap="3">
            {[
              ["Tipo", "Projeto próprio"],
              ["Atuação", "Full Stack"],
              ["Ano", "2026"],
              ["Status", "MVP avançado"],
            ].map(([label, value]) => (
              <Stack key={label} gap="1" p="4" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.muted">
                <Text color="fg.subtle" fontSize="xs" fontWeight="800" textTransform="uppercase">
                  {label}
                </Text>
                <Text color="fg" fontWeight="800">
                  {value}
                </Text>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Stack>

      <Box id="visao-geral" scrollMarginTop="150px">
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="5">
          {overview.map((item) => (
            <Stack key={item.label} gap="3" p="6" rounded="2xl" bg="bg.card" border="1px solid" borderColor="border.muted" boxShadow="card">
              <Text color="brand.fg" fontSize="sm" fontWeight="800" letterSpacing="0.12em">
                {item.label.toUpperCase()}
              </Text>
              <Text color="fg.muted" lineHeight="1.75">
                {item.text}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Box>

      <CaseNavigation />

      <Stack id="contratacao" scrollMarginTop="150px" gap="8">
        <SectionHeading
          eyebrow="Principais fluxos"
          title="Da identidade ao contrato"
          description="Os fluxos conectam perfis diferentes, permissões e mudanças de estado. O objetivo não é apenas cadastrar registros, mas conduzir cada parte por uma contratação completa."
        />

        <FlowCard
          icon={FiShield}
          title="Autenticação, perfis e confiança"
          description="Trabalhadores, contratantes e administradores possuem jornadas e permissões próprias, com validações antes de acessar operações sensíveis."
          tags={["Authentication", "JWT", "RBAC", "Validation", "KYC"]}
        >
          <Grid templateColumns={{ base: "1fr", lg: "0.8fr 1.2fr" }} gap="6" alignItems="center">
            <FeatureList
              items={[
                "Cadastro por tipo de perfil",
                "Verificação de e-mail",
                "Recuperação de senha",
                "Autorização por papel",
                "Fluxo de KYC",
                "Validação administrativa",
              ]}
            />
            {/* Substituir este placeholder por public/projects/construiq/auth-flow.jpg. */}
            
            <ProjectCardImage imageSrc="/projects/construiq/auth-flow.jpg"  />
          </Grid>
        </FlowCard>

        <FlowCard
          icon={FiBriefcase}
          title="Da vaga ao contrato"
          description="O contratante publica a necessidade; o profissional se candidata ou recebe um convite. A conversa e a proposta consolidam os termos antes do aceite das partes."
          tags={["Workflow", "Business Rules", "Authorization", "Chat", "Contracts"]}
        >
          <Stack gap="6">
            <Grid templateColumns={{ base: "1fr", md: "repeat(7, minmax(0, 1fr))" }} gap="2" aria-label="Etapas do fluxo de contratação">
              {hiringSteps.map((step, index) => (
                <HStack
                  key={step}
                  gap="2"
                  p="3"
                  minH={{ md: "86px" }}
                  rounded="xl"
                  bg="brand.subtle"
                  border="1px solid"
                  borderColor="border.brandSoft"
                  align={{ base: "center", md: "center" }}
                >
                  <Text color="brand.fg" fontWeight="900" fontSize="xs">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Text color="fg" fontSize="sm" fontWeight="800" lineHeight="1.35">
                    {step}
                  </Text>
                </HStack>
              ))}
            </Grid>
            <FeatureList
              items={[
                "Estados controlados para vagas e candidaturas",
                "Convites e candidaturas com permissões distintas",
                "Chat contextual entre as partes",
                "Proposta convertida em contrato",
                "Aceite registrado para trabalhador e contratante",
                "Bloqueio de ações fora da etapa correta",
              ]}
            />
            {/* Substituir este placeholder por public/projects/construiq/hiring-flow.jpg. */}
            <ProjectCardImage imageSrc="/projects/construiq/hiring-flow.jpg" />
          </Stack>
        </FlowCard>
      </Stack>

      <Stack id="pagamentos" scrollMarginTop="150px" gap="8">
        <SectionHeading
          eyebrow="Contratos e pagamentos"
          title="O pagamento acompanha o estado do contrato"
          description="O plano financeiro é tratado como parte do fluxo de contratação. Parcelas, meios de pagamento, comprovantes e confirmações possuem estados próprios e validação no backend."
        />
        <Grid templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }} gap="6" alignItems="stretch">
          <FlowCard
            icon={FiCreditCard}
            title="Fluxo financeiro"
            description="A integração contempla pagamentos online com Stripe, conexão da conta do profissional via Stripe Connect e confirmação controlada de pagamentos manuais."
            tags={["Stripe", "Stripe Connect", "Payment Flow", "Backend Validation", "PostgreSQL"]}
          >
            <FeatureList
              items={[
                "Plano de pagamento por contrato",
                "Parcelas e status individuais",
                "Meios de pagamento distintos",
                "Comprovantes vinculados ao pagamento",
                "Confirmação de pagamentos manuais",
                "Cálculos financeiros centralizados na API",
              ]}
            />
          </FlowCard>
          {/* Substituir este placeholder por public/projects/construiq/payment-flow.jpg. */}
          <ProjectCardImage imageSrc="/projects/construiq/payment-flow.jpg" />
        </Grid>
      </Stack>

      <Stack id="reputacao" scrollMarginTop="150px" gap="8">
        <SectionHeading
          eyebrow="Reputação e conflitos"
          title="Confiança também depois da contratação"
          description="Avaliações e disputas seguem regras próprias para registrar o histórico da relação, reduzir abuso e permitir mediação quando as partes não chegam a um acordo."
        />
        <Grid templateColumns={{ base: "1fr", lg: "1.08fr 0.92fr" }} gap="6" alignItems="stretch">
          {/* Substituir este placeholder por public/projects/construiq/reputation-flow.jpg. */}
          <ProjectCardImage imageSrc="/projects/construiq/reputation-flow.jpg" />
          <FlowCard
            icon={FiStar}
            title="Reputação com regras"
            description="As duas partes podem avaliar a experiência. Notas baixas exigem justificativa, a publicação respeita o fluxo definido e conflitos podem evoluir para mediação administrativa."
            tags={["Business Rules", "Moderation", "Audit Trail", "State Machine"]}
          >
            <FeatureList
              items={[
                "Avaliação entre as partes",
                "Justificativa para notas baixas",
                "Regras de publicação",
                "Abertura e acompanhamento de disputa",
                "Mediação administrativa",
                "Histórico de estados e decisões",
              ]}
            />
          </FlowCard>
        </Grid>
      </Stack>

      <Stack id="administracao" scrollMarginTop="150px" gap="8">
        <SectionHeading
          eyebrow="Administração e operação"
          title="Ferramentas para acompanhar o marketplace"
          description="A operação administrativa concentra tarefas que exigem uma visão transversal do sistema, sem misturar essas permissões com as jornadas de trabalhador e contratante."
        />
        <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap="6">
          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap="4">
            {[
              [FiUsers, "KYC e validações", "Revisão de dados e etapas de verificação dos perfis."],
              [FiMessageSquare, "Mediação", "Acompanhamento de disputas e registro das decisões."],
              [FiLock, "Permissões", "Acesso administrativo separado por autorização."],
              [FiSettings, "Operação", "Auditoria, acompanhamento e health checks do sistema."],
            ].map(([itemIcon, title, text]) => (
              <Stack key={String(title)} gap="3" p="5" rounded="xl" bg="bg.card" border="1px solid" borderColor="border.muted">
                <Icon as={itemIcon as IconType} color="brand.fg" boxSize="5" />
                <Heading as="h3" color="fg" fontSize="md">
                  {String(title)}
                </Heading>
                <Text color="fg.muted" fontSize="sm" lineHeight="1.65">
                  {String(text)}
                </Text>
              </Stack>
            ))}
          </Grid>
          {/* Substituir este placeholder por public/projects/construiq/admin-dashboard.jpg. */}
          <ProjectCardImage imageSrc="/projects/construiq/admin-dashboard.jpg" />
        </Grid>
      </Stack>

      <Stack id="arquitetura" scrollMarginTop="150px" gap="8">
        <SectionHeading
          eyebrow="Arquitetura e stack"
          title="Camadas separadas, responsabilidades claras"
          description="O frontend consome uma REST API. A aplicação NestJS centraliza regras, autorização e integrações, enquanto Prisma organiza o acesso aos dados no PostgreSQL."
        />
        <ArchitectureOverview />
      </Stack>

      <Stack gap="8">
        <SectionHeading
          eyebrow="Decisões de engenharia"
          title="Algumas decisões importantes"
          description="Escolhas feitas para manter regras críticas consistentes e tornar o fluxo mais seguro de evoluir."
        />
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5">
          {engineeringDecisions.map((decision, index) => (
            <HStack key={decision.title} align="start" gap="4" p="6" rounded="2xl" bg="bg.card" border="1px solid" borderColor="border.muted">
              <Text color="brand.fg" fontFamily="mono" fontWeight="900">
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Stack gap="2">
                <Heading as="h3" color="fg" fontSize="lg">
                  {decision.title}
                </Heading>
                <Text color="fg.muted" lineHeight="1.7">
                  {decision.text}
                </Text>
              </Stack>
            </HStack>
          ))}
        </Grid>
      </Stack>

      <Stack
        align="center"
        gap="5"
        p={{ base: "7", md: "10" }}
        rounded="3xl"
        bg="brand.subtle"
        border="1px solid"
        borderColor="border.brandSoft"
        textAlign="center"
      >
        <Heading as="h2" color="fg" fontSize={{ base: "2xl", md: "3xl" }}>
          Quer conhecer os outros projetos?
        </Heading>
        <Text color="fg.muted" maxW="620px">
          Veja os demais trabalhos do portfólio e as diferentes soluções que desenvolvi.
        </Text>
        <Button asChild bg="cta.solid" color="cta.contrast" fontWeight="900" _hover={{ bg: "cta.hover", transform: "translateY(-1px)" }}>
          <RouterLink to="/#projetos">
            Voltar aos projetos
            <Icon as={FiArrowRight} />
          </RouterLink>
        </Button>
      </Stack>
    </Stack>
  )
}

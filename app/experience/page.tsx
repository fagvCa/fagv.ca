import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Building2, Cpu, Radio } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "25+ years of engineering experience spanning AI automation, telecommunications infrastructure, and enterprise systems integration.",
}

const mississaugaHighlights = [
  "Designed and deployed Sophia AI — an autonomous multilingual sales agent on WhatsApp Business handling the full lead-to-appointment lifecycle",
  "Integrated Meta Lead Ads with n8n orchestration for instant lead ingestion; agent responds in under 30 seconds vs. prior 2–4 hour manual follow-up",
  "Built multilingual conversation workflows supporting 30+ languages with automatic language detection and ElevenLabs voice greetings on first contact",
  "Implemented persistent conversation memory via MongoDB (dbSophia) — agent maintains full session context across disconnected interactions",
  "Automated appointment booking through Nylas Calendar API called directly from the LangChain agent via tool use",
  "Integrated Google Cloud Document AI to automate data extraction from financial funding forms, reducing manual entry errors by 90%",
  "Developed Pricing Audit Agents to synchronize internal pricing records against live website data and alert management of discrepancies",
  "Built Meta Ad Catalog generators via automated CSV manipulation to keep dynamic retargeting campaigns current with inventory",
  "Reverse-engineered CRM authentication flows to build custom Postman collections for reliable lead synchronization",
  "Architected 20+ active n8n production workflows spanning lead management, inventory sync, document processing, and reporting",
]

const telscoHighlights = [
  "Founded and led Telsco SAS as a primary service partner for Nokia, Siemens, Telefónica, and Alcatel across Colombia and Latin America",
  "Served Nokia as a specialized contractor delivering Care Services, Maintenance, Installation, Commissioning, and technical Training programs",
  "Managed end-to-end project delivery from site survey through systems integration, commissioning, and acceptance — GSM, UMTS, and microwave transmission",
  "Built internal operational processes, documentation standards, and project management frameworks adopted across multiple client engagements",
  "Delivered complex multi-vendor integration projects on compressed timelines with multi-disciplinary teams across remote and urban sites",
  "Established a reputation for consistently delivering solutions beyond the scope of formal requirements",
]

const siemensHighlights = [
  "Completed 8 years at Siemens culminating in a TAC-3 role within the Microwave (MW) Care Support unit — specialized technical assistance to carrier clients in Colombia",
  "Received advanced training in Network Management Systems Administration (Siemens ONMS on Unix OS) at Siemens headquarters in Munich, Germany",
  "Designated as an official Siemens Technology Instructor — delivered 1,000+ hours of advanced technical training to corporate clients across Latin America",
  "Developed laboratory exercises, assessment materials, and structured training programs used across multiple client cohorts in the region",
  "Managed site commissioning, RF optimization, fault resolution, and multi-site rollout coordination across GSM and UMTS deployments",
]

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl w-full px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">25+ Years Engineering</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Experience</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          A career that spans telecommunications infrastructure, enterprise systems
          integration, and modern AI automation — always focused on building systems
          that create measurable operational impact.
        </p>
      </div>

      <div className="space-y-10">
        {/* Mississauga Hyundai */}
        <ExperienceBlock
          icon={Cpu}
          iconColor="blue"
          company="Mississauga Hyundai"
          role="AI Solutions Developer & Sales Specialist"
          period="2021 – Present"
          location="Mississauga, Ontario, Canada"
          badges={["AI Agents", "n8n", "Node.js", "OpenAI", "WhatsApp Business", "MongoDB", "Google Cloud"]}
          summary="Independently designed and deployed a full AI automation ecosystem on top of existing dealership operations — without a dedicated engineering team or formal technology mandate. The work spans AI agent development, intelligent document processing, marketing automation, and custom API integrations."
          details={
            <>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The flagship output is <strong className="text-foreground">Sophia</strong>,
                an autonomous multilingual AI sales agent operating over WhatsApp Business.
                Sophia integrates nine systems — including OpenAI GPT-4o, ElevenLabs, Nylas
                Calendar, MongoDB, and Meta Lead Ads — into a single orchestrated pipeline
                that handles inbound leads 24/7 without human intervention for routine interactions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Alongside Sophia, built supporting systems for financial document automation
                (Google Document AI), internal pricing auditing, dynamic ad catalog generation,
                and a custom CRM integration layer using reverse-engineered authentication flows.
                All automation runs across 20+ active n8n production workflows.
              </p>
            </>
          }
          highlights={mississaugaHighlights}
        />

        <Separator />

        {/* Telsco SAS */}
        <ExperienceBlock
          icon={Radio}
          iconColor="slate"
          company="Telsco SAS"
          role="Founder & CEO"
          period="2005 – 2022"
          location="Bogotá, Colombia"
          badges={["Telecom Infrastructure", "Systems Integration", "Nokia", "Siemens", "Telefónica"]}
          summary="Founded and led a telecommunications infrastructure consultancy serving as a primary partner for Nokia, Siemens, Telefónica, and Alcatel. Grew from a solo operation to a team delivering end-to-end infrastructure and Care Services projects across Colombia and Latin America."
          details={
            <>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Telsco served Nokia primarily as a specialized contractor, delivering
                Care Services, Maintenance, Installation and Commissioning, and Training
                across GSM, UMTS, and microwave transmission infrastructure. Projects
                covered both urban and remote sites, requiring multi-vendor coordination
                and precision logistics.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Built internal operational processes, documentation standards, and project
                management frameworks that enabled consistent delivery under demanding
                client timelines. Managed subcontractor relationships, procurement
                logistics, and multi-stakeholder communication throughout execution.
              </p>
            </>
          }
          highlights={telscoHighlights}
        />

        <Separator />

        {/* Siemens */}
        <ExperienceBlock
          icon={Building2}
          iconColor="slate"
          company="Siemens / Nokia Siemens Networks"
          role="Field Engineer & Master Technical Instructor"
          period="2000 – 2008"
          location="Colombia · Munich, Germany (training)"
          badges={["GSM", "UMTS", "Microwave MW", "TAC-3", "Technical Training", "ONMS"]}
          summary="Eight years at Siemens spanning GSM and UMTS field engineering, culminating in a TAC-3 role in the Microwave (MW) Care Support unit. Also designated as an official Siemens Technology Instructor, delivering 1,000+ hours of specialized training to corporate clients across Latin America."
          details={
            <>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The TAC-3 role in MW Care Support involved providing specialized
                technical assistance to carrier clients on critical microwave transport
                systems — requiring deep expertise in transmission, multiplexing, and
                fault resolution under operational pressure. Received advanced training
                in Network Management Systems Administration (Siemens ONMS on Unix OS)
                at Siemens headquarters in Munich, Germany.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                As a designated Technology Instructor, designed and delivered structured
                training programs covering GSM and UMTS architecture, base station
                configuration, and network operations tooling — including laboratory
                exercises and assessments used across multiple client cohorts across
                Latin America.
              </p>
            </>
          }
          highlights={siemensHighlights}
        />
      </div>
    </div>
  )
}

interface ExperienceBlockProps {
  icon: React.ComponentType<{ className?: string }>
  iconColor: "blue" | "slate"
  company: string
  role: React.ReactNode
  period: string
  location: string
  badges: string[]
  summary: string
  details: React.ReactNode
  highlights: string[]
}

function ExperienceBlock({
  icon: Icon,
  iconColor,
  company,
  role,
  period,
  location,
  badges,
  summary,
  details,
  highlights,
}: ExperienceBlockProps) {
  const iconBg = iconColor === "blue" ? "bg-blue-50 text-blue-600" : "bg-muted text-muted-foreground"

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex gap-4">
        <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconBg} mt-0.5`}>
          <Icon className="size-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-foreground">{company}</h2>
              <p className="text-sm font-medium text-muted-foreground">{role}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-medium text-foreground">{period}</p>
              <p className="text-xs text-muted-foreground">{location}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {badges.map((b) => (
              <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Summary & Details */}
      <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
      {details}

      {/* Highlights */}
      <Card className="gap-3">
        <CardHeader className="pb-0">
          <CardTitle className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Key Contributions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

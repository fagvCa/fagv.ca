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
  "Designed autonomous AI sales agent (Sophia) to handle lead qualification over WhatsApp Business",
  "Integrated Meta Lead Ads with n8n orchestration for instant lead ingestion and qualification",
  "Built multilingual conversation workflows in English, Spanish, and many languages more",
  "Automated real-time inventory queries reducing sales team response time from hours to seconds",
  "Implemented automated appointment booking directly within WhatsApp conversations",
  "Created Google Sheets data synchronization for leads, appointments, and conversation logs",
  "Developed document automation for sales contracts and follow-up communications",
  "Built ROI measurement dashboards connecting lead source to appointment conversion rates",
]

const telscoHighlights = [
  "Founded and operated a telecommunications infrastructure consultancy in Colombia",
  "Led systems integration projects for Nokia, Siemens, Telefónica, and Alcatel networks",
  "Designed and supervised deployment of GSM, UMTS, and transmission infrastructure",
  "Managed end-to-end project delivery from site survey through commissioning and acceptance",
  "Built operational processes and technical documentation frameworks adopted across projects",
  "Delivered complex multi-vendor integration projects on compressed timelines",
]

const siemensHighlights = [
  "Performed field engineering deployments for Nokia Siemens Networks across Colombia",
  "Delivered technical training programs for telecommunications engineers on GSM and UMTS systems",
  "Conducted site commissioning, optimization, and acceptance testing for base station deployments",
  "Created technical training materials and laboratory exercises used across multiple cohorts",
  "Served as technical lead for cross-functional teams on multi-site rollout programs",
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
          role="Sales Specialist — Automation & AI Systems Development"
          period="2022 – Present"
          location="Mississauga, Ontario, Canada"
          badges={["AI Agents", "n8n", "Node.js", "OpenAI API", "WhatsApp Business"]}
          summary="While working in a customer-facing sales role, independently designed and deployed a suite of AI automation systems to optimize the dealership's operational workflows and generate measurable ROI — without dedicated engineering resources or a formal technology mandate."
          details={
            <>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The primary output was <strong className="text-foreground">Sophia</strong>,
                an autonomous multilingual AI sales agent deployed over WhatsApp Business.
                Sophia automates the full lead qualification and appointment scheduling
                workflow, handling inbound leads from Meta Lead Ads through to confirmed
                test drive bookings — operating 24/7 without human intervention for
                routine interactions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Beyond Sophia, built supporting automation systems for document generation,
                data synchronization between the dealership&apos;s CRM and Google Sheets,
                and reporting pipelines that connect lead source attribution to
                appointment conversion metrics.
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
          summary="Founded and led a telecommunications infrastructure consultancy delivering end-to-end systems integration projects for major carriers and equipment vendors across Colombia. Grew the company from a solo operation into a team serving Nokia, Siemens, Telefónica, and Alcatel on mission-critical network deployments."
          details={
            <>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Telsco operated across the full project lifecycle — from initial site
                surveys and technical design through installation supervision, systems
                integration, and final acceptance testing. Projects included GSM, UMTS,
                and microwave transmission infrastructure across both urban and remote
                sites.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Built internal operational processes, technical documentation standards,
                and project management frameworks that enabled consistent delivery under
                demanding client timelines. Managed subcontractor relationships,
                procurement logistics, and multi-stakeholder communication throughout
                project execution.
              </p>
            </>
          }
          highlights={telscoHighlights}
        />

        <Separator />

        {/* Siemens / Nokia Siemens Networks */}
        <ExperienceBlock
          icon={Building2}
          iconColor="slate"
          company="Siemens / Nokia Siemens Networks"
          role="Field Engineer & Technical Instructor"
          period="2000 – 2005"
          location="Colombia"
          badges={["GSM", "UMTS", "Field Engineering", "Technical Training"]}
          summary="Worked directly with Siemens and Nokia Siemens Networks on telecommunications network deployments and technical training programs. Built hands-on expertise in base station deployment, network optimization, and technical instruction that formed the foundation for later independent work."
          details={
            <>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Field engineering responsibilities covered site commissioning,
                radio frequency optimization, fault resolution, and multi-site rollout
                coordination across GSM and UMTS network deployments. Worked directly
                with carrier engineering teams on complex integration challenges.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Technical instruction included designing and delivering structured
                training programs for telecommunications engineers, covering GSM and
                UMTS architecture, base station configuration, and network operations
                tooling. Developed laboratory exercises and assessment materials used
                across multiple training cohorts.
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

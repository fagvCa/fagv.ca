import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { CheckCircle2, Globe, MessageSquare, Calendar, Users, TrendingUp, Clock, Languages, Plug } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI agent and automation projects built for real-world production environments.",
}

const sophiaTech = [
  "n8n orchestration",
  "Node.js microservices",
  "OpenAI API",
  "WhatsApp Business Cloud API",
  "Google Sheets API",
  "Meta Lead Ads integration",
]

const sophiaOutcomes = [
  {
    icon: Clock,
    metric: "< 30 seconds",
    label: "Lead response time",
    detail: "Down from 2–4 hours of manual follow-up",
  },
  {
    icon: Globe,
    metric: "3 languages",
    label: "Conversation support",
    detail: "English, Spanish, and French — auto-detected",
  },
  {
    icon: TrendingUp,
    metric: "24/7",
    label: "Autonomous operation",
    detail: "No human required for routine qualification flows",
  },
  {
    icon: Plug,
    metric: "6 systems",
    label: "Integrated in one pipeline",
    detail: "Meta Ads → WhatsApp → OpenAI → Calendar → Sheets → CRM",
  },
]

const sophiaCapabilities = [
  {
    icon: Globe,
    title: "Multilingual Conversation",
    description:
      "Handles inbound and outbound conversations in English, Spanish, and French — automatically detecting language and adapting responses.",
  },
  {
    icon: MessageSquare,
    title: "Lead Qualification Workflows",
    description:
      "Qualifies incoming leads from Meta Lead Ads through structured conversation flows, scoring intent and routing to the correct sales process.",
  },
  {
    icon: CheckCircle2,
    title: "Real-Time Inventory Queries",
    description:
      "Queries live inventory data to answer customer questions about vehicle availability, pricing, and specifications without human intervention.",
  },
  {
    icon: Calendar,
    title: "Automated Appointment Booking",
    description:
      "Schedules test drives and service appointments directly within the conversation, syncing with the dealership calendar in real time.",
  },
  {
    icon: Users,
    title: "CRM Synchronization",
    description:
      "Writes lead data and conversation summaries to Google Sheets and downstream CRM systems, maintaining a complete audit trail.",
  },
  {
    icon: Languages,
    title: "Human Escalation Routing",
    description:
      "Detects ambiguous intent or complex edge cases and routes to a human agent with full conversation context — preserving the relationship without information loss.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl w-full px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Production Systems</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          AI agents and automation systems designed and deployed to solve real operational
          challenges, with measurable business impact.
        </p>
      </div>

      {/* Sophia AI — Featured Project */}
      <div className="space-y-10">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge className="text-xs">Featured Project</Badge>
            <Badge variant="outline" className="text-xs text-green-700 border-green-200 bg-green-50">
              Production · Active
            </Badge>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mt-2">
            Sophia — Autonomous Multilingual AI Sales Agent
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Sophia is a production-deployed AI conversational agent built to automate the
            automotive sales process from initial lead capture through appointment
            scheduling. Operating entirely over WhatsApp Business, Sophia manages
            multilingual conversations, qualifies leads, answers product questions, and
            books appointments — without requiring human intervention for routine
            interactions.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
            The system was designed independently as an automation layer on top of existing
            dealership operations, integrating with Meta Lead Ads, Google Sheets, and the
            dealership&apos;s internal calendar. It handles real-time inventory lookups,
            dynamic pricing responses, and routes complex cases to human agents when
            necessary.
          </p>
        </div>

        {/* Outcome metrics — this is what makes it credible */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Project Outcomes
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sophiaOutcomes.map((o) => {
              const Icon = o.icon
              return (
                <div
                  key={o.label}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 text-blue-600 mb-3">
                    <Icon className="size-4" />
                  </div>
                  <p className="text-xl font-bold text-foreground leading-tight">{o.metric}</p>
                  <p className="text-sm font-medium text-foreground mt-0.5">{o.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{o.detail}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Architecture diagram placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImagePlaceholder
            label="Architecture diagram — Sophia AI orchestration workflow"
            description="Insert a high-level architecture diagram showing: Meta Lead Ads → n8n Orchestrator → OpenAI API → WhatsApp Business Cloud API → Google Sheets."
            aspectRatio="video"
          />
          <ImagePlaceholder
            label="n8n workflow screenshot"
            description="Insert a screenshot of the main n8n workflow canvas showing the Sophia agent automation nodes and routing logic."
            aspectRatio="video"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImagePlaceholder
            label="System interaction diagram"
            description="Insert a sequence diagram: Lead arrives → Agent qualifies → Inventory query → Appointment booked → CRM updated."
            aspectRatio="video"
            className="md:col-span-1"
          />
          <div className="md:col-span-2 flex flex-col gap-4">
            <Card className="gap-4">
              <CardHeader className="pb-0">
                <CardTitle className="text-base">Technology Stack</CardTitle>
                <CardDescription>Core tools and APIs powering Sophia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sophiaTech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Capabilities grid */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Agent Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sophiaCapabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <Card key={cap.title} className="gap-4">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                        <Icon className="size-4" />
                      </div>
                      <CardTitle className="text-sm">{cap.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs leading-relaxed">
                      {cap.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <Separator />

        {/* Second project — placeholder */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs">In Development</Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Automation Workflow Library
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
            A reusable library of n8n workflow templates and Node.js integration modules
            for common AI agent patterns: lead qualification, appointment scheduling,
            document generation, and CRM synchronization. Designed to accelerate
            deployment of new AI automation projects from scratch.
          </p>
          <ImagePlaceholder
            label="Automation Workflow Library — project screenshot placeholder"
            description="Insert a screenshot of the workflow template library, code repository, or documentation site when available."
            aspectRatio="video"
            className="max-w-2xl"
          />
        </div>
      </div>

      {/* Future Demos */}
      <div className="mt-16 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center">
        <Badge variant="outline" className="mb-3 text-xs">Coming Soon</Badge>
        <h3 className="text-lg font-semibold text-foreground">
          Live AI Agent Demonstrations
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Future versions of this portfolio will include interactive demos where
          visitors can experience Sophia-style AI agent workflows, live inventory
          queries, and automated appointment booking directly in the browser.
        </p>
      </div>
    </div>
  )
}

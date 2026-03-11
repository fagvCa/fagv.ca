import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ImagePlaceholder } from "@/components/image-placeholder"

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Engineering approach to AI agent systems — orchestration, automation stacks, and integration patterns.",
}

const stackItems = [
  {
    layer: "Orchestration",
    tool: "n8n",
    description:
      "Visual, code-extensible workflow automation. Used to wire together triggers, AI model calls, API requests, and business logic into reliable, auditable pipelines without brittle glue code.",
  },
  {
    layer: "Business Logic",
    tool: "Node.js Microservices",
    description:
      "Lightweight, stateless service modules handle complex decision trees, data transformations, and routing logic that exceeds what n8n nodes can express natively.",
  },
  {
    layer: "AI / LLM Layer",
    tool: "OpenAI API",
    description:
      "GPT-4-class models provide natural language understanding, intent classification, response generation, and structured output extraction via function calling and JSON mode.",
  },
  {
    layer: "Messaging Channel",
    tool: "WhatsApp Business Cloud API",
    description:
      "Real-time bidirectional messaging through Meta's official Cloud API, handling webhook ingestion, message formatting, media, and template-based outbound messages.",
  },
  {
    layer: "Data & Storage",
    tool: "Google Sheets / Cloud Databases",
    description:
      "Structured data storage for leads, appointment records, and audit logs. Google Sheets serves as a low-friction operational datastore; cloud databases scale to production volumes.",
  },
  {
    layer: "Lead Acquisition",
    tool: "Meta Lead Ads",
    description:
      "Facebook/Instagram lead forms feed directly into the automation pipeline via webhook, triggering the qualification workflow within seconds of form submission.",
  },
]

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-6xl w-full px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Engineering Approach</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Architecture</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          How AI agent systems are designed, orchestrated, and connected to deliver
          production-grade automation at scale.
        </p>
      </div>

      {/* Section 1: AI Agent Architecture */}
      <section className="mb-14">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
          AI Agent Architecture
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Production AI agents are not simple prompt-and-response systems. They require
          deliberate orchestration: how context is maintained across turns, how the LLM
          decides which tool to call, how sub-workflows are triggered, and how failures are
          handled gracefully. The architecture below reflects those design decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="gap-4">
            <CardHeader>
              <CardTitle className="text-base">LLM Orchestration</CardTitle>
              <CardDescription>
                Language model calls are structured with system prompts, conversation
                history, function definitions, and output schemas. The orchestrator
                manages context window limits, injects dynamic data (inventory,
                appointments), and routes the model&apos;s tool-use decisions to
                downstream services.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="gap-4">
            <CardHeader>
              <CardTitle className="text-base">Workflow Routing</CardTitle>
              <CardDescription>
                Each user message is classified by intent before processing. Routing
                logic determines whether the request flows to a qualification workflow,
                an inventory query, a booking flow, or a human escalation path. This
                prevents the LLM from being the sole decision-maker for business-critical
                branching.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="gap-4">
            <CardHeader>
              <CardTitle className="text-base">External API Integrations</CardTitle>
              <CardDescription>
                Agents interact with the outside world through typed integration
                modules — thin wrappers around external APIs that normalize errors,
                handle retries, and return structured data the LLM can reason about.
                APIs are never called directly from prompts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="gap-4">
            <CardHeader>
              <CardTitle className="text-base">Automation Pipelines</CardTitle>
              <CardDescription>
                n8n workflows serve as the durable execution layer. They handle
                event triggers, sequential steps, parallel branches, error handling,
                and human-in-the-loop checkpoints — ensuring the agent operates
                reliably even when upstream services experience delays or failures.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* System Architecture Diagram */}
        <div className="rounded-xl border border-border bg-muted/20 p-6">
          <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-widest">
            System Architecture Diagram
          </h3>
          <ArchitectureDiagram />
          <p className="mt-6 text-xs text-muted-foreground text-center">
            High-level flow: user message → messaging channel → agent orchestrator → sub-workflows + LLM → external APIs &amp; data sources → response
          </p>
        </div>

        <div className="mt-6">
          <ImagePlaceholder
            label="Custom architecture diagram placeholder"
            description="Replace with a detailed architecture diagram (PNG/SVG) showing the full Sophia AI system: Meta Lead Ads, WhatsApp Business API, n8n Orchestrator, OpenAI API, Node.js services, Google Sheets, and routing logic."
            aspectRatio="wide"
          />
        </div>
      </section>

      <Separator className="mb-14" />

      {/* Section 2: Automation Stack */}
      <section className="mb-14">
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
          Automation Stack
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          Each layer of the stack is selected for reliability, observability, and
          extensibility. The goal is a system that can be understood, debugged, and
          extended by any competent engineer — not a black box dependent on a single
          vendor or paradigm.
        </p>

        <div className="space-y-4">
          {stackItems.map((item, index) => (
            <div
              key={item.tool}
              className="flex gap-5 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-mono text-xs font-bold mt-0.5">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.layer}
                  </span>
                  <Badge variant="secondary" className="text-xs font-mono">{item.tool}</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-14" />

      {/* Section 3: Design Principles */}
      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
          Design Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              title: "Separation of Concerns",
              body: "The LLM handles language understanding. Orchestration handles workflow. APIs handle data. No single component does everything — this makes each layer independently testable and replaceable.",
            },
            {
              title: "Graceful Degradation",
              body: "When an external API is unavailable or an LLM call fails, the system routes to a fallback path rather than surfacing a raw error to the end user. Every integration point has an error strategy.",
            },
            {
              title: "Auditability",
              body: "Every significant agent decision — intent classification result, tool call made, response sent — is logged with timestamps and metadata. This enables debugging, performance analysis, and compliance.",
            },
            {
              title: "Human-in-the-Loop Checkpoints",
              body: "For high-stakes decisions (escalation, large transactions, ambiguous intent), the system pauses and routes to a human operator rather than guessing. Automation should increase reliability, not introduce unchecked risk.",
            },
          ].map((principle) => (
            <Card key={principle.title} className="gap-3">
              <CardHeader className="pb-0">
                <CardTitle className="text-sm">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {principle.body}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        {/* Row 1: User input */}
        <div className="flex justify-center mb-2">
          <DiagramBox label="User" sublabel="WhatsApp Message" color="blue" />
        </div>

        <ArrowDown />

        {/* Row 2: Messaging channel */}
        <div className="flex justify-center mb-2">
          <DiagramBox label="Messaging Channel" sublabel="WhatsApp Business Cloud API" color="slate" />
        </div>

        <ArrowDown />

        {/* Row 3: Orchestrator */}
        <div className="flex justify-center mb-2">
          <DiagramBox label="Agent Orchestrator" sublabel="n8n + Node.js" color="primary" wide />
        </div>

        {/* Branches */}
        <div className="flex justify-center mb-2">
          <div className="relative w-full max-w-2xl">
            {/* Horizontal line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-border" />
            {/* Three arrow-down stems */}
            <div className="flex justify-between px-[12.5%]">
              <ArrowDown />
              <ArrowDown />
              <ArrowDown />
            </div>
          </div>
        </div>

        {/* Row 4: Sub-workflows */}
        <div className="flex justify-center gap-4 mb-2 flex-wrap">
          <DiagramBox label="Lead Qualification" sublabel="Intent classification" color="slate" small />
          <DiagramBox label="LLM Reasoning" sublabel="OpenAI GPT-4" color="blue" small />
          <DiagramBox label="Booking Flow" sublabel="Calendar integration" color="slate" small />
        </div>

        {/* More branches */}
        <div className="flex justify-center gap-12 mb-2 flex-wrap">
          <ArrowDown />
          <ArrowDown />
          <ArrowDown />
        </div>

        {/* Row 5: External APIs & Data */}
        <div className="flex justify-center gap-4 flex-wrap">
          <DiagramBox label="Meta Lead Ads" sublabel="Lead ingestion" color="slate" small />
          <DiagramBox label="Google Sheets" sublabel="CRM / data store" color="slate" small />
          <DiagramBox label="Inventory API" sublabel="Vehicle data" color="slate" small />
        </div>
      </div>
    </div>
  )
}

function DiagramBox({
  label,
  sublabel,
  color,
  wide,
  small,
}: {
  label: string
  sublabel?: string
  color: "blue" | "slate" | "primary"
  wide?: boolean
  small?: boolean
}) {
  const colorMap = {
    blue: "border-blue-200 bg-blue-50 text-blue-900",
    slate: "border-border bg-muted text-foreground",
    primary: "border-primary/30 bg-primary text-primary-foreground",
  }

  return (
    <div
      className={[
        "rounded-lg border px-4 py-2.5 text-center",
        colorMap[color],
        wide ? "w-full max-w-xs" : small ? "min-w-[140px]" : "min-w-[180px]",
      ].join(" ")}
    >
      <div className={["font-semibold leading-snug", small ? "text-xs" : "text-sm"].join(" ")}>
        {label}
      </div>
      {sublabel && (
        <div className={["opacity-70 mt-0.5", small ? "text-[10px]" : "text-xs"].join(" ")}>
          {sublabel}
        </div>
      )}
    </div>
  )
}

function ArrowDown() {
  return (
    <div className="flex flex-col items-center my-1">
      <div className="w-px h-4 bg-border" />
      <svg width="10" height="6" viewBox="0 0 10 6" className="text-border fill-current">
        <path d="M0 0L5 6L10 0H0Z" />
      </svg>
    </div>
  )
}

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
      "Visual, code-extensible workflow automation. Wires together triggers, AI model calls, API requests, and business logic into reliable, auditable pipelines. Currently running 20+ active production workflows.",
  },
  {
    layer: "Business Logic",
    tool: "Node.js Microservices",
    description:
      "Lightweight, stateless service modules handle complex decision trees, data transformations, and routing logic that exceeds what n8n nodes can express natively. Prior to n8n, the entire lead pipeline ran on custom Node.js services.",
  },
  {
    layer: "AI / LLM Layer",
    tool: "OpenAI GPT + Whisper · Claude · Gemini",
    description:
      "Multi-model strategy: GPT-4o for conversational agents (Sophia) and intent classification; Whisper for audio transcription; Claude for coding and reasoning tasks; Gemini for large-context processing and GCP ecosystem integration.",
  },
  {
    layer: "Voice AI",
    tool: "ElevenLabs eleven_multilingual_v2",
    description:
      "Generates personalized audio greetings in the customer's detected language using language-specific voice models. Output is Opus-encoded audio delivered directly via WhatsApp. Session recorded in MongoDB chat memory.",
  },
  {
    layer: "Messaging Channel",
    tool: "WhatsApp Business Cloud API · Twilio",
    description:
      "Real-time bidirectional messaging via Meta's official Cloud API — webhook ingestion, template messages, interactive buttons, and media. Twilio used for SMS in the pre-n8n Node.js pipeline.",
  },
  {
    layer: "Calendar & Scheduling",
    tool: "Nylas Calendar API",
    description:
      "Appointment booking sub-workflow called via LangChain tool use. The agent extracts appointment details from conversation (time, client name, email, salesperson) via $fromAI() and creates structured calendar events with participant metadata.",
  },
  {
    layer: "Data & Storage",
    tool: "MongoDB Atlas · Google Sheets API · MySQL",
    description:
      "MongoDB stores persistent conversation memory (chatMemory collection, keyed by WhatsApp ID) and the live inventory database (ucdInventory). Google Sheets API serves as a low-friction operational datastore for leads and records. MySQL for relational persistence.",
  },
  {
    layer: "Intelligent Document Processing",
    tool: "Google Cloud Document AI · Vertex AI",
    description:
      "Document AI processors automate structured data extraction from automotive funding forms (credit applications, lease documents), replacing manual data entry. Vertex AI used for Gemini orchestration and cloud-native ML tasks.",
  },
  {
    layer: "Lead Acquisition",
    tool: "Meta Lead Ads · Google Workspace APIs",
    description:
      "Facebook/Instagram lead forms feed into the pipeline via webhook, triggering qualification within seconds. Google Sheets API, Drive API, and Gmail API power inventory synchronization, document management, and automated email workflows.",
  },
  {
    layer: "Cloud Infrastructure",
    tool: "AWS · Google Cloud Platform",
    description:
      "AWS: EC2 (compute), S3 (object storage), Route 53 (DNS), SES (transactional email), IAM (access management). GCP: Cloud Functions, Cloud Storage, Document AI, Vertex AI. Multi-cloud deployment strategy based on service fit.",
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
      <section className="mb-14">
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

      <Separator className="mb-14" />

      {/* Section 4: Tools & Technologies */}
      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">
          Tools &amp; Technologies
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-8">
          The full inventory of tools, platforms, and protocols used across AI agent
          and automation projects — organized by function.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "AI & Language Models",
              items: [
                { name: "OpenAI GPT / GPT-4o-mini", note: "Conversational agents & routing" },
                { name: "OpenAI Whisper", note: "Audio transcription" },
                { name: "Anthropic Claude", note: "Coding & complex reasoning" },
                { name: "Google Gemini / Vertex AI", note: "Large-context processing & GCP" },
                { name: "ElevenLabs eleven_multilingual_v2", note: "Voice synthesis (30+ languages)" },
                { name: "Function Calling / Tool Use", note: "Structured agent actions" },
                { name: "Prompt Engineering", note: "System prompts & context control" },
                { name: "RAG Pipelines", note: "Retrieval-augmented generation" },
              ],
            },
            {
              category: "Orchestration & Automation",
              items: [
                { name: "n8n (20+ production workflows)", note: "Visual workflow orchestration" },
                { name: "LangChain (LLM agent framework)", note: "Agent + tool invocation" },
                { name: "Webhook ingestion", note: "Event-driven triggers" },
                { name: "Cron scheduling", note: "Time-based automation" },
                { name: "Error handling & retries", note: "Resilient pipelines" },
                { name: "Mautic", note: "Email campaign automation" },
                { name: "Zapier", note: "Supplemental automation" },
              ],
            },
            {
              category: "Runtime & Backend",
              items: [
                { name: "Node.js", note: "Primary runtime" },
                { name: "TypeScript / JavaScript", note: "Service & agent code" },
                { name: "REST APIs", note: "Integration pattern" },
                { name: "Python (scripting)", note: "Data processing & ML tasks" },
                { name: "Postman collections", note: "API testing & CRM integration" },
              ],
            },
            {
              category: "Messaging, Calendar & Channels",
              items: [
                { name: "WhatsApp Business Cloud API", note: "Bidirectional messaging" },
                { name: "Meta Lead Ads webhooks", note: "Lead ingestion" },
                { name: "Twilio", note: "SMS in early pipeline" },
                { name: "Nylas Calendar API", note: "Appointment booking" },
                { name: "ElevenLabs Voice", note: "Audio greetings via WhatsApp" },
              ],
            },
            {
              category: "Data & Storage",
              items: [
                { name: "MongoDB Atlas", note: "Chat memory & inventory DB" },
                { name: "Google Sheets API", note: "Operational datastore" },
                { name: "Google Drive & Gmail APIs", note: "Document & email workflows" },
                { name: "MySQL", note: "Relational persistence" },
                { name: "Google Cloud Document AI", note: "OCR & structured extraction" },
              ],
            },
            {
              category: "Cloud & Infrastructure",
              items: [
                { name: "AWS EC2", note: "Compute" },
                { name: "AWS S3", note: "Object storage" },
                { name: "AWS Route 53 / SES / IAM", note: "DNS, email, access control" },
                { name: "GCP Cloud Functions", note: "Serverless execution" },
                { name: "GCP Cloud Storage", note: "File storage" },
                { name: "Git / GitHub", note: "Version control" },
              ],
            },
          ].map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 border-b border-border pb-2">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-2">
                    <span className="size-1 shrink-0 rounded-full bg-blue-400 mt-[7px]" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="text-xs text-muted-foreground ml-1.5">— {item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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

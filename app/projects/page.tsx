import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ImagePlaceholder } from "@/components/image-placeholder"
import {
  CheckCircle2,
  Globe,
  MessageSquare,
  Calendar,
  Users,
  Mic,
  Clock,
  TrendingUp,
  Plug,
  FileText,
  ExternalLink,
  RefreshCw,
  Megaphone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI agent and automation systems built for production — Sophia AI, Financial Document AI, and supporting automation infrastructure.",
}

const sophiaTech = [
  "n8n orchestration",
  "Node.js microservices",
  "OpenAI GPT-4o + Whisper",
  "ElevenLabs multilingual TTS",
  "WhatsApp Business Cloud API",
  "MongoDB Atlas (chat memory + inventory)",
  "Nylas Calendar API",
  "Meta Lead Ads webhooks",
  "Google Sheets API",
]

const sophiaOutcomes = [
  {
    icon: Clock,
    metric: "< 30 s",
    label: "Lead response time",
    detail: "Down from 2–4 hours of manual follow-up",
  },
  {
    icon: Globe,
    metric: "30+",
    label: "Languages supported",
    detail: "Auto-detected via LangChain language classifier",
  },
  {
    icon: TrendingUp,
    metric: "24/7",
    label: "Autonomous operation",
    detail: "Zero human required for routine qualification flows",
  },
  {
    icon: Plug,
    metric: "9",
    label: "Integrated systems",
    detail: "OpenAI, ElevenLabs, Nylas, MongoDB, WhatsApp, Meta, Sheets & more",
  },
]

const sophiaCapabilities = [
  {
    icon: Globe,
    title: "Multilingual Conversation (30+)",
    description:
      "Detects language automatically on every message and responds in the customer's own language. Supports 30+ languages via OpenAI GPT-4o with a dedicated language-classifier agent running before each LLM call.",
  },
  {
    icon: MessageSquare,
    title: "Lead Qualification Workflows",
    description:
      "Classifies inbound leads from Meta Lead Ads by intent and routes through structured n8n qualification workflows. Intent classification separates inventory queries, scheduling requests, and escalation paths before the main agent responds.",
  },
  {
    icon: CheckCircle2,
    title: "Real-Time Inventory Queries",
    description:
      "Agent queries a MongoDB inventory collection using tool-use / function calling — the LLM generates the query, executes it, and returns a formatted vehicle card (image, price, specs, action buttons) via WhatsApp template messages.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking via Nylas",
    description:
      "Books test drives and appointments by calling the Nylas Calendar API sub-workflow. The agent extracts appointment time (ISO 8601), client name, email, and salesperson preference via $fromAI() and creates a calendar event with all participant metadata.",
  },
  {
    icon: Mic,
    title: "Voice Audio Greetings (ElevenLabs)",
    description:
      "On first contact, sends a personalized voice audio greeting in the customer's language using ElevenLabs eleven_multilingual_v2. Uses language-specific voice models and delivers via WhatsApp audio message. Audio session is stored in MongoDB chat memory.",
  },
  {
    icon: Users,
    title: "Persistent Session Memory",
    description:
      "Each conversation is stored in MongoDB (dbSophia / chatMemory collection), keyed by WhatsApp ID. The agent retrieves the last 10 messages as context on every turn — maintaining continuity across disconnected sessions.",
  },
]

const additionalAutomations = [
  {
    icon: FileText,
    title: "Financial Document AI",
    badge: "Google Cloud",
    description:
      "Implemented Google Cloud Document AI processors to automate data extraction from automotive funding forms (credit applications, lease agreements). Replaced manual data entry with structured field extraction, reducing errors by 90%.",
  },
  {
    icon: RefreshCw,
    title: "Pricing Audit Agents",
    badge: "Internal Tool",
    description:
      "Agents that compare manual internal pricing records against live dealership website data on a scheduled basis. Detects discrepancies and alerts management of inconsistencies automatically — no manual audit required.",
  },
  {
    icon: Megaphone,
    title: "Meta Ad Catalog Automation",
    badge: "Marketing",
    description:
      "Automated dynamic retargeting campaign catalog generation via CSV manipulation and Meta Ads API. Inventory changes automatically propagate to active ad campaigns without manual intervention.",
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
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge className="text-xs">Featured Project</Badge>
            <Badge variant="outline" className="text-xs text-green-700 border-green-200 bg-green-50">
              Production · Active
            </Badge>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Sophia — Autonomous Multilingual AI Sales Agent
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Sophia is a production AI conversational agent operating over WhatsApp Business
            to automate the automotive sales process from initial lead capture through
            appointment scheduling. She manages multilingual conversations, qualifies leads,
            queries live inventory, and books appointments — without human intervention for
            routine interactions.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
            The system ingests inbound leads from Meta Lead Ads via webhook, routes them
            through n8n orchestration workflows, and uses a LangChain agent with three
            registered tools: <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">get-ucd-inventory</code> (MongoDB query), <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">send-stock-card</code> (WhatsApp template dispatch), and <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">book-an-appointment</code> (Nylas Calendar API). Audio messages are transcribed by OpenAI Whisper before being processed.
          </p>

          {/* Live demo CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild size="sm">
              <a
                href="https://wa.me/12495000404?text=test"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-3.5" />
                Try Sophia on WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Live agent — tap the button and send a message to interact with Sophia directly.
            </p>
          </div>
        </div>

        {/* Outcome metrics */}
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
            label="n8n workflow canvas — Sophia main orchestration workflow"
            description="Insert a perspective screenshot of the Sophia on WhatsApp_v11 n8n workflow showing nodes: WhatsApp Trigger → Route Types → Language Detector → Sophia AI agent → sub-workflow calls."
            aspectRatio="video"
          />
          <ImagePlaceholder
            label="WhatsApp conversation screenshot — Sophia in action"
            description="Insert a screenshot of a live Sophia conversation: lead arrives, inventory query, vehicle card template, appointment booking confirmation."
            aspectRatio="video"
          />
        </div>

        {/* Tech stack */}
        <Card className="gap-4">
          <CardHeader className="pb-0">
            <CardTitle className="text-base">Full Technology Stack</CardTitle>
            <CardDescription>Every service integrated in the Sophia system</CardDescription>
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

        {/* Additional automations */}
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">
            Additional Automation Systems
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Beyond Sophia, a suite of supporting automation systems was built across
            the same dealership operation — each solving a distinct operational problem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {additionalAutomations.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="gap-4">
                  <CardHeader className="pb-0">
                    <div className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground mt-0.5">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <CardTitle className="text-sm">{item.title}</CardTitle>
                        <Badge variant="outline" className="text-[10px] mt-1">{item.badge}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <Separator />

        {/* NewKeys.Link predecessor */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">Predecessor System</Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            NewKeys.Link — Node.js Lead Processing Engine
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-5">
            Before migrating to n8n, the lead processing pipeline was built entirely in
            Node.js — custom webhook controllers for Meta Lead Ads, real-time SMS validation
            via Twilio, modular route/service architecture, and asynchronous event processing.
            This system was the technical foundation that later evolved into the Sophia AI
            ecosystem. It proved the architecture patterns that n8n now orchestrates at scale.
          </p>
          <ImagePlaceholder
            label="NewKeys.Link Node.js backend — terminal log screenshot"
            description="Insert the Node.js backend terminal screenshot showing real-time lead processing logs: webhook reception, WhatsApp template dispatch, and async event handlers."
            aspectRatio="video"
            className="max-w-2xl"
          />
        </div>
      </div>

      {/* Future Demos */}
      <div className="mt-16 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center">
        <Badge variant="outline" className="mb-3 text-xs">Coming Soon</Badge>
        <h3 className="text-lg font-semibold text-foreground">
          Interactive Demos
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Future versions of this portfolio will embed interactive demos directly in
          the browser. For now, Sophia is accessible live via WhatsApp.
        </p>
        <div className="mt-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, Bot, GitBranch, Layers, Link2, Settings2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImagePlaceholder } from "@/components/image-placeholder"

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Design and deploy autonomous AI agents capable of multi-step reasoning, decision-making, and goal-directed task execution in production environments.",
  },
  {
    icon: GitBranch,
    title: "Automation Architecture",
    description:
      "Architect end-to-end automation systems using n8n, Node.js microservices, and cloud-native services to replace manual workflows with reliable pipelines.",
  },
  {
    icon: Layers,
    title: "LLM Orchestration",
    description:
      "Orchestrate large language models with structured prompting, tool use, retrieval-augmented generation, and multi-agent coordination patterns.",
  },
  {
    icon: Link2,
    title: "API Integrations",
    description:
      "Integrate enterprise and third-party APIs — CRMs, messaging platforms, scheduling systems, and data sources — into cohesive automation pipelines.",
  },
  {
    icon: Settings2,
    title: "Workflow Automation",
    description:
      "Transform complex, multi-step business processes into automated, auditable workflows with built-in error handling and observability.",
  },
  {
    icon: Zap,
    title: "Systems Integration",
    description:
      "Bridge disparate systems and data sources through event-driven architectures, webhooks, and real-time synchronization pipelines.",
  },
]

const techStack = [
  {
    category: "AI & LLM",
    tools: ["OpenAI GPT-4", "LLM Orchestration", "Function Calling", "JSON Mode", "RAG Pipelines"],
  },
  {
    category: "Automation",
    tools: ["n8n", "Webhook Pipelines", "Event-Driven Architecture", "Cron Scheduling"],
  },
  {
    category: "Runtime & APIs",
    tools: ["Node.js", "TypeScript", "REST APIs", "WebSockets"],
  },
  {
    category: "Messaging & Leads",
    tools: ["WhatsApp Business Cloud API", "Meta Lead Ads", "Webhook Ingestion"],
  },
  {
    category: "Frontend",
    tools: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Data & Storage",
    tools: ["Google Sheets API", "PostgreSQL", "Structured Logging"],
  },
]

const metrics = [
  { value: "25+", label: "Years Engineering" },
  { value: "3", label: "Languages Supported" },
  { value: "24/7", label: "Autonomous Operation" },
  { value: "6+", label: "Enterprise APIs Integrated" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-background border-b border-border">
        <div className="mx-auto max-w-6xl w-full px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="text-xs font-medium">
                  Open to new opportunities
                </Badge>
                <Badge variant="outline" className="text-xs font-medium text-blue-600 border-blue-200 bg-blue-50">
                  Mississauga, Ontario
                </Badge>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                  Fabio Gomez<br />
                  <span className="text-blue-600">Velasquez</span>
                </h1>
                <p className="mt-3 text-xl font-semibold text-muted-foreground">
                  AI Agent Developer &amp; Automation Architect
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-blue-200 pl-4 italic">
                Building production AI agents and automation systems that transform
                complex workflows into measurable business outcomes.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                With over 25 years of engineering experience spanning telecommunications
                infrastructure and enterprise systems integration, I focus on designing AI
                agents, automation workflows, and LLM orchestration pipelines. My work
                integrates APIs, automation platforms, and enterprise systems to deliver
                tangible operational ROI.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/architecture">View Architecture</Link>
                </Button>
              </div>
            </div>

            {/* Portrait placeholder */}
            <div className="flex justify-center lg:justify-end">
              <ImagePlaceholder
                label="Portrait photo placeholder"
                description="Upload a professional headshot — ideally a high-contrast photo on a neutral background."
                aspectRatio="portrait"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl w-full px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl font-bold text-foreground tracking-tight">{m.value}</p>
                <p className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mx-auto max-w-6xl w-full px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Core Capabilities</h2>
          <p className="mt-2 text-muted-foreground">
            Specialized in building AI-powered systems at the intersection of engineering and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <Card key={cap.title} className="gap-4">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base">{cap.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {cap.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl w-full px-6 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Technology Stack</h2>
            <p className="mt-2 text-muted-foreground">
              Tools and platforms used to build production AI agent and automation systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs font-mono">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Demos Teaser */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl w-full px-6 py-16">
          <div className="rounded-xl border border-border bg-background p-8 text-center">
            <Badge variant="outline" className="mb-4 text-xs">Coming Soon</Badge>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Live AI Agent Demonstrations
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Future versions of this portfolio will allow visitors to interact directly
              with AI agents and automation workflows — demonstrating real-time lead
              qualification, multilingual conversation, and workflow orchestration without
              leaving this page.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Button asChild variant="outline">
                <Link href="/projects">Explore Current Projects</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

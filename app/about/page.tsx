import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ImagePlaceholder } from "@/components/image-placeholder"

export const metadata: Metadata = {
  title: "About",
  description:
    "The professional story of Fabio Gomez Velasquez — from telecommunications infrastructure to AI agent development.",
}

const values = [
  {
    title: "Engineering Rigor",
    body: "Every system should be buildable, testable, and understandable by another engineer. No black boxes. No magic. Just well-designed components with clear responsibilities.",
  },
  {
    title: "Practical AI",
    body: "AI is valuable when it reliably solves real problems in production — not when it demonstrates impressive demos. The measure is operational impact, not technical novelty.",
  },
  {
    title: "Measurable ROI",
    body: "Automation investments should produce quantifiable outcomes: hours saved, leads processed faster, conversion rates improved, costs reduced. If it cannot be measured, it cannot be managed.",
  },
  {
    title: "Operational Continuity",
    body: "Systems must keep working. Resilience, graceful degradation, and observability are not optional. The best automation is the kind that runs quietly in the background without requiring constant maintenance.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl w-full px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Background &amp; Philosophy</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">About</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          The professional story behind the work — from telecommunications infrastructure
          to modern AI agent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Career narrative */}
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              The Engineering Career
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My engineering career began in telecommunications infrastructure — an
                industry that demands precision, systems thinking, and the ability to
                manage complex multi-vendor integrations under real operational pressure.
                Working with Siemens and Nokia Siemens Networks, I developed hands-on
                expertise in how large-scale technical systems are designed, deployed,
                and kept running.
              </p>

              <p>
                That foundation led me to found Telsco SAS, a consultancy that delivered
                telecommunications infrastructure projects across Colombia for major
                carriers including Telefónica, and equipment vendors including Nokia,
                Siemens, and Alcatel. Over seventeen years, I managed the full project
                lifecycle — from technical design and procurement through deployment,
                systems integration, and acceptance. This built deep fluency in what
                it takes to ship complex technical work reliably, on time, across
                multiple stakeholders.
              </p>

              <p>
                The transition toward AI and automation was a natural evolution of that
                same engineering instinct: find the workflow, understand the constraints,
                and build a system that does the work better than the manual process.
                What changed was the tooling — large language models, visual workflow
                orchestration platforms, and real-time messaging APIs opened up entirely
                new categories of automation that were previously impractical or
                cost-prohibitive.
              </p>
            </div>
          </section>

          <Separator />

          {/* AI & Automation focus */}
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
              The Shift to AI &amp; Automation
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Sophia project at Mississauga Hyundai was the proving ground for
                applying this approach in a completely different domain. With no
                dedicated engineering team and no existing automation infrastructure,
                I designed and deployed a production AI agent system that handles
                multilingual lead qualification and appointment scheduling over
                WhatsApp Business — operating continuously without human intervention
                for routine interactions.
              </p>

              <p>
                What that project demonstrated is that the same engineering principles
                that govern large telecommunications deployments — modularity, clear
                interfaces, error handling, observability, graceful degradation — apply
                directly to AI agent architecture. An LLM orchestration pipeline is not
                fundamentally different from a multi-vendor network integration: both
                require clear contracts between components, defined failure modes, and
                a system design that does not break silently.
              </p>

              <p>
                This is the lens I bring to every AI and automation engagement: not
                &ldquo;what does this technology make possible?&rdquo; but &ldquo;what
                operational problem needs to be solved, what measurable outcome defines
                success, and how do we build something that will keep working reliably
                after the initial deployment?&rdquo;
              </p>
            </div>
          </section>

          <Separator />

          {/* Core philosophy */}
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-6">
              Core Philosophy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <Card key={v.title} className="gap-3">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-sm">{v.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="pt-2 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">
                See the Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <ImagePlaceholder
            label="Professional engineering or workspace photo placeholder"
            description="Upload a photo of your workspace, engineering environment, or a candid professional shot."
            aspectRatio="portrait"
            className="w-full"
          />

          <Card className="gap-3">
            <CardHeader className="pb-0">
              <CardTitle className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                At a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <StatRow label="Experience" value="25+ years" />
              <StatRow label="Domain" value="AI Agents & Automation" />
              <StatRow label="Prior Field" value="Telecommunications" />
              <StatRow label="Location" value="Mississauga, ON" />
              <StatRow label="Languages" value="English, Spanish, French" />
            </CardContent>
          </Card>

          <Card className="gap-3">
            <CardHeader className="pb-0">
              <CardTitle className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "AI agent design and deployment",
                  "LLM orchestration patterns",
                  "Automation system architecture",
                  "Enterprise API integration",
                  "Workflow automation engineering",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground text-right">{value}</span>
    </div>
  )
}

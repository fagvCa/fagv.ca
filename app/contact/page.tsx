import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Globe, Github, Linkedin, Mail, MapPin, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fabio Gomez Velasquez — AI Agent Developer and Automation Architect.",
}

const contactDetails = [
  {
    icon: User,
    label: "Name",
    value: "Fabio Gomez Velasquez",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mississauga, Ontario, Canada",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "fabio@fagv.ca",
    href: "mailto:fabio@fagv.ca",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "fagv.ca",
    href: "https://fagv.ca",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/fagvCa",
    href: "https://github.com/fagvCa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fabiogomez",
    href: "https://linkedin.com/in/fabiogomez",
  },
]

const interests = [
  "AI agent development and LLM orchestration",
  "Automation architecture and workflow engineering",
  "Enterprise API integration projects",
  "Systems integration consulting",
  "Technical collaboration on automation challenges",
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl w-full px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-3 text-xs">Get in Touch</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Available for engineering roles, consulting engagements, and technical
          discussions around AI agents, automation systems, and enterprise integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact info */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted mt-0.5">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Open to Discussing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interests.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Message area */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">Send a Message</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The best way to reach me is by email at{" "}
              <a
                href="mailto:fabio@fagv.ca"
                className="font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                fabio@fagv.ca
              </a>
              . I respond to all relevant enquiries — typically within one business day.
            </p>
          </div>

          {/* Contact form placeholder */}
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-3 text-xs">Coming Soon</Badge>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Contact Form
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
                A built-in contact form with direct inbox delivery will be available in a
                future update. For now, please use email or LinkedIn to get in touch.
              </p>
            </div>
          </div>

          <Separator />

          {/* Direct links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect Directly</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:fabio@fagv.ca"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <Mail className="size-4 text-muted-foreground" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/fabiogomez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <Linkedin className="size-4 text-muted-foreground" />
                LinkedIn
              </a>
              <a
                href="https://github.com/fagvCa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <Github className="size-4 text-muted-foreground" />
                GitHub
              </a>
            </div>
          </div>

          {/* Future demos note */}
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-5">
            <Badge variant="outline" className="mb-2 text-xs">Future Feature</Badge>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Upcoming versions of this portfolio will include live AI agent demonstrations
              accessible directly from this page — allowing you to interact with automation
              workflows and see the systems in action before reaching out.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

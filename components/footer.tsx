import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-semibold text-sm text-foreground">
              Fabio Gomez Velasquez
            </span>
            <span className="text-xs text-muted-foreground">
              AI Agent Developer &amp; Automation Architect
            </span>
          </div>

          <nav className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="/architecture" className="hover:text-foreground transition-colors">Architecture</Link>
            <Link href="/experience" className="hover:text-foreground transition-colors">Experience</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/fagvCa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/fabiogomez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="mailto:fabio@fagv.ca"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Fabio Gomez Velasquez &mdash; fagv.ca
        </div>
      </div>
    </footer>
  )
}

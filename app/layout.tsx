import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fabio Gomez Velasquez — AI Agent Developer & Automation Architect",
    template: "%s | Fabio Gomez Velasquez",
  },
  description:
    "Senior AI Agent Developer and Automation Architect with 25+ years of engineering experience. Building production AI agents, automation systems, and LLM orchestration pipelines.",
  openGraph: {
    type: "website",
    url: "https://fagv.ca",
    siteName: "Fabio Gomez Velasquez",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TooltipProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}

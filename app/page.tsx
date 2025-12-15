"use client"

import { useEffect, useRef } from "react"
import { Roboto_Mono } from "next/font/google"
import { Github, Linkedin, Mail } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import WebDevProjects from "@/components/sections/web-dev-projects"
import Certifications from "@/components/sections/certifications"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import BlobCursor from "@/components/effects/blob-cursor"
import Grain from "@/components/effects/grain"
import useSectionReveal from "@/components/hooks/use-section-reveal"

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
})

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  useSectionReveal(containerRef)

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <main
      ref={containerRef}
      className={`${mono.variable} bg-[#0b0e11] text-zinc-200 min-h-screen relative scroll-smooth`}
    >
      <BlobCursor />
      <Grain />

      <section id="hero" className="relative">
        <Hero />
      </section>

      <section id="about" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="About Me" />
          <About />
        </div>
      </section>

      <section id="skills" className="relative py-20 md:py-28 bg-gradient-to-b from-transparent to-white/0 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Skills" />
          <Skills />
        </div>
      </section>

      <section id="certifications" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Certifications" />
          <Certifications />
        </div>
      </section>

      <section id="projects" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Projects" />
          <Projects />
          <div className="mt-8 flex justify-center">
            <a
              href="https://bit.ly/projects-on-notion"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-cyan-300 transition"
            >
              <span>{"View all projects on Notion"}</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="web-dev" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Web Development" />
          <WebDevProjects />
        </div>
      </section>

      <section id="experience" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Experience" />
          <Experience />
        </div>
      </section>

      <section id="education" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Education" />
          <Education />
        </div>
      </section>

      <section id="contact" className="relative py-20 md:py-28 reveal">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading title="Contact" />
          <Contact />
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" Chinazor Francis — crowsstack.one"}
          </p>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@crowsstack.one" className="hover:text-cyan-300 transition" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/chinazor-nwode-2ab84a379"   className="hover:text-cyan-300 transition" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/chinazornwode"
             className="hover:text-cyan-300 transition" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function SectionHeading({ title = "Section" }: { title?: string }) {
  return (
    <div className="mb-10 md:mb-14 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">{title}</span>
      </h2>
      <div className="mx-auto md:mx-0 mt-3 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-purple-400/60 rounded-full" />
    </div>
  )
}

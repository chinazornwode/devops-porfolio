"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

type WebDevProject = {
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  features: string[]
}

const webDevProjects: WebDevProject[] = [
  {
    title: "PawPals - Premium Dog Shop",
    description:
      "A modern e-commerce platform for premium dog adoption with real-time sorting, theme switching, and responsive design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://petshop-eta-three.vercel.app/",
    features: [
      "Real-time client-side sorting and filtering",
      "Dark/Light theme switcher",
      "Responsive design for all devices",
      "Modern UI with smooth animations",
      "Shopping cart functionality",
      "Made by crowsstack branding",
    ],
  },
]

export default function WebDevProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const project = webDevProjects[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + webDevProjects.length) % webDevProjects.length)
    setIframeLoaded(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % webDevProjects.length)
    setIframeLoaded(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIframeLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left side - Project details */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">{project.title}</h3>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-cyan-300 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-xs text-cyan-200 hover:bg-white/10 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_6px_rgba(0,255,255,0.6)] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/50 hover:border-cyan-300 px-6 py-3 text-cyan-300 transition font-medium w-fit"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Right side - Live preview carousel */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            {/* Desktop preview container */}
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-4 rounded-2xl">
              {/* Browser chrome */}
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                {/* Browser header */}
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-zinc-700 rounded px-3 py-1.5 text-xs text-zinc-300 truncate">
                      {project.liveUrl}
                    </div>
                  </div>
                </div>

                {/* Iframe container with fixed aspect ratio */}
                <div className="relative w-full bg-white" style={{ aspectRatio: "16 / 10" }}>
                  {/* Loading state */}
                  {!iframeLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="inline-block">
                          <div className="h-8 w-8 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
                        </div>
                        <p className="mt-3 text-sm text-zinc-600">Loading preview...</p>
                      </div>
                    </div>
                  )}

                  {/* Iframe */}
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                    onLoad={() => setIframeLoaded(true)}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition text-zinc-300 hover:text-cyan-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 text-center">
              <p className="text-sm text-zinc-400">
                Project <span className="text-cyan-300 font-semibold">{currentIndex + 1}</span> of{" "}
                <span className="text-cyan-300 font-semibold">{webDevProjects.length}</span>
              </p>
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition text-zinc-300 hover:text-cyan-300"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2">
            {webDevProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIframeLoaded(false)
                }}
                className={`h-2 rounded-full transition ${
                  idx === currentIndex ? "bg-cyan-400 w-6" : "bg-white/20 w-2 hover:bg-white/30"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

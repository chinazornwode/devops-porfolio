"use client"

import type React from "react"

import { useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import LightRays from "@/components/light-rays"
import SplitTagline from "@/components/typography/split-tagline"
import TypewriterText from "@/components/typography/typewriter-text"
import { Download } from "lucide-react" // Import the Download icon

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      if (!heroRef.current) return
      const tl = gsap.timeline()
      tl.fromTo(
        heroRef.current.querySelectorAll(".hero-fade"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      )
    }
    animate()
  }, [])

  const handleScrollProjects = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-[90vh] md:min-h-screen overflow-hidden flex items-center">
      <BackgroundDecor />

      <div className="absolute inset-0">
        <LightRays
          className="absolute inset-0"
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.8}
          pulsating
          fadeDistance={0.9}
          saturation={1}
          followMouse
          mouseInfluence={0.25}
          noiseAmount={0.05}
          distortion={0.1}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Mobile-first center; split layout on md+ */}
        <div className="grid md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left">
            <div className="hero-fade inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs md:text-sm text-zinc-300/80 backdrop-blur">
              {"DevOps | Cloud | Security"}
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-zinc-100">
              <TypewriterText text="Chinazor Nwode" speed={55} cursorColor="#00ffff" />
            </h1>

            <div className="mt-4 md:mt-6">
              <SplitTagline text="DevOps Engineer | Cloud | Security" />
            </div>

            <p className="hero-fade mx-auto md:mx-0 mt-6 max-w-2xl text-zinc-400">
              {
                "Building resilient cloud infrastructure, automating deployments, and driving secure-by-default practices."
              }
            </p>

            <div className="hero-fade mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#projects"
                onClick={handleScrollProjects}
                className="rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/30 px-5 py-3 transition"
              >
                {"View Projects"}
              </a>

              {/* Direct download only with icon */}
              <a
                href="/pdf/resume.resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-zinc-200 transition"
              >
                <Download className="h-5 w-5" />
                {"Download Resume"}
              </a>

              <a
                href="#contact"
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-zinc-200 transition"
              >
                {"Contact"}
              </a>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[24px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,255,255,0.35),rgba(160,32,240,0.35),transparent_70%)] blur-xl" />
              <Image
                src="/images/chinazor.png"
                alt="Portrait of Chinazor Nwode"
                width={360}
                height={360}
                className="relative z-10 h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-2xl object-cover border border-white/15 shadow-[0_0_40px_rgba(0,255,255,0.15),0_0_40px_rgba(160,32,240,0.15)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-[-6rem] right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(160,32,240,0.06),_rgba(0,0,0,0)_60%),radial-gradient(ellipse_at_bottom,_rgba(0,255,255,0.06),_rgba(0,0,0,0)_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:48px_48px]" />
    </div>
  )
}

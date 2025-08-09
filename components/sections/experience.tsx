"use client"

import { useEffect, useRef } from "react"

type Item = {
  role: string
  org: string
  when: string
}

const items: Item[] = [
  { role: "Technical Support Specialist (Contract)", org: "Finnew Fintech", when: "February 2024 – Present" },
  {
    role: "Technical Support Specialist (Freelance)",
    org: "Stansat Electronics and Furniture – Awka",
    when: "November 2023 – February 2024",
  },
  {
    role: "IT and Security System Technician (Freelance)",
    org: "NDY Commulti-Resource Limited – Awka, Anambra",
    when: "April 2023 – August 2024",
  },
]

export default function Experience({ data = items }: { data?: Item[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)
      if (!ref.current) return
      const rows = ref.current.querySelectorAll(".xp")
      rows.forEach((el) => {
        gsap.fromTo(
          el,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        )
      })
    }
    run()
  }, [])

  return (
    <div className="relative" ref={ref}>
      <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-purple-400/50" />
      <div className="space-y-8">
        {data.map((it, i) => (
          <div key={i} className="xp relative pl-12 md:pl-0">
            <div className="md:grid md:grid-cols-12 md:gap-6 items-start">
              <div className="md:col-span-5 md:text-right">
                <div className="text-sm text-cyan-300/90">{it.when}</div>
              </div>
              <div className="md:col-span-2 relative my-4 md:my-0">
                <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.7)]" />
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
                  <div className="font-semibold text-zinc-100">{it.role}</div>
                  <div className="text-sm text-zinc-400">{it.org}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

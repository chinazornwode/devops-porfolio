"use client"

import { useEffect, useRef } from "react"

const skillsDefault = [
  "Amazon Web Services (AWS)",
  "Cloud Computing",
  "Linux",
  "Network Administration",
  "SMTP Server Configuration",
  "IT Operations",
  "Google Cloud Platform (GCP)",
  "System Administration",
]

export default function Skills({ skills = skillsDefault }: { skills?: string[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default
      if (!ref.current) return
      const items = Array.from(ref.current.querySelectorAll(".skill"))
      gsap.fromTo(items, { y: 10, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out" })
    }
    run()
  }, [])

  return (
    <div ref={ref} className="flex flex-wrap gap-3">
      {skills.map((s, i) => (
        <span
          key={i}
          className="skill rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200/90 shadow-[0_0_0_1px_rgba(0,255,255,0.08)_inset] hover:border-cyan-400/30 hover:bg-cyan-400/10 transition"
        >
          {s}
        </span>
      ))}
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"

export default function SplitTagline({ text = "Split Tagline" }: { text?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default
      if (!ref.current) return
      const words = Array.from(ref.current.querySelectorAll("span.split-word"))
      gsap.fromTo(
        words,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.04, delay: 0.15 },
      )
    }
    run()
  }, [text])

  const parts = text.split(" ")
  return (
    <div ref={ref} className="text-lg md:text-2xl text-zinc-300/90 tracking-tight">
      {parts.map((p, i) => (
        <span key={i} className="split-word inline-block mr-2">
          {p}
        </span>
      ))}
    </div>
  )
}

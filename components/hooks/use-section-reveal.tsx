"use client"

import type React from "react"

import { useEffect } from "react"

export default function useSectionReveal(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const run = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      if (!containerRef.current) return
      const sections = containerRef.current.querySelectorAll<HTMLElement>(".reveal")

      sections.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          },
        )
      })
    }
    run()
  }, [containerRef])
}

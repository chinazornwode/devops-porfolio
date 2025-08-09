"use client"

import { useEffect, useRef } from "react"

export default function BlobCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isDown = false
    const init = async () => {
      const gsap = (await import("gsap")).default
      const quickX = gsap.quickTo(ref.current!, "x", { duration: 0.18, ease: "power3.out" })
      const quickY = gsap.quickTo(ref.current!, "y", { duration: 0.18, ease: "power3.out" })

      const move = (e: MouseEvent) => {
        quickX(e.clientX - 16)
        quickY(e.clientY - 16)
      }
      const down = () => {
        isDown = true
        gsap.to(ref.current, { scale: 1.5, duration: 0.15 })
      }
      const up = () => {
        isDown = false
        gsap.to(ref.current, { scale: 1, duration: 0.2 })
      }
      const overInteractive = (e: Event) => {
        const t = e.target as HTMLElement
        if (!t) return
        const tag = t.tagName.toLowerCase()
        if (["a", "button", "input", "textarea", "select"].includes(tag) || t.closest("a,button")) {
          gsap.to(ref.current, { scale: 1.8, duration: 0.15 })
        } else if (!isDown) {
          gsap.to(ref.current, { scale: 1, duration: 0.15 })
        }
      }
      window.addEventListener("mousemove", move)
      window.addEventListener("mousedown", down)
      window.addEventListener("mouseup", up)
      document.addEventListener("mouseover", overInteractive)
      return () => {
        window.removeEventListener("mousemove", move)
        window.removeEventListener("mousedown", down)
        window.removeEventListener("mouseup", up)
        document.removeEventListener("mouseover", overInteractive)
      }
    }
    init()
  }, [])

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[60] h-8 w-8 pointer-events-none mix-blend-screen"
      style={{
        borderRadius: "9999px",
        background:
          "radial-gradient(circle at 30% 30%, rgba(0,255,255,0.6), rgba(160,32,240,0.45) 60%, rgba(10,10,10,0.0) 70%)",
        boxShadow: "0 0 32px rgba(0,255,255,0.35), 0 0 48px rgba(160,32,240,0.25)",
      }}
      aria-hidden="true"
    />
  )
}

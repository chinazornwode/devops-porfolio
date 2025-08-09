"use client"

import { useEffect, useRef, useState } from "react"

export default function TypewriterText({
  text = "Typewriter",
  speed = 60,
  cursorColor = "#a020f0",
}: {
  text?: string
  speed?: number
  cursorColor?: string
}) {
  const [display, setDisplay] = useState("")
  const indexRef = useRef(0)

  useEffect(() => {
    setDisplay("")
    indexRef.current = 0
    const id = setInterval(
      () => {
        const i = indexRef.current + 1
        indexRef.current = i
        setDisplay(text.slice(0, i))
        if (i >= text.length) clearInterval(id)
      },
      Math.max(15, speed),
    )
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span className="inline-flex items-center gap-2">
      <span className="tabular-nums">{display}</span>
      <span
        aria-hidden="true"
        className="inline-block h-[1.2em] w-[2px] animate-pulse"
        style={{ backgroundColor: cursorColor }}
      />
    </span>
  )
}

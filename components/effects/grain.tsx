"use client"

export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
      style={{
        backgroundImage: 'url("/placeholder.svg?height=300&width=300")',
        backgroundSize: "300px",
        mixBlendMode: "overlay",
      }}
    />
  )
}

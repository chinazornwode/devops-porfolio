"use client"

import styles from "./cert-marquee.module.css"

type Cert = {
  title: string
  when: string
  description: string
}

const baseCerts: Cert[] = [
  {
    title: "AWS Educate – Networking",
    when: "July 2025 – Present",
    description: "Networking training with assessment. VPC design and network management methods demonstrated.",
  },
  {
    title: "AWS Educate – Web Builder",
    when: "June 2025 – Present",
    description: "Builder Labs training. App optimization, security, DB integration, and reporting skills.",
  },
  {
    title: "Architecting Solutions on AWS",
    when: "January 2024 – Present",
    description: "AWS architecture, cloud building, infrastructure, and web apps with security concepts.",
  },
  {
    title: "Cyber Security and Infosec",
    when: "January 2024 – Present",
    description: "Intro to cyber security, ethical hacking fundamentals, and information security management.",
  },
]

export default function Certifications({ items = baseCerts }: { items?: Cert[] }) {
  const originalLen = items.length
  const loopItems = [...items, ...items] // duplicate for seamless scroll

  return (
    <div className={`relative ${styles.container}`}>
      <div className={styles.track} style={{ ["--speed" as any]: "28s" }}>
        {loopItems.map((c, i) => (
          <div
            key={`${c.title}-${i}`}
            aria-hidden={i >= originalLen ? true : undefined}
            className="min-w-[300px] max-w-[300px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
          >
            <div className="h-24 w-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.18),rgba(160,32,240,0.18)_45%,rgba(255,255,255,0.04)_65%)] border border-white/10" />
            <div className="mt-3">
              <div className="text-zinc-100 font-semibold">{c.title}</div>
              <div className="text-[11px] text-cyan-300/90 mt-1">{c.when}</div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

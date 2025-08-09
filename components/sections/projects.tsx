"use client"

type Project = {
  title: string
  description: string
  achievements: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "AWS IAM & Organization",
    description:
      "Multi-account setup with Identity Center and org structure for dev/test/prod. MFA and least-privilege enforced.",
    achievements: [
      "Centralized identity with scoped access",
      "MFA enforced across accounts",
      "Guardrails for Dev/Test/Prod OUs",
    ],
    link: "https://bit.ly/projects-on-notion",
  },
  {
    title: "HA Hosting with AWS",
    description: "Multi-AZ highly-available web hosting with automated health checks and failover to maintain uptime.",
    achievements: [
      "Active health-checked failover",
      "Traffic shifting during incidents",
      "Horizontally scalable architecture",
    ],
    link: "https://bit.ly/projects-on-notion",
  },
  {
    title: "Cloud Security Fix",
    description:
      "Security gap analysis and remediation across IAM and storage, deploying multi-layer defense-in-depth.",
    achievements: ["Least-privilege access model", "Storage policy hardening", "Automated checks with AWS tools"],
    link: "https://bit.ly/projects-on-notion",
  },
  {
    title: "AWS Config Compliance Enforcement",
    description: "Continuous compliance using AWS Config and Lambda for custom checks. Encryption-at-rest verified.",
    achievements: ["Automated compliance rules", "Lambda remediation hooks", "Audit-ready config history and trails"],
    link: "https://bit.ly/projects-on-notion",
  },
]

export default function Projects({ items = projects }: { items?: Project[] }) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((p, idx) => (
        <a
          key={idx}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/8 hover:border-cyan-400/30 transition p-5 flex flex-col"
        >
          {/* Visual preview */}
          <div className="relative h-36 rounded-xl mb-4 overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.18),rgba(160,32,240,0.18)_35%,rgba(255,255,255,0.04)_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0b0e11]/70 to-transparent p-3">
              <div className="text-xs text-cyan-200/90">{"Preview"}</div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-zinc-100">{p.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{p.description}</p>

          {/* Achievements */}
          <ul className="mt-3 space-y-1.5 text-xs text-zinc-300/90">
            {p.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-cyan-400/70 shadow-[0_0_6px_rgba(0,255,255,0.6)]" />
                <span>{a}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-cyan-300 text-sm inline-flex items-center gap-2">
            <span>{"View more on Notion"}</span>
            <svg
              className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}

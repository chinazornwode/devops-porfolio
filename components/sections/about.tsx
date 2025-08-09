"use client"

export default function About() {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-start text-center md:text-left">
      <div className="md:col-span-8">
        <p className="text-zinc-300 leading-relaxed">
          {
            "I am a DevOps Engineer focused on building secure, reliable, and automated cloud infrastructure. I design resilient architectures, automate CI/CD pipelines, and embed security best practices across the stack. My tooling spans AWS and GCP with a strong foundation in Linux, networking, and security hardening."
          }
        </p>
      </div>
      <div className="md:col-span-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <ul className="text-sm text-zinc-400 space-y-2">
            <li>
              <span className="text-zinc-300">{"Location:"}</span> {"Ikeja 100005 (Open to relocate)"}
            </li>
            <li>
              <span className="text-zinc-300">{"Email:"}</span> {"hello@crowsstack.one"}
            </li>
            <li>
              <span className="text-zinc-300">{"Phone:"}</span> {"+234 907 391 2486"}
            </li>
            <li>
              <span className="text-zinc-300">{"Domain:"}</span> {"crowsstack.one"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      <a
        href="mailto:hello@crowsstack.one"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-zinc-100 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition backdrop-blur"
      >
        <Mail className="h-5 w-5 text-cyan-300" />
        <span>{"Email"}</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-zinc-100 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition backdrop-blur"
      >
        <Linkedin className="h-5 w-5 text-cyan-300" />
        <span>{"LinkedIn"}</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-zinc-100 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition backdrop-blur"
      >
        <Github className="h-5 w-5 text-cyan-300" />
        <span>{"GitHub"}</span>
      </a>
    </div>
  )
}

"use client"

import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="bg-[#0b0e11] text-zinc-200 min-h-screen">
      <div className="container mx-auto max-w-5xl px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Resume — Chinazor Francis
            </span>
          </h1>
          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            {"← Back"}
          </Link>
        </header>

        <p className="mt-3 text-sm text-zinc-400">
          {
            "This page lets you view the resume online without downloading. For a copy, use the Download button on the home page."
          }
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="aspect-[16/20] w-full overflow-hidden rounded-lg border border-white/10">
            <iframe src="/resume/chinazor-nwode-resume.pdf#view=FitH" title="Resume PDF" className="h-[80vh] w-full" />
          </div>
          <div className="mt-3 text-xs text-zinc-400">
            {"If the PDF doesn't load, "}
            <a
              href="/resume/chinazor-nwode-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline"
            >
              {"open it in a new tab"}
            </a>
            {"."}
          </div>
        </div>
      </div>
    </main>
  )
}

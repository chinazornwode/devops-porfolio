"use client"

const schools = [
  { title: "3MTT Fellowship (NITDA)", detail: "Vocational in Cyber Security — Aug 2024 – Nov 2024" },
  { title: "SID Code Anambra Bootcamp", detail: "Vocational in Cyber Security — Nov 2023 – Mar 2024" },
  {
    title: "1 Youth 2 Skill Programme",
    detail: "Vocational in CCTV, Solar & Inverter Installation — Oct 2023 – Mar 2024",
  },
]

export default function Education({ items = schools }: { items?: { title: string; detail: string }[] }) {
  return (
    <ul className="grid md:grid-cols-2 gap-4">
      {items.map((s, i) => (
        <li
          key={i}
          className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:border-purple-400/40 hover:bg-purple-400/10 transition"
        >
          <div className="font-semibold text-zinc-100">{s.title}</div>
          <div className="text-sm text-zinc-400 mt-1">{s.detail}</div>
        </li>
      ))}
    </ul>
  )
}

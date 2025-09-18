"use client"
import Link from "next/link"
import { T } from "@/components/ui/T"

export default function DraConProgramPreviewComponent() {
  const highlights = [
    {
      time: "11 Ottobre – Ore 15:00",
      title: "Apertura ufficiale DraCon",
      desc: "Apertura dei giochi ed inizio delle attività nelle aree di gioco.",
    },
    {
      time: "11 Ottobre – Ore 17:00",
      title: "Inizio One Shot GDR",
      desc: "Sessioni di gioco di ruolo gratuite per tutti i livelli.",
    },
    {
      time: "12 Ottobre – Ore 21:30",
      title: "Torneo di Altered TCG",
      desc: "Sfida altri giocatori in questo emozionante gioco di carte.",
    },
  ]

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          <T idml="dracon.program.previewTitle" defaultText="Uno sguardo al programma" />
        </h2>
        <div className="space-y-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
            >
              <p className="text-green-600 font-semibold">{h.time}</p>
              <h3 className="text-xl font-bold">{h.title}</h3>
              <p className="text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/draconischia/agenda"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
          >
            <T idml="dracon.program.cta" defaultText="Vai al programma completo" />
          </Link>
        </div>
      </div>
    </section>
  )
}

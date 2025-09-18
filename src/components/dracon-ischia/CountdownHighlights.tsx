"use client"
import { useEffect, useState } from "react"
import { T } from "@/components/ui/T"
import Link from "next/link"

export default function DraconCountdownHighlightsComponent() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    const eventDate = new Date("2025-10-11T09:00:00") // 📅 data inizio DraCon
    const updateCountdown = () => {
      const now = new Date()
      const diff = eventDate.getTime() - now.getTime()
      setDaysLeft(Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0))
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60 * 60 * 1000) // aggiorna ogni ora
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-6 px-6 text-center">
      {/* Countdown */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
          <T idml="dracon.countdown.title" defaultText="Il conto alla rovescia è iniziato!" />
        </h2>
        {daysLeft !== null && (
          <p className="mt-3 text-xl md:text-2xl font-light">
            <T idml="dracon.countdown.days" defaultText="Mancano" />{" "}
            <span className="font-bold text-green-900">{daysLeft}</span>{" "}
            <T idml="dracon.countdown.toEvent" defaultText="giorni a DraCon Ischia!" />
          </p>
        )}
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-green-700/40 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform">
          <span className="text-5xl block mb-3">🎲</span>
          <h3 className="text-xl font-bold mb-2">
            <T idml="dracon.highlight.boardgames" defaultText="100+ Giochi da Tavolo" />
          </h3>
          <p className="text-sm text-white">
            <T idml="dracon.highlight.boardgamesDesc" defaultText="Dai grandi classici alle ultime novità, trova sempre un tavolo pronto ad accoglierti." />
          </p>
        </div>

        {/* Sessioni GDR Gratuite */}
        <div className="relative group">
        <Link href="/draconischia/gdr-sessions" className="absolute inset-0 z-10" />
        <div className="relative z-0 p-6 bg-green-700/40 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">🧙‍♂️</span>
            <h3 className="text-xl font-bold mb-2">
            <T idml="dracon.highlight.rpg" defaultText="Sessioni GDR Gratuite" />
            </h3>
            <p className="text-sm text-white">
            <T
                idml="dracon.highlight.rpgDesc"
                defaultText="Prenota la tua avventura ed entra nei panni del tuo eroe."
            />
            </p>
        </div>
        </div>

        {/* Main Events */}
        <div className="relative group">
        <Link href="/draconischia/main-events" className="absolute inset-0 z-10" />
        <div className="relative z-0 p-6 bg-green-700/40 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">🏆</span>
            <h3 className="text-xl font-bold mb-2">
            <T
                idml="dracon.highlight.mainEvents"
                defaultText="Main Events con premi epici"
            />
            </h3>
            <p className="text-sm text-white">
            <T
                idml="dracon.highlight.mainEventsDesc"
                defaultText="Sfida i migliori giocatori e dimostra il tuo valore."
            />
            </p>
        </div>
        </div>

      </div>
    </section>
  )
}

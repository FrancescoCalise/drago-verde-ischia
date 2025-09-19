"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { showError, showSuccess, showInfo } from "@/lib/toast"
import { MainEvent } from "@/interfaces/MainEvent"
import { getOnlyDate, getOnlyTime } from "@/lib/manageDataUtils"
import { httpFetch } from "@/services/http/httpFetch"

export default function MainEventPage() {
  const [events, setEvents] = useState<MainEvent[]>([])
  const { user } = useAuth()

  const fetchEvents = async () => {
    try {
      const res = await httpFetch("/api/draconischia/main-events", "GET", null, false)
      if(res.success && res.data){
        setEvents(res.data as MainEvent[])
      }
    } catch {
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleRegister = async (id: string) => {
    if (!user) {
      showInfo("Effettua il login per iscriverti")
      return
    }
    const res = await httpFetch(`/api/draconischia/main-events/${id}/register`, "POST", null, true)
    if (res.success) {
      showSuccess("✅ Iscrizione completata")
      fetchEvents()
    }
  }

  const handleUnregister = async (id: string) => {
    const res = await httpFetch(`/api/draconischia/main-events/${id}/register`, "DELETE", null, true)
    if (res.success) {
      showSuccess("✅ Iscrizione cancellata")
      fetchEvents()
    } else {
      showError("❌ Errore cancellazione")
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Main Event</h1>

      <div className="space-y-8">
        {events.length === 0 ? (
          <p className="text-gray-600 text-center">Nessun main event disponibile al momento.</p>
        ) : (
          events.map((e) => {

            const date = getOnlyDate(e.start as Date)
            const start = getOnlyTime(e.start as Date)
            const end = getOnlyTime(e.end as Date)

            const postiDisponibili = e.maxSeats - (e.mainEventRegistrations?.length ?? 0)
            const isRegistered = !!e.mainEventRegistrations?.find((r) => r.userId === user?.id)

            return (
              <div key={e.id} className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-2">{e.title}</h2>
                <p className="mb-4">{e.description}</p>
                <p className="text-sm">📅 {date}</p>
                <p className="text-sm">
                  ⏰ {start} - {end}
                </p>
                <p className="text-sm">📍 {e.location}</p>
                <p className="text-sm">
                  💰 {e.price > 0 ? `${e.price} €` : "Gratuito"}
                </p>
                <p className="text-sm font-semibold">
                  Posti disponibili: {postiDisponibili}
                </p>

                {isRegistered ? (
                  <button
                    onClick={() => e.id && handleUnregister(e.id)}
                    className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    ❌ Cancella Iscrizione
                  </button>
                ) : (
                  <button
                    onClick={() => e.id && handleRegister(e.id)}
                    disabled={postiDisponibili <= 0}
                    className={`mt-4 w-full px-4 py-2 rounded-lg ${
                      postiDisponibili <= 0
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {postiDisponibili <= 0 ? "Posti Esauriti" : "Iscriviti"}
                  </button>
                )}
              </div>
            )
          })
        )}
      </div>

    </main>
  )
}

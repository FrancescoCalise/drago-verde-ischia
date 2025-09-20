"use client"

import { useEffect, useState, useCallback } from "react"
import { useAuth } from "@/context/AuthContext"
import { showInfo } from "@/lib/toast"
import { getOnlyDate, getOnlyTime } from "@/lib/manageDataUtils"
import { httpFetch } from "@/services/http/httpFetch"
import { MainEventExtended } from "@/interfaces/MainEvent"
import { useApiHandler } from "@/app/hooks/useApiHandler"

export default function MainEventPage() {
  const [events, setEvents] = useState<MainEventExtended[]>([])
  const { user } = useAuth()
  const { handleResponse } = useApiHandler();

  const fetchEvents = useCallback(async () => {
      const res = await httpFetch<MainEventExtended[]>(
        "/api/draconischia/main-events",
        "GET",
        null,
        false
      )
      handleResponse(res, () => { if (res.data) setEvents(res.data) }, undefined, true)

  }, [handleResponse])

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  const handleRegister = async (id: string) => {
    if (!user) {
      showInfo("Effettua il login per iscriverti")
      return
    }
    const res = await httpFetch<null>(
      `/api/draconischia/main-events/${id}/mainEventRegistration`,
      "POST",
      null,
      false
    )
    handleResponse(res,() => fetchEvents(), undefined, true)
  }

  const handleUnregister = async (id: string) => {
    const res = await httpFetch<null>(
      `/api/draconischia/main-events/${id}/mainEventRegistration`,
      "DELETE",
      null,
      true
    )
    handleResponse(res,() => fetchEvents(), undefined, true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Main Events</h1>

        {events.length === 0 ? (
          <p className="text-gray-600 text-center">
            Nessun main event disponibile al momento.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((e) => {
              const date = getOnlyDate(new Date(e.start))
              const start = getOnlyTime(new Date(e.start))
              const end = getOnlyTime(new Date(e.end))

              const postiDisponibili =
                e.maxSeats - (e.mainEventRegistrations?.length ?? 0)
              const isRegistered = !!e.mainEventRegistrations?.find(
                (r) => r.userId === user?.id
              )

              return (
                <div
                  key={e.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={e.urlImg || "/placeholder.jpg"}
                    alt={e.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{e.title}</h2>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {e.description}
                    </p>

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
                        onClick={() => handleUnregister(e.id)}
                        className="mt-4 w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                      >
                        ❌ Cancella Iscrizione
                      </button>
                    ) : (
                      <button
                        disabled={postiDisponibili <= 0}
                        onClick={() => handleRegister(e.id)}
                        className={`mt-4 w-full px-4 py-2 rounded-lg ${
                          postiDisponibili <= 0
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                      >
                        {postiDisponibili <= 0
                          ? "Posti Esauriti"
                          : "Iscriviti"}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}

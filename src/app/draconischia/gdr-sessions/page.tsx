"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { showInfo } from "@/lib/toast"
import { useAuth } from "@/context/AuthContext"
import { GdrSessionExtended } from "@/interfaces/GdrSession"
import { getOnlyDate, getOnlyTime } from "@/lib/manageDataUtils"
import { httpFetch } from "@/services/http/httpFetch"
import { GdrSessionRegistration } from "@/generated/prisma"
import { T } from "@/components/ui/T"
import { useApiHandler } from "@/app/hooks/useApiHandler"


export default function SessioniGdrPage() {
  const [sessions, setSessions] = useState<GdrSessionExtended[]>([])
  const router = useRouter()
  const { user } = useAuth()
  const { handleResponse } = useApiHandler();

  const fetchSessions = useCallback(async () => {
    const res = await httpFetch<GdrSessionExtended[]>("/api/draconischia/gdr-sessions", "GET", null, false);
    handleResponse(res, () => setSessions(res.data || []), undefined, true)
  }, [setSessions, handleResponse])

  useEffect(() => {
    fetchSessions()
  }, [fetchSessions])

  const handleBook = async (id: string) => {
    if (!user) {
      showInfo("Effettua il login per prenotarti")
      router.push("/user/login")
      return
    }
    const res = await httpFetch<GdrSessionRegistration>(`/api/draconischia/gdr-sessions/${id}/gdrSessionRegistration`,"POST", null,true)
    handleResponse(res,() => fetchSessions(), undefined, false)
  }

  const handleCancelgdrSessionRegistrations = async (id: string) => {
    if (!user) {
      showInfo("Effettua il login per gestire la prenotazione")
      router.push("/user/login")
      return
    }

    const res = await httpFetch<GdrSessionRegistration>(`/api/draconischia/gdr-sessions/${id}/gdrSessionRegistration`,"DELETE",null,true)
    handleResponse(res,() => fetchSessions(), undefined, true)
     
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
            🎲 <T idml="gdr.sessions.title" defaultText="Sessioni GDR" />
          </h1>
        </div>

        { sessions.length === 0 ? (
          <p className="text-gray-600 italic">
            <T idml="gdr.sessions.empty" defaultText="Nessuna sessione disponibile al momento." />
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((s: GdrSessionExtended) => {
              const startDate = s.start as Date
              const endDate = s.end as Date
              const postiRimanenti = s.availableSeats - (s._count?.gdrSessionRegistrations || 0)
              const isBooked =
                user &&
                s.gdrSessionRegistrations?.some((b: { userId: string }) => b.userId === user.id)

              return (
                <div
                  key={s.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col overflow-hidden"
                >
                  {/* Cover */}
                  <div className="relative">
                    <img
                      src={s.urlImg || "/placeholder.jpg"}
                      alt={s.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold bg-black/70 text-white rounded-full">
                      {postiRimanenti > 0 ? (
                        <>
                          <T idml="gdr.sessions.availableSeats" defaultText="Posti disponibili" />:{" "}
                          {postiRimanenti}
                        </>
                      ) : (
                        <T idml="gdr.sessions.full" defaultText="Esaurito" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{s.title}</h2>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{s.description}</p>

                    <div className="space-y-1 text-sm text-gray-700 mb-4">
                      <p>📅 {getOnlyDate(startDate)}</p>
                      <p>
                        ⏰ {getOnlyTime(startDate)} - {getOnlyTime(endDate)}
                      </p>
                      <p>
                        🧙 <T idml="gdr.sessions.master" defaultText="Master" />:{" "}
                        <span className="font-medium">{s.master}</span>
                      </p>
                      {s.gameReference && (
                        <p>
                          🎮 <T idml="gdr.sessions.game" defaultText="Gioco" />:{" "}
                          <span className="font-medium">{s.gameReference}</span>
                        </p>
                      )}
                    </div>

                    {/* Azioni */}
                    <div className="mt-auto">
                      {!user ? (
                        <button
                          onClick={() => router.push("/user/login")}
                          className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                        >
                          <T idml="common.login" defaultText="Effettua il login" />
                        </button>
                      ) : isBooked ? (
                        <button
                          onClick={() => s.id && handleCancelgdrSessionRegistrations(s.id)}
                          className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                        >
                          <T idml="gdr.sessions.cancel" defaultText="Cancella iscrizione" />
                        </button>
                      ) : (
                        <button
                          disabled={postiRimanenti <= 0}
                          onClick={() => s.id && handleBook(s.id)}
                          className={`w-full px-4 py-2 rounded-lg font-semibold transition ${
                            postiRimanenti <= 0
                              ? "bg-gray-400 cursor-not-allowed text-white"
                              : "bg-green-600 hover:bg-green-700 text-white"
                          }`}
                        >
                          {postiRimanenti <= 0 ? (
                            <T idml="gdr.sessions.full" defaultText="Posti esauriti" />
                          ) : (
                            <T idml="gdr.sessions.book" defaultText="Iscriviti" />
                          )}
                        </button>
                      )}
                    </div>
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

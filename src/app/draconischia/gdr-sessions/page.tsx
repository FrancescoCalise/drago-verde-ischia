"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { showInfo, showSuccess } from "@/lib/toast"
import { useAuth } from "@/context/AuthContext"
import { GdrSession } from "@/interfaces/GdrSession"
import { getOnlyDate, getOnlyTime } from "@/lib/manageDataUtils"
import { httpFetch } from "@/services/http/httpFetch"
import { GdrSessionRegistration } from "@/generated/prisma"


export default function SessioniGdrPage() {
  const [sessions, setSessions] = useState<GdrSession[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { user } = useAuth()

  const fetchSessions = async () => {
      try {
        const res = await httpFetch<GdrSession[]>("/api/draconischia/gdr-sessions", "GET", null, false)
          if (res && res.success && res.data) {
            const data = res.data;
            setSessions(data || [])
       }
      } catch {
      } finally {
        setLoading(false)
      }
    }
    
  useEffect(() => {
    fetchSessions()
  }, [])

  const handleBook = async (id: string) => {
    if (!user) {
      showInfo("Effettua il login per prenotarti")
      router.push("/user/login")
      return
    }

    try {
      const res = await httpFetch<GdrSessionRegistration>(`/api/draconischia/gdr-sessions/${id}/gdrSessionRegistration`,"POST", null,true)
      if (res && res.success) {
        showSuccess("✅ Iscrizione completata!")
        fetchSessions()
      } 
    } catch  {
    }
  }

  const handleCancelgdrSessionRegistrations = async (id: string) => {
    if (!user) {
      showInfo("Effettua il login per gestire la prenotazione")
      router.push("/user/login")
      return
    }

    try {
      const res = await httpFetch<GdrSessionRegistration>(`/api/draconischia/gdr-sessions/${id}/gdrSessionRegistration`,"DELETE",null,true)

      if (res) {
        showSuccess("✅ Iscrizione cancellata!")
        fetchSessions()
      } 
    } catch  {
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sessioni GDR</h1>
      </div>

      {loading ? (
        <p>Caricamento sessioni...</p>
      ) : sessions.length === 0 ? (
        <p className="text-gray-600">Nessuna sessione disponibile al momento.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {sessions.map((s) => {
            const startDate = s.start as Date
            const endDate = s.end as Date
           
            return (
            <div
              key={s.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={s.urlImg || "/placeholder.jpg"}
                alt={s.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">{s.description}</p>
                
                <p className="text-sm">📅 {getOnlyDate(startDate)}</p>
                <p className="text-sm">
                  ⏰ {getOnlyTime(startDate)} - {getOnlyTime(endDate)}
                </p>
                <p className="text-sm">🎲 Master: {s.master}</p>

                {/* Posti rimanenti */}
                <p className="text-sm font-semibold">
                  Posti disponibili: {s.availableSeats - (s._count?.gdrSessionRegistrations || 0)}
                </p>

                {!user ? (
                  // Caso 1: non loggato
                  <button
                    onClick={() => router.push("/user/login")}
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Effettua il login
                  </button>
                ) : s.gdrSessionRegistrations?.some((b: { userId: string }) => b.userId === user.id) ? (
                  // Caso 2: già iscritto
                  <button
                    onClick={() => s.id && handleCancelgdrSessionRegistrations(s.id)}
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                  >
                    Cancella Iscrizione
                  </button>
                ) : (
                  // Caso 3: non iscritto
                  <button
                    disabled={s.availableSeats - (s._count?.gdrSessionRegistrations || 0) <= 0}
                    onClick={() => s.id && handleBook(s.id)}
                    className={`mt-2 w-full px-4 py-2 rounded-lg ${
                      s.availableSeats - (s._count?.gdrSessionRegistrations || 0) <= 0
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {s.availableSeats - (s._count?.gdrSessionRegistrations || 0) <= 0
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
    </main>
  )
}

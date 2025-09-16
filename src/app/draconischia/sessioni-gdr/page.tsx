"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useModal } from "@/lib/modal"
import { showError, showInfo } from "@/lib/toast"
import { useAuth } from "@/context/AuthContext"
import NewSessionForm from "@/components/forms/NewSessionForm"

interface GdrSession {
  id: string
  title: string
  description: string
  urlImg: string
  start: string   // Date con ora di inizio
  end: string     // Date con ora di fine
  master: string
  availableSeats: number
}

export default function SessioniGdrPage() {
  const [sessions, setSessions] = useState<GdrSession[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { user } = useAuth()
  const { openModal } = useModal()

  const fetchSessions = async () => {
      try {
        const res = await fetch("/api/draconischia/sessioni-gdr")
        if (!res.ok) return
        const data = await res.json()
        setSessions(data || [])
      } catch (err) {
        console.error(err)
        showError("Errore nel caricamento delle sessioni")
      } finally {
        setLoading(false)
      }
    }
    
  useEffect(() => {
    fetchSessions()
  }, [])

  const handleClick = (id: string) => {
    if (!user) {
      showInfo("Effettua il login per prenotare")
      router.push("/login")
    } else {
      router.push(`/draconischia/prenotazioni-gdr/${id}`)
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sessioni GDR</h1>
        {user?.role === "admin" && (
          <button
            onClick={() => openModal(NewSessionForm, {
              onSuccess: () => fetchSessions(), // callback da eseguire dopo salvataggio
            })}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            ➕ Aggiungi Sessione
          </button>
        )}
      </div>

      {loading ? (
        <p>Caricamento sessioni...</p>
      ) : sessions.length === 0 ? (
        <p className="text-gray-600">Nessuna sessione disponibile al momento.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {sessions.map((s) => {
            const startDate = new Date(s.start)
            const endDate = new Date(s.end)

            return (
              <div
                key={s.id}
                onClick={() => handleClick(s.id)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
              >
                <img
                  src={s.urlImg || "/placeholder.jpg"}
                  alt={s.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                    {s.description}
                  </p>
                  <p className="text-sm">
                    📅 {startDate.toLocaleDateString()}  
                  </p>
                  <p className="text-sm">
                    ⏰ {startDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                    {endDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                  <p className="text-sm">🎲 Master: {s.master}</p>
                  <p className="text-sm font-semibold">
                    Posti disponibili: {s.availableSeats}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}

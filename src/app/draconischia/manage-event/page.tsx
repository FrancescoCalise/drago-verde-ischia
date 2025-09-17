"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { showError, showInfo, showSuccess } from "@/lib/toast"
import { httpFetch } from "@/lib/http"
import { useModal } from "@/lib/modal"
import SessionForm from "@/components/forms/SessionForm"
import MainEventForm from "@/components/forms/MainEventForm"
import { GdrSession } from "@/interface/GdrSession"
import { MainEvent } from "@/interface/MainEvent"

export default function ManageEventPage() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const { openModal } = useModal()

  const [sessions, setSessions] = useState<GdrSession[]>([])
  const [events, setEvents] = useState<MainEvent[]>([])

  // Solo admin
  useEffect(() => {
    
    if (authLoading) return;

    if (!user) {
      showInfo("Effettua il login per accedere")
      router.push("/login")
    } else if (user.role !== "admin") {
      showError("❌ Non sei autorizzato")
      router.push("/draconischia")
    } else {
      fetchData()
    }
  }, [authLoading, user, router])

  const fetchData = async () => {
    try {
      const [sRes, eRes] = await Promise.all([
        httpFetch("/api/draconischia/gdr-sessions"),
        httpFetch("/api/draconischia/main-events"),
      ])
      if (!sRes.ok || !eRes.ok) throw new Error("Errore caricamento dati")
      const [sData, eData] = await Promise.all([sRes.json(), eRes.json()])
      setSessions(sData)
      setEvents(eData)
    } catch (err) {
      showError((err as Error).message || "Errore nel caricamento dei dati")
    }
  }

  const handleDelete = async (id: string, type: "session" | "event") => {
    if(id === undefined || id === null) {
      showError(`${type === "session" ? "Sessione" : "Evento"} non trovato`)
      return;
    }

    try {
      const url =
        type === "session"
          ? `/api/draconischia/gdr-sessions/${id}`
          : `/api/draconischia/main-events/${id}`

      const res = await httpFetch(url, { method: "DELETE" })
      if (res.ok) {
        showSuccess("✅ Eliminato con successo")
        fetchData()
      } else {
        const data = await res.json()
        showError(data.error || "Errore durante eliminazione")
      }
    } catch(err) {
      console.error((err as Error).message)
      showError("Errore connessione al server")
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Gestione Evento</h1>

      {/* Sessioni GDR */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Sessioni GDR</h2>
          <button
            onClick={() =>
              openModal(SessionForm, "manageEventPage.addSession", "Nuova Sessione", { onSuccess: () => fetchData() })
            }
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Nuova Sessione
          </button>
        </div>
        {sessions.length === 0 ? (
          <p className="text-gray-600">Nessuna sessione creata.</p>
        ) : (
          <div className="space-y-4">
            {
              sessions.map((s) => {
                const startDate = s.start as Date
                const endDate = s.end as Date
                const getOnlyDate = (date: Date) => {
                  if(date === null) return "";
                  console.log(date)
                  return new Date(date).toLocaleDateString("it-IT", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).replace(/\b\w/g, c => c.toUpperCase())
                }
                const getOnlyTime = (date: Date) => {
                  if(date === null) return "";
                  return new Date(date).toLocaleTimeString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }).replace(/\b\w/g, c => c.toUpperCase())
                }
                return (
                <div
                  key={s.id}
                  className="bg-white rounded-lg shadow p-4 flex justify-between"
                >
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="text-sm">📅 {getOnlyDate(startDate)}</p>
                    <p className="text-sm">⏰ {getOnlyTime(startDate)} - {getOnlyTime(endDate)}</p>
                    <p>
                      Posti: {s.availableSeats - (s.bookings?.length ?? 0)}/ {s.availableSeats}
                    </p>
                    <p className="text-sm">🎲 Master: {s.master}</p>

                    <p>
                      Iscritti:{" "}
                      {s.bookings?.map((b) => b.user?.username).join(", ") ||
                        "Nessuno"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                      onClick={() =>
                        openModal(SessionForm, "manageEventPage.editSession", "Modifica Sessione", {
                          session: s,
                          onSuccess: () => fetchData(),
                        })
                      }
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => s.id && handleDelete(s.id, "session")}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
                )
              })
            }
          </div>
        )}
      </section>

      {/* Main Event (tornei) */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Main Events (Tornei)</h2>
          <button
            onClick={() =>
              openModal(MainEventForm,"manageEventPage.addMainEvent" ,"Nuovo Main Event", { onSuccess: () => fetchData() })
            }
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Nuovo Evento
          </button>
        </div>
        {events.length === 0 ? (
          <p className="text-gray-600">Nessun evento creato.</p>
        ) : (
          <div className="space-y-4">
            {events.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-lg shadow p-4 flex justify-betw<een"
              >
                <div>
                  <h3 className="font-bold">{e.title}</h3>
                  <p>📅 {(e.start as Date).toLocaleDateString()} - {(e.end as Date).toLocaleDateString()}</p>
                  <p>
                    Posti: {e.maxSeats - (e.registrations?.length ?? 0)}/ {e.maxSeats}
                  </p>
                  <p>
                    Iscritti:{" "}
                    {e.registrations?.map((r) => r.user?.username).join(", ") ||
                      "Nessuno"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                    onClick={() =>
                      openModal(MainEventForm, "manageEventPage.editMainEvent", "Modifica Main Event", {
                        event: e,
                        onSuccess: () => fetchData(),
                      })
                    }
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => e.id && handleDelete(e.id, "event")}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

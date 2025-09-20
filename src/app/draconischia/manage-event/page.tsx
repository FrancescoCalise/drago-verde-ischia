"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { showError, showInfo } from "@/lib/toast"
import SessionForm from "@/components/forms/SessionForm"
import MainEventForm from "@/components/forms/MainEventForm"
import { getOnlyDate, getOnlyTime } from "@/lib/manageDataUtils"
import { UserRole } from "@/interfaces/UserRole"
import { useModal } from "@/lib/modal"
import { httpFetch } from "@/services/http/httpFetch"
import { ApiResponse } from "@/interfaces/ApiResponse"
import { MainEventExtended, MainEventRegistrationExtended } from "@/interfaces/MainEvent"
import { GdrSessionExtended, GdrSessionRegistrationExtended } from "@/interfaces/GdrSession"
import { useApiHandler } from "@/app/hooks/useApiHandler"

interface ManageSectionProps<
  T extends { id: string },
  MProps extends object
> {
  title: string
  addLabel: string
  addIdml: string
  editIdml: string
  editTitle: string
  addModal: React.ComponentType<MProps>
  editModal: React.ComponentType<MProps>
  items: T[]
  type: "session" | "event"
  onFetch: () => void
  onDelete: (id: string, type: "session" | "event") => void
  renderInfo: (item: T) => React.ReactNode
}

export function ManageSection<
  T extends { id: string },
  MProps extends object
>({
  title,
  addLabel,
  addIdml,
  editIdml,
  editTitle,
  addModal,
  editModal,
  items,
  type,
  onFetch,
  onDelete,
  renderInfo,
}: ManageSectionProps<T, MProps>) {
  const { openModal } = useModal()

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button
          onClick={() =>
            openModal(addModal, addIdml, addLabel, {
              onSuccess: onFetch,
            } as MProps)
          }
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ {addLabel}
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-600">
          {type === "session"
            ? "Nessuna sessione creata."
            : "Nessun evento creato."}
        </p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-start"
            >
              <div>{renderInfo(item)}</div>
              <div className="flex gap-2 self-start">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  onClick={() =>
                    openModal(editModal, editIdml, editTitle, {
                      [type]: item,
                      onSuccess: onFetch,
                    } as MProps)
                  }
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => onDelete(item.id, type)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default function ManageEventPage() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const [sessions, setSessions] = useState<GdrSessionExtended[]>([])
  const [events, setEvents] = useState<MainEventExtended[]>([])
  const { handleResponse } = useApiHandler();


  const fetchData = useCallback(async () => {
    try {
      const [sRes, eRes]: [ApiResponse<GdrSessionExtended[]>, ApiResponse<MainEventExtended[]>] =
        await Promise.all([
          httpFetch<GdrSessionExtended[]>("/api/draconischia/gdr-sessions", "GET", null, false),
          httpFetch<MainEventExtended[]>("/api/draconischia/main-events", "GET", null, false),
        ])

      if (sRes.success && sRes.data) setSessions(sRes.data)
      if (eRes.success && eRes.data) setEvents(eRes.data)
    } catch {
      showError("Errore durante il caricamento dei dati")
    }
  }, [])

  useEffect(() => {
    if (authLoading) return

    if (!user) {
      showInfo("Effettua il login per accedere")
      router.push("/user/login")
    } else if (user.role !== UserRole.ADMIN) {
      showError("❌ Non sei autorizzato")
      router.push("/draconischia")
    } else {
      fetchData()
    }
  }, [authLoading, user, router, fetchData])

  const handleDelete = async (id: string, type: "session" | "event") => {
  const url =
    type === "session"
      ? `/api/draconischia/gdr-sessions/${id}`
      : `/api/draconischia/main-events/${id}`

  const res = await httpFetch<null>(url, "DELETE", null, true)

  handleResponse(res, () => {
    // Aggiornamento ottimistico della UI
    if (type === "session") {
      setSessions((prev) => prev.filter((s) => s.id !== id))
    } else {
      setEvents((prev) => prev.filter((e) => e.id !== id))
    }
    // Refetch in background per allineare i dati
    fetchData()
  })
}

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Gestione Evento</h1>

      <ManageSection<
        GdrSessionExtended,
        { session: GdrSessionExtended; onSuccess: () => void }
      >
        title="Sessioni GDR"
        addLabel="Nuova Sessione"
        addIdml="manageEventPage.addSession"
        editIdml="manageEventPage.editSession"
        editTitle="Modifica Sessione"
        addModal={SessionForm}
        editModal={SessionForm}
        items={sessions}
        type="session"
        onFetch={fetchData}
        onDelete={handleDelete}
        renderInfo={(s) => {
          const regs: GdrSessionRegistrationExtended[] = s.gdrSessionRegistrations || []
          return (
            <>
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm">📅 {getOnlyDate(new Date(s.start))}</p>
              <p className="text-sm">
                ⏰ {getOnlyTime(new Date(s.start))} - {getOnlyTime(new Date(s.end))}
              </p>
              <p>
                Posti: {s.availableSeats - regs.length} / {s.availableSeats}
              </p>
              <p className="text-sm">🎲 Master: {s.master}</p>
              <p>
                Iscritti:{" "}
                {regs.map((r) => r.user?.username).join(", ") || "Nessuno"}
              </p>
            </>
          )
        }}
      />

      <ManageSection<
        MainEventExtended,
        { event: MainEventExtended; onSuccess: () => void }
      >
        title="Main Events (Tornei)"
        addLabel="Nuovo Main Event"
        addIdml="manageEventPage.addMainEvent"
        editIdml="manageEventPage.editMainEvent"
        editTitle="Modifica Main Event"
        addModal={MainEventForm}
        editModal={MainEventForm}
        items={events}
        type="event"
        onFetch={fetchData}
        onDelete={handleDelete}
        renderInfo={(e) => {
          const regs: MainEventRegistrationExtended[] = e.mainEventRegistrations || []
          return (
            <>
              <h3 className="font-bold">{e.title}</h3>
              <p>📅 {getOnlyDate(new Date(e.start))}</p>
              <p>
                ⏰ {getOnlyTime(new Date(e.start))} - {getOnlyTime(new Date(e.end))}
              </p>
              <p>
                Posti: {e.maxSeats - regs.length} / {e.maxSeats}
              </p>
              <p>
                Iscritti: {regs.map((r) => r.user?.username).join(", ") || "Nessuno"}
              </p>
            </>
          )
        }}
      />
    </main>
  )
}

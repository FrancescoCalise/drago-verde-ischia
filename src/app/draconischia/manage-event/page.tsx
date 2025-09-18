/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { showError, showInfo, showSuccess } from "@/lib/toast";
import { httpFetch } from "@/lib/http";
import SessionForm from "@/components/forms/SessionForm";
import MainEventForm from "@/components/forms/MainEventForm";
import { GdrSession } from "@/interfaces/GdrSession";
import { MainEvent } from "@/interfaces/MainEvent";
import { getOnlyDate, getOnlyTime } from "@/lib/manageDataUtils";
import { UserRole } from "@/interfaces/UserRole";
import * as React from "react";
import { useModal } from "@/lib/modal";

interface ManageSectionProps<T extends { id?: string }> {
  title: string;
  addLabel: string;
  addIdml: string; // es. "manageEventPage.addSession"
  editIdml: string; // es. "manageEventPage.editSession"
  editTitle: string; // es. "Modifica Sessione"
  addModal: React.ComponentType<any>;
  editModal: React.ComponentType<any>;
  items: T[];
  type: "session" | "event";
  onFetch: () => void;
  onDelete: (id: string, type: "session" | "event") => void;
  renderInfo: (item: T) => React.ReactNode;
}

export function ManageSection<T extends { id?: string }>({
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
}: ManageSectionProps<T>) {
  const { openModal } = useModal();

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button
          onClick={() =>
            openModal(addModal, addIdml, addLabel, {
              onSuccess: () => onFetch(),
            })
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
              {/* Info */}
              <div>{renderInfo(item)}</div>

              {/* Pulsanti azione */}
              <div className="flex gap-2 self-start">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  onClick={() =>
                    openModal(
                      editModal,
                      editIdml,
                      editTitle,
                      { [type]: item, onSuccess: () => onFetch() } // es. { session: s } o { event: e }
                    )
                  }
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => item.id && onDelete(item.id, type)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function ManageEventPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [sessions, setSessions] = useState<GdrSession[]>([]);
  const [events, setEvents] = useState<MainEvent[]>([]);

  // Solo admin
  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      showInfo("Effettua il login per accedere");
      router.push("/user/login");
    } else if (user.role !== UserRole.ADMIN) {
      showError("❌ Non sei autorizzato");
      router.push("/draconischia");
    } else {
      fetchData();
    }
  }, [authLoading, user, router]);

  const fetchData = async () => {
    try {
      const [sRes, eRes] = await Promise.all([
        httpFetch("/api/draconischia/gdr-sessions"),
        httpFetch("/api/draconischia/main-events"),
      ]);
      if (!sRes.ok || !eRes.ok) throw new Error("Errore caricamento dati");
      const [sData, eData] = await Promise.all([sRes.json(), eRes.json()]);
      setSessions(sData);
      setEvents(eData);
    } catch (err) {
      showError((err as Error).message || "Errore nel caricamento dei dati");
    }
  };

  const handleDelete = async (id: string, type: "session" | "event") => {
    if (id === undefined || id === null) {
      showError(`${type === "session" ? "Sessione" : "Evento"} non trovato`);
      return;
    }

    try {
      const url =
        type === "session"
          ? `/api/draconischia/gdr-sessions/${id}`
          : `/api/draconischia/main-events/${id}`;

      const res = await httpFetch(url, { method: "DELETE" });
      if (res.ok) {
        showSuccess("✅ Eliminato con successo");
        fetchData();
      } else {
        const data = await res.json();
        showError(data.error || "Errore durante eliminazione");
      }
    } catch (err) {
      console.error((err as Error).message);
      showError("Errore connessione al server");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Gestione Evento</h1>

      {/* Sessioni GDR */}
      <ManageSection
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
          const startDate = s.start as Date;
          const endDate = s.end as Date;
          const regs =
            (s as any).registrations ?? (s as any).gdrSessionRegistrations; // compat con vecchio nome
          return (
            <>
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm">📅 {getOnlyDate(startDate)}</p>
              <p className="text-sm">
                ⏰ {getOnlyTime(startDate)} - {getOnlyTime(endDate)}
              </p>
              <p>
                Posti: {s.availableSeats - (regs?.length ?? 0)} /{" "}
                {s.availableSeats}
              </p>
              <p className="text-sm">🎲 Master: {s.master}</p>
              <p>
                Iscritti:{" "}
                {regs?.map((r: any) => r.user?.username).join(", ") ||
                  "Nessuno"}
              </p>
            </>
          );
        }}
      />

      {/* Main Event (tornei) */}
      <ManageSection
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
          const regs = (e as any).mainEventRegistrations;
          return (
            <>
              <h3 className="font-bold">{e.title}</h3>
              <p>📅 {getOnlyDate(e.start as Date)}</p>
              <p>
                ⏰ {getOnlyTime(e.start as Date)} - {getOnlyTime(e.end as Date)}
              </p>
              <p>
                Posti: {e.maxSeats - (regs?.length ?? 0)} / {e.maxSeats}
              </p>
              <p>
                Iscritti:{" "}
                {regs?.map((r: any) => r.user?.username).join(", ") ||
                  "Nessuno"}
              </p>
            </>
          );
        }}
      />
    </main>
  );
}

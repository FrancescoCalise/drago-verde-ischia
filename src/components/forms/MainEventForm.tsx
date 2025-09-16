"use client"

import { useState, useEffect } from "react"
import { toast } from "@/lib/toast"
import { httpFetch } from "@/lib/http"
import { useModal } from "@/lib/modal"
import { MainEvent } from "@/interface/MainEvent"

interface Props {
  event?: MainEvent // se presente, siamo in modalità "edit"
  onSuccess?: () => void
}

export default function MainEventForm({ event, onSuccess }: Props) {
  const { closeModal } = useModal()

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    maxSeats: 0,
  })

  // Se è in edit, inizializza il form
  useEffect(() => {
    if (event) {
      setForm({
        title: event.title,
        description: event.description,
        date: event.date ? new Date(event.date).toISOString().slice(0, 16) : "",
        maxSeats: event.maxSeats,
      })
    }
  }, [event])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.loading(event ? "Aggiornamento evento..." : "Creazione evento...")

    try {
      const res = await httpFetch(
        event
          ? `/api/draconischia/main-events/${event.id}`
          : "/api/draconischia/main-events",
        {
          method: event ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            maxSeats: Number(form.maxSeats),
          }),
        }
      )

      toast.dismiss()
      if (res.ok) {
        toast.success(event ? "✅ Evento aggiornato" : "✅ Evento creato")
        closeModal()
        onSuccess?.()
      } else {
        const data = await res.json()
        toast.error(data.error || "❌ Errore salvataggio evento")
      }
    } catch (err) {
      toast.dismiss()
      toast.error("❌ Errore connessione server")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-2">
        {event ? "Modifica Evento" : "Nuovo Evento"}
      </h2>

      <input
        name="title"
        placeholder="Titolo"
        value={form.title}
        onChange={handleChange}
        className="border w-full p-2 rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Descrizione"
        value={form.description}
        onChange={handleChange}
        className="border w-full p-2 rounded"
        required
      />

      <input
        type="datetime-local"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border w-full p-2 rounded"
        required
      />

      <input
        type="number"
        name="maxSeats"
        placeholder="Posti disponibili"
        value={form.maxSeats}
        onChange={handleChange}
        className="border w-full p-2 rounded"
        required
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={closeModal}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
        >
          Annulla
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          {event ? "Salva Modifiche" : "Crea Evento"}
        </button>
      </div>
    </form>
  )
}

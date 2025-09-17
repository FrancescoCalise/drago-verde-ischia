"use client"

import { useState, useEffect } from "react"
import { toast } from "@/lib/toast"
import { httpFetch } from "@/lib/http"
import { useModal } from "@/lib/modal"
import { MainEvent } from "@/interface/MainEvent"
import DatePicker from "react-datepicker"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"

interface Props {
  event?: MainEvent // se presente, siamo in modalità "edit"
  onSuccess?: () => void
}

export default function MainEventForm({ event, onSuccess }: Props) {
  const { closeModal } = useModal()

  const [form, setForm] = useState<MainEvent>({
    title: "",
    description: "",
    start: null,
    end:  null,
    location: "",
    price: 0,
    maxSeats: 0,
    note: "",
  })

  useEffect(() => {
    if (event) {
      setForm({
        title: event.title,
        description: event.description,
        urlImg: event.urlImg,
        start: event.start ? event.start : null,
        end: event.end ? event.end : null,
        location: event.location || "",
        price: event.price || 0,
        maxSeats: event.maxSeats || 0,
        note: event.note || "",
      })
    }
  }, [event])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "maxSeats" ? Number(value) : value,
    }))
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
          body: JSON.stringify(form),
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

    {/* DatePicker Inizio */}
    <DatePicker
      selected={form.start}
      onChange={(date) => setForm((prev) => ({ ...prev, startDate: date }))}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      dateFormat="dd-MM-yyyy HH:mm"
      locale={it}
      placeholderText="Inizio (gg-mm-aaaa hh:mm)"
      className="border w-full p-2 rounded"
    />

    {/* DatePicker Fine */}
    <DatePicker
      selected={form.end}
      onChange={(date) => setForm((prev) => ({ ...prev, endDate: date }))}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      dateFormat="dd-MM-yyyy HH:mm"
      locale={it}
      placeholderText="Fine (gg-mm-aaaa hh:mm)"
      className="border w-full p-2 rounded"
    />

    <input
      name="location"
      placeholder="Luogo"
      value={form.location}
      onChange={handleChange}
      className="border w-full p-2 rounded"
      required
    />

    <input
      type="number"
      name="price"
      placeholder="Prezzo (0 = gratuito)"
      value={form.price}
      onChange={handleChange}
      className="border w-full p-2 rounded"
      min="0"
      step="0.01"
    />

    <input
      type="number"
      name="maxSeats"
      placeholder="Posti disponibili"
      value={form.maxSeats}
      onChange={handleChange}
      className="border w-full p-2 rounded"
      required
      min="1"
    />

    <textarea
      name="note"
      placeholder="Note aggiuntive"
      value={form.note}
      onChange={handleChange}
      className="border w-full p-2 rounded"
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

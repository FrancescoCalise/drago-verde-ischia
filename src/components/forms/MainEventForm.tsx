"use client"

import { useState, useEffect } from "react"
import { toast } from "@/lib/toast"
import { useModal } from "@/lib/modal"
import { MainEvent } from "@/interfaces/MainEvent"
import DatePicker from "react-datepicker"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"
import { httpFetch } from "@/services/http/httpFetch"

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
    end: null,
    urlImg: "",
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
        start: event.start,
        end: event.end,
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
      const url = event
        ? `/api/draconischia/main-events/${event.id}`
        : "/api/draconischia/main-events";

      const method = event ? "PUT" : "POST";
      const body = JSON.stringify(form);
      const res = await httpFetch( url, method, body, true );

      if (res.success) {
        toast.success(event ? "✅ Evento aggiornato" : "✅ Evento creato")
        closeModal()
        onSuccess?.()
      } 
    } catch {
    }
  }

  return (
  <form onSubmit={handleSubmit} className="space-y-4">
    
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
        type="url"
        name="urlImg"
        placeholder="URL immagine"
        value={form.urlImg}
        onChange={handleChange}
        className="border w-full p-2 rounded"
    />
    
    {/* DatePicker Inizio */}
    <DatePicker
      selected={form.start}
      onChange={(date) => setForm((prev) => ({ ...prev, start: date }))}
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
      onChange={(date) => setForm((prev) => ({ ...prev, end: date }))}
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

    <div className="flex justify-center gap-2">
      
      <button  type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Salva
      </button>
    </div>
  </form>
)

}

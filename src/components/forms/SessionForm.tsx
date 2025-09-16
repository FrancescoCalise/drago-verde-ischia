"use client"

import { useEffect, useState } from "react"
import { toast } from "@/lib/toast"
import { useModal } from "@/lib/modal"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { it } from "date-fns/locale"
import { httpFetch } from "@/lib/http"
import { GdrSession } from "@/interface/GdrSession"

interface SessionFormProps {
  onSuccess?: () => void
  session?: GdrSession // se presente, siamo in modalità "edit"
}

export default function SessionForm({ onSuccess, session }: SessionFormProps) {
  const { closeModal } = useModal()
  const [form, setForm] = useState<{
  title: string
  description: string
  urlImg: string
  start: Date | null
  end: Date | null
  master: string
  availableSeats: number
  }>({
    title: "",
    description: "",
    urlImg: "",
    start: null,
    end: null,
    master: "",
    availableSeats: 0,
  })
  
  useEffect(() => {
    if (session) {
      setForm({
        title: session.title,
        description: session.description,
        urlImg: session.urlImg,
        start: session.start ? new Date(session.start) : null,
        end: session.end ? new Date(session.end) : null,
        master: session.master,
        availableSeats: session.availableSeats,
      })
    }
  }, [session])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    runValidation(form)

    const start = new Date(form.start as Date)
    const end = new Date(form.end as Date)
    const availableSeats = Number(form.availableSeats)
    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      urlImg: form.urlImg.trim() || null,
      start: start.toISOString(),
      end: end.toISOString(),
      master: form.master.trim(),
      availableSeats,
    }

    toast.loading(session ? "Aggiornamento sessione..." : "Creazione sessione...")

    try {
      const res = await httpFetch(
        session ? `/api/draconischia/gdr-sessions/${session.id}` : "/api/draconischia/gdr-sessions",
        {
          method: session ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )

      toast.dismiss()
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        toast.success(session ? "✅ Sessione aggiornata!" : "✅ Sessione creata!")
        closeModal()
        onSuccess?.() 
      } else {
        toast.error(data.error || "❌ Errore creazione sessione")
      }
    } catch (err) {
      toast.dismiss()
      toast.error((err as Error).message || "❌ Errore creazione sessione")
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
        name="master"
        placeholder="Master"
        value={form.master}
        onChange={handleChange}
        className="border w-full p-2 rounded"
        required
      />

      <input
        type="number"
        min={1}
        name="availableSeats"
        placeholder="Posti disponibili"
        value={form.availableSeats}
        onChange={handleChange}
        className="border w-full p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Salva
      </button>
    </form>
  )
}


function runValidation(form: { title: string; description: string; urlImg: string; start: Date | null; end: Date | null; master: string; availableSeats: number }) {
  // Validazioni base
  if (!form.title.trim() || !form.description.trim() || !form.master.trim()) {
    toast.error("Compila tutti i campi obbligatori")
    return
  }
  if (!form.start || !form.end) {
    toast.error("Seleziona orari di inizio e fine")
    return
  }
  const start = new Date(form.start)
  const end = new Date(form.end)
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    toast.error("Formato data/ora non valido")
    return
  }
  if (end <= start) {
    toast.error("L'ora di fine deve essere successiva all'inizio")
    return
  }

  const availableSeats = Number(form.availableSeats)
  if (!Number.isInteger(availableSeats) || availableSeats < 1) {
    toast.error("Posti disponibili deve essere un intero ≥ 1")
    return
  }
}


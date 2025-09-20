"use client"

import { useState, useEffect } from "react"
import { toast } from "@/lib/toast"
import { useModal } from "@/lib/modal"
import DatePicker from "react-datepicker"
import { it } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css"
import { httpFetch } from "@/services/http/httpFetch"
import { MainEventExtended } from "@/interfaces/MainEvent"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface Props {
  event?: MainEventExtended // se presente, siamo in modalità "edit"
  onSuccess?: () => void
}

export default function MainEventForm({ event, onSuccess }: Props) {
  const { closeModal } = useModal()

  const [form, setForm] = useState<{
    title: string
    description: string
    urlImg: string
    start: Date | null
    end: Date | null
    location: string
    price: number
    maxSeats: number
    note: string
  }>({
    title: "",
    description: "",
    urlImg: "",
    start: null,
    end: null,
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
        urlImg: event.urlImg || "",
        start: event.start ? new Date(event.start) : null,
        end: event.end ? new Date(event.end) : null,
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

    // Validazioni base
    if (!form.title.trim() || !form.description.trim() || !form.location.trim() || !form.note.trim()) {
      toast.error("Compila tutti i campi obbligatori")
      return
    }
    if (!form.start || !form.end) {
      toast.error("Seleziona inizio e fine evento")
      return
    }
    if (form.end <= form.start) {
      toast.error("La data/ora di fine deve essere successiva all’inizio")
      return
    }
    if (form.maxSeats < 1) {
      toast.error("I posti disponibili devono essere almeno 1")
      return
    }
    if (form.price < 0) {
      toast.error("Il prezzo non può essere negativo")
      return
    }

    toast.loading(event ? "Aggiornamento evento..." : "Creazione evento...")

    try {
      const url = event
        ? `/api/draconischia/main-events/${event.id}`
        : "/api/draconischia/main-events"

      const method = event ? "PUT" : "POST"

      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        urlImg: form.urlImg.trim() || null,
        start: form.start?.toISOString(),
        end: form.end?.toISOString(),
        location: form.location.trim(),
        price: Number(form.price),
        maxSeats: Number(form.maxSeats),
        note: form.note.trim(),
      }

      const res = await httpFetch(url, method, payload, true)

      if (res.success) {
        toast.success(event ? "✅ Evento aggiornato" : "✅ Evento creato")
        closeModal()
        onSuccess?.()
      }
    } catch {
      toast.error("Errore durante il salvataggio")
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Titolo */}
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">
              Titolo
            </label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Descrizione */}
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">
              Descrizione
            </label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* URL immagine */}
          <div className="flex flex-col gap-1">
            <label htmlFor="urlImg" className="text-sm font-medium text-gray-700">
              URL immagine
            </label>
            <Input
              type="url"
              id="urlImg"
              name="urlImg"
              value={form.urlImg}
              onChange={handleChange}
            />
          </div>

          {/* Date pickers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Inizio</label>
              <DatePicker
                selected={form.start}
                onChange={(date) => setForm((prev) => ({ ...prev, start: date }))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd-MM-yyyy HH:mm"
                locale={it}
                placeholderText="Inizio (gg-mm-aaaa hh:mm)"
                className="border w-full p-3 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Fine</label>
              <DatePicker
                selected={form.end}
                onChange={(date) => setForm((prev) => ({ ...prev, end: date }))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd-MM-yyyy HH:mm"
                locale={it}
                placeholderText="Fine (gg-mm-aaaa hh:mm)"
                className="border w-full p-3 rounded-lg"
              />
            </div>
          </div>

          {/* Luogo */}
          <div className="flex flex-col gap-1">
            <label htmlFor="location" className="text-sm font-medium text-gray-700">
              Luogo
            </label>
            <Input
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Prezzo */}
          <div className="flex flex-col gap-1">
            <label htmlFor="price" className="text-sm font-medium text-gray-700">
              Prezzo (0 = gratuito)
            </label>
            <Input
              type="number"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              min={0}
              step="0.01"
            />
          </div>

          {/* Posti */}
          <div className="flex flex-col gap-1">
            <label htmlFor="maxSeats" className="text-sm font-medium text-gray-700">
              Posti disponibili
            </label>
            <Input
              type="number"
              id="maxSeats"
              name="maxSeats"
              value={form.maxSeats}
              onChange={handleChange}
              required
              min={1}
            />
          </div>

          {/* Note */}
          <div className="flex flex-col gap-1">
            <label htmlFor="note" className="text-sm font-medium text-gray-700">
              Note aggiuntive
            </label>
            <Textarea
              id="note"
              name="note"
              value={form.note}
              onChange={handleChange}
              required
            />
          </div>

          {/* Azioni */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={closeModal}>
              ❌ Annulla
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              💾 Salva
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

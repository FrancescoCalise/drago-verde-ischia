"use client"

import { useEffect, useState } from "react"
import { toast } from "@/lib/toast"
import { useModal } from "@/lib/modal"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { it } from "date-fns/locale"
import { httpFetch } from "@/services/http/httpFetch"
import { GdrSessionExtended } from "@/interfaces/GdrSession"
import { Card, CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface SessionFormProps {
  onSuccess?: () => void
  session?: GdrSessionExtended
}

interface FormState {
  title: string
  description: string
  urlImg: string
  start: Date | null
  end: Date | null
  master: string
  availableSeats: number
  gameReference: string
}

export default function SessionForm({ onSuccess, session }: SessionFormProps) {
  const { closeModal } = useModal()
  const [form, setForm] = useState<FormState>({
    title: "",
    description: "",
    urlImg: "",
    start: null,
    end: null,
    master: "",
    availableSeats: 0,
    gameReference: "",
  })

  useEffect(() => {
    if (session) {
      setForm({
        title: session.title,
        description: session.description,
        urlImg: session.urlImg ?? "",
        start: session.start ? new Date(session.start) : null,
        end: session.end ? new Date(session.end) : null,
        master: session.master,
        availableSeats: session.availableSeats,
        gameReference: session.gameReference ?? "",
      })
    }
  }, [session])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === "availableSeats" ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!runValidation(form)) return

    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      urlImg: form.urlImg.trim() || null,
      start: form.start?.toISOString() || null,
      end: form.end?.toISOString() || null,
      master: form.master.trim(),
      availableSeats: form.availableSeats,
      gameReference: form.gameReference.trim(),
    }

    try {
      const method = session ? "PUT" : "POST"
      const url = session
        ? `/api/draconischia/gdr-sessions/${session.id}`
        : "/api/draconischia/gdr-sessions"

      const res = await httpFetch(url, method, payload, true)
      if (res.success) {
        toast.success(session ? "✅ Sessione aggiornata!" : "✅ Sessione creata!")
        closeModal()
        onSuccess?.()
      } else {
        toast.error(res.message || "Errore durante il salvataggio")
      }
    } catch {
      toast.error("Errore imprevisto")
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
            placeholder="Titolo della sessione"
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
            placeholder="Descrizione dettagliata"
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
            id="urlImg"
            type="url"
            name="urlImg"
            placeholder="https://esempio.com/immagine.jpg"
            value={form.urlImg}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="start" className="text-sm font-medium text-gray-700">
              Inizio
            </label>
            <DatePicker
              id="start"
              selected={form.start}
              onChange={(date) => setForm((prev) => ({ ...prev, start: date }))}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd-MM-yyyy HH:mm"
              locale={it}
              placeholderText="Seleziona data e ora di inizio"
              className="border w-full p-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="end" className="text-sm font-medium text-gray-700">
              Fine
            </label>
            <DatePicker
              id="end"
              selected={form.end}
              onChange={(date) => setForm((prev) => ({ ...prev, end: date }))}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd-MM-yyyy HH:mm"
              locale={it}
              placeholderText="Seleziona data e ora di fine"
              className="border w-full p-3 rounded-lg"
            />
          </div>
        </div>

        {/* Master */}
        <div className="flex flex-col gap-1">
          <label htmlFor="master" className="text-sm font-medium text-gray-700">
            Master
          </label>
          <Input
            id="master"
            name="master"
            placeholder="Nome del master"
            value={form.master}
            onChange={handleChange}
            required
          />
        </div>

        {/* Posti disponibili */}
        <div className="flex flex-col gap-1">
          <label htmlFor="availableSeats" className="text-sm font-medium text-gray-700">
            Posti disponibili
          </label>
          <Input
            id="availableSeats"
            type="number"
            min={1}
            name="availableSeats"
            placeholder="Numero di posti disponibili"
            value={form.availableSeats}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gioco di riferimento */}
        <div className="flex flex-col gap-1">
          <label htmlFor="gameReference" className="text-sm font-medium text-gray-700">
            Gioco di riferimento
          </label>
          <Input
            id="gameReference"
            name="gameReference"
            placeholder="Esempio: D&D 5e, Pathfinder..."
            value={form.gameReference}
            onChange={handleChange}
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

function runValidation(form: FormState): boolean {
  if (!form.title.trim() || !form.description.trim() || !form.master.trim()) {
    toast.error("Compila tutti i campi obbligatori")
    return false
  }
  if (!form.start || !form.end) {
    toast.error("Seleziona orari di inizio e fine")
    return false
  }
  if (form.end <= form.start) {
    toast.error("L'ora di fine deve essere successiva all'inizio")
    return false
  }
  if (!Number.isInteger(form.availableSeats) || form.availableSeats < 1) {
    toast.error("Posti disponibili deve essere un intero ≥ 1")
    return false
  }
  return true
}

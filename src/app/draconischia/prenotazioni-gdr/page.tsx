/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import { toast } from "@/lib/toast"

export default function PrenotazioniGDRPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    session: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/draconischia/sessioni-gdr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.error || "❌ Errore nella prenotazione")
        return
      }

      toast.success("✅ Prenotazione effettuata con successo!")
      setForm({ name: "", email: "", session: "" })
    } catch (err) {
      console.error(err)
      toast.error("❌ Impossibile connettersi al server.")
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Prenotazioni GDR - DraCon Ischia</h1>
      <p className="mb-8">
        Compila il modulo per prenotare la tua sessione gratuita di gioco di ruolo durante la Dracon Ischia.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Nome e Cognome</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Sessione</label>
          <select
            name="session"
            value={form.session}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">-- Seleziona una sessione --</option>
            <option value="sabato-mattina">Sabato mattina</option>
            <option value="sabato-pomeriggio">Sabato pomeriggio</option>
            <option value="sabato-sera">Sabato sera</option>
            <option value="domenica-mattina">Domenica mattina</option>
            <option value="domenica-pomeriggio">Domenica pomeriggio</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Prenota ora
        </button>
      </form>
    </main>
  )
}

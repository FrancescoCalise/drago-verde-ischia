"use client"
import { useState } from "react"
import { toast } from "@/lib/toast"

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (isSubmitting) return // evita doppi invii

  setIsSubmitting(true)
  toast.loading("Invio richiesta...")

  try {
    const res = await fetch("/api/auth/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email }),
    })

    const data = await res.json()
    toast.dismiss()

    if (!res.ok) {
      toast.error(data.error || "❌ Errore nell'invio della richiesta")
    } else {
      toast.success("✅ Se i dati sono corretti, ti abbiamo inviato un'email con il link per reimpostare la password.")
    }
  } catch (err: unknown) {
    toast.dismiss()
    if (err instanceof Error) {
      toast.error("Errore invio richiesta reset password:" + err.message)
      console.error("Errore invio richiesta reset password:", err.message)
    } else {
      toast.error("Errore sconosciuto")
      console.error("Errore sconosciuto:", err)
    }
  } finally {
    setIsSubmitting(false)
  }
  }


  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Password dimenticata</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full p-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 rounded w-full text-white ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isSubmitting ? "Invio in corso..." : "Invia link di reset"}
        </button>

      </form>
    </div>
  )
}

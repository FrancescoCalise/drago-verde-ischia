"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { httpFetchPublic } from "@/lib/http"

export default function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (password !== confirmPassword) {
      setError("Le password non coincidono")
      return
    }

    try {
      const res = await httpFetchPublic("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Errore reset password")
      } else {
        setSuccess("Password aggiornata con successo! 🚀")
        setTimeout(() => router.push("/login"), 2000)
      }
    } catch (err: unknown) {
      setError("Errore di connessione al server")
      if (err instanceof Error) {
        console.error("Errore reset password:", err.message)
      }
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Reset Password</h1>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="password"
          placeholder="Nuova password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2"
        />
        <input
          type="password"
          placeholder="Conferma nuova password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border w-full p-2"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded w-full text-white bg-green-600 hover:bg-green-700"
        >
          Reimposta
        </button>
      </form>
    </div>
  )
}

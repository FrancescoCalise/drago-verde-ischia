"use client"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "@/lib/toast"
import { httpFetchPublic } from "@/lib/http"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()

  toast.loading("Accesso in corso...")

  try {
    const res = await httpFetchPublic("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json()
    toast.dismiss()

    if (!res.ok) {
      toast.error(data.error || "❌ Errore durante il login")
      return
    }

    if (data.accessToken) {
    // salvo l’accessToken in localStorage
    localStorage.setItem("accessToken", data.accessToken)

    // aggiorno contesto utente (AuthContext usa useAuthToken)
    login(data.user, data.accessToken)

    toast.success("✅ Login effettuato con successo!")

    // redirect alla home
    router.push("/")
  } else {
    toast.error("❌ Nessun token ricevuto")
  }
  } catch (err: unknown) {
    toast.dismiss()
    if (err instanceof Error) {
      toast.error("❌ Errore di connessione al server:" + err.message)
      console.error("❌ Errore di connessione al server:", err.message)
    } else {
      toast.error("❌ Errore sconosciuto")
      console.error("❌ Errore sconosciuto:", err)
    }
  }
}

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>

      {/* Mostra errore se presente */}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Accedi
        </button>
      </form>

      <div className="mt-4 flex justify-between">
        <Link href="/register" className="text-blue-600">Registrati</Link>
        <Link href="/forgot-password" className="text-blue-600">Password dimenticata?</Link>
      </div>
    </div>
  )
}

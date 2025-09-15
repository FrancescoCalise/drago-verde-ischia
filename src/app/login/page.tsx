"use client"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  setError("")

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || "Errore durante il login")
      return
    }

    if (data.token) {
      // salvo il JWT nel localStorage
      localStorage.setItem("token", data.token)

      // aggiorno contesto utente
      login(data.user, data.token)

      // redirect alla home
      router.push("/")
    }
  } catch (err) {
    setError("Impossibile connettersi al server")
  }
}

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>

      {/* Mostra errore se presente */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

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

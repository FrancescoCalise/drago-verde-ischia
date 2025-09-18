"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { httpFetchPublic } from "@/lib/http"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"
import { toast } from "@/lib/toast"
import { useAuth } from "@/context/AuthContext"

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
        localStorage.setItem("accessToken", data.accessToken)
        login(data.user, data.accessToken)
        toast.success("✅ Login effettuato con successo!")
        router.push("/")
      } else {
        toast.error("❌ Nessun token ricevuto")
      }
    } catch (err: unknown) {
      toast.dismiss()
      if (err instanceof Error) {
        toast.error("❌ Errore di connessione: " + err.message)
      } else {
        toast.error("❌ Errore sconosciuto")
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            <T idml="login.title" defaultText="Accedi" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">
                <T idml="login.username" defaultText="Username" />
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                <T idml="login.password" defaultText="Password" />
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <T idml="login.button" defaultText="Accedi" />
            </Button>
          </form>

          <div className="mt-6 flex justify-between text-sm">
            <Link href="/register" className="text-blue-600 hover:underline">
              <T idml="login.register" defaultText="Registrati" />
            </Link>
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              <T idml="login.forgot" defaultText="Password dimenticata?" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

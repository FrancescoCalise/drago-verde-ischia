"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { httpFetchPublic } from "@/lib/http"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"
import { toast } from "@/lib/toast"
import { useAuth } from "@/context/AuthContext"
import { ResponsiveCard } from "@/components/ui/ResponsiveCard"

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
    <ResponsiveCard>
      <ResponsiveCard.Header className="text-center">
        <ResponsiveCard.Title className="text-5xl font-bold text-gray-800">
          <T idml="login.title" defaultText="Accedi" />
        </ResponsiveCard.Title>
      </ResponsiveCard.Header>
      <ResponsiveCard.Content>
        <form onSubmit={handleLogin} className="space-y-10">
          <div className="space-y-3">
            <Label htmlFor="username" className="text-xl">
              <T idml="login.username" defaultText="Username" />
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="h-14 text-xl"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-xl">
              <T idml="login.password" defaultText="Password" />
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-14 text-xl"
              required
            />
          </div>

          <Button type="submit" className="w-full text-xl py-5">
            <T idml="login.button" defaultText="Accedi" />
          </Button>
        </form>

        <div className="mt-12 flex justify-between text-lg">
          <Link href="/user/register" className="text-blue-600 hover:underline">
            <T idml="login.register" defaultText="Registrati" />
          </Link>
          <Link href="/user/forgot-password" className="text-blue-600 hover:underline">
            <T idml="login.forgot" defaultText="Password dimenticata?" />
          </Link>
        </div>
      </ResponsiveCard.Content>
    </ResponsiveCard>
)




}

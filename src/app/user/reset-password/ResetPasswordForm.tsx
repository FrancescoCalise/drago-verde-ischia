"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { httpFetchPublic } from "@/lib/http"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"
import { toast } from "@/lib/toast"
import { ResponsiveCard } from "@/components/ui/ResponsiveCard"

export default function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    if (password !== confirmPassword) {
      toast.error("Le password non coincidono")
      return
    }

    setLoading(true)
    toast.loading("Reimpostazione in corso...")

    try {
      const res = await httpFetchPublic("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json()
      toast.dismiss()

      if (!res.ok) {
        toast.error(data.error || "Errore reset password")
      } else {
        toast.success("Password aggiornata con successo!")
        setTimeout(() => router.push("/user/login"), 500)
      }
    } catch (err: unknown) {
      toast.dismiss()
      toast.error("Errore di connessione al server")
      if (err instanceof Error) {
        console.error("Errore reset password:", err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <ResponsiveCard>
      <ResponsiveCard.Header className="text-center">
        <ResponsiveCard.Title className="text-2xl font-bold text-gray-800">
          <T idml="reset.title" defaultText="Reset Password" />
        </ResponsiveCard.Title>
      </ResponsiveCard.Header>
      <ResponsiveCard.Content>
        <form onSubmit={handleReset} className="space-y-4">
          {/* Nuova password */}
          <div className="space-y-2">
            <Label htmlFor="password">
              <T idml="reset.password" defaultText="Nuova password" />
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Conferma password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              <T idml="reset.confirmPassword" defaultText="Conferma password" />
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Bottone submit */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <T idml="reset.loading" defaultText="Reimpostazione..." />
            ) : (
              <T idml="reset.submit" defaultText="Reimposta" />
            )}
          </Button>
        </form>
      </ResponsiveCard.Content>
    </ResponsiveCard>
)
}

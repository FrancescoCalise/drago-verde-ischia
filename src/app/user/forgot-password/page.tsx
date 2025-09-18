"use client"

import { useState } from "react"
import { toast } from "@/lib/toast"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

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
        toast.success(
          "✅ Se i dati sono corretti, ti abbiamo inviato un'email con il link per reimpostare la password."
        )
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
  <div className="flex justify-center items-start w-full px-4 py-12">
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg border rounded-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          <T idml="forgot.title" defaultText="Password dimenticata" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">
              <T idml="forgot.username" defaultText="Username" />
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              <T idml="forgot.email" defaultText="Email" />
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <T idml="forgot.sending" defaultText="Invio in corso..." />
            ) : (
              <T idml="forgot.submit" defaultText="Invia link di reset" />
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
)

}

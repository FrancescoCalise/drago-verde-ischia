"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"
import { ResponsiveCard } from "@/components/ui/custom/ResponsiveCard"
import { httpFetch } from "@/services/http/httpFetch"
import { useApiHandler } from "@/app/hooks/useApiHandler"

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const { handleResponse } = useApiHandler()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await httpFetch("/api/auth/forgot-password", "POST", { username, email }, false);
    handleResponse(res, null, "/user/login");   
  }

  return (
    <ResponsiveCard>
      <ResponsiveCard.Header className="text-center">
        <ResponsiveCard.Title className="text-2xl font-bold text-gray-800">
          <T idml="forgot.title" defaultText="Password dimenticata" />
        </ResponsiveCard.Title>
      </ResponsiveCard.Header>
      <ResponsiveCard.Content>
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

          <Button type="submit" className="w-full" > 
            <T idml="forgot.submit" defaultText="Invia link di reset" />
          </Button>
        </form>
      </ResponsiveCard.Content>
    </ResponsiveCard>
)

}


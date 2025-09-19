"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { T } from "@/components/ui/T"
import { toast } from "@/lib/toast"
import { ResponsiveCard } from "@/components/ui/custom/ResponsiveCard"
import { httpFetch } from "@/services/http/httpFetch"
import { useApiHandler } from "@/app/hooks/useApiHandler"

export default function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { handleResponse } = useApiHandler()

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Le password non coincidono")
      return
    }
    const body = { token, password };
    const res = await httpFetch("/api/auth/reset-password","POST", body, false);
    handleResponse(res, null, "/user/login");   
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
            <Button type="submit" className="w-full">
                <T idml="reset.confirm" defaultText="Conferma Nuova Password" />
            </Button>
          </form>
        </ResponsiveCard.Content>
      </ResponsiveCard>
  )
}

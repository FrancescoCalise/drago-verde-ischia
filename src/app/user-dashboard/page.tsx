"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

export default function UserDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  // 🔄 redirect se non loggato
  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null // Evita flicker mentre fa redirect
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Il tuo profilo</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <p><strong>👤 Nome:</strong> {user.name} {user.surname}</p>
        <p><strong>📧 Email:</strong> {user.email}</p>
        <p><strong>📛 Username:</strong> {user.username}</p>
        <p><strong>🎭 Ruolo:</strong> {user.role}</p>
      </div>
    </div>
  )
}

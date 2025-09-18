"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import {  AuthContextType } from "@/interfaces/AppUser"
import { setAccessToken, getValidToken } from "@/lib/authToken" 
import { AppUser } from "@/generated/prisma"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null)
  const [loading, setLoading] = useState(true)

  // Carica utente da localStorage all’avvio
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (user: AppUser, token: string) => {
    setUser(user)
    setAccessToken(token)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    setAccessToken(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, getValidToken, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve essere usato dentro AuthProvider")
  }
  return context
}

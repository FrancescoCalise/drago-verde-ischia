"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import {  AuthContextType } from "@/interfaces/AppUser"
import { setAccessToken, getValidToken } from "@/lib/authToken" 
import { AppUser } from "@/generated/prisma"
import { hideSpinner, showSpinner } from "@/lib/spinner"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    showSpinner();
    const stored = localStorage.getItem("user")
    if (stored) {
      setUser(JSON.parse(stored))
    }
    setLoading(false)
    hideSpinner();
  }, [])

  const login = (user: AppUser, token: string) => {
    setUser(user)
    setAccessToken(token)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const logout = async () => {
    setUser(null)
    setAccessToken(null)
    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include", // importante per mandare i cookie
      })
    } catch (err) {
      console.error("Errore nel logout:", err)
    }
  }
  
  const updateUser = (newUser: AppUser) => {
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, getValidToken, loading, updateUser }}>
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

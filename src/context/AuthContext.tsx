"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { setAccessToken, getValidToken } from "@/lib/authToken"

type User = {
  id: string
  username: string
  role: string
  name?: string
  surname?: string
  email?: string
} | null

type AuthContextType = {
  user: User | null
  login: (user: User, token: string) => void
  logout: () => void
  getValidToken: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // 🔄 Carica utente da localStorage all’avvio
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // 🔑 Login
  const login = (user: User, token: string) => {
    setUser(user)
    setAccessToken(token)
    localStorage.setItem("user", JSON.stringify(user))
  }

  // 🚪 Logout
  const logout = () => {
    setUser(null)
    setAccessToken(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, getValidToken }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook per usare il contesto
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve essere usato dentro AuthProvider")
  }
  return context
}

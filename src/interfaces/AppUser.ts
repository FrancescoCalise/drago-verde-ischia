import { AppUser } from "@/generated/prisma"

export type AuthContextType  = {
  user: AppUser | null
  login: (user: AppUser, token: string) => void
  logout: () => void
  getValidToken: () => Promise<string | null>
  loading: boolean
  updateUser: (newUser: AppUser) => void
}

export type JWTPayload = {
  id: string
  username: string
  role?: string
  exp: number
}
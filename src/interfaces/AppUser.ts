export type AppUser = {
  id: string
  username: string
  role: string
  name?: string
  surname?: string
  email?: string
}

export type AuthContextType  = {
  user: AppUser | null
  login: (user: AppUser, token: string) => void
  logout: () => void
  getValidToken: () => Promise<string | null>
  loading: boolean
}

export type JWTPayload = {
  id: string
  username: string
  role?: string
  exp: number
}
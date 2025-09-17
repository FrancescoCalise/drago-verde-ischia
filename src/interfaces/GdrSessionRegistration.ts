export interface GdrSessionRegistration {
  id: string
  userId: string
  user?: { username: string; email: string }
  sessionId: string
  created_at: string
  updated_at: string
}
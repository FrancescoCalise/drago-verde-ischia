export interface MainEventRegistration {
  id: string
  userId: string
  user?: { username: string; email: string }
  mainEventId: string
  created_at: string
  updated_at: string
}
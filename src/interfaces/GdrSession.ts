import { GdrSessionRegistration } from "./GdrSessionRegistration"

export interface GdrSession {
  id?: string
  title: string
  description: string
  urlImg: string
  start: Date | null
  end: Date | null
  master: string
  availableSeats: number
  gdrSessionRegistrations?: GdrSessionRegistration[] // array di prenotazioni collegate
  _count?: { gdrSessionRegistrations: number } // conteggio prenotazioni
}
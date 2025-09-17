import { Registration } from "./Registrations"

export interface MainEvent {
  id?: string
  title: string
  urlImg?: string
  description: string
  start: Date | null
  end: Date | null
  location: string
  price: number
  maxSeats: number
  note?: string
  registrations?: Registration[]
  _count?: { registrations: number } // conteggio registrazioni
}
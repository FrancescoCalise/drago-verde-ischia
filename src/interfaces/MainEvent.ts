import { MainEventRegistration } from "./MainEventRegistration"

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
  mainEventRegistrations?: MainEventRegistration[]
  _count?: { mainEventRegistrations: number } // conteggio registrazioni
}
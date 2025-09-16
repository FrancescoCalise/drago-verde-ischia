import { Registration } from "./Registrations"

export interface MainEvent {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  price: number
  maxSeats: number
  registrations: Registration[]
  _count: { registrations: number } // conteggio registrazioni
}
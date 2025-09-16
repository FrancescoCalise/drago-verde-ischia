import { Booking } from "./Booking"

export interface GdrSession {
  id: string
  title: string
  description: string
  urlImg: string
  start: string   // ISO string con data e ora inizio
  end: string     // ISO string con data e ora fine
  master: string
  availableSeats: number
  bookings: Booking[] // array di prenotazioni collegate
  _count: { bookings: number } // conteggio prenotazioni
}
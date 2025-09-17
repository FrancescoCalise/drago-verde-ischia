import { Booking } from "./Booking"

export interface GdrSession {
  id?: string
  title: string
  description: string
  urlImg: string
  start: Date | null  
  end: Date | null     
  master: string
  availableSeats: number
  bookings?: Booking[] // array di prenotazioni collegate
  _count?: { bookings: number } // conteggio prenotazioni
}
// src/interfaces/GdrSession.ts
import { GdrSession, GdrSessionRegistration, AppUser } from "@/generated/prisma"

export interface GdrSessionRegistrationExtended extends GdrSessionRegistration {
  user?: Pick<AppUser, "id" | "username" | "name" | "surname">
}

export interface GdrSessionExtended extends GdrSession {
  gdrSessionRegistrations?: GdrSessionRegistrationExtended[] // array di prenotazioni collegate con utente
  _count?: { gdrSessionRegistrations: number }               // conteggio prenotazioni
}

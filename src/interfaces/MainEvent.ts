// src/interfaces/MainEvent.ts
import { MainEvent, MainEventRegistration, AppUser } from "@/generated/prisma"

export interface MainEventRegistrationExtended extends MainEventRegistration {
  user?: Pick<AppUser, "id" | "username" | "name" | "surname">
}

export interface MainEventExtended extends MainEvent {
  mainEventRegistrations?: MainEventRegistrationExtended[]
  _count?: { mainEventRegistrations: number }
}

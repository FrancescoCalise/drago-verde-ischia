// src/app/api/draconischia/main-events/[id]/mainEventRegistration/route.ts
import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

// POST /api/draconischia/main-events/[id]/mainEventRegistration
export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response
    const user = auth.user as DecodedUser

    const { id: eventId } = await context.params

    // Recupero evento
    const event = await prisma.mainEvent.findUnique({
      where: { id: eventId },
      include: { mainEventRegistrations: true },
    })

    if (!event) {
      return errorResponse("main_event.not_found", "Evento non trovato", 404)
    }

    // Controllo posti disponibili
    if (event.mainEventRegistrations.length >= event.maxSeats) {
      return errorResponse("main_event.full", "Posti esauriti", 400)
    }

    // Controllo duplicato
    const already = await prisma.mainEventRegistration.findUnique({
      where: { userId_eventId: { userId: user.id, eventId } },
    })
    if (already) {
      return errorResponse(
        "main_event.already_registered",
        "Sei già iscritto a questo evento",
        400
      )
    }

    // 🔹 Controllo conflitti con sessioni GDR
    const userSessions = await prisma.gdrSessionRegistration.findMany({
      where: { userId: user.id },
      include: { session: true },
    })
    const hasConflictWithGdr = userSessions.some((s) => {
      const other = s.session
      return (
        new Date(event.start) < new Date(other.end) &&
        new Date(event.end) > new Date(other.start)
      )
    })

    // 🔹 Controllo conflitti con altri Main Event
    const userMainEvents = await prisma.mainEventRegistration.findMany({
      where: { userId: user.id },
      include: { event: true },
    })
    const hasConflictWithMain = userMainEvents.some((m) => {
      const other = m.event
      return (
        new Date(event.start) < new Date(other.end) &&
        new Date(event.end) > new Date(other.start)
      )
    })

    if (hasConflictWithGdr || hasConflictWithMain) {
      return errorResponse(
        "main_event.conflict",
        "Hai già un'attività prenotata in questo orario",
        400
      )
    }

    // 🔹 Crea registrazione
    const registration = await prisma.mainEventRegistration.create({
      data: { userId: user.id, eventId },
    })

    return successResponse(
      registration,
      "main_event.registration_success",
      "Iscrizione avvenuta con successo",
      201
    )
  } catch (err) {
    trackError(err, "POST /api/draconischia/main-events/[id]/mainEventRegistration")
    return errorResponse(
      "main_event.registration_error",
      "Errore durante l'iscrizione all'evento",
      500
    )
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response
    const user = auth.user as DecodedUser

    // ✅ estraggo l'id dal Promise
    const { id: eventId } = await context.params

    // Cerca la registrazione
    const registration = await prisma.mainEventRegistration.findUnique({
      where: { userId_eventId: { userId: user.id, eventId } },
    })

    if (!registration) {
      return errorResponse(
        "main_event.registration_not_found",
        "Nessuna iscrizione trovata",
        404
      )
    }

    // Cancella la registrazione
    await prisma.mainEventRegistration.delete({
      where: { id: registration.id },
    })

    return successResponse(
      null,
      "main_event.unregister_success",
      "Iscrizione cancellata con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/draconischia/main-events/[id]/mainEventRegistration")
    return errorResponse(
      "main_event.unregister_error",
      "Errore durante la cancellazione iscrizione",
      500
    )
  }
}


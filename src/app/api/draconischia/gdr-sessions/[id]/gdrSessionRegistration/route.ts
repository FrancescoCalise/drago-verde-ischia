import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response
    const user = auth.user as DecodedUser

    const { id: sessionId } = await context.params

    const session = await prisma.gdrSession.findUnique({
      where: { id: sessionId },
      include: { gdrSessionRegistrations: true },
    })

    if (!session) {
      return errorResponse("gdr_sessions.not_found", "Sessione non trovata", 404)
    }

    const postiDisponibili =
      session.availableSeats - session.gdrSessionRegistrations.length
    if (postiDisponibili <= 0) {
      return errorResponse("gdr_sessions.no_seats", "Posti esauriti", 400)
    }

    // 🔹 Verifica conflitto orario con altre sessioni GDR
    const userSessions = await prisma.gdrSessionRegistration.findMany({
      where: { userId: user.id },
      include: { session: true },
    })
    const hasConflictWithGdr = userSessions.some((b) => {
      const other = b.session
      return (
        new Date(session.start) < new Date(other.end) &&
        new Date(session.end) > new Date(other.start)
      )
    })

    // 🔹 Verifica conflitto orario con Main Events
    const userMainEvents = await prisma.mainEventRegistration.findMany({
      where: { userId: user.id },
      include: { event: true },
    })
    const hasConflictWithMain = userMainEvents.some((m) => {
      const other = m.event
      return (
        new Date(session.start) < new Date(other.end) &&
        new Date(session.end) > new Date(other.start)
      )
    })

    if (hasConflictWithGdr || hasConflictWithMain) {
      return errorResponse(
        "gdr_sessions.conflict",
        "Hai già un'attività prenotata in questo orario",
        400
      )
    }

    // 🔹 Controllo duplicata
    const already = session.gdrSessionRegistrations.find(
      (b) => b.userId === user.id
    )
    if (already) {
      return errorResponse(
        "gdr_sessions.already_registered",
        "Sei già iscritto a questa sessione",
        400
      )
    }

    // 🔹 Crea prenotazione
    const created = await prisma.gdrSessionRegistration.create({
      data: { sessionId, userId: user.id },
    })

    return successResponse(
      created,
      "gdr_sessions.registration_success",
      "Iscrizione completata con successo",
      201
    )
  } catch (err) {
    trackError(
      err,
      "POST /api/draconischia/gdr-sessions/[id]/gdrSessionRegistration"
    )
    return errorResponse(
      "gdr_sessions.registration_error",
      "Errore durante l'iscrizione",
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

    const { id: sessionId } = await context.params

    const reg = await prisma.gdrSessionRegistration.findFirst({
      where: { sessionId, userId: user.id },
    })

    if (!reg) {
      return errorResponse(
        "gdr_sessions.registration_not_found",
        "Nessuna prenotazione trovata",
        404
      )
    }

    await prisma.gdrSessionRegistration.delete({ where: { id: reg.id } })

    return successResponse(
      null,
      "gdr_sessions.cancel_success",
      "Prenotazione cancellata con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/draconischia/gdr-sessions/[id]/gdrSessionRegistration")
    return errorResponse("gdr_sessions.cancel_error", "Errore durante la cancellazione della prenotazione", 500)
  }
}

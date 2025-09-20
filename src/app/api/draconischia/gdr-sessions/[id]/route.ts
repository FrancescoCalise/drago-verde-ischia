import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"
import { errorResponse, successResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"
export const runtime = "nodejs"

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req, [UserRole.ADMIN])
    if (!auth.ok) return auth.response

    const { id } = await context.params
    const { title, description, urlImg, start, end, master, availableSeats, gameReference } =
      await req.json()

    // 🔹 Validazioni
    const startDt = new Date(start)
    const endDt = new Date(end)

    if (isNaN(startDt.getTime()) || isNaN(endDt.getTime())) {
      return errorResponse("gdr_sessions.invalid_dates", "Date non valide", 400)
    }
    if (endDt <= startDt) {
      return errorResponse(
        "gdr_sessions.invalid_time_range",
        "L'ora di fine deve essere successiva all'inizio",
        400
      )
    }

    const seats = Number(availableSeats)
    if (!Number.isInteger(seats) || seats < 1) {
      return errorResponse(
        "gdr_sessions.invalid_seats",
        "Posti disponibili non validi",
        400
      )
    }

    if (!gameReference) {
      return errorResponse(
        "gdr_sessions.missing_game_reference",
        "Il gioco di riferimento è obbligatorio",
        400
      )
    }

    // 🔹 Update
    const updated = await prisma.gdrSession.update({
      where: { id },
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        urlImg: urlImg ? String(urlImg).trim() : "",
        start: startDt,
        end: endDt,
        master: String(master).trim(),
        availableSeats: seats,
        gameReference: String(gameReference).trim(),
      },
    })

    return successResponse(
      updated,
      "gdr_sessions.update_success",
      "Sessione GDR aggiornata con successo",
      200
    )
  } catch (err) {
    trackError(err, "PUT /api/draconischia/gdr-sessions/[id]")
    return errorResponse("gdr_sessions.update_error", "Errore durante l'aggiornamento della sessione GDR", 500)
  }
}

// Delete Session (DELETE)
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req, [UserRole.ADMIN])
    if (!auth.ok) return auth.response

    const { id } = await context.params

    await prisma.gdrSession.delete({
      where: { id },
    })

    return successResponse(
      null,
      "gdr_sessions.delete_success",
      "Sessione eliminata con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/draconischia/gdr-sessions/[id]")
    return errorResponse(
      "gdr_sessions.delete_error",
      "Errore durante l'eliminazione della sessione",
      500
    )
  }
}

//api/draconischia/main-events/[id]/route.ts
// src/app/api/draconischia/main-events/[id]/route.ts
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

// PUT /api/draconischia/main-events/[id]
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req, [UserRole.ADMIN])
    if (!auth.ok) return auth.response

    const { id } = await context.params

    const body = await req.json()
    const { title, description, urlImg, start, end, location, price, maxSeats, note } = body

    const startDt = new Date(start)
    const endDt = new Date(end)

    if (isNaN(startDt.getTime()) || isNaN(endDt.getTime())) {
      return errorResponse("main_events.invalid_dates", "Date non valide", 400)
    }
    if (endDt <= startDt) {
      return errorResponse("main_events.invalid_time_range", "L'ora di fine deve essere successiva all'inizio", 400)
    }

    const seats = Number(maxSeats)
    if (!Number.isInteger(seats) || seats < 1) {
      return errorResponse("main_events.invalid_seats", "Posti disponibili non validi", 400)
    }

    const updated = await prisma.mainEvent.update({
      where: { id },
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        urlImg: urlImg ? String(urlImg).trim() : "",
        start: startDt,
        end: endDt,
        location: String(location).trim(),
        price: Number(price) || 0,
        maxSeats: seats,
        note: String(note || "").trim(),
      },
    })

    return successResponse(
      updated,
      "main_events.update_success",
      "Main Event aggiornato con successo",
      200
    )
  } catch (err) {
    trackError(err, "PUT /api/draconischia/main-events/[id]")
    return errorResponse(
      "main_events.update_error",
      "Errore durante l'aggiornamento del Main Event",
      500
    )
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req, [UserRole.ADMIN])
    if (!auth.ok) return auth.response

    const { id } = await context.params

    await prisma.mainEvent.delete({
      where: { id },
    })

    return successResponse(
      null,
      "main_events.delete_success",
      "Main Event eliminato con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/draconischia/main-events/[id]")
    return errorResponse(
      "main_events.delete_error",
      "Errore durante l'eliminazione del Main Event",
      500
    )
  }
}


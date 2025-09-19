// src/app/api/draconischia/gdr-sessions/route.ts
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export const runtime = "nodejs"

export async function GET() {
  try {
    const sessions = await prisma.gdrSession.findMany({
      orderBy: { start: "asc" },
      include: {
        gdrSessionRegistrations: true,
        _count: { select: { gdrSessionRegistrations: true } },
      },
    })

    return successResponse(
      sessions,
      "gdr_sessions.fetch_success",
      "Sessioni GDR recuperate con successo",
      200
    )
  } catch (err) {
    trackError(err, "GET /api/draconischia/gdr-sessions")
    return errorResponse("gdr_sessions.fetch_error", "Errore durante il recupero delle sessioni GDR", 500)
  }
}

export async function POST(req: Request) {
  try {
    const auth = await requireAuth(req, [UserRole.ADMIN])
    if (!auth.ok) return auth.response

    const { title, description, urlImg, start, end, master, availableSeats } =
      await req.json()

    // 🔹 Validazioni
    if (!title || !description || !start || !end || !master) {
      return errorResponse(
        "gdr_sessions.missing_fields",
        "Campi obbligatori mancanti",
        400
      )
    }

    const startDt = new Date(start)
    const endDt = new Date(end)
    if (isNaN(startDt.getTime()) || isNaN(endDt.getTime())) {
      return errorResponse(
        "gdr_sessions.invalid_dates",
        "Date non valide",
        400
      )
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

    // 🔹 Creazione
    const created = await prisma.gdrSession.create({
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        urlImg: urlImg ? String(urlImg).trim() : "",
        start: startDt,
        end: endDt,
        master: String(master).trim(),
        availableSeats: seats,
      },
    })

    return successResponse(
      created,
      "gdr_sessions.create_success",
      "Sessione GDR creata con successo",
      201
    )
  } catch (err) {
    trackError(err, "POST /api/draconischia/gdr-sessions")
    return errorResponse("gdr_sessions.create_error", "Errore durante la creazione della sessione GDR", 500)
  }
}

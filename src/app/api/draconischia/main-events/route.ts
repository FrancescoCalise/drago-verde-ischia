import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"
import { MainEvent } from "@/generated/prisma"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

// Lista eventi
export async function GET() {
  try {
    const events = await prisma.mainEvent.findMany({
      include: {
        mainEventRegistrations: true,
        _count: { select: { mainEventRegistrations: true } },
      },
      orderBy: { start: "asc" },
    })

    return successResponse(
      events,
      "main_events.fetch_success",
      "Eventi principali recuperati con successo",
      200
    )
  } catch (err) {
    trackError(err, "GET /api/draconischia/main-events")
    return errorResponse("main_events.fetch_error", "Errore durante il recupero degli eventi principali", 500)
  }
}

export async function POST(req: Request) {
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response

  try {
    const body = await req.json()
    const mainEventSchema: MainEvent = body

    // 🔹 Validazioni
    if (
      !mainEventSchema.title ||
      !mainEventSchema.description ||
      !mainEventSchema.start ||
      !mainEventSchema.end ||
      !mainEventSchema.location ||
      !mainEventSchema.note
    ) {
      return errorResponse(
        "main_events.missing_fields",
        "Campi obbligatori mancanti",
        400
      )
    }

    const created = await prisma.mainEvent.create({
      data: mainEventSchema,
    })

    return successResponse(
      created,
      "main_events.create_success",
      "Evento principale creato con successo",
      201
    )
  } catch (err) {
    trackError(err, "POST /api/draconischia/main-events")
    return errorResponse("main_events.create_error", "Errore durante la creazione dell'evento principale", 500)
  }
}

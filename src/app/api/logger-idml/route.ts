import prisma from "@/lib/prisma"
import i18n from "i18next"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { idml, defaultText } = body

    if (!idml) {
      return errorResponse("logger_idml.missing_idml", "Missing IDML", 400)
    }

    // 🔹 Salvo lingua corrente da i18n o default "it"
    const language = i18n.language || i18n.resolvedLanguage || "it"

    await prisma.loggerIDML.upsert({
      where: {
        IDML_language: { IDML: idml, language }, // @@unique
      },
      update: {
        description: defaultText,
      },
      create: {
        IDML: idml,
        description: defaultText,
        language,
      },
    })

    return successResponse(
      null,
      "logger_idml.save_success",
      "IDML salvato correttamente",
      200
    )
  } catch (err) {
    trackError(err, "POST /api/logger-idml")
    return errorResponse("logger_idml.save_error", "Errore durante il salvataggio dell'IDML", 500)
  }
}

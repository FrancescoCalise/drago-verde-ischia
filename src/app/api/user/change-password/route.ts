// src/app/api/user/change-password/route.ts
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export async function POST(req: Request) {
  try {
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response

    const currentUser = auth.user as DecodedUser
    if (!currentUser.id) {
      return errorResponse("user.unauthorized", "Non autorizzato", 401)
    }

    const { newPassword } = await req.json()
    if (!newPassword) {
      return errorResponse("user.password_missing", "Password mancante", 400)
    }
    if (newPassword.length < 6) {
      return errorResponse(
        "user.password_too_short",
        "Password troppo corta (minimo 6 caratteri)",
        400
      )
    }

    // Cripta la password come nel register
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.appUser.update({
      where: { id: currentUser.id },
      data: { password: hashedPassword },
    })

    return successResponse(
      null,
      "user.password_change_success",
      "Password aggiornata con successo",
      200
    )
  } catch (err) {
    trackError(err, "POST /api/user/change-password")
    return errorResponse("user.password_change_error", "Errore durante il cambio della password", 500)
  }
}

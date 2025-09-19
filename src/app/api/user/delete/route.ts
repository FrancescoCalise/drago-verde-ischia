import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export async function DELETE(req: Request) {
  try {
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response
    const currentUser = auth.user as DecodedUser

    if (!currentUser?.id) {
      return errorResponse("user.unauthorized", "Non autorizzato", 401)
    }

    const user = await prisma.appUser.findUnique({
      where: { id: currentUser.id },
    })

    if (!user) {
      return errorResponse("user.not_found", "Utente non trovato", 404)
    }

    // 🔹 Solo i guest possono eliminare l’account
    if ((user.role || "").toLowerCase() !== "guest") {
      return errorResponse(
        "user.delete_not_allowed",
        "Solo gli utenti guest possono eliminare l'account",
        403
      )
    }

    await prisma.appUser.delete({
      where: { id: currentUser.id },
    })

    return successResponse(
      null,
      "user.delete_success",
      "Account eliminato con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/user/delete-account")
    return errorResponse("user.delete_error", "Errore durante l'eliminazione dell'account", 500)
  }
}

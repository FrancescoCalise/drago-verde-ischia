import prisma from "@/lib/prisma"
import { sendMail } from "@/lib/mailer"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

export async function POST(req: Request) {
  const auth = await requireAuth(req)
  if (!auth.ok) return auth.response
  const currentUser = auth.user as DecodedUser

  try {
    const { newEmail } = await req.json()

    if (!newEmail) {
      return errorResponse(
        "user.change_email_missing",
        "Nuova email mancante",
        400
      )
    }

    const updatedUser = await prisma.appUser.update({
      where: { id: currentUser.id },
      data: { email: newEmail },
    })

    // 🔹 Email di conferma al nuovo indirizzo
    try {
      await sendMail({
        to: newEmail,
        subject: "Conferma cambio email",
        text: `Ciao ${updatedUser.name}, la tua email è stata aggiornata correttamente a questo indirizzo.`,
      })
    } catch (mailErr) {
      trackError(mailErr, "POST /api/user/change-email - sendMail")
      // non blocchiamo il cambio email se la mail di conferma fallisce
    }

    return successResponse(
      { email: updatedUser.email },
      "user.change_email_success",
      "Email aggiornata con successo",
      200
    )
  } catch (err) {
    trackError(err, "POST /api/user/change-email")
    return errorResponse("user.change_email_error", "Errore durante il cambio dell'email", 500)
  }
}

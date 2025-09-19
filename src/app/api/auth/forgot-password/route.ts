import prisma from "@/lib/prisma"
import jwt from "jsonwebtoken"
import { sendResetPasswordEmail } from "@/lib/mailer"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function POST(req: Request) {
  try {
  const body = await req.json()
  const { username, email } = body
  
  if (!username || !email) {
    return errorResponse("auth.missing_fields", "Username ed email sono obbligatori", 400)
  }
    // 🔹 Cerca utente
    const user = await prisma.appUser.findFirst({
      where: { username, email },
    })

    if (!user) {
      return errorResponse("auth.user_not_found", "Utente non trovato", 404)
    }

    // 🔹 Crea reset token
    const resetToken = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "15m" }
    )

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/user/reset-password?token=${resetToken}`

    // 🔹 Invia email
    try {
      await sendResetPasswordEmail(user.email, user.name, resetUrl)
    } catch (mailErr) {
      trackError(mailErr, "sendResetPasswordEmail - forgot-password")
    }

    return successResponse(
      null,
      "auth.reset_email_sent",
      "Email di reset inviata",
      200
    )
  }catch (err) {
    trackError(err, "POST /api/auth/forgot-password")
    return errorResponse("auth.reset_error", "Errore durante il processo di reset", 500);
  } 
}

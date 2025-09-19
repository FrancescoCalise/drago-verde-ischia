import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { sendPasswordChangedEmail } from "@/lib/mailer"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json()

    // Verifica token JWT
    let decoded: { id: string; email: string }
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string }
    } catch {
      return errorResponse("auth.reset_invalid_token", "Token non valido o scaduto", 401)
    }

    // Hash nuova password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Recupero utente
    const user = await prisma.appUser.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true },
    })

    if (!user) {
      return errorResponse("auth.user_not_found", "Utente non trovato", 404)
    }

    // Aggiorno password
    await prisma.appUser.update({
      where: { id: decoded.id },
      data: { password: hashedPassword },
    })

    // Invio email di conferma (non blocca la logica)
    try {
      await sendPasswordChangedEmail(user.email, user.name)
    } catch (mailErr) {
      trackError(mailErr, "POST /api/auth/reset-password - sendPasswordChangedEmail")
    }

    return successResponse(null, "auth.password_reset_success", "Password aggiornata con successo", 200)
  } catch (err) {
    trackError(err, "POST /api/auth/reset-password")
    return errorResponse("auth.reset_error", "Errore durante il processo di reset", 500)
  }
}

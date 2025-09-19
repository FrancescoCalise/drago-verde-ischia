import { hashPassword } from "@/lib/authUtils"
import { sendWelcomeEmail } from "@/lib/mailer"
import { successResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"
import prisma from "@/lib/prisma"
import { mapPrismaError } from "@/services/WrapperPrismaErrorHandler"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, surname, email, password, username, birthdate, phone_number } = body

    // Hash della password
    const hashedPassword = await hashPassword(password)

    // Creazione utente
    const user = await prisma.appUser.create({
      data: {
        username,
        password: hashedPassword,
        name,
        surname,
        birthdate: new Date(birthdate), // Prisma vuole una Date
        email,
        phone_number,
        role: "guest",
      },
    })

    // Invio email di benvenuto (non blocca la registrazione)
    try {
      await sendWelcomeEmail(user.email, user.username, user.name)
    } catch (mailErr) {
      trackError(mailErr, "POST /api/auth/register - sendWelcomeEmail")
      // non ritorniamo errore, perché l’utente è già creato
    }

    return successResponse(
      { username: user.username },
      "auth.register_success",
      "Registrazione completata con successo",
      201
    )
  } catch (err) {
    return mapPrismaError(err, "POST /api/auth/register")
  }
}


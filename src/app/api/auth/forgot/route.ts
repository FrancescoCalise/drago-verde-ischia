import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import { sendResetPasswordEmail } from "@/lib/mailer"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function POST(req: Request) {
  const { username, email } = await req.json()

  // Cerca utente nella tabella AppUser
  const user = await prisma.appUser.findFirst({
    where: {
      username,
      email,
    },
  })

  if (!user) {
    return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
  }

  const resetToken = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "15m" }
  )

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/user/reset-password?token=${resetToken}`

  try {
    await sendResetPasswordEmail(user.email, user.name, resetUrl)
  } catch (err) {
    console.error("Errore invio email reset:", err)
    return NextResponse.json({ error: "Errore invio email" }, { status: 500 })
  }

  return NextResponse.json({ message: "Email di reset inviata" })
}

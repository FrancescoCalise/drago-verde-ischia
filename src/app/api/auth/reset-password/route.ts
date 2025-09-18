import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { sendPasswordChangedEmail } from "@/lib/mailer"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function POST(req: Request) {
  const { token, password } = await req.json()

  try {
    // Verifica token JWT
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string }

    // Hash nuova password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Recupero utente da AppUser
    const user = await prisma.appUser.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true },
    })

    if (!user) {
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }

    // Aggiorno la password
    await prisma.appUser.update({
      where: { id: decoded.id },
      data: { password: hashedPassword },
    })

    // Invio email di conferma reset password
    try {
      await sendPasswordChangedEmail(user.email, user.name)
    } catch (mailErr) {
      console.error("Errore invio email conferma reset:", mailErr)
    }

    return NextResponse.json({ message: "Password aggiornata con successo" })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 401 })
    }
    return NextResponse.json({ error: "Errore sconosciuto" }, { status: 401 })
  }
}

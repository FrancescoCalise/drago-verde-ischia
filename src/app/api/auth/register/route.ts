import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hashPassword } from "@/lib/auth"
import { sendWelcomeEmail } from "@/lib/mailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, surname, email, password, username, birthdate, phone_number } = body

    // Hash della password
    const hashedPassword = await hashPassword(password)
    
    // Creazione utente su Prisma
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

    // Invio email di benvenuto
    try {
      await sendWelcomeEmail(user.email, user.username, user.name)
    } catch (mailErr) {
      console.error("Errore invio email:", mailErr)
    }

    return NextResponse.json(
      { message: "User registered successfully", username: user.username },
      { status: 201 }
    )
  } catch (err: unknown) {
    console.error("Errore registrazione utente:", err)
    return NextResponse.json(
      { error: (err as Error).message || "Errore nella registrazione" },
      { status: 500 }
    )
  }
}

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { verifyPassword } from "@/lib/auth"  // bcrypt.compare
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables")
    }

    // 🔎 Recupero utente da Prisma
    const user = await prisma.user.findUnique({
      where: { username },
    })

    if (!user) {
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }

    // 🔐 Verifica password
    const valid = await verifyPassword(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: "Credenziali non valide" }, { status: 401 })
    }

    // 🎟️ Genera JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    )

    // 📤 Restituisco al client
    return NextResponse.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
    })
  } catch (err: unknown) {
    console.error("Errore login:", err)
    return NextResponse.json(
      { error: (err as Error).message || "Errore durante il login" },
      { status: 500 }
    )
  }
}

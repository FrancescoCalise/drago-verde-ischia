import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyPassword } from "@/lib/auth"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!
const REFRESH_SECRET = process.env.REFRESH_SECRET!

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const user = await prisma.appUser.findUnique({
      where: { username },
    })

    if (!user) {
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }

    const valid = await verifyPassword(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: "Credenziali non valide" }, { status: 401 })
    }

    // genera access e refresh token
    const accessToken = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    )

    const refreshToken = jwt.sign(
      { id: user.id, username: user.username },
      REFRESH_SECRET,
      { expiresIn: "7d" }
    )

    // set cookie httpOnly col refresh token
    const response = NextResponse.json({
      accessToken,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
    })

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 giorni
    })

    return response
  } catch (err) {
    console.error("Login error:", err)
    return NextResponse.json({ error: "Errore durante il login" }, { status: 500 })
  }
}

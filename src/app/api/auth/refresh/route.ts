/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"

const JWT_SECRET = process.env.JWT_SECRET!
const REFRESH_SECRET = process.env.REFRESH_SECRET!

export async function POST(req: Request) {
  try {
    // leggo i cookie
    const cookieHeader = req.headers.get("cookie")
    const cookies: Record<string, string> = {}
    cookieHeader?.split(";").forEach((cookie) => {
      const [name, ...rest] = cookie.trim().split("=")
      cookies[name] = decodeURIComponent(rest.join("="))
    })

    const refreshToken = cookies["refreshToken"]
    if (!refreshToken) {
      return NextResponse.json({ error: "Refresh token mancante" }, { status: 401 })
    }

    // verifico refresh token
    let payload: any
    try {
      payload = jwt.verify(refreshToken, REFRESH_SECRET)
    } catch (err) {
      return NextResponse.json({ error: (err as Error).message }, { status: 403 })
    }

    // recupero utente dal DB
    const user = await prisma.appUser.findUnique({
      where: { id: payload.id },
      include: {
        GdrSessionRegistrations: { include: { session: true } },
        mainEventRegistrations: { include: { event: true } }
      }
    })
    if (!user) {
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }

    // creo nuovo access token
    const accessToken = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    )

    return NextResponse.json({ accessToken })
  } catch (err) {
    console.error("Errore refresh:", err)
    return NextResponse.json({ error: "Errore nel refresh" }, { status: 500 })
  }
}

// src/app/api/draconischia/gdr-sessions/route.ts
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import jwt from "jsonwebtoken"
export const runtime = "nodejs"
const JWT_SECRET = process.env.JWT_SECRET!

export async function GET() {
  try {
    const sessions = await prisma.gdrSession.findMany({
      orderBy: { start: "asc" },
      include: { 
        bookings: true,
        _count: {
        select: { bookings: true },
      } 
      },
    })
    return NextResponse.json(sessions, { status: 200 })
  } catch (err) {
    console.error("Errore fetch sessioni:", err)
    return NextResponse.json({ error: "Errore nel recupero sessioni" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // Autorizzazione (admin)
    const auth = req.headers.get("authorization") || ""
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null
    if (!token || !JWT_SECRET) {
      return NextResponse.json({ error: "Non autorizzato" }, { status: 401 })
    }
    const decoded = jwt.verify(token, JWT_SECRET) as { role?: string }
    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Permesso negato" }, { status: 403 })
    }

    const body = await req.json()
    const { title, description, urlImg, start, end, master, availableSeats } = body

    // Validazioni server
    if (!title || !description || !start || !end || !master) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }
    const startDt = new Date(start)
    const endDt = new Date(end)
    if (isNaN(startDt.getTime()) || isNaN(endDt.getTime())) {
      return NextResponse.json({ error: "Date non valide" }, { status: 400 })
    }
    if (endDt <= startDt) {
      return NextResponse.json({ error: "L'ora di fine deve essere successiva all'inizio" }, { status: 400 })
    }
    const seats = Number(availableSeats)
    if (!Number.isInteger(seats) || seats < 1) {
      return NextResponse.json({ error: "Posti disponibili non validi" }, { status: 400 })
    }

    // Create con Prisma
    const created = await prisma.gdrSession.create({
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        urlImg: urlImg ? String(urlImg).trim() : "",
        start: startDt,
        end: endDt,
        master: String(master).trim(),
        availableSeats: seats,
      },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err: unknown) {
    console.error("Errore creazione sessione:", err)
    const message = err instanceof Error ? err.message : "Errore server"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
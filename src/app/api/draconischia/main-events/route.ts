import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"

// 📌 Lista eventi
export async function GET() {
  try {
    const events = await prisma.mainEvent.findMany({
      include: { registrations: true, _count: { select: { registrations: true } } },
      orderBy: { date: "asc" },
    })
    return NextResponse.json(events)
  } catch (err) {
    console.error("Errore GET main-events:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const { user, error } = await requireAuth(req)
  if (error) return error
  if (user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 })
  }

  try {
    const body = await req.json()
    const { title, description, date, availableSeats, startTime, endTime, location, note } = body

    if (!title || !description || !date || !startTime || !endTime || !location || !note) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }

    const created = await prisma.mainEvent.create({
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        date: new Date(date),
        maxSeats: Number(availableSeats) || 0,
        startTime: String(startTime).trim(),
        endTime: String(endTime).trim(),
        location: String(location).trim(),
        note: String(note).trim(),
      },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    console.error("Errore POST main-events:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

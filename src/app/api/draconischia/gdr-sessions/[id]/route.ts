import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"

export const runtime = "nodejs"

// Update Session (PUT)
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await requireAuth(req, ["admin"])
    if (error) return error

    const { id } = await context.params
    const body = await req.json()
    const { title, description, urlImg, start, end, master, availableSeats } = body

    const startDt = new Date(start)
    const endDt = new Date(end)

    if (isNaN(startDt.getTime()) || isNaN(endDt.getTime())) {
      return NextResponse.json({ error: "Date non valide" }, { status: 400 })
    }
    if (endDt <= startDt) {
      return NextResponse.json({ error: "Fine deve essere dopo l'inizio" }, { status: 400 })
    }

    const seats = Number(availableSeats)
    if (!Number.isInteger(seats) || seats < 1) {
      return NextResponse.json({ error: "Posti disponibili non validi" }, { status: 400 })
    }

    const updated = await prisma.gdrSession.update({
      where: { id },
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        urlImg: urlImg ? String(urlImg).trim() : "",
        start: startDt,
        end: endDt,
        master: String(master).trim(),
        availableSeats: seats,
        updated_at: new Date(),
      },
    })

    return NextResponse.json(updated, { status: 200 })
  } catch (err) {
    console.error("Errore update sessione:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

// 🗑 Delete Session (DELETE)
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await requireAuth(req, ["admin"])
    if (error) return error

    const { id } = await context.params

    await prisma.gdrSession.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Sessione eliminata" }, { status: 200 })
  } catch (err) {
    console.error("Errore eliminazione sessione:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

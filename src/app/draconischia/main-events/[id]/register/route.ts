import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { user, error } = await requireAuth(req)
  if (error) return error

  const event = await prisma.mainEvent.findUnique({
    where: { id: params.id },
    include: { registrations: true }
  })
  if (!event) return NextResponse.json({ error: "Evento non trovato" }, { status: 404 })

  if (event.registrations.some(r => r.userId === user!.id)) {
    return NextResponse.json({ error: "Sei già iscritto" }, { status: 400 })
  }

  if (event.registrations.length >= event.maxSeats) {
    return NextResponse.json({ error: "Posti esauriti" }, { status: 400 })
  }

  const registration = await prisma.eventRegistration.create({
    data: { eventId: params.id, userId: user!.id }
  })

  return NextResponse.json(registration, { status: 201 })
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { user, error } = await requireAuth(req)
  if (error) return error

  await prisma.eventRegistration.deleteMany({
    where: { eventId: params.id, userId: user!.id }
  })

  return NextResponse.json({ message: "Iscrizione cancellata" }, { status: 200 })
}

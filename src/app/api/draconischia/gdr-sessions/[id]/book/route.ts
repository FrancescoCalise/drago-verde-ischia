import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await requireAuth(req)
    if (error) return error

    const { id: sessionId } = await context.params

    const session = await prisma.gdrSession.findUnique({
      where: { id: sessionId },
      include: { bookings: true },
    })

    if (!session) {
      return NextResponse.json({ error: "Sessione non trovata" }, { status: 404 })
    }

    const postiDisponibili = session.availableSeats - session.bookings.length
    if (postiDisponibili <= 0) {
      return NextResponse.json({ error: "Posti esauriti" }, { status: 400 })
    }

    // 🚨 Verifica conflitto orario
    const userBookings = await prisma.booking.findMany({
      where: { userId: user!.id },
      include: { session: true },
    })

    const hasConflict = userBookings.some((b) => {
      const other = b.session
      return (
        new Date(session.start) >= new Date(other.start) &&
        new Date(session.start) < new Date(other.end)
      )
    })

    if (hasConflict) {
      return NextResponse.json(
        { error: "Hai già una sessione prenotata in questo orario" },
        { status: 400 }
      )
    }

    // Controllo iscrizione duplicata
    const already = session.bookings.find((b) => b.userId === user!.id)
    if (already) {
      return NextResponse.json({ error: "Sei già iscritto a questa sessione" }, { status: 400 })
    }

    // Crea prenotazione
    const booking = await prisma.booking.create({
      data: { sessionId, userId: user!.id },
    })

    return NextResponse.json(booking, { status: 201 })
  } catch (err) {
    console.error("Errore iscrizione:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await requireAuth(req)
    if (error) return error

    const { id: sessionId } = await context.params

    // Controlla se l’utente ha una prenotazione
    const booking = await prisma.booking.findFirst({
      where: { sessionId, userId: user!.id },
    })

    if (!booking) {
      return NextResponse.json({ error: "Nessuna prenotazione trovata" }, { status: 404 })
    }

    // Cancella prenotazione
    await prisma.booking.delete({ where: { id: booking.id } })

    return NextResponse.json({ message: "Prenotazione cancellata" }, { status: 200 })
  } catch (err) {
    console.error("Errore cancellazione iscrizione:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

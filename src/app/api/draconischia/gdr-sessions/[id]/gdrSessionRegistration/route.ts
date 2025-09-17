import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response
    const user = auth.user as DecodedUser;

    const { id: sessionId } = await context.params

    const session = await prisma.gdrSession.findUnique({
      where: { id: sessionId },
      include: { gdrSessionRegistrations: true },
    })

    if (!session) {
      return NextResponse.json({ error: "Sessione non trovata" }, { status: 404 })
    }

    const postiDisponibili = session.availableSeats - session.gdrSessionRegistrations.length
    if (postiDisponibili <= 0) {
      return NextResponse.json({ error: "Posti esauriti" }, { status: 400 })
    }

    // Verifica conflitto orario
    const usergdrSessionRegistrations = await prisma.gdrSessionRegistration.findMany({
      where: { userId: auth.user!.id },
      include: { session: true },
    })

    const hasConflict = usergdrSessionRegistrations.some((b) => {
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
    const already = session.gdrSessionRegistrations.find((b) => b.userId === user.id)
    if (already) {
      return NextResponse.json({ error: "Sei già iscritto a questa sessione" }, { status: 400 })
    }

    // Crea prenotazione
    const gdrSessionRegistrations = await prisma.gdrSessionRegistration.create({
      data: { sessionId, userId: user.id },
    })

    return NextResponse.json(gdrSessionRegistrations, { status: 201 })
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
    const auth = await requireAuth(req)
    if (!auth.ok) return auth.response
    const user = auth.user as DecodedUser;

    const { id: sessionId } = await context.params

    // Controlla se l’utente ha una prenotazione
    const gdrSessionRegistrations = await prisma.gdrSessionRegistration.findFirst({
      where: { sessionId, userId: user.id },
    })

    if (!gdrSessionRegistrations) {
      return NextResponse.json({ error: "Nessuna prenotazione trovata" }, { status: 404 })
    }

    // Cancella prenotazione
    await prisma.gdrSessionRegistration.delete({ where: { id: gdrSessionRegistrations.id } })

    return NextResponse.json({ message: "Prenotazione cancellata" }, { status: 200 })
  } catch (err) {
    console.error("Errore cancellazione iscrizione:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

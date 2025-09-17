import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { MainEvent } from "@/generated/prisma"
import { UserRole } from "@/interfaces/UserRole"

// Lista eventi
export async function GET() {
  try {
    const events = await prisma.mainEvent.findMany({
      include: { mainEventRegistrations: true, _count: { select: { mainEventRegistrations: true } } },
      orderBy: { start: "asc" },
    })
    return NextResponse.json(events)
  } catch (err) {
    console.error("Errore GET main-events:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response;
  
  try {
    const body = await req.json()
    const mainEventSchema : MainEvent = body;

    if (!mainEventSchema.title || !mainEventSchema.description || !mainEventSchema.start || !mainEventSchema.end || !mainEventSchema.location || !mainEventSchema.note) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }

    const created = await prisma.mainEvent.create({
      data: mainEventSchema,
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    console.error("Errore POST main-events:", err)
    return NextResponse.json({ error: "Errore server" }, { status: 500 })
  }
}

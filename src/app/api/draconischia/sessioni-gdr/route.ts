// src/app/api/draconischia/sessioni-gdr/route.ts
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export const runtime = "nodejs"

export async function GET() {
  try {
    const sessions = await prisma.gdrSessions.findMany({
      orderBy: { date: "asc" },
    })
    return NextResponse.json(sessions, { status: 200 })
  } catch (err) {
    console.error("Errore fetch sessioni:", err)
    return NextResponse.json({ error: "Errore nel recupero sessioni" }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.newsArticle.update({
      where: { id: params.id },
      data: { shares: { increment: 1 } },
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: "Errore aggiornando share" }, { status: 500 })
  }
}

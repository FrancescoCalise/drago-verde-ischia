import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const auth = await requireAuth(req)
  if (!auth.ok) return auth.response

  const user = auth.user as DecodedUser

  try {
    await prisma.newsLike.create({
      data: { userId: user.id, articleId: params.id },
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Errore nel like:", err)
    return NextResponse.json({ error: "Errore nel like" }, { status: 500 })
  }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;

  const auth = await requireAuth(req)
  if (!auth.ok) return auth.response;
  const user = auth.user as DecodedUser;

  await prisma.newsLike.delete({
    where: { userId_articleId: { userId: user.id, articleId: params.id } }
  })
  return NextResponse.json({ success: true })
}

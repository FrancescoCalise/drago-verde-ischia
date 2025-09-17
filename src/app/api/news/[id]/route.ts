import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"

type Params = { params: { id: string } }

// UPDATE article
export async function PUT(req: Request, { params }: Params) {
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response;

  const body = await req.json()
  const article = await prisma.newsArticle.update({
    where: { id: params.id },
    data: body,
  })
  return NextResponse.json(article)
}

// DELETE article
export async function DELETE(req: Request, { params }: Params) {
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response;

  await prisma.newsArticle.delete({
    where: { id: params.id },
  })
  return NextResponse.json({ success: true })
}

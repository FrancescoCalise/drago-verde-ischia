import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"

// UPDATE article
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response

  const body = await req.json()
  const article = await prisma.newsArticle.update({
    where: { id: params.id },
    data: body,
  })
  return NextResponse.json(article)
}

// DELETE article
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response

  try {
    await prisma.newsLike.deleteMany({
      where: { articleId: params.id },
    })
    await prisma.newsArticle.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Errore eliminazione articolo:", err)
    return NextResponse.json({ error: "Errore durante l'eliminazione" }, { status: 500 })
  }
}

// GET article details
export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params
  const auth = await requireAuth(req)

  const userId = auth.user ? auth.user.id : null

  const article = await prisma.newsArticle.findUnique({
    where: { id: params.id },
    include: {
      author: { select: { name: true, surname: true } },
      _count: { select: { likes: true } }, // conteggio like
    },
  })

  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  let likedByUser = false
  if (userId) {
    const like = await prisma.newsLike.findUnique({
      where: {
        userId_articleId: {
          userId,
          articleId: article.id,
        },
      },
    })
    likedByUser = !!like
  }

  return NextResponse.json({
    ...article,
    likedByUser,
  })
}
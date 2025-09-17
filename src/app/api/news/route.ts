import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"

// GET all articles (public)
export async function GET() {
  const articles = await prisma.newsArticle.findMany({
    orderBy: { publishedAt: "desc" },
    include: {
      author: { select: { id: true, username: true, name: true } },
      _count: { select: { likes: true } }, // se usi la tabella relazionale
    },
  })
  return NextResponse.json(articles)
}

// POST create new article (admin only)
export async function POST(req: Request) {
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response;

  const body = await req.json()
  const { title, content, imageUrl, publishedAt } = body

  if (!auth.user?.id) {
    return NextResponse.json({ error: "Author ID is required" }, { status: 400 });
  }

  const article = await prisma.newsArticle.create({
    data: {
      title,
      content,
      imageUrl,
      publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
      authorId: auth.user.id,
    },
  })

  return NextResponse.json(article, { status: 201 })
}

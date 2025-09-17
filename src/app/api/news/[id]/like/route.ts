import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"

type Params = { params: { id: string } }

export async function POST(req: Request, { params }: Params) {
  const auth = await requireAuth(req, ["user", "admin"])
  if (!auth.ok) return NextResponse.json({ error: "Unauthorized" }, { status: 403 })

  const user = auth.user as DecodedUser;

  const userId = user.id;
  const articleId = params.id

  // toggle like
  const existing = await prisma.newsLike.findUnique({
    where: { userId_articleId: { userId, articleId } },
  })

  if (existing) {
    await prisma.newsLike.delete({ where: { id: existing.id } })
    return NextResponse.json({ liked: false })
  } else {
    await prisma.newsLike.create({ data: { userId, articleId } })
    return NextResponse.json({ liked: true })
  }
}

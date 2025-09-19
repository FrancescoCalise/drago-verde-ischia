import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

// 🔹 UPDATE article
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response

  try {
    const body = await req.json()
    const article = await prisma.newsArticle.update({
      where: { id },
      data: body,
    })

    return successResponse(
      article,
      "news.update_success",
      "Articolo aggiornato con successo",
      200
    )
  } catch (err) {
    trackError(err, "PUT /api/news/[id]")
    return errorResponse("news.update_error", "Errore durante l'aggiornamento dell'articolo", 500)
  }
}

// 🔹 DELETE article
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response

  try {
    await prisma.newsLike.deleteMany({ where: { articleId: id } })
    await prisma.newsArticle.delete({ where: { id } })

    return successResponse(
      null,
      "news.delete_success",
      "Articolo eliminato con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/news/[id]")
    return errorResponse("news.delete_error", "Errore durante l'eliminazione dell'articolo", 500)
  }
}

// 🔹 GET article details
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const auth = await requireAuth(req)

  const userId = auth.user ? auth.user.id : null

  try {
    const article = await prisma.newsArticle.findUnique({
      where: { id },
      include: {
        author: { select: { name: true, surname: true } },
        _count: { select: { likes: true } },
        likes: { select: { userId: true } },
      },
    })

    if (!article) {
      return errorResponse("news.not_found", "Articolo non trovato", 404)
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

    return successResponse(
      { ...article, likedByUser },
      "news.fetch_success",
      "Dettaglio articolo recuperato con successo",
      200
    )
  } catch (err) {
    trackError(err, "GET /api/news/[id]")
    return errorResponse("news.fetch_error", "Errore durante il recupero dell'articolo", 500)
  }
}

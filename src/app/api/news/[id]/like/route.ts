import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"
import { errorResponse, successResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

// 🔹 Aggiungi like
export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id: articleId } = await context.params
  const auth = await requireAuth(req)
  if (!auth.ok) return auth.response

  const user = auth.user as DecodedUser

  try {
    await prisma.newsLike.create({
      data: { userId: user.id, articleId },
    })

    return successResponse(
      null,
      "news.like_success",
      "Like aggiunto con successo",
      201
    )
  } catch (err) {
    trackError(err, "POST /api/news/[id]/likes")
    return errorResponse("news.like_error", "Errore durante l'aggiunta del like", 500)
  }
}

// 🔹 Rimuovi like
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id: articleId } = await context.params
  const auth = await requireAuth(req)
  if (!auth.ok) return auth.response

  const user = auth.user as DecodedUser

  try {
    await prisma.newsLike.delete({
      where: { userId_articleId: { userId: user.id, articleId } },
    })

    return successResponse(
      null,
      "news.unlike_success",
      "Like rimosso con successo",
      200
    )
  } catch (err) {
    trackError(err, "DELETE /api/news/[id]/likes")
    return errorResponse("news.unlike_error", "Errore durante la rimozione del like", 500)
  }
}

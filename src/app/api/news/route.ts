import prisma from "@/lib/prisma"
import { requireAuth } from "@/lib/authMiddleware"
import { UserRole } from "@/interfaces/UserRole"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

// 🔹 GET all articles (public)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const page = parseInt(searchParams.get("page") || "1", 10)
    const limit = parseInt(searchParams.get("limit") || "10", 10)
    const filterBy = searchParams.get("filterBy") || "title"
    const search = searchParams.get("search") || ""

    let where = {};
    const auth = await requireAuth(req)
    const userId = auth.ok && auth.user ? auth.user.id : null

    if (search) {
      if (filterBy === "title") {
        where = {
          title: { contains: search, mode: "insensitive" },
        }
      } else if (filterBy === "author") {
        where = {
          author: {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { surname: { contains: search, mode: "insensitive" } },
            ],
          },
        }
      } else if (filterBy === "date") {
        const day = new Date(search)
        if (!isNaN(day.getTime())) {
          const startOfDay = new Date(day)
          startOfDay.setHours(0, 0, 0, 0)

          const endOfDay = new Date(day)
          endOfDay.setHours(23, 59, 59, 999)

          where = {
            publishedAt: {
              gte: startOfDay,
              lte: endOfDay,
            },
          }
        }
      }
    }

    const [articles, total] = await Promise.all([
      prisma.newsArticle.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          author: { select: { id: true, name: true, surname: true } },
          _count: { select: { likes: true } },
          likes: { select: { userId: true } },
        },
      }),
      prisma.newsArticle.count({ where }),
    ])

    const formatted = articles.map((a) => ({
      ...a,
      likedByUser: userId ? a.likes.some((l) => l.userId === userId) : false,
    }))

    return successResponse(
      { articles: formatted, totalPages: Math.ceil(total / limit) },
      "news.fetch_success",
      "Lista articoli recuperata con successo",
      200
    )
  } catch (err) {
    trackError(err, "GET /api/news")
    return errorResponse("news.fetch_error", "Errore durante il recupero della lista articoli", 500)
  }
}

// 🔹 POST create new article (admin only)
export async function POST(req: Request) {
  const auth = await requireAuth(req, [UserRole.ADMIN])
  if (!auth.ok) return auth.response

  try {
    const body = await req.json()
    const { title, content, imageUrl, publishedAt } = body

    if (!auth.user?.id) {
      return errorResponse(
        "news.missing_author",
        "Author ID is required",
        400
      )
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

    return successResponse(
      article,
      "news.create_success",
      "Articolo creato con successo",
      201
    )
  } catch (err) {
    trackError(err, "POST /api/news")
    return errorResponse("news.create_error", "Errore durante la creazione dell'articolo", 500)
  }
}

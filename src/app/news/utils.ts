// src/hooks/useToggleLike.ts
"use client"

import { AppUser } from "@/generated/prisma"
import { NewsArticleExtend } from "@/interfaces/NewArticle"
import { httpFetch } from "@/services/http/httpFetch"
import { showError } from "@/lib/toast"

export async function toggleLikeRequest(
  user: AppUser | null,
  articleId: string,
  isLiked?: boolean
): Promise<boolean> {
  

  if (!user) {
    showError("Devi essere loggato per mettere like")
    return false
  }

  try {
    const method = isLiked ? "DELETE" : "POST"
    const res = await httpFetch(`/api/news/${articleId}/like`, method, null, true)

    if (res.success) {
      return true
    } else {
      return false
    }
  } catch {
    return false
  }
}

export function updateCurrentLike(
  articleId: string,
  articles: NewsArticleExtend[]
): NewsArticleExtend[] {
  const updated = articles.map((a) =>
    a.id === articleId
      ? {
          ...a,
          likedByUser: !a.likedByUser,
          _count: {
            ...a._count,
            likes: a.likedByUser
              ? a._count.likes - 1
              : a._count.likes + 1,
          },
        }
      : a
  )

  console.log("Articles after updateCurrentLike:", updated)
  return updated
}
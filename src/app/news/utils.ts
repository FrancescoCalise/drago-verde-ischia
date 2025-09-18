// src/hooks/useToggleLike.ts
"use client"

import { AppUser } from "@/generated/prisma"
import { httpFetch } from "@/lib/http"
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
    const res = await httpFetch(`/api/news/${articleId}/like`, { method })

    if (res.ok) {
      return true
    } else {
      showError("Errore nel mettere like")
      return false
    }
  } catch {
    showError("Errore di connessione")
    return false
  }
}

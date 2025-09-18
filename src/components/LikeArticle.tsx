"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { NewsArticleExtend } from "@/interfaces/NewArticle"
import { showError } from "@/lib/toast"
import { toggleLikeRequest } from "@/app/news/utils"

interface LikeArticleProps {
  article: NewsArticleExtend
  onToggled?: () => void
}

export default function LikeArticle({ article, onToggled }: LikeArticleProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    if (!user) {
      showError("Devi essere loggato per mettere like")
      return
    }
    if (!article.id) return

    setLoading(true)
    const success = await toggleLikeRequest(user, article.id, article.likedByUser)
    setLoading(false)

    if (success && onToggled) {
      onToggled()
    }
  }

  return user ? (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="flex items-center gap-1 text-red-500 hover:text-red-600 cursor-pointer disabled:opacity-50"
    >
      <Heart
        className="w-5 h-5"
        fill={article.likedByUser ? "currentColor" : "none"}
      />
      <span>{article._count?.likes ?? 0}</span>
    </button>
  ) : (
    <span className="text-gray-500 text-sm">
      ❤️ {article._count?.likes ?? 0}
    </span>
  )
}

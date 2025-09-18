import { NewsArticle } from "@/generated/prisma"


export interface NewsArticleExtend extends NewsArticle {
  likedByUser?: boolean
  _count: { likes: number }
  author?: { id: string; name: string; surname: string }
}

import { AppUser } from "@/generated/prisma"

export interface NewsLike {
  id?: string
  userId: string
  articleId: string
  createdAt?: Date
  user?: AppUser
}

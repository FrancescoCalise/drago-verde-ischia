import { AppUser } from "./AppUser"

export interface NewsLike {
  id?: string
  userId: string
  articleId: string
  createdAt?: Date
  user?: AppUser
}

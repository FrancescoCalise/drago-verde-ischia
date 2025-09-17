import { AppUser } from "./AppUser"
import { NewsLike } from "./NewsLike"

export interface NewsArticle {
  id?: string
  title: string
  content: string
  imageUrl?: string
  publishedAt: Date
  shares?: number
  authorId: string
  author?: AppUser
  likes?: NewsLike[] // lista utenti che hanno messo like
  _count?: { likes: number } // conteggio likes
  createdAt?: Date
  updatedAt?: Date,
  likedByUser?: boolean // se l'utente corrente ha messo like
}

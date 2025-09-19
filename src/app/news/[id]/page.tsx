"use client"

import { useCallback, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import {  showSuccess } from "@/lib/toast"
import { UserRole } from "@/interfaces/UserRole"
import { useModal } from "@/lib/modal"
import NewsArticleForm from "@/components/forms/NewsArticleForm"
import { NewsArticleExtend } from "@/interfaces/NewArticle"
import { updateCurrentLike } from "../utils"
import LikeArticle from "@/components/LikeArticle"
import { httpFetch } from "@/services/http/httpFetch"

export default function NewsArticlePage() {
  const { id } = useParams()
  const { user } = useAuth()
  const [article, setArticle] = useState<NewsArticleExtend | null>(null)
  const { openModal } = useModal();
  const router = useRouter()

  const fetchArticle = useCallback(async () => {
    try {
      const res = await httpFetch<NewsArticleExtend>(`/api/news/${id}`,"GET");
      if(res.success && res.data){
        setArticle(res.data);
      }
    } catch {

    }
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchArticle();
  }, [id, fetchArticle]);

  const handleDelete = async (id: string) => {
      try {
        const res = await httpFetch(`/api/news/${id}`, "DELETE",null, true);
        if(res.success){
          showSuccess("Articolo eliminato con successo")
          router.push("/news")
        }
      } catch {
        
      }
    }
  if (!article) return <p className="text-center py-20">Articolo non trovato</p>

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {article.author
          ? `${article.author.name} ${article.author.surname}`
          : "Anonimo"}{" "}
        • {new Date(article.publishedAt).toLocaleDateString("it-IT")}
      </p>

      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      <article
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/*Like*/}
      <div className="flex items-center gap-6 mt-8">
        <LikeArticle
          article={article}
          onToggled={() => 
          {
            const newA =  updateCurrentLike(article.id, [article])
            setArticle(newA[0]);
          }
          }
        />

        {/* 🔐 Pulsanti solo admin */}
        {user?.role === UserRole.ADMIN && (
        <div className="flex gap-2">
          <button
            onClick={() =>
              openModal(NewsArticleForm, "news.edit", "Modifica News", {
                article,
                onSuccess: () => fetchArticle(),
              })
            }
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            ✏️ Edit
          </button>
        
          <button
            onClick={() => article.id && handleDelete(article.id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            🗑️ Delete
          </button>
        </div>
        )}

      </div>
    </main>
  )
}

// src/components/LastNews.tsx
"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { T } from "@/components/ui/T"
import { NewArticleResponse, NewsArticleExtend } from "@/interfaces/NewArticle"
import LikeArticle from "./LikeArticle"
import { updateCurrentLike } from "@/app/news/utils"
import { httpFetch } from "@/services/http/httpFetch"
import { useApiHandler } from "@/app/hooks/useApiHandler"

interface LastNewsProps {
  numberOfArticles?: number
}

export default function LastNews({ numberOfArticles = 3 }: LastNewsProps) {
  const [articles, setArticles] = useState<NewsArticleExtend[]>([])
  const { handleResponse } = useApiHandler()

  const fetchArticle = useCallback(async () => {
      const res = await httpFetch<NewArticleResponse>(
        `/api/news?limit=${numberOfArticles}`,
        "GET",
        null,
        false
      )
  
      handleResponse(res, () => {
        const data = res.data as NewArticleResponse
        setArticles(data.articles)
      }, undefined, true)
  }, [numberOfArticles, handleResponse])

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <T idml="home.lastNews.title" defaultText="Ultime Notizie" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Link href={`/news/${article.id}`}>
                {article.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </Link>

              <div className="p-4 flex flex-col gap-2">
                <Link href={`/news/${article.id}`}>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-green-600">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-sm">
                  {new Date(article.publishedAt).toLocaleDateString("it-IT")}
                </p>

                <p className="text-gray-700 text-sm line-clamp-3">
                  {article.content.slice(0, 150)}...
                </p>

                {/* Like Section */}
                <LikeArticle
                  article={article}
                  onToggled={() => { 
                   const newA =  updateCurrentLike(article.id, articles)
                   
                   setArticles(newA);
                  }}
                />
                {/* Fine Like Section */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

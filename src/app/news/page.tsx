"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/interfaces/UserRole";
import { NewArticleResponse, NewsArticleExtend } from "@/interfaces/NewArticle";
import { useModal } from "@/lib/modal";
import NewsArticleForm from "@/components/forms/NewsArticleForm";
import { getOnlyDate } from "@/lib/manageDataUtils";
import LikeArticle from "@/components/LikeArticle";
import { httpFetch } from "@/services/http/httpFetch";
import { useApiHandler } from "../hooks/useApiHandler";

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticleExtend[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { handleResponse } = useApiHandler();
  const [search, setSearch] = useState("");
  type FilterType = "title" | "date" | "author";
  const [filterBy, setFilterBy] = useState<FilterType>("title");

  const { user } = useAuth();
  const { openModal } = useModal();

  const fetchArticles = useCallback(async () => {
    const res = await httpFetch<NewArticleResponse>(
      `/api/news?page=${page}&limit=10&filterBy=${filterBy}&search=${encodeURIComponent(search)}`,
      "GET",
      null,
      false
    )

    handleResponse(res, () => {
      const data = res.data as NewArticleResponse
      setArticles(data.articles)
      setTotalPages(data.totalPages)
    })
}, [page, search, filterBy, handleResponse])


  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleDelete = async (id: string) => {
      const res = await httpFetch(`/api/news/${id}`, "DELETE" , null, true);
      handleResponse(res, () => fetchArticles());
  };

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="/heroes/hero-news.jpg"
          alt="News Drago Verde Ischia"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-5xl md:text-6xl font-bold">Le nostre News</h1>
          <p className="mt-4 text-lg md:text-xl">
            Resta aggiornato su eventi, attività e novità
            dell&apos;associazione.
          </p>
        </div>
      </section>

      {/* Filtri + Pulsante Add */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Cerca..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded px-3 py-2 w-full md:w-64"
            />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as FilterType)}
              className="border rounded px-3 py-2"
            >
              <option value="title">Titolo</option>
              <option value="date">Data</option>
              <option value="author">Autore</option>
            </select>
          </div>

          {/* Pulsante visibile solo per Admin */}
          {user?.role === UserRole.ADMIN && (
            <button
              onClick={() =>
                openModal(NewsArticleForm, "news.add", "Aggiungi News", {
                  onSuccess: () => fetchArticles(),
                })
              }
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              ➕ Aggiungi News
            </button>
          )}
        </div>

        {/* Lista News */}
        {!articles || articles.length === 0 ? (
          <p className="text-gray-600">Nessuna news trovata.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48">
                  <img
                    src={article.imageUrl || "/placeholders/news.jpg"}
                    alt={article.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {getOnlyDate(article.publishedAt)}
                    <br></br>
                    {article.author
                      ? `${article.author.name} ${article.author.surname}`
                      : "Anonimo"}
                  </p>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {article.content}
                  </p>
                  <Link
                    href={`/news/${article.id}`}
                    className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 text-center"
                  >
                    Leggi tutto
                  </Link>

                  <div className="flex justify-between items-center mt-4">
                    {/*Like */}
                    <LikeArticle
                      article={article}
                      onToggled={fetchArticles} // ricarica lista articoli
                    />

                    {/* 🔐 Pulsanti solo admin */}
                    {user?.role === UserRole.ADMIN && (
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            openModal(
                              NewsArticleForm,
                              "news.edit",
                              "Modifica News",
                              {
                                article,
                                onSuccess: () => fetchArticles(),
                              }
                            )
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
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Paginazione */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            ← Precedente
          </button>
          <span>
            Pagina {page} di {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Successiva →
          </button>
        </div>
      </section>
    </main>
  );
}

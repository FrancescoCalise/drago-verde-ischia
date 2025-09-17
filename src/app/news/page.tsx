/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { showError, showSuccess } from "@/lib/toast";
import { useAuth } from "@/context/AuthContext";
import { httpFetch, httpFetchPublic } from "@/lib/http";
import { UserRole } from "@/interfaces/UserRole";
import { NewsArticle } from "@/interfaces/NewArticle";
import { useModal } from "@/lib/modal";
import NewsArticleForm from "@/components/forms/NewsArticleForm";
import { Heart } from "lucide-react";
import { getOnlyDate } from "@/lib/manageDataUtils";

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState<"title" | "date" | "author">(
    "title"
  );

  const { user } = useAuth();
  const { openModal } = useModal();

  useEffect(() => {
    fetchArticles();
  }, [page, search, filterBy]);

  const fetchArticles = async () => {
    try {
      const res = await httpFetchPublic(
        `/api/news?page=${page}&limit=10&filterBy=${filterBy}&search=${encodeURIComponent(
          search
        )}`
      );
      if (!res.ok) return;
      const data = await res.json();
      setArticles(data.articles || []);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
      showError("Errore nel caricamento delle news");
    }
  };
  const toggleLike = async (articleId: string) => {
    if (!user) {
      showError("Devi essere loggato per mettere like");
      return;
    }
    try {
      const isLiked = articles.find((a) => a.id === articleId)?.likedByUser;
      const method = isLiked ? "DELETE" : "POST";

      const res = await httpFetch(`/api/news/${articleId}/like`, { method });
      if (res.ok) {
        fetchArticles();
      }
    } catch {
      showError("Errore nel mettere like");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await httpFetch(`/api/news/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Errore eliminazione")
      showSuccess("Articolo eliminato con successo")
      fetchArticles()
    } catch (err) {
      console.error(err)
      showError("Errore durante l'eliminazione")
    }
  }

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
              onChange={(e) => setFilterBy(e.target.value as any)}
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
                    {user ? (
                      <button
                        onClick={() => article.id && toggleLike(article.id)}
                        className="flex items-center gap-1 text-red-500 hover:text-red-600 cursor-pointer"
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
                    )}

                    {/* 🔐 Pulsanti solo admin */}
                    {user?.role === UserRole.ADMIN && (
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          openModal(NewsArticleForm, "news.edit", "Modifica News", {
                            article,
                            onSuccess: () => fetchArticles(),
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

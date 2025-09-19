"use client"

import { useState } from "react"
import { showSuccess } from "@/lib/toast"
import { DatePicker } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { it } from "date-fns/locale"
import { useModal } from "@/lib/modal"
import { httpFetch } from "@/services/http/httpFetch"

interface NewsArticleFormProps {
  onSuccess?: () => void
  article?: {
    id?: string
    title: string
    content: string
    imageUrl?: string
    publishedAt?: string
  }
}

export default function NewsArticleForm({ onSuccess, article }: NewsArticleFormProps) {
  const isEdit = Boolean(article)
  const { closeModal } = useModal()

  const [title, setTitle] = useState(article?.title || "")
  const [content, setContent] = useState(article?.content || "")
  const [imageUrl, setImageUrl] = useState(article?.imageUrl || "")
  const [publishedAt, setPublishedAt] = useState(
    article?.publishedAt ? new Date(article.publishedAt) : null
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const method = isEdit ? "PUT" : "POST"
      const url = isEdit ? `/api/news/${article?.id}` : "/api/news"
      const body = JSON.stringify({
          title,
          content,
          imageUrl,
          publishedAt: publishedAt ? new Date(publishedAt) : undefined,
        });

      const res = await httpFetch(url, method, body, true);

      if (res.success) {
         showSuccess(isEdit ? "News aggiornata con successo" : "News creata con successo")
        closeModal()
        if (onSuccess) onSuccess()
      }
    } catch  {
    } finally {

    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Titolo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Contenuto</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Immagine (URL)</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
  <label className="block text-sm font-medium mb-1">Data pubblicazione</label>
    <DatePicker
        selected={publishedAt}
        onChange={(date) => setPublishedAt(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="dd-MM-yyyy HH:mm"
        locale={it}
        placeholderText="Seleziona data e ora"
        className="border w-full p-2 rounded"
    />
    </div>

      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {isEdit ? "Aggiorna News" : "Crea News"}
        </button>
      </div>
    </form>
  )
}

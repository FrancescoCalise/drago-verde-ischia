/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export default function FeaturedEvent() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/dracon-ischia.jpg"
            alt="DraCon Ischia"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Il nostro prossimo evento: </h3>
          <h2 className="text-3xl font-bold mb-4">DraCon Ischia</h2>

          <p className="mb-2 font-semibold">📅 11 e 12 Ottobre</p>
          <p className="mb-2 font-semibold">📍 Cittadella della Carità, Forio</p>
          <p className="text-gray-700 mb-6">
            Il festival del gioco e della cultura nerd che unisce l'isola d'Ischia.  
            Giochi da tavolo, di ruolo, tornei, cosplay, conferenze e tanto altro.
          </p>
          <Link
            href="/eventi/dracon-ischia"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500"
          >
            Tutti i dettagli sull'evento
          </Link>
        </div>
      </div>
    </section>
  )
}

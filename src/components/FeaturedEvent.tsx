"use client"

import Link from "next/link"
import Image from "next/image"
import { T } from "@/components/ui/T"

export default function FeaturedEvent() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Immagine evento */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/dracon-ischia.jpg"
            alt="DraCon Ischia"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dettagli evento */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-green-700">
            <T idml="featured.subtitle" defaultText="Il nostro prossimo evento" />
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <T idml="featured.title" defaultText="DraCon Ischia" />
          </h2>

          <p className="text-lg font-semibold">
            <T idml="featured.date" defaultText="📅 11 e 12 Ottobre" />
          </p>
          <p className="text-lg font-semibold">
            <T idml="featured.location" defaultText="📍 Cittadella della Carità, Forio" />
          </p>

          <p className="text-gray-600 leading-relaxed">
            <T
              idml="featured.description"
              defaultText="Il festival del gioco e della cultura nerd che unisce l'isola d'Ischia. Giochi da tavolo, di ruolo, tornei, cosplay, conferenze e tanto altro."
            />
          </p>

          <Link
            href="/draconischia"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition font-semibold"
          >
            <T idml="featured.cta" defaultText="Scopri tutti i dettagli" />
          </Link>
        </div>
      </div>
    </section>
  )
}

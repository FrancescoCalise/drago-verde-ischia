"use client"
import { T } from "@/components/ui/T"
import Image from "next/image"

export default function DraConStorytellingComponent() {
  return (
  <section className="relative py-6 bg-[url('/textures/manga-halftone.png')] bg-repeat text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Illustrazione con drago */}
          <div className="flex justify-center relative">
            <Image
              src="/illustrations/dragon-manga.png"
              alt="Drago Manga"
              width={250}
              height={250}
              className="drop-shadow-xl"
            />
            {/* Balloon stile manga */}
            <div className="absolute top-0 right-0 bg-white text-black px-4 py-2 rounded-full shadow-lg transform rotate-6">
              <span className="font-bold">🔥 Vivi l’avventura!</span>
            </div>
          </div>

          {/* Testo narrativo */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              <T idml="dracon.story.title" defaultText="Perché DraCon è speciale?" />
            </h2>
            <p className="text-lg text-black-200 leading-relaxed mb-4">
              <T
                idml="dracon.story.p1"
                defaultText="DraCon non è solo un evento, è un portale verso mondi fantastici. Per due giorni, Forio diventa l’isola del gioco e dell’immaginazione."
              />
            </p>
            <p className="text-lg text-black-200 leading-relaxed mb-4">
              <T
                idml="dracon.story.p2"
                defaultText="Entra nei panni di un eroe, sfida i draghi e incontra altri appassionati come te. Le storie che vivrai qui resteranno per sempre con te."
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

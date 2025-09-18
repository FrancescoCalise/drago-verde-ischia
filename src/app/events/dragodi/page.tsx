"use client"

import HeroBanner from "@/components/HeroBanner"
import { T } from "@/components/ui/T"
import Image from "next/image"

export default function DragodiPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroBanner
        images={["/events/serata-giochi.jpg"]}
        title={<T idml="dragodi.hero.title" defaultText="DragoDì - Serata gioco libero" />}
        subtitle={<T idml="dragodi.hero.subtitle" defaultText="Ogni Venerdì dalle ore 21:00" />}
        height="h-[40vh] md:h-[50vh]"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          <T
            idml="dragodi.intro"
            defaultText="Il nostro appuntamento fisso per tutti gli appassionati. Vieni a scoprire nuovi giochi o porta il tuo preferito e condividilo con la community."
          />
        </p>
      </section>

      {/* Sezione immagine + descrizione */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/events/dragodi-table.jpg"
            alt="Serata DragoDì"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T idml="dragodi.section1.title" defaultText="Un venerdì diverso ogni settimana" />
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <T
              idml="dragodi.section1.desc"
              defaultText="Durante le serate DragoDì troverai sempre nuovi giochi da provare: dai boardgame classici alle ultime novità, giochi di carte, party game e molto altro. Una serata perfetta per incontrare vecchi amici e fare nuove conoscenze."
            />
          </p>
        </div>
      </section>

      {/* Sezione community */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <T idml="dragodi.section2.title" defaultText="Una community che cresce insieme" />
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <T
              idml="dragodi.section2.desc"
              defaultText="DragoDì non è solo una serata di gioco, è un punto di incontro per chi ama divertirsi, condividere e scoprire nuovi mondi. Che tu sia un esperto giocatore o un principiante, troverai sempre un tavolo pronto ad accoglierti."
            />
          </p>
        </div>
      </section>
    </main>
  )
}

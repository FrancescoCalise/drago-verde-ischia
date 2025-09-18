"use client"

import HeroBanner from "@/components/HeroBanner"
import Image from "next/image"
import Link from "next/link"
import { T } from "@/components/ui/T"

export default function GameIslandPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Banner */}
      <HeroBanner
        images={["/events/game-island-forio.jpg"]}
        title={<T idml="gameIsland.hero.title" defaultText="Game Island Forio" />}
        subtitle={
          <T
            idml="gameIsland.hero.subtitle"
            defaultText="Il festival del gioco che unisce l’isola d’Ischia!"
          />
        }
        primaryCta={{
          label: <T idml="gameIsland.hero.cta" defaultText="Scopri le edizioni passate" />,
          href: "/events/game-island-forio/edizioni"
        }}
        height="h-[50vh]"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <T idml="gameIsland.intro.title" defaultText="Due giorni di gioco, fantasia e community" />
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <T
            idml="gameIsland.intro.text"
            defaultText="Game Island Forio è l’evento annuale dedicato al mondo dei giochi da tavolo, di ruolo e della cultura nerd. 
            Tornei, conferenze, cosplay e tanto divertimento per grandi e piccoli."
          />
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              img: "/events/highlights/boardgames.jpg",
              titleIdml: "gameIsland.highlights.boardgames",
              defaultTitle: "Giochi da Tavolo",
              descIdml: "gameIsland.highlights.boardgames.desc",
              defaultDesc: "Scopri centinaia di titoli e partecipa a demo e tornei."
            },
            {
              img: "/events/highlights/rpg.jpg",
              titleIdml: "gameIsland.highlights.rpg",
              defaultTitle: "Giochi di Ruolo",
              descIdml: "gameIsland.highlights.rpg.desc",
              defaultDesc: "Unisciti a campagne epiche e vivi avventure uniche."
            },
            {
              img: "/events/highlights/cosplay.jpg",
              titleIdml: "gameIsland.highlights.cosplay",
              defaultTitle: "Cosplay & Cultura Nerd",
              descIdml: "gameIsland.highlights.cosplay.desc",
              defaultDesc: "Partecipa alle sfilate, conferenze e agli incontri con ospiti speciali."
            }
          ].map((h, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image src={h.img} alt={h.defaultTitle} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <T idml={h.titleIdml} defaultText={h.defaultTitle} />
                </h3>
                <p className="text-gray-600">
                  <T idml={h.descIdml} defaultText={h.defaultDesc} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <T idml="gameIsland.cta.title" defaultText="Rivivi le edizioni passate" />
        </h2>
        <p className="text-lg mb-8">
          <T
            idml="gameIsland.cta.text"
            defaultText="Dai un’occhiata agli eventi degli anni precedenti e scopri cosa ti aspetta alla prossima edizione!"
          />
        </p>
        <Link
          href="/events/game-island-forio/edition"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          <T idml="gameIsland.cta.button" defaultText="Vai alle edizioni precedenti" />
        </Link>
      </section>
    </main>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import HeroBanner from "@/components/HeroBanner"
import { T } from "@/components/ui/T"

export default function EventsPage() {
  const eventi = [
    {
      img: "/events/serata-giochi.jpg",
      titleId: "events.dragodi.title",
      defaultTitle: "DragoDì - Serata gioco libero",
      dateId: "events.dragodi.date",
      defaultDate: "Ogni Venerdì dalle ore 21:00",
      descId: "events.dragodi.desc",
      defaultDesc: "Il nostro appuntamento fisso per tutti gli appassionati. Vieni a provare i nostri giochi o porta il tuo preferito!",
      link: "/events/dragodi",
      ctaId: "events.dragodi.cta",
      defaultCta: "Scopri di più",
    },
    {
      img: "/events/gdr.jpg",
      titleId: "events.roll.title",
      defaultTitle: "Roll & Role",
      dateId: "events.roll.date",
      defaultDate: "Ogni Giovedi dalle ore 21:00",
      descId: "events.roll.desc",
      defaultDesc: "Serata dedicata al gioco di ruolo.",
      link: "/events/roll-and-role",
      ctaId: "events.roll.cta",
      defaultCta: "Dettagli evento",
    },
    {
      img: "/events/game-island-forio.jpg",
      titleId: "events.gi.title",
      defaultTitle: "Game Island Forio",
      dateId: "events.gi.date",
      defaultDate: "Non in programma per il 2025",
      descId: "events.gi.desc",
      defaultDesc: "Il festival del gioco che unisce l'isola d'Ischia. Due giorni di tornei, incontri con autori e tanto divertimento.",
      link: "/events/game-island-forio",
      ctaId: "events.gi.cta",
      defaultCta: "Tutti i dettagli delle edizioni passate",
    },
  ]

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroBanner
        images={["/heroes/hero3.jpg"]}
        title={<T idml="events.hero.title" defaultText="I nostri eventi" />}
        subtitle={<T idml="events.hero.subtitle" defaultText="Il tuo calendario di gioco è qui. Non perderti nessun appuntamento!" />}
        height="h-[40vh] md:h-[50vh]"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          <T
            idml="events.intro"
            defaultText="Dalle nostre serate di gioco settimanali ai grandi tornei e festival annuali, l'associazione Drago Verde è sempre in movimento. Esplora il nostro calendario per scoprire i prossimi appuntamenti, le serate a tema e gli eventi speciali. Che tu sia un veterano o un novellino, c'è sempre un tavolo che ti aspetta."
          />
        </p>
      </section>

      {/* Griglia Eventi */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {eventi.map((evento, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={evento.img}
                  alt={evento.defaultTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">
                  <T idml={evento.titleId} defaultText={evento.defaultTitle} />
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  <T idml={evento.dateId} defaultText={evento.defaultDate} />
                </p>
                <p className="text-gray-600 mb-4 flex-grow">
                  <T idml={evento.descId} defaultText={evento.defaultDesc} />
                </p>
                <Link
                  href={evento.link}
                  className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 text-center"
                >
                  <T idml={evento.ctaId} defaultText={evento.defaultCta} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

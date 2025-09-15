/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"

export default function EventiPage() {
  const eventi = [
    {
      img: "/events/serata-giochi.jpg",
      title: "DragoDì - Serata gioco libero",
      date: "Ogni Venerdì dalle ore 21:00",
      desc: "Il nostro appuntamento fisso per tutti gli appassionati. Vieni a provare i nostri giochi o porta il tuo preferito!",
      link: "/eventi/dragodi",
      cta: "Scopri di più",
    },
    {
      img: "/events/gdr.jpg",
      title: "Roll & Role",
      date: "Ogni Giovedi dalle ore 21:00",
      desc: "Serata dedicata al gioco di ruolo.",
      link: "/eventi/roll-and-role",
      cta: "Dettagli evento",
    },
    {
      img: "/events/game-island-forio.jpg",
      title: "Game Island Forio",
      date: "Non in programma per il 2025",
      desc: "Il festival del gioco che unisce l'isola d'Ischia. Due giorni di tornei, incontri con autori e tanto divertimento.",
      link: "/eventi/game-island-forio",
      cta: "Tutti i dettagli delle edizioni passate",
    },
    {
      img: "/events/draconischia.jpg",
      title: "DraCon ischia",
      date: "11-12 Ottobre 2025",
      desc: "La nostra convention annuale. Un weekend interamente dedicato al gioco con tornei e tante sorprese.",
      link: "/draconischia",
      cta: "Tutti i dettagli",
    }
  ]

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/heroes/hero3.jpg"
          alt="Eventi Drago Verde Ischia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-5xl md:text-6xl font-bold">I nostri eventi</h1>
          <p className="mt-4 text-lg md:text-xl">
            Il tuo calendario di gioco è qui. Non perderti nessun appuntamento!
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Dalle nostre serate di gioco settimanali ai grandi tornei e festival annuali, 
          l'associazione Drago Verde è sempre in movimento. Esplora il nostro calendario per scoprire i prossimi appuntamenti, 
          le serate a tema e gli eventi speciali. Che tu sia un veterano o un novellino, 
          c'è sempre un tavolo che ti aspetta.
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
                  alt={evento.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{evento.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{evento.date}</p>
                <p className="text-gray-600 mb-4 flex-grow">{evento.desc}</p>
                <Link
                  href={evento.link}
                  className="mt-auto inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 text-center"
                >
                  {evento.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

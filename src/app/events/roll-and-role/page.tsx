import HeroBanner from "@/components/HeroBanner"
import { T } from "@/components/ui/T"
import Image from "next/image"
import Link from "next/link"

export default function RollAndRolePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroBanner
        images={["/events/gdr.jpg"]}
        title={
          <T
            idml="rollRole.hero.title"
            defaultText="Roll & Role – La nostra serata di gioco di ruolo"
          />
        }
        subtitle={
          <T
            idml="rollRole.hero.subtitle"
            defaultText="Ogni Giovedì sera, vivi epiche avventure e interpreta il tuo eroe"
          />
        }
        primaryCta={{
          label: <T idml="rollRole.hero.cta" defaultText="Partecipa alla prossima sessione" />,
          href: "/user/registerr",
        }}
        height="h-[40vh] md:h-[50vh]"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          <T
            idml="rollRole.intro"
            defaultText="Roll & Role è la serata dedicata agli amanti dei Giochi di Ruolo. Ogni giovedì ci incontriamo per vivere avventure indimenticabili, costruire mondi e interpretare personaggi straordinari."
          />
        </p>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            img: "/icons/dice.png",
            titleIdml: "rollRole.highlights.dice",
            title: "Tira i dadi",
            descIdml: "rollRole.highlights.diceDesc",
            desc: "Affronta sfide epiche e lascia che il destino sia deciso dai dadi.",
          },
          {
            img: "/icons/storytelling.png",
            titleIdml: "rollRole.highlights.storytelling",
            title: "Storie epiche",
            descIdml: "rollRole.highlights.storytellingDesc",
            desc: "Entra in mondi fantastici creati dai nostri Master e vivi avventure indimenticabili.",
          },
          {
            img: "/icons/community.png",
            titleIdml: "rollRole.highlights.community",
            title: "Community",
            descIdml: "rollRole.highlights.communityDesc",
            desc: "Gioca insieme a una community appassionata e accogliente.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              <T idml={item.titleIdml} defaultText={item.title} />
            </h3>
            <p className="text-gray-600">
              <T idml={item.descIdml} defaultText={item.desc} />
            </p>
          </div>
        ))}
      </section>

      {/* CTA finale */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <T
            idml="rollRole.cta.title"
            defaultText="Vuoi unirti alla prossima sessione?"
          />
        </h2>
        <p className="text-lg mb-8">
          <T
            idml="rollRole.cta.subtitle"
            defaultText="Registrati e preparati a vivere un’avventura unica ogni giovedì sera!"
          />
        </p>
        <Link
          href="/user/register"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          <T idml="rollRole.cta.button" defaultText="Unisciti ora" />
        </Link>
      </section>
    </main>
  )
}

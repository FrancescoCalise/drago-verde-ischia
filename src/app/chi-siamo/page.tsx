/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import { Users, Heart, Sparkles } from "lucide-react"

export default function ChiSiamoPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/chi-siamo/chi-siamo-cover.jpg"
          alt="Chi Siamo - Drago Verde Ischia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-5xl md:text-6xl font-bold">Chi Siamo</h1>
        </div>
      </section>

      {/* Sezione 1 - La nostra storia (logo a sinistra, testo a destra) */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Logo grande */}
        <div className="flex justify-center">
          <Image
            src="/logo-drago-verde-testo-nero.png"
            alt="Logo Drago Verde Ischia"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

        {/* Testo */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nati dalla passione, cresciuti con la community
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            L'associazione <b>Drago Verde Ischia A.P.S.</b> è nata nel 2022 dalla passione di un gruppo di amici per il gioco e la cultura geek.
            In pochi anni siamo diventati un punto di riferimento per chi vuole divertirsi, condividere e creare ricordi indimenticabili.
            La nostra forza è la community: persone che si incontrano, si conoscono e crescono insieme attraverso il gioco.
          </p>
        </div>
      </section>

      {/* Sezione 2 - La nostra missione */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Il nostro obiettivo: unire, ispirare, creare
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 max-w-3xl mx-auto">
            <li><span className="font-semibold">Unire le persone</span> – favorire la socializzazione e creare legami duraturi.</li>
            <li><span className="font-semibold">Ispirare la crescita</span> – stimolare creatività, pensiero critico e immaginazione.</li>
            <li><span className="font-semibold">Creare esperienze uniche</span> – proporre eventi, tornei e momenti di gioco indimenticabili.</li>
          </ul>
        </div>
      </section>

      {/* Sezione 3 - I nostri valori */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">I valori che ci guidano</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Users className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">Collaborazione</h3>
            <p className="mt-2 text-gray-600">
              Crediamo nella forza del gruppo e nel valore di fare squadra.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Heart className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">Passione</h3>
            <p className="mt-2 text-gray-600">
              Ogni attività nasce dall’amore per il gioco e la condivisione.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Sparkles className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">Creatività</h3>
            <p className="mt-2 text-gray-600">
              Promuoviamo fantasia e innovazione in ogni esperienza di gioco.
            </p>
          </div>
        </div>
      </section>

            {/* Sezione 4 - Il direttivo */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Il nostro direttivo</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Francesco Calise",
                role: "Presidente",
                img: "/team/directive1.jpg",
              },
              {
                name: "Giovan Giuseppe Pilato",
                role: "Vicepresidente",
                img: "/team/directive2.jpg",
              },
              {
                name: "Simone Pilato",
                role: "Consigliere",
                img: "/team/directive3.jpg",
              },
              {
                name: "Emanuel Romano",
                role: "Consigliere",
                img: "/team/directive4.jpg",
              },
              {
                name: "Vito Nicola Impagliazzo",
                role: "Consigliere",
                img: "/team/directive5.jpg",
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Sezione 5 - Call to Action */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vuoi far parte della nostra storia?
        </h2>
        <p className="text-lg mb-8">
          Unisciti al Drago Verde Ischia e diventa parte della nostra community!
        </p>
        <Link
          href="/user/register"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Entra nella community
        </Link>
      </section>
    </main>
  )
}

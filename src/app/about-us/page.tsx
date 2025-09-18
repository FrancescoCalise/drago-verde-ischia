"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Heart, Sparkles } from "lucide-react"
import HeroBanner from "@/components/HeroBanner"
import { T } from "@/components/ui/T"

export default function AboutUsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero con nuovo HeroBanner */}
      <HeroBanner
        images={["/about-us/about-us-cover.jpg"]}
        title={<T idml="about.hero.title" defaultText="Chi Siamo" />}
        subtitle={<T idml="about.hero.subtitle" defaultText="La storia, i valori e le persone dietro il Drago Verde" />}
        primaryCta={{
          label: <T idml="about.hero.cta" defaultText="Unisciti a Noi" />,
          href: "/register",
        }}
        height="h-[40vh] md:h-[50vh]"
      />

      {/* Sezione Storia */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
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
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T idml="about.story.title" defaultText="Nati dalla passione, cresciuti con la community" />
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <T
              idml="about.story.text"
              defaultText="L'associazione Drago Verde Ischia A.P.S. è nata nel 2022 dalla passione di un gruppo di amici per il gioco e la cultura geek..."
            />
          </p>
        </div>
      </section>

      {/* Missione */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <T idml="about.mission.title" defaultText="Il nostro obiettivo: unire, ispirare, creare" />
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 max-w-3xl mx-auto text-left">
            <li>
              <T idml="about.mission.unite" defaultText="Unire le persone – favorire la socializzazione e creare legami duraturi." />
            </li>
            <li>
              <T idml="about.mission.inspire" defaultText="Ispirare la crescita – stimolare creatività, pensiero critico e immaginazione." />
            </li>
            <li>
              <T idml="about.mission.create" defaultText="Creare esperienze uniche – proporre eventi e tornei indimenticabili." />
            </li>
          </ul>
        </div>
      </section>

      {/* Valori */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <T idml="about.values.title" defaultText="I valori che ci guidano" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Users className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">
              <T idml="about.values.collaboration" defaultText="Collaborazione" />
            </h3>
            <p className="mt-2 text-gray-600">
              <T idml="about.values.collaboration.text" defaultText="Crediamo nella forza del gruppo e nel valore di fare squadra." />
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Heart className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">
              <T idml="about.values.passion" defaultText="Passione" />
            </h3>
            <p className="mt-2 text-gray-600">
              <T idml="about.values.passion.text" defaultText="Ogni attività nasce dall’amore per il gioco e la condivisione." />
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Sparkles className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold">
              <T idml="about.values.creativity" defaultText="Creatività" />
            </h3>
            <p className="mt-2 text-gray-600">
              <T idml="about.values.creativity.text" defaultText="Promuoviamo fantasia e innovazione in ogni esperienza di gioco." />
            </p>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <T idml="about.cta.title" defaultText="Vuoi far parte della nostra storia?" />
        </h2>
        <p className="text-lg mb-8">
          <T idml="about.cta.text" defaultText="Unisciti al Drago Verde Ischia e diventa parte della nostra community!" />
        </p>
        <Link
          href="/register"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          <T idml="about.cta.button" defaultText="Entra nella community" />
        </Link>
      </section>
    </main>
  )
}

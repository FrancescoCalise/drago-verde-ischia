import Image from "next/image"
import Link from "next/link"
import { T } from "@/components/ui/T"

export default function FivePerMillePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/events/5x1000-cover.jpg"
          alt="5x1000 - Drago Verde Ischia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <T idml="fivepermille.title" defaultText="Dona il tuo 5×1000" />
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            <T
              idml="fivepermille.subtitle"
              defaultText="Un gesto semplice che fa crescere la nostra community."
            />
          </p>
        </div>
      </section>

      {/* Sezione informazioni */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          <T
            idml="fivepermille.howto"
            defaultText="Come destinare il tuo 5×1000"
          />
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <T
            idml="fivepermille.description"
            defaultText="Nella tua dichiarazione dei redditi (730, CU o Modello Redditi), firma nel riquadro 'Sostegno agli enti del Terzo Settore' e inserisci il nostro codice fiscale."
          />
        </p>
        <div className="bg-green-100 border border-green-300 rounded-lg p-6 inline-block">
          <p className="text-2xl font-bold text-green-700">
            <T
              idml="fivepermille.taxcode"
              defaultText="Codice Fiscale: 91017100636"
            />
          </p>
        </div>
      </section>

      {/* Sezione immagine esplicativa */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/events/5x1000-example.jpg"
            alt="Esempio compilazione 5x1000"
            width={800}
            height={400}
            className="rounded-lg shadow mx-auto"
          />
          <p className="mt-4 text-gray-600">
            <T
              idml="fivepermille.example"
              defaultText="Firma e inserisci il codice fiscale nell’apposito riquadro."
            />
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <T
            idml="fivepermille.cta.title"
            defaultText="Sostieni il Drago Verde Ischia"
          />
        </h2>
        <p className="text-lg mb-8">
          <T
            idml="fivepermille.cta.desc"
            defaultText="Con il tuo 5×1000 ci aiuti a organizzare eventi, tornei e attività che uniscono la community."
          />
        </p>
        <Link
          href="/contacts"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          <T idml="fivepermille.cta.button" defaultText="Contattaci per info" />
        </Link>
      </section>
    </main>
  )
}

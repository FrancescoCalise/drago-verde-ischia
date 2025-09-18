import Image from "next/image"
import { T } from "@/components/ui/T"

export default function DonationPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/events/donations-cover.jpg"
          alt="Donazioni - Drago Verde Ischia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <T idml="donation.title" defaultText="Sostieni Drago Verde Ischia" />
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            <T
              idml="donation.subtitle"
              defaultText="Ogni contributo ci aiuta a crescere e organizzare eventi per la community."
            />
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          <T idml="donation.howto" defaultText="Come puoi aiutarci" />
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <T
            idml="donation.description"
            defaultText="Le donazioni ci permettono di acquistare nuovi giochi, organizzare tornei, eventi e migliorare la nostra sede. Puoi fare una donazione singola o sostenere il Drago Verde con un contributo ricorrente."
          />
        </p>
      </section>

      {/* PayPal Button */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            <T idml="donation.paypal.title" defaultText="Dona con PayPal" />
          </h3>
          <p className="text-gray-600 mb-6">
            <T
              idml="donation.paypal.desc"
              defaultText="Un metodo sicuro e veloce per sostenerci."
            />
          </p>

          {/* Bottone PayPal */}
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="hosted_button_id" value="IL_TUO_BUTTON_ID" />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow transition"
            >
              <T idml="donation.paypal.button" defaultText="Dona con PayPal" />
            </button>
          </form>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <T
            idml="donation.cta.title"
            defaultText="Aiutaci a rendere il gioco accessibile a tutti!"
          />
        </h2>
        <p className="text-lg mb-8">
          <T
            idml="donation.cta.desc"
            defaultText="Ogni euro donato è un mattoncino per costruire eventi, amicizie e ricordi."
          />
        </p>
      </section>
    </main>
  )
}

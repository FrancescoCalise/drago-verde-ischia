"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { T } from "@/components/ui/T"

const PAYPAL_EMAIL = "dragoverdeischia@gmail.com"
const DEFAULT_CURRENCY = "EUR"

// Genera l’URL PayPal “Donate” con email, importo e valuta (se specificati)
function buildPayPalDonateUrl(email: string, amount?: number, currency = DEFAULT_CURRENCY) {
  const base = "https://www.paypal.com/donate"
  const params = new URLSearchParams({
    business: email,
    no_recurring: "0",      // consenti donazioni singole e ricorrenti (utente sceglie su PayPal)
    currency_code: currency // EUR di default
  })
  if (amount && amount > 0) {
    params.set("amount", String(amount))
  }
  return `${base}?${params.toString()}`
}

export default function DonationPage() {
  const [amount, setAmount] = useState<number | "">("")
  const [currency] = useState(DEFAULT_CURRENCY)

  const donateUrl = useMemo(
    () => buildPayPalDonateUrl(PAYPAL_EMAIL, typeof amount === "number" ? amount : undefined, currency),
    [amount, currency]
  )

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[38vh] md:h-[46vh] flex items-center justify-center text-center text-white overflow-hidden">
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
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <T idml="donation.howto" defaultText="Come puoi aiutarci" />
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          <T
            idml="donation.description"
            defaultText="Le donazioni ci permettono di acquistare nuovi giochi, organizzare tornei, eventi e migliorare la nostra sede."
          />
        </p>
      </section>

      {/* PayPal quick-donate */}
      <section className="bg-gray-50 w-full py-12">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            <T idml="donation.paypal.title" defaultText="Dona con PayPal" />
          </h3>
          <p className="text-gray-600 mb-6">
            <T
              idml="donation.paypal.desc"
              defaultText="Un metodo sicuro e veloce per sostenerci."
            />
          </p>

          {/* Preset importi */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[5, 10, 20, 50].map((v) => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                {v} {currency}
              </button>
            ))}
            <button
              onClick={() => setAmount("")}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              <T idml="donation.amount.custom" defaultText="Importo personalizzato" />
            </button>
          </div>

          {/* Input importo personalizzato */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <input
              type="number"
              min={1}
              step="1"
              value={amount === "" ? "" : amount}
              onChange={(e) => {
                const val = e.target.value
                setAmount(val === "" ? "" : Math.max(1, Number(val)))
              }}
              placeholder="10"
              className="w-32 px-3 py-2 rounded-lg border"
            />
            <span className="px-3 py-2 rounded-lg border bg-white">{currency}</span>
          </div>

          {/* Bottone PayPal (link) */}
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow transition"
          >
            <T idml="donation.paypal.button" defaultText="Dona con PayPal" />
          </a>

          {/* Nota mail */}
          <p className="text-xs text-gray-500 mt-4">
            <T
              idml="donation.paypal.note"
              defaultText="La donazione sarà inviata a dragoverdeischia@gmail.com tramite PayPal."
            />
          </p>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="text-center py-16 bg-green-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <T
            idml="donation.cta.title"
            defaultText="Grazie per il tuo supporto!"
          />
        </h2>
        <p className="text-base md:text-lg opacity-90">
          <T
            idml="donation.cta.desc"
            defaultText="Ogni euro è un tassello che ci aiuta a costruire nuovi eventi e momenti di gioco."
          />
        </p>
      </section>
    </main>
  )
}

/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Chi siamo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nata nel 2022 dalla passione di un gruppo di amici, l'associazione
            Drago Verde Ischia è il punto d’incontro per chi ama il gioco,
            l’immaginazione e l’amicizia. Organizziamo eventi, sessioni di GDR
            e tornei per unire la community nerd sull’isola.
          </p>
          <Link
            href="/about-us"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 font-semibold"
          >
            Scopri di più
          </Link>
        </div>
        <div className="relative">
          <Image
            src="/heroes/about.jpg"
            alt="Chi siamo"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>    
  )
}

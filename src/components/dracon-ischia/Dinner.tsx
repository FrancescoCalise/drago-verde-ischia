"use client"
import Image from "next/image"
import { T } from "@/components/ui/T"

export default function DraConDinnerComponent() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titolo */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          <T idml="dracon.dinner.title" defaultText="🍽️ Pausa Cena" />
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          <T
            idml="dracon.dinner.subtitle"
            defaultText="Dalle 20:00 alle 21:00 potrai cenare con noi! Quattro menù a scelta, solo 10€ ciascuno."
          />
        </p>

        {/* Menù Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Guerriero */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">
              <T idml="dracon.dinner.warrior" defaultText="🥩 Menù del Guerriero" />
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li>Panino (hamburger, cheddar, patatine, maionese)</li>
              <li>Patatine</li>
              <li>Bibita (Acqua, Coca-Cola, Fanta)</li>
            </ul>
          </div>

          {/* Chierico */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">
              <T idml="dracon.dinner.cleric" defaultText="🛡️ Menù del Chierico" />
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li>Panino (salsiccia, cheddar, patatine, maionese)</li>
              <li>Patatine</li>
              <li>Bibita (Acqua, Coca-Cola, Fanta)</li>
            </ul>
          </div>

          {/* Barbaro */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">
              <T idml="dracon.dinner.barbarian" defaultText="⚔️ Menù del Barbaro" />
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li>Panino (porchetta, cheddar, patatine, maionese)</li>
              <li>Patatine</li>
              <li>Bibita (Acqua, Coca-Cola, Fanta)</li>
            </ul>
          </div>

          {/* Druido */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">
              <T idml="dracon.dinner.druid" defaultText="🌿 Menù del Druido" />
            </h3>
            <ul className="text-gray-600 space-y-1">
              <li>Insalata</li>
              <li>Patatine</li>
              <li>Bibita (Acqua, Coca-Cola, Fanta)</li>
            </ul>
          </div>
        </div>

        {/* Sponsor */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium mb-4">
            <T idml="dracon.dinner.sponsor" defaultText="🍕 Sponsorizzato da Annunziata" />
          </p>
          <div className="flex justify-center items-center gap-4">
            <Image
              src="/sponsor/annunziata-logo.png"
              alt="Annunziata"
              width={120}
              height={120}
              className="object-contain"
            />
            <a
              href="https://instagram.com/annunziata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-semibold hover:underline"
            >
              @annunziata
            </a>
          </div>
        </div>

        {/* Nota ordini */}
        <div className="mt-8 text-red-600 font-semibold">
          <T
            idml="dracon.dinner.orders"
            defaultText="⚠️ Ordini in segreteria entro le 19:00 di ogni giorno"
          />
        </div>
      </div>
    </section>
  )
}

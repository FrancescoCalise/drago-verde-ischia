/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  // immagini dalla cartella /public/heroes
  const images = [
    "/heroes/hero1.jpg",
    "/heroes/hero2.jpg",
    "/heroes/hero3.jpg",
    "/heroes/hero4.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // cambia ogni 5 secondi
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-[50vh] md:h-[60vh] py-12 md:py-0 flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay con gradient (dal basso verso l’alto) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* Contenuto */}
      <div className="relative z-20 p-6 md:p-8 rounded-xl max-w-2xl bg-black/60">
        <h1 className="text-3xl md:text-5xl font-bold">
          Esplora mondi infiniti, a Ischia.
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-xl">
          L'associazione ludica Drago Verde è il tuo portale per il divertimento, la fantasia e la community.
          Giochi da tavolo, di ruolo, e molto altro ti aspettano.
        </p>
        <Link
          href="/eventi"
          className="mt-6 inline-block bg-green-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-green-500"
        >
          Scopri i nostri prossimi eventi
        </Link>
      </div>
    </section>
  )
}

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Chi siamo</h2>
        <p className="text-gray-700 mb-6">
          Nata nel 2022 dalla passione di un gruppo di amici, l'associazione Drago Verde Ischia ha come missione
          quella di creare una community e un luogo di aggregazione dedicato al gioco, alla fantasia e all’amicizia.
        </p>
        <Link href="/chi-siamo" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500">
          Scopri di più
        </Link>
      </div>
    </section>
  )
}

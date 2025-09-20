"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const sponsors = [
  {
    name: "La Cittadella della Carità don Pasquale Sferratore",
    logo: "/sponsors/placeholder.png",
  },
  {
    name: 'Associazione Ludica "Il Guiscardo Salerno"',
    logo: "/sponsors/placeholder.png",
  },
  {
    name: "Hotel Gran Paradiso",
    logo: "/sponsors/placeholder.png",
  },
  {
    name: "Annunziata",
    logo: "/sponsors/placeholder.png",
  },
]

export default function DraConSponsorsComponent() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          I Nostri Sponsor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition rounded-xl"
            >
              <CardContent className="flex flex-col items-center">
                <div className="w-28 h-28 relative mb-4">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-700 text-sm">
                  {sponsor.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { T } from "@/components/ui/T"

const activities = [
  {
    icon: "🎲",
    idml: "activities.boardgames.title",
    defaultTitle: "Giochi da Tavolo",
    idmlDesc: "activities.boardgames.desc",
    defaultDesc: "Centinaia di titoli per tutti i gusti, dai classici alle novità."
  },
  {
    icon: "⚔️",
    idml: "activities.rpg.title",
    defaultTitle: "Giochi di Ruolo",
    idmlDesc: "activities.rpg.desc",
    defaultDesc: "Vivi avventure epiche, interpreta il tuo eroe e forgia il destino."
  },
  {
    icon: "🃏",
    idml: "activities.cardgames.title",
    defaultTitle: "Giochi di Carte",
    idmlDesc: "activities.cardgames.desc",
    defaultDesc: "Sfide veloci, collezionabili e tornei sempre avvincenti."
  },
  {
    icon: "🏆",
    idml: "activities.events.title",
    defaultTitle: "Eventi & Tornei",
    idmlDesc: "activities.events.desc",
    defaultDesc: "Dalla serata settimanale fino al grande festival annuale."
  }
]

export default function Activities() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <T idml="activities.title" defaultText="Le Nostre Attività" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-white rounded-2xl shadow-lg border-4 border-green-600 p-6 text-center relative overflow-hidden"
            >
              {/* Glow border effetto manga */}
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent hover:border-green-400 transition" />

              <div className="text-5xl mb-4">{a.icon}</div>
              <h3 className="font-bold text-xl mb-2">
                <T idml={a.idml} defaultText={a.defaultTitle} />
              </h3>
              <p className="text-gray-600 text-sm">
                <T idml={a.idmlDesc} defaultText={a.defaultDesc} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client";
import { T } from "@/components/ui/T";
import Link from "next/link";

export default function DraConInfoSectionComponent() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <T
            idml="dracon.info.title"
            defaultText="Tutte le informazioni utili"
          />
        </h2>

        {/* Info Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              📍 <T idml="dracon.info.location" defaultText="Dove si svolge" />
            </h3>
            <p className="text-gray-600">
              <T
                idml="dracon.info.locationDesc"
                defaultText="Cittadella della Carità, Forio d’Ischia (NA)"
              />
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              🎟️{" "}
              <T
                idml="dracon.info.access"
                defaultText="Ingresso e prenotazioni"
              />
            </h3>
            <p className="text-gray-600">
              <T
                idml="dracon.info.accessDesc"
                defaultText="Ingresso gratuito. Prenotazione obbligatoria per GDR e tornei."
              />
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              📅 <T idml="dracon.info.program" defaultText="Programma" />
            </h3>
            <p className="text-gray-600 mb-3">
              <T
                idml="dracon.info.programDesc"
                defaultText="Scopri tutti gli appuntamenti e gli eventi speciali."
              />
            </p>
            <Link
              href="/draconischia/agenda"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition"
            >
              <T idml="dracon.info.cta" defaultText="Vai al Programma" />
            </Link>
          </div>

          {/* Nuova Card Data & Orario */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              ⏰ <T idml="dracon.info.dateTime" defaultText="Date e Orari" />
            </h3>
            <p className="text-gray-600">
              <T
                idml="dracon.info.dateTimeDesc"
                defaultText="11 e 12 Ottobre · dalle 15:00 alle 00:00"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

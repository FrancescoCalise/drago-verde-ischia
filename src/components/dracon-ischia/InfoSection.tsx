"use client";
import { T } from "@/components/ui/T";

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
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Location */}
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

          {/* Accesso */}
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
                defaultText="Ingresso gratuito. Prenotazione obbligatoria per GDR e tornei (a pagamento)."
              />
            </p>
          </div>

          {/* Programma */}
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
          </div>

          {/* Date & Orari */}
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

          {/* Pausa Cena */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              🍔 <T idml="dracon.info.dinner" defaultText="Pausa Cena" />
            </h3>
            <p className="text-gray-600">
              <T
                idml="dracon.info.dinnerDesc"
                defaultText="Dalle 20:00 alle 21:00"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

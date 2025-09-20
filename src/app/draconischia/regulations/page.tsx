"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function RegulationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-white via-green-50 to-green-100 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Titolo */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Regolamento dell&apos;Evento
        </h1>
        <p className="text-center text-gray-600">
          Prima di partecipare, ti invitiamo a leggere attentamente le regole e i comportamenti richiesti.
        </p>

        {/* Regole Generali */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">Regole Generali</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>Rispetta tutti i partecipanti, gli organizzatori e gli spazi messi a disposizione.</li>
              <li>Non sono tollerati comportamenti offensivi, discriminatori o molesti.</li>
              <li>L’evento è a <b>carattere gratuito</b> ed è sponsorizzato dall’associazione.</li>
              <li>Il servizio <b>Bar</b> è disponibile esclusivamente per gli utenti regolarmente associati.</li>
              <li>Eventuali danni arrecati a strutture o materiali saranno responsabilità del diretto interessato.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Regole Tornei */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">Regole dei Tornei</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Ogni torneo segue un regolamento specifico. Ti invitiamo a consultare i documenti ufficiali
              per conoscere le regole dettagliate, i formati di gioco e le modalità di iscrizione.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link
                  href="/docs/regolamento-altered.pdf"
                  target="_blank"
                  className="text-green-700 hover:underline font-medium"
                >
                  📄 Regolamento Torneo Altered (Draft 4 Skybound Odyssey)
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/regolamento-magic.pdf"
                  target="_blank"
                  className="text-green-700 hover:underline font-medium"
                >
                  📄 Regolamento Torneo Magic: Commander
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/regolamento-unmatched.pdf"
                  target="_blank"
                  className="text-green-700 hover:underline font-medium"
                >
                  📄 Regolamento Torneo Unmatched
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Nota Finale */}
        <div className="text-center text-gray-600 text-sm mt-8">
          ⚠️ L’organizzazione si riserva il diritto di modificare i regolamenti o le modalità di gioco
          per garantire il corretto svolgimento dell’evento.
        </div>
      </div>
    </main>
  )
}

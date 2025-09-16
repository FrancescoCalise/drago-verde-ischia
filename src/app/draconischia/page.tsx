/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { showError } from "@/lib/toast"
import { useRouter } from "next/navigation"

export default function DraconIschiaPage() {
  const { user } = useAuth()
  const router = useRouter()

  const handleManageEvent = () => {
    if (user?.role === "admin") {
      router.push("/draconischia/manage-event")
    } else {
      showError("❌ Non sei autorizzato")
      router.push("/draconischia")
    }
  }

  return (
    <main className="flex flex-col">
      {/* Gestione Evento (solo admin) */}
      {user && (
        <section className="bg-orange-500 text-white py-8 text-center">
          <button
            onClick={handleManageEvent}
            className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Gestione Evento
          </button>
        </section>
      )}

      {/* Header */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/dracon-ischia-cover.jpg"
          alt="Dracon Ischia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-5xl md:text-6xl font-bold">Dracon Ischia</h1>
          <p className="mt-4 text-xl md:text-2xl">
            La convention ludica ad ingresso gratuito
          </p>
          <p className="mt-2 text-lg">📅 11 e 12 Ottobre · 📍 Cittadella della Carità, Forio</p>
          <Link
            href="#programma"
            className="mt-6 inline-block bg-green-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-500"
          >
            Scopri il programma
          </Link>
        </div>
      </section>

      {/* Introduzione */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Dracon Ischia è molto più di un semplice evento: è un punto d'incontro
          per tutti gli amanti del gioco, del divertimento e della fantasia.
          L'ingresso è completamente gratuito, e per due giorni, la Cittadella
          della Carità si trasformerà in un portale verso mondi inesplorati.
          Preparati a vivere sfide epiche, a creare nuove amicizie e,
          soprattutto, a divertirti come non mai!
        </p>
      </section>

      {/* Aree di Gioco */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Le nostre aree di gioco</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">🎲 Giochi da Tavolo</h3>
              <p>
                Centinaia di titoli, dai classici intramontabili alle ultime
                novità. Tanti tavoli liberi pronti ad accogliere nuovi giocatori.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">🗡️ Giochi di Ruolo</h3>
              <p>
                Tante sessioni prenotabili e gratuite per principianti ed
                esperti. L'occasione perfetta per vivere avventure indimenticabili.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">🃏 Giochi di Carte</h3>
              <p>
                Uno spazio dove potrai provare nuovi giochi e divertirti con
                amici vecchi e nuovi.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/draconischia/gdr-sessions"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500"
            >
              Prenota la tua sessione GDR
            </Link>
          </div>
        </div>
      </section>

      {/* Main Events */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Metti alla prova le tue abilità!</h2>
        <p className="text-center text-lg mb-10 text-gray-700">
          I nostri eventi principali sono a numero chiuso e richiedono una quota di iscrizione.
          Prenota il tuo posto per non perderti l'opportunità di vincere fantastici premi!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Magic The Gathering</h3>
            <p>Torneo ufficiale. Iscrizione necessaria.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Altered</h3>
            <p>Sfida i migliori giocatori del momento. Iscrizione necessaria.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Unmatched</h3>
            <p>Dimostra che sei un vero campione. Iscrizione necessaria.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/draconischia/main-events"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500"
          >
            Iscriviti ai Main Events!
          </Link>
        </div>
      </section>

      {/* Evento Speciale: Cerca le sfere del drago */}
        <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">🐉 Cerca le sfere del drago</h2>
            <p className="text-gray-700 mb-6">
            Una grande avventura che metterà alla prova il tuo ingegno e la tua astuzia. 
            Indizi, enigmi e prove ti porteranno a scoprire le leggendarie sfere del drago.  
            <span className="font-semibold"> L’attività è a numero chiuso e richiede iscrizione con quota di partecipazione.</span>
            </p>
            <a
            href="/iscrizioni/caccia-al-tesoro"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
            >
            Iscrivi la tua squadra
            </a>
        </div>
        </section>

      {/* Informazioni utili */}
      <section id="programma" className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Informazioni utili</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">📅 Programma</h3>
            <p>Il programma dettagliato sarà pubblicato a breve.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🎟️ Ingresso</h3>
            <p>Accesso gratuito e aperto a tutti.</p>
          </div>
         <div>
        <h3 className="text-xl font-semibold mb-2">🗓️ Prenotazioni</h3>
        <p>
            Le <span className="font-semibold">sessioni GDR</span> sono gratuite ma con prenotazione obbligatoria.  
            I <span className="font-semibold">tornei</span> e l’attività speciale 
            <span className="font-semibold"> "Cerca le sfere del drago"</span> sono a pagamento e su prenotazione.  
            Assicurati di riservare il tuo posto in anticipo per non perderti nessuna esperienza!
        </p>
        </div>
         <div>
            <h3 className="text-xl font-semibold mb-2">📍 Come arrivare</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.3585247795293!2d13.8668248!3d40.7373107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f19.29!3m3!1m2!1s0x133b4185fd29711b%3A0x5916ac1dd7a0dbec!2sCittadella%20della%20Carit%C3%A0%20%22Don%20Pasquale%20Sferratore%22!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
      </section>
    </main>
  )
}

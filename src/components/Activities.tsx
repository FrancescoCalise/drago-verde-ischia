export default function Activities() {
  const activities = [
    { icon: "🎲", title: "Giochi da Tavolo", desc: "Centinaia di titoli, dal classico al più recente per ogni tipo di giocatore." },
    { icon: "⚔️", title: "Giochi di Ruolo", desc: "Vivi storie epiche, interpreta il tuo eroe e forgia il tuo destino." },
    { icon: "🃏", title: "Giochi di Carte", desc: "Dai classici ai collezionabili, sfide veloci e tornei avvincenti." },
    { icon: "🏆", title: "Eventi e Tornei", desc: "Incontri settimanali, serate a tema e il grande evento annuale Game Island Forio." },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Le Nostre Attività</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {activities.map((a, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg">
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="font-bold text-xl mb-2">{a.title}</h3>
              <p className="text-gray-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

// Eventi
interface Event {
  id: number
  title: string
  start?: string
  end?: string
  room: string
  roomColor: "red" | "blue" | "green"
  link?: string
}

const sabato: Event[] = [
  { id: 1, title: "Apertura", start: "15:00", room: "Ingresso", roomColor: "green" },
  { id: 2, title: "GDT LIBERO (tutto il pomeriggio)",  start: "sempre", room: "Tsuro", roomColor: "red" },
  { id: 3, title: "One-Shot Soft (Vedi le sessioni)", start: "17:00", end: "19:00", room: "Bahamut", roomColor: "blue", link: "/draconischia/gdr-sessions" },
  { id: 4, title: "Pausa Cena", start: "20:00", end: "21:00", room: "Area ristoro", roomColor: "green" },
  { id: 5, title: "One-Shot Hard (Vedi le sessioni)", start: "21:00", room: "Bahamut", roomColor: "blue", link: "/draconischia/gdr-sessions" },
  { id: 6, title: "Main Event Altered (Draft 4 Skybound Odyssey)", start: "21:30", room: "Nicol Bolas", roomColor: "green", link: "/draconischia/main-events" },
]

const domenica: Event[] = [
  { id: 1, title: "Apertura", start: "15:00", room: "Ingresso", roomColor: "green" },
  { id: 2, title: "GDT LIBERO (tutto il pomeriggio)", start: "sempre", room: "Tsuro", roomColor: "red" },
  { id: 3, title: "One-Shot Soft (Vedi le sessioni)", start: "17:00", end: "19:00", room: "Bahamut", roomColor: "blue", link: "/draconischia/gdr-sessions" },
  { id: 4, title: "Pausa Cena", start: "20:00", end: "21:00", room: "Area ristoro", roomColor: "green" },
  { id: 5, title: "Main Event Magic (Commander)", start: "19:00", room: "Nicol Bolas", roomColor: "green", link: "/draconischia/main-events" },
  { id: 6, title: "Main Event Torneo Unmatched!", start: "21:00", room: "Tsuro", roomColor: "red", link: "/draconischia/main-events" },
  { id: 7, title: "One-Shot Hard (Vedi le sessioni)", start: "21:00", room: "Bahamut", roomColor: "blue", link: "/draconischia/gdr-sessions" },
]

// Aree
const areas = [
  {
    id: "tsuro",
    name: "Tsuro (ROSSO)",
    img: "/areas/tsuro.jpg",
    description:
      "Tsuro richiama l’omonimo gioco da tavolo: tessere che tracciano percorsi, scelte rapide e l’obiettivo di restare in campo più a lungo degli avversari. Persi un passo, sei fuori strada: qui il fuoco della sfida è tutto nel trovare la via giusta.",
  },
  {
    id: "bahamut",
    name: "Bahamut (BLU)",
    img: "/areas/bahamut.jpg",
    description:
      "Bahamut, il Drago di Platino di D&D: simbolo di giustizia, saggezza e protezione dei draghi metallici. In quest’area le one-shot scorrono come un fiume: il blu invita a scegliere con onore, a proteggere il party e a sfidare il destino con coraggio.",
  },
  {
    id: "nicol-bolas",
    name: "Nicol Bolas (VERDE)",
    img: "/areas/nicol-bolas.jpg",
    description:
      "Nicol Bolas, l’antichissimo drago planeswalker di Magic: mente affilata, potere travolgente, ambizione senza limiti. L’area verde è il terreno dei grandi eventi competitivi: strategia, controllo e mosse che cambiano la partita.",
  },
]


// Helpers
const getRoomColor = (color: Event["roomColor"]) => {
  switch (color) {
    case "red":
      return "text-red-600"
    case "blue":
      return "text-blue-600"
    case "green":
      return "text-green-600"
    default:
      return "text-gray-600"
  }
}

function EventItem({ event }: { event: Event }) {
  const content = (
    <div className={`flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition ${
      event.link ? "cursor-pointer" : ""
    }`}>
      <div className="flex flex-col items-center justify-center min-w-[60px] text-sm font-medium text-gray-700">
        <Clock className="h-4 w-4 text-gray-500" />
        <span>
          {event.start}
          {event.end && ` - ${event.end}`}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-800">{event.title}</h3>
        <div className={`flex items-center gap-2 text-sm ${getRoomColor(event.roomColor)}`}>
          <MapPin className="h-4 w-4" />
          <span>{event.room}</span>
        </div>
      </div>
    </div>
  )

  return event.link ? (
    <Link href={event.link} className="block">
      {content}
    </Link>
  ) : (
    content
  )
}

export default function AgendaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100 py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
        Programma
      </h1>

      {/* Programma */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full mb-16">
        {/* Sabato */}
        <Card className="bg-white shadow-md rounded-2xl border border-gray-200">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              Sabato
            </CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-gray-200">
            {sabato.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </CardContent>
        </Card>

        {/* Domenica */}
        <Card className="bg-white shadow-md rounded-2xl border border-gray-200">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              Domenica
            </CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-gray-200">
            {domenica.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Aree */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Le Aree del DraCon
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {areas.map((area) => (
          <Card
            key={area.id}
            className="bg-white shadow-md rounded-2xl border border-gray-200 overflow-hidden"
          >
            <div className="relative h-40 w-full">
              <Image
                src={area.img}
                alt={area.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {area.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

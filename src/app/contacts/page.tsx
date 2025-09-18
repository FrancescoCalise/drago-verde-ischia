"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
} from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "@/lib/toast"
import { T } from "@/components/ui/T"
import HeroBanner from "@/components/HeroBanner"

export default function ContactsPage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [emailError, setEmailError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setEmailError(emailRegex.test(value) ? "" : "Email non valida")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.loading("Invio in corso...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      })

      toast.dismiss()
      if (res.ok) {
        toast.success("✅ Messaggio inviato con successo!")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setCaptchaToken(null)
      } else {
        const data = await res.json()
        toast.error(data.error || "❌ Errore durante l'invio, riprova più tardi.")
      }
    } catch (error) {
      toast.dismiss()
      toast.error("❌ Impossibile inviare il messaggio. Riprova più tardi.")
    }
  }

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    !emailError &&
    formData.message.trim() &&
    captchaToken !== null

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroBanner
        images={["/contacts/contact-cover.jpg"]}
        title={<T idml="contacts.title" defaultText="Contattaci" />}
        subtitle={
          <T
            idml="contacts.subtitle"
            defaultText="Per qualsiasi informazione, proposta o anche solo per salutarci, scrivici!"
          />
        }
        height="h-[35vh] md:h-[45vh]"
      />

      {/* Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo-drago-verde-testo-nero.png"
              alt="Logo Drago Verde Ischia"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold mb-6">
            <T idml="contacts.direct" defaultText="I nostri riferimenti diretti" />
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-green-600" />
              <span>dragoverdeischia@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-green-600" />
              <span>+39 3505731491</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-green-600" />
              <span>Piazza Maria S. Immacolata, 80075 Forio (NA)</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">
            <T idml="contacts.follow" defaultText="Seguici sui social" />
          </h3>
          <div className="flex gap-6 text-green-600">
            <Link href="https://www.instagram.com/dragoverdeischia" target="_blank">
              <Instagram className="w-7 h-7 hover:text-green-800 transition" />
            </Link>
            <Link href="https://www.facebook.com/DragoVerdeIschia" target="_blank">
              <Facebook className="w-7 h-7 hover:text-green-800 transition" />
            </Link>
            <Link href="https://wa.me/393505731491" target="_blank">
              <MessageCircle className="w-7 h-7 hover:text-green-800 transition" />
            </Link>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            <T idml="contacts.form.title" defaultText="Inviaci un messaggio" />
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                <T idml="contacts.form.name" defaultText="Nome e Cognome" />
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                <T idml="contacts.form.email" defaultText="Indirizzo Email" />
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600 ${
                  emailError ? "border-red-500" : ""
                }`}
                required
              />
              {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700">
                <T idml="contacts.form.subject" defaultText="Oggetto" />
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">
                <T idml="contacts.form.message" defaultText="Messaggio" />
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptchaToken}
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <T idml="contacts.form.submit" defaultText="Invia Messaggio" />
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full px-6 md:px-0 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">
          <T idml="contacts.map.title" defaultText="Dove trovarci" />
        </h2>
        <div className="w-full h-[250px] md:h-[400px] mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.3585247795293!2d13.856302815348408!3d40.73765097932821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b6d292f9e5f2b%3A0x4b55c79c7e6e1184!2sPiazza%20Maria%20Santissima%20Immacolata%2C%2080075%20Forio%20NA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps?q=Piazza+Maria+Santissima+Immacolata,+80075+Forio+NA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
        >
          <T idml="contacts.map.cta" defaultText="Apri su Google Maps" />
        </a>
      </section>
    </main>
  )
}

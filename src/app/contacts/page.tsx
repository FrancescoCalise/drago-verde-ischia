"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "@/lib/toast";

export default function ContactsPage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");

  // Stato dei campi
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Email non valida");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast.loading("Invio in corso...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      toast.dismiss();

      if (res.ok) {
        toast.success("✅ Messaggio inviato con successo!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
      } else {
        const data = await res.json();
        toast.error(
          data.error || "❌ Errore durante l'invio, riprova più tardi."
        );
      }
    } catch (error) {
      toast.dismiss();
      console.error("Errore invio email:", error);
      toast.error("❌ Impossibile inviare il messaggio. Riprova più tardi.");
    }
  };

  // Controllo se tutti i campi richiesti sono pieni
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    !emailError &&
    formData.message.trim() !== "" &&
    captchaToken !== null;

  return (
    <main className="flex flex-col">
      {/* Header con immagine */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/contacts/contact-cover.jpg"
          alt="Contattaci - Drago Verde Ischia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-5xl md:text-6xl font-bold">Contattaci</h1>
          <p className="mt-4 text-lg md:text-xl">
            Per qualsiasi informazione, proposta o semplicemente per salutarci,
            non esitare a scriverci.
          </p>
        </div>
      </section>

      {/* Contenuto */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Colonna Sinistra - Riferimenti */}
        <div className="flex flex-col items-start">
          {/* Logo sopra */}
          <div className="mb-6 flex justify-center w-full">
            <Image
              src="/logo-drago-verde-testo-nero.png"
              alt="Logo Drago Verde Ischia"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold mb-6">
            I nostri riferimenti diretti
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
              <span>Piazza Maria Santissima Immacolata, 80075 Forio (NA)</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">
            Seguici sui social
          </h3>
          <div className="flex gap-6 text-green-600">
            <Link
              href="https://www.instagram.com/dragoverdeischia"
              target="_blank"
            >
              <Instagram className="w-7 h-7 hover:text-green-800 transition" />
            </Link>
            <Link
              href="https://www.facebook.com/DragoVerdeIschia"
              target="_blank"
            >
              <Facebook className="w-7 h-7 hover:text-green-800 transition" />
            </Link>
            <Link href="https://wa.me/393505731491" target="_blank">
              <MessageCircle className="w-7 h-7 hover:text-green-800 transition" />
            </Link>
          </div>
        </div>

        {/* Colonna Destra - Modulo di Contatto */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Inviaci un messaggio</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Nome e Cognome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Indirizzo Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600 ${
                  emailError ? "border-red-500" : ""
                }`}
                required
              />
              {emailError && (
                <p className="text-red-600 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Oggetto</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Messaggio</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-green-600"
                required
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptchaToken}
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </section>

      {/* Mappa Google */}
      <section className="w-full px-6 md:px-0 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Dove trovarci</h2>
        <div className="w-full h-[250px] md:h-[400px] mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.3585247795293!2d13.856302815348408!3d40.73765097932821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b6d292f9e5f2b%3A0x4b55c79c7e6e1184!2sPiazza%20Maria%20Santissima%20Immacolata%2C%2080075%20Forio%20NA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
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
          Apri su Google Maps
        </a>
      </section>
    </main>
  );
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Instagram, Facebook, MessageCircle, MapPin } from "lucide-react"
import { T } from "@/components/ui/T"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <Link href="/" className="relative w-40 h-14">
            <Image
              src="/logo-drago-verde-bianco.png"
              alt="Logo Drago Verde Ischia"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <p className="text-gray-300 text-sm max-w-xs">
            <T
              idml="footer.tagline"
              defaultText="Community unita dal gioco, dalla fantasia e dall'amicizia."
            />
          </p>
        </div>

        {/* Contatti */}
        <div className="space-y-3">
          <h3 className="font-bold text-base mb-2">
            <T idml="footer.contacts.title" defaultText="Contatti" />
          </h3>
          <p className="flex items-center gap-2">
            <Mail size={16} /> dragoverdeischia@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> +39 3505731491
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> Piazza Maria SS. Immacolata, Forio (NA)
          </p>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h3 className="font-bold text-base mb-2">
            <T idml="footer.social.title" defaultText="Seguici" />
          </h3>
          <div className="flex gap-5 justify-center md:justify-start">
            <Link
              href="https://www.instagram.com/dragoverdeischia"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram size={22} className="hover:text-green-400 transition" />
            </Link>
            <Link
              href="https://www.facebook.com/DragoVerdeIschia"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook size={22} className="hover:text-green-400 transition" />
            </Link>
            <Link
              href="https://wa.me/393505731491"
              target="_blank"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} className="hover:text-green-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 text-center py-4 text-gray-400 text-xs">
        © {new Date().getFullYear()}{" "}
        <T idml="footer.copyright" defaultText="Drago Verde Ischia A.P.S." /> – P.IVA
        91017100636
      </div>
    </footer>
  )
}

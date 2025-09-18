"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react"
import { T } from "@/components/ui/T"

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-3 text-sm">
        
        {/* Colonna 1 - Logo + tagline */}
        <div className="space-y-3">
          <Link href="/" className="relative w-40 h-14 block">
            <Image
              src="/logo-drago-verde-bianco.png"
              alt="Logo Drago Verde Ischia"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <p className="text-gray-400 text-sm leading-snug">
            <T
              idml="footer.tagline"
              defaultText="Una community unita dal gioco e dalla fantasia."
            />
          </p>
        </div>

        {/* Colonna 2 - Contatti */}
        <div>
          <h3 className="font-semibold mb-2">
            <T idml="footer.contacts.title" defaultText="Contatti" />
          </h3>
          <p className="flex items-center gap-2">
            <Mail size={14} /> dragoverdeischia@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Phone size={14} /> +39 350 5731491
          </p>
        </div>

        {/* Colonna 3 - Social */}
        <div>
          <h3 className="font-semibold mb-2">
            <T idml="footer.social.title" defaultText="Seguici" />
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/dragoverdeischia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} className="hover:text-green-400 transition" />
            </Link>
            <Link
              href="https://www.facebook.com/DragoVerdeIschia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} className="hover:text-green-400 transition" />
            </Link>
            <Link
              href="https://wa.me/393505731491"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} className="hover:text-green-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-xs border-t border-green-800 py-3">
        © {new Date().getFullYear()}{" "}
        <T idml="footer.copyright" defaultText="Drago Verde Ischia A.P.S." /> – P.IVA 91017100636
      </div>
    </footer>
  )
}

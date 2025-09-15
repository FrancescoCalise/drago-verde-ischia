import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm items-center">
        
        {/* Colonna 1 - Logo + tagline */}
        <div className="flex items-center gap-4">
          <Link href="/" className="block relative w-48 h-16 flex-shrink-0">
            <Image
              src="/logo-drago-verde-bianco.png"
              alt="Logo Drago Verde Ischia"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <p className="text-gray-300 text-sm">
            Community unita dal gioco e dalla fantasia.
          </p>
        </div>

        {/* Colonna 2 - Contatti */}
        <div>
          <h3 className="font-bold text-base mb-2">Contatti</h3>
          <p className="flex items-center gap-2">
            <Mail size={16}/> dragoverdeischia@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Phone size={16}/> +39 3505731491
          </p>
        </div>

        {/* Colonna 3 - Social */}
        <div>
          <h3 className="font-bold text-base mb-2">Seguici</h3>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/dragoverdeischia" target="_blank">
              <Instagram size={18} className="hover:text-green-400 transition" />
            </Link>
            <Link href="https://www.facebook.com/DragoVerdeIschia" target="_blank">
              <Facebook size={18} className="hover:text-green-400 transition" />
            </Link>
            <Link href="https://wa.me/393505731491" target="_blank">
              <MessageCircle size={18} className="hover:text-green-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center mt-4 text-gray-400 text-xs border-t border-gray-700 pt-2">
        © {new Date().getFullYear()} Drago Verde Ischia A.P.S. - P.IVA 91017100636
      </div>
    </footer>
  )
}

import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AuthProvider } from "@/context/AuthContext"
import { Toaster } from "react-hot-toast"
import { ModalProvider } from "@/components/ui/ModalProvider"
import GlobalSpinner from "@/components/ui/GolbalSpinner"

export const metadata: Metadata = {
  title: "Drago Verde Ischia A.P.S.",
  description: "Associazione ludica di promozione sociale a Ischia. Giochi da tavolo, di ruolo e molto altro.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <ModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              borderRadius: "12px",
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: 500,
            },
            // Durata default
            duration: 4000,
          }}
          containerStyle={{
            bottom: 20,
          }}
          gutter={12}
        />
          <Footer />
          </ModalProvider>
        </AuthProvider>
         <GlobalSpinner />
      </body>
    </html>
  )
}

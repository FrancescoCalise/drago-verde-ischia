import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"
import { hashPassword } from "@/lib/auth"
import jwt from "jsonwebtoken"
import { sendPasswordChangedEmail } from "@/lib/mailer"

const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: Request) {
  const { token, password } = await req.json()

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string }

    const hashedPassword = await hashPassword(password)

    // Recupero utente
    const { data: user, error: findError } = await supabase
      .from("users")
      .select("id, name, email")
      .eq("id", decoded.id)
      .single()

    if (findError || !user) {
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }

    // Aggiorno la password
    const { error: updateError } = await supabase
      .from("users")
      .update({ password: hashedPassword })
      .eq("id", decoded.id)

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 400 })
    }

    // Invio email di conferma
    try {
      await sendPasswordChangedEmail(user.email, user.name)
    } catch (mailErr) {
      console.error("Errore invio email conferma reset:", mailErr)
    }

    return NextResponse.json({ message: "Password aggiornata con successo" })
  } catch (err) {
    return NextResponse.json({ error: "Token invalido o scaduto" }, { status: 401 })
  }
}

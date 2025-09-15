import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, token } = await req.json()

    // 🔹 Verifica reCAPTCHA
    const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })
    const captchaData = await captchaRes.json()
    if (!captchaData.success) {
      return NextResponse.json({ error: "Captcha non valido" }, { status: 400 })
    }

    // 🔹 Configura SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 🔹 1. Invia mail all’associazione
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "Nuovo messaggio dal sito",
      text: message,
      html: `
        <p><b>Da:</b> ${name} (${email})</p>
        <p><b>Oggetto:</b> ${subject || "Nessun oggetto"}</p>
        <p>${message}</p>
      `,
    })

    // 🔹 2. Invia mail di conferma all’utente
    await transporter.sendMail({
      from: `"Drago Verde Ischia" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Abbiamo ricevuto il tuo messaggio ✅",
      text: `Ciao ${name},\n\nGrazie per averci contattato! Ti risponderemo presto.\n\n— Drago Verde Ischia`,
      html: `
        <p>Ciao <b>${name}</b>,</p>
        <p>Grazie per averci contattato! Abbiamo ricevuto il tuo messaggio:</p>
        <blockquote>${message}</blockquote>
        <p>Ti risponderemo presto 😊</p>
        <p>— Drago Verde Ischia</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Errore invio email:", err)
    return NextResponse.json({ error: "Errore invio email" }, { status: 500 })
  }
}

import nodemailer from "nodemailer"
import { httpFetch } from "@/services/http/httpFetch"
import { successResponse, errorResponse } from "@/lib/apiResponse"
import { trackError } from "@/services/errorTracker"

interface RecaptchaResponse {
  success: boolean
  challenge_ts: string
  hostname: string
  score?: number
  action?: string
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, token } = await req.json()

    // 🔹 Verifica reCAPTCHA
    const captchaRes = await httpFetch<RecaptchaResponse>(
      "https://www.google.com/recaptcha/api/siteverify",
      "POST",
      `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, // body raw string
      false,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )

    if (!captchaRes.success) {
      return errorResponse("contact.invalid_captcha", "Captcha non valido", 400)
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

    return successResponse(null, "contact.sent_success", "Messaggio inviato con successo", 200)
  } catch (err) {
    trackError(err, "POST /api/contact")
    return errorResponse("contact.send_error", "Errore durante l'invio del messaggio", 500)
  }
}

import nodemailer from "nodemailer"
import { MailOptions } from "nodemailer/lib/json-transport"

const fromEmail = `"Drago Verde Ischia" <${process.env.EMAIL_USER}>`;

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // TLS su 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function sendWelcomeEmail(to: string, username: string, name: string) {
  const mailOptions = {
    from: fromEmail,
    to,
    subject: "Benvenuto in Drago Verde Ischia!",
    html: `
      <h2>Ciao ${name}, benvenuto in Drago Verde Ischia 🎉</h2>
      <p>Siamo felici di averti nella nostra comunità!</p>
      <p>Il tuo <b>username</b> è: <code>${username}</code></p>
      <p>Usalo per accedere al portale. Se hai bisogno di aiuto, contattaci quando vuoi.</p>
      <br/>
      <p>A presto,<br/>Il team di Drago Verde Ischia</p>
    `
  }

  await transporter.sendMail(mailOptions)
}

export async function sendResetPasswordEmail(to: string, name: string, resetUrl: string) {
  const mailOptions = {
    from: fromEmail,
    to,
    subject: "Reset password - Drago Verde Ischia",
    html: `
      <h2>Ciao ${name},</h2>
      <p>Hai richiesto di reimpostare la tua password.</p>
      <p>Clicca sul link qui sotto (valido per 15 minuti):</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
      <br/><br/>
      <p>Se non hai richiesto tu il reset, ignora questa email.</p>
    `
  }

  await transporter.sendMail(mailOptions)
}

export async function sendPasswordChangedEmail(to: string, name: string) {
  const mailOptions = {
    from: fromEmail,
    to,
    subject: "Conferma cambio password - Drago Verde Ischia",
    html: `
      <h2>Ciao ${name},</h2>
      <p>La tua password è stata aggiornata con successo.</p>
      <p>Se non sei stato tu a richiedere questa operazione, <b>contatta subito il nostro supporto</b>.</p>
      <br/>
      <p>A presto,<br/>Il team di Drago Verde Ischia</p>
    `
  }

  await transporter.sendMail(mailOptions)
}

/**
 * Utility per inviare email con Nodemailer
 * Richiede variabili ambiente configurate:
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_USER
 * - SMTP_PASS
 * - SMTP_FROM (mittente di default)
 */
export async function sendMail({ to, subject, text, html }: MailOptions) {

    const mailOptions = {
        from: fromEmail,
        to,
        subject: subject,
        html:html,
        text:text
      }

    await transporter.sendMail(mailOptions)
   
}
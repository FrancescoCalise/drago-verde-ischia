import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import i18n from "i18next"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { idml, defaultText } = body

    if (!idml) {
      return NextResponse.json({ error: "Missing IDML" }, { status: 400 })
    }

    // Salvo lingua corrente da i18n o di default "it"
    const language = i18n.language || i18n.resolvedLanguage || "it"
    
    await prisma.loggerIDML.upsert({
    where: {
      IDML_language: { IDML: idml, language }, // usa l’@@unique
    },
    update: {
      description: defaultText,
    },
    create: {
      IDML: idml,
      description: defaultText,
      language,
    },
  })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Logger IDML error:", err)
    return NextResponse.json({ error: "Errore salvataggio IDML" }, { status: 500 })
  }
}

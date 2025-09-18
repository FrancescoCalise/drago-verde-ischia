// src/app/api/user/change-password/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware";

export async function POST(req: Request) {
  try {
    const auth = await requireAuth(req);

    if (!auth.ok) return new Response(JSON.stringify({ error: "Non autenticato" }), { status: 401 });
    const currentUser = auth.user as DecodedUser;
    if (!currentUser.id) {
      return NextResponse.json({ error: "Non autorizzato" }, { status: 401 })
    }

    const { newPassword } = await req.json()
    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json({ error: "Password troppo corta" }, { status: 400 })
    }

    // Cripta la password come nel register
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.appUser.update({
      where: { id: currentUser.id },
      data: { password: hashedPassword },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Errore interno" }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware";

export async function DELETE(req: Request) {
  try {
    const auth = await requireAuth(req);

    if (!auth.ok) return new Response(JSON.stringify({ error: "Non autenticato" }), { status: 401 });
    const currentUser = auth.user as DecodedUser;

    if (!currentUser?.id) {
      return NextResponse.json({ error: "Non autorizzato" }, { status: 401 })
    }

    const userId = currentUser.id;

    // Recupera l'utente
    const user = await prisma.appUser.findUnique({
      where: { id: userId },
    })

    if (!user) {
      return NextResponse.json({ error: "Utente non trovato" }, { status: 404 })
    }
    const role = user.role || "";

    // Controlla che sia guest
    if (role.toLowerCase() !== "guest") {
      return NextResponse.json(
        { error: "Solo i guest possono eliminare l'account" },
        { status: 403 }
      )
    }

    // Elimina l'utente
    await prisma.appUser.delete({
      where: { id: userId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Errore eliminazione account:", error)
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    )
  }
}

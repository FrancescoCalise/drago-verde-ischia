import prisma from "@/lib/prisma"
import { sendMail } from "@/lib/mailer"
import { DecodedUser, requireAuth } from "@/lib/authMiddleware"

export async function POST(req: Request) {
    const auth = await requireAuth(req);

    if (!auth.ok) return new Response(JSON.stringify({ error: "Non autenticato" }), { status: 401 });
    const currentUser = auth.user as DecodedUser;

    const { newEmail } = await req.json()

    try {
       
        const updatedUser = await prisma.appUser.update({
            where: { id: currentUser.id },
            data: { email: newEmail },
        })

        // Email di conferma al nuovo indirizzo
        await sendMail({
            to: newEmail,
            subject: "Conferma cambio email",
            text: `Ciao ${updatedUser.name}, la tua email è stata aggiornata correttamente a questo indirizzo.`,
        })

        return new Response(JSON.stringify({ success: true }))
    } catch (err) {
        console.error("Errore cambio email:", err)
        return new Response(JSON.stringify({ error: "Errore interno" }), { status: 500 })
    }
}

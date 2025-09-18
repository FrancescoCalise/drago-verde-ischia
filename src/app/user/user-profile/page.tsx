"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { T } from "@/components/ui/T";
import { toast } from "@/lib/toast";
import { httpFetch } from "@/lib/http";

export default function UserProfile() {
  const { user, logout, updateUser, loading } = useAuth();
  const router = useRouter();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
  if (!loading && !user) {
    router.push("/user/login")
  }
}, [loading, user, router])

  if (!user) return null;

  const handleChangeEmail = async () => {
    try {
      const res = await httpFetch("/api/user/change-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newEmail }),
      });

      if (res.ok) {
        toast.success(
          "📧 Ti abbiamo inviato un'email di conferma al nuovo indirizzo"
        );
        updateUser({ ...user!, email: newEmail });
      } else {
        const data = await res.json();
        toast.error(data.error || "❌ Errore nel cambio email");
      }
    } catch {
      toast.error("❌ Impossibile aggiornare l'email");
    }
  };

  const handleChangePassword = async () => {
    try {
      const res = await httpFetch("/api/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
      });

      if (res.ok) {
        toast.success("🔑 Password aggiornata con successo!");
        setNewPassword("");
      } else {
        const data = await res.json();
        toast.error(data.error || "❌ Errore nel cambio password");
      }
    } catch {
      toast.error("❌ Impossibile aggiornare la password");
    }
  };

  const handleDeleteAccount = async () => {
  if (user?.role?.toLowerCase() !== "guest") {
    toast.error("❌ Non puoi cancellare il tuo account se sei socio.")
    return
  }

  try {
    const res = await httpFetch(`/api/user/${user.id}`, {
      method: "DELETE",
    })

    if (res.ok) {
      toast.success("✅ Account eliminato con successo")
      await logout()
      router.push("/") // redirect alla home
    } else {
      const data = await res.json()
      toast.error(data.error || "❌ Errore nell'eliminazione dell'account")
    }
  } catch (error) {
    console.error("Errore eliminazione account:", error)
    toast.error("❌ Impossibile eliminare l'account, riprova più tardi")
  }
}

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-6">
        <T idml="user.profile.title" defaultText="Il tuo profilo" />
      </h1>

      {/* Info utente */}
      <Card className="border border-green-600">
        <CardHeader>
          <CardTitle>
            <T idml="user.profile.info" defaultText="Informazioni Utente" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>
              👤 <T idml="user.profile.name" defaultText="Nome" />:
            </strong>{" "}
            {user.name} {user.surname}
          </p>
          <p>
            <strong>📧 Email:</strong> {user.email}
          </p>
          <p>
            <strong>
              📛 <T idml="user.profile.username" defaultText="Username" />:
            </strong>{" "}
            {user.username}
          </p>
          <p>
            <strong>
              🎭 <T idml="user.profile.role" defaultText="Ruolo" />:
            </strong>{" "}
            {user.role}
          </p>
        </CardContent>
      </Card>

      {/* Informazioni Socio - visibile solo se NON guest */}
        {user.role?.toLowerCase() !== "guest" && (
          <Card className="border border-green-600">
            <CardHeader>
              <CardTitle>
                <T
                  idml="user.profile.memberInfo"
                  defaultText="Informazioni Socio"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">
                <T
                  idml="user.profile.memberInfo.placeholder"
                  defaultText="Questa sezione conterrà i dettagli del socio."
                />
              </p>
            </CardContent>
          </Card>
        )}

      {/* Gestisci Account */}
      <Card className="border border-green-600">
        <CardHeader>
          <CardTitle>
            <T
              idml="user.profile.manageAccount"
              defaultText="Gestisci Account"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Cambia email */}
          <div className="flex items-center gap-3">
            <Input
              type="email"
              placeholder="Nuova email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleChangeEmail}>
              <T idml="user.profile.confirmEmail" defaultText="Conferma" />
            </Button>
          </div>

          {/* Cambia password */}
          <div className="flex items-center gap-3">
            <Input
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleChangePassword}>
              <T idml="user.profile.confirmPassword" defaultText="Conferma" />
            </Button>
          </div>

          {/* Elimina account */}
          <div className="space-y-2">
            <Button
              variant="destructive"
              className="bg-orange-500 hover:bg-orange-600 w-full"
              disabled={user.role?.toLowerCase() !== "guest"}
              onClick={handleDeleteAccount}
            >
              <T idml="user.profile.deleteBtn" defaultText="Elimina Account" />
            </Button>

            {user.role?.toLowerCase() !== "guest" && (
              <p className="text-sm text-red-600 text-center">
                <T
                  idml="user.profile.deleteHint"
                  defaultText="Non puoi cancellare il tuo account se sei socio."
                />
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

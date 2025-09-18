"use client";

import { Construction } from "lucide-react";

export default function WorkInProgress({
  title = "Pagina in sviluppo",
  message = "Stiamo lavorando per portarti nuove funzionalità 🚧",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
      <Construction className="w-16 h-16 text-yellow-500 animate-pulse" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-600 max-w-md">{message}</p>
    </div>
  );
}

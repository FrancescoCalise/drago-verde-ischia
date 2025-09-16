"use client"

import { Loader2 } from "lucide-react"
import { useSpinnerStore } from "@/lib/spinner"

export default function GlobalSpinner() {
  const { visible } = useSpinnerStore()

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center">
      <Loader2
        className="animate-spin text-green-500 drop-shadow-lg"
        size={64}
      />
    </div>
  )
}
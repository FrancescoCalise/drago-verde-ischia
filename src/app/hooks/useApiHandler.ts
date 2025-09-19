"use client"

import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import { toast } from "@/lib/toast"
import { ApiResponse } from "@/interfaces/ApiResponse"
import { useCallback } from "react"

export function useApiHandler() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleResponse = useCallback(<T>(
    res: ApiResponse<T>,
    onSuccess?: ((data: T | undefined) => void) | null,
    redirectTo?: string
  ) => {
    const msg = t(res.idml, { defaultValue: res.message ?? "" })

    if (!res.success) {
      toast.error(msg)
      return
    }

    toast.success(msg)
    if (onSuccess) onSuccess(res.data)
    if (redirectTo) router.push(redirectTo)
  }, [router, t])   // 👈 useCallback qui

  return { handleResponse }
}
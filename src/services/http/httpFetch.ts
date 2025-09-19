// src/services/http/httpFetch.ts
import { getValidToken, logoutService } from "@/services/auth"
import { trackError } from "@/services/errorTracker"
import { ApiResponse } from "@/interfaces/ApiResponse"
import { hideSpinner, showSpinner } from "@/lib/spinner"


export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"
export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }
export type AllowedBody = Record<string, JsonValue> | FormData | string | null

export async function httpFetch<T>(
  url: string,
  method: HttpMethod,
  body?: AllowedBody,
  auth: boolean = false,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  showSpinner()

  let token: string | null = null
  if (auth) {
    token = await getValidToken()
    if (!token) {
      hideSpinner()
      const msg = "Non autenticato"
      trackError(new Error(msg), `httpFetch ${method} ${url}`)
      return { success: false, idml: "session.expired", status: 401, message: msg }
    }
  }

  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  let finalBody: BodyInit | undefined
  if (body instanceof FormData) finalBody = body
  else if (typeof body === "string") finalBody = body
  else if (body) {
    headers["Content-Type"] = "application/json"
    finalBody = JSON.stringify(body)
  }
  
  const doFetch = async (): Promise<Response> =>
    fetch(url, { ...options, method, headers, body: finalBody, credentials: "include" })

  try {
    let res = await doFetch()

    if (auth && res.status === 401) {
      token = await getValidToken()
      if (!token) {
        await logoutService()
        hideSpinner()
        const msg = "Sessione scaduta"
        trackError(new Error(msg), `httpFetch ${method} ${url}`)
        return { success: false, idml: "session.expired", status: 401, message: msg }
      }
      headers.Authorization = `Bearer ${token}`
      res = await doFetch()
    }

    hideSpinner()
    return (await res.json()) as ApiResponse<T>
  } catch (err) {
    hideSpinner()
    trackError(err, `httpFetch ${method} ${url}`)
    return { success: false, idml: "network.error", status: 500, message: "Errore di rete" }
  }
}

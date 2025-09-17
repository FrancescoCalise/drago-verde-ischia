/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "@/context/AuthContext"
import { getValidToken } from "@/lib/authToken"
import { hideSpinner, showSpinner } from "./spinner"


type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

interface HttpOptions extends RequestInit {
  body?: any
}

async function baseRequest<T>(
  url: string,
  method: HttpMethod,
  options: HttpOptions = {}
): Promise<T> {
  showSpinner("Caricamento in corso...")
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  }
  const res = await fetch(url, {
    ...options,
    method,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
    credentials: "include", // per cookie (refresh token)
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.error || "Errore nella richiesta")
  }

  return (res.json() as Promise<T>)
  .finally(() => {
    hideSpinner()
  })
}

export function useHttp() {
  const { getValidToken, logout } = useAuth()

  // --- Public (no token) ---
  const request = <T>(url: string, method: HttpMethod, options?: HttpOptions) =>
    baseRequest<T>(url, method, options)

  // --- Authenticated (with token + retry) ---
  const requestAuth = async <T>(
    url: string,
    method: HttpMethod,
    options: HttpOptions = {}
  ): Promise<T> => {
    showSpinner("Caricamento in corso...")
    let token = await getValidToken()
    if (!token) {
      throw new Error("Non autenticato")
    }

    const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
    Authorization: `Bearer ${token}`,
    }

    const doFetch = async (): Promise<Response> =>
      fetch(url, {
        ...options,
        method,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: "include",
      })

    let res = await doFetch()

    // Se riceviamo 401, tentiamo un refresh
    if (res.status === 401) {
      token = await getValidToken()
      if (!token) {
        logout()
        throw new Error("Sessione scaduta. Effettua nuovamente il login.")
      }
      headers.Authorization = `Bearer ${token}`

      res = await doFetch()
    }

    if (!res.ok) {
      const error = await res.json().catch(() => ({}))
      throw new Error(error.error || "Errore nella richiesta")
    }

    return (res.json() as Promise<T>)
    .finally(() => {
      hideSpinner()
    })
  }

  return {
    // Public
    get: <T>(url: string, options?: HttpOptions) => request<T>(url, "GET", options),
    post: <T>(url: string, body: any, options?: HttpOptions) =>
      request<T>(url, "POST", { ...options, body }),
    put: <T>(url: string, body: any, options?: HttpOptions) =>
      request<T>(url, "PUT", { ...options, body }),
    del: <T>(url: string, options?: HttpOptions) => request<T>(url, "DELETE", options),

    // Authenticated
    getAuth: <T>(url: string, options?: HttpOptions) => requestAuth<T>(url, "GET", options),
    postAuth: <T>(url: string, body: any, options?: HttpOptions) =>
      requestAuth<T>(url, "POST", { ...options, body }),
    putAuth: <T>(url: string, body: any, options?: HttpOptions) =>
      requestAuth<T>(url, "PUT", { ...options, body }),
    delAuth: <T>(url: string, options?: HttpOptions) => requestAuth<T>(url, "DELETE", options),
  }
}

// ---- fetch autenticato ----
export async function httpFetch(
  input: RequestInfo | URL,
  options: RequestInit = {}
) {
  showSpinner()
  const token = await getValidToken()
  if (!token) throw new Error("❌ Token mancante o non valido")

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
    Authorization: `Bearer ${token}`,
  }

  return fetch(input, { ...options, headers })
  .finally(() => {
    hideSpinner()
  })
}

// ---- fetch non autenticato ----
export async function httpFetchPublic(
  input: RequestInfo | URL,
  options: RequestInit = {}
) {
  showSpinner()
  const token = await getValidToken()

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  }
  
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return fetch(input, { ...options, headers })
  .finally(() => {
    hideSpinner()
  })
}
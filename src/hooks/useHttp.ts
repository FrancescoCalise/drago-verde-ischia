// src/hooks/useHttp.ts
import { httpFetch, AllowedBody, HttpMethod } from "@/services/http/httpFetch"
import { ApiResponse } from "@/interfaces/ApiResponse"

export function useHttp() {
  const request = async <T>(
    url: string,
    method: HttpMethod,
    auth: boolean = false,
    body?: AllowedBody,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    return httpFetch<T>(url, method, body, auth, options)
  }

  return {
    get: <T>(url: string, options?: RequestInit) => request<T>(url, "GET", false, undefined, options),
    post: <T>(url: string, body: AllowedBody, options?: RequestInit) => request<T>(url, "POST", false, body, options),
    put: <T>(url: string, body: AllowedBody, options?: RequestInit) => request<T>(url, "PUT", false, body, options),
    del: <T>(url: string, options?: RequestInit) => request<T>(url, "DELETE", false, undefined, options),

    getAuth: <T>(url: string, options?: RequestInit) => request<T>(url, "GET", true, undefined, options),
    postAuth: <T>(url: string, body: AllowedBody, options?: RequestInit) => request<T>(url, "POST", true, body, options),
    putAuth: <T>(url: string, body: AllowedBody, options?: RequestInit) => request<T>(url, "PUT", true, body, options),
    delAuth: <T>(url: string, options?: RequestInit) => request<T>(url, "DELETE", true, undefined, options),
  }
}

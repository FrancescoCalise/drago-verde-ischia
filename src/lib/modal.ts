/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { createContext, useContext } from "react"

type ModalContextType = {
  openModal: (content: React.ComponentType<any>, titleIdml:string, modalTitleDesc?:string, props?: any) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error("useModal must be used within ModalProvider")
  return ctx
}

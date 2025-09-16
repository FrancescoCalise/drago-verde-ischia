/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react"

export type ModalContextType = {
  openModal: (component: React.ComponentType<any>, props?: any) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error("useModal must be used within ModalProvider")
  return ctx
}

"use client"
import { create } from "zustand"

interface SpinnerState {
  visible: boolean
  message?: string
  showSpinner: (message?: string) => void
  hideSpinner: () => void
}

export const useSpinnerStore = create<SpinnerState>((set) => ({
  visible: false,
  message: undefined,
  showSpinner: (message) => set({ visible: true, message }),
  hideSpinner: () => set({ visible: false, message: undefined }),
}))

// Metodi da usare nel codice
export const showSpinner = (message?: string) =>
  useSpinnerStore.getState().showSpinner(message)

export const hideSpinner = () => useSpinnerStore.getState().hideSpinner()

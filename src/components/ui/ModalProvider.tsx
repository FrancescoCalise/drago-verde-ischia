/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, ReactNode, ComponentType } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { ModalContext } from "@/lib/modal"

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [Content, setContent] = useState<ComponentType<any> | null>(null)
  const [contentProps, setContentProps] = useState<any>({})

  const openModal = (component: ComponentType<any>, props: any = {}) => {
    setContent(() => component)
    setContentProps(props)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setContent(null)
    setContentProps({})
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <Dialog.Close asChild>
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            {Content && <Content {...contentProps} />}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ModalContext.Provider>
  )
}

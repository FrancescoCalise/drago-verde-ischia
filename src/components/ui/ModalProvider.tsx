/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ModalContext } from "@/lib/modal"
import { T } from "./T"

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [Content, setContent] = useState<React.ComponentType<any> | null>(null)
  const [contentProps, setContentProps] = useState<any>({})
  const [modalTitleIdml, setTitle] = useState<string>("")
  const [modalTitleDesc, setDesc] = useState<string>("")

  const openModal = (component: React.ComponentType<any>, modalTitleIdml: string, modalTitleDesc?:string, props?: any) => {
    setContent(() => component)
    setContentProps(props || {})
    setTitle(modalTitleIdml)
    setDesc(modalTitleDesc || "")
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
            <VisuallyHidden>
              <Dialog.Title>{modalTitleIdml || "Dialog"}</Dialog.Title>
            </VisuallyHidden>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                <T idml={modalTitleIdml} defaultText={modalTitleDesc} />
              </h2>
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

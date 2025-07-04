"use client"

import { useRef, useState } from "react"
import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { UniversalViewer } from "@/components/universal-viewer"

export function MenuPdfViewer() {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const menuItems = [
    {
      type: "pdf" as const,
      src: "/images/menu-preview.png", // Using image as fallback for PDF
      title: "Momo Kato Full Menu",
    },
  ]

  const openViewer = () => {
    setIsViewerOpen(true)
  }

  const closeViewer = () => {
    setIsViewerOpen(false)
  }

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={openViewer}
        className="bg-white text-orange-600 hover:bg-orange-100 font-bold rounded-full px-6 py-2"
      >
        <FileText className="mr-2 h-5 w-5" /> View Full Menu (PDF)
      </Button>

      <UniversalViewer items={menuItems} isOpen={isViewerOpen} onClose={closeViewer} />
    </>
  )
}

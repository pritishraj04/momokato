"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import gsap from "gsap"

interface ViewerItem {
  type: "image" | "pdf"
  src: string
  alt?: string
  title?: string
}

interface UniversalViewerProps {
  items: ViewerItem[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
}

export function UniversalViewer({ items, initialIndex = 0, isOpen, onClose }: UniversalViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [showControls, setShowControls] = useState(true)
  const [showInstructions, setShowInstructions] = useState(true)
  const [scale, setScale] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const instructionsRef = useRef<HTMLDivElement>(null)
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const currentItem = items[currentIndex]
  const hasMultipleItems = items.length > 1

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          if (hasMultipleItems && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
          }
          break
        case "ArrowRight":
          if (hasMultipleItems && currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1)
          }
          break
      }
    },
    [isOpen, currentIndex, items.length, hasMultipleItems, onClose],
  )

  // Handle touch/mouse events for navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !hasMultipleItems) return

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    }

    const diffX = touchStartRef.current.x - touchEnd.x
    const diffY = Math.abs(touchStartRef.current.y - touchEnd.y)

    // Only trigger if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > 50 && diffY < 100) {
      if (diffX > 0 && currentIndex < items.length - 1) {
        // Swipe left - next item
        setCurrentIndex(currentIndex + 1)
      } else if (diffX < 0 && currentIndex > 0) {
        // Swipe right - previous item
        setCurrentIndex(currentIndex - 1)
      }
    }

    touchStartRef.current = null
  }

  // Auto-hide controls
  const resetControlsTimer = () => {
    setShowControls(true)

    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current)
    }

    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }

  const handleMouseMove = () => {
    resetControlsTimer()
  }

  const handleClick = (e: React.MouseEvent) => {
    // Close viewer if clicking outside content
    if (e.target === overlayRef.current) {
      onClose()
    } else {
      resetControlsTimer()
    }
  }

  // Navigation functions
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setScale(1) // Reset zoom when changing items
    }
  }

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setScale(1) // Reset zoom when changing items
    }
  }

  // Zoom functions for PDFs
  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }

  // Effects
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"

      // Show instructions for 1.5 seconds
      if (hasMultipleItems) {
        setTimeout(() => {
          setShowInstructions(false)
        }, 1500)
      }

      // Initial animation
      if (overlayRef.current && contentRef.current) {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
        )
      }

      resetControlsTimer()
    } else {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
      setShowInstructions(true)
      setScale(1)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }
  }, [isOpen, handleKeyDown, hasMultipleItems])

  // Reset index when items change
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, items])

  if (!isOpen || !currentItem) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black bg-opacity-85 flex items-center justify-center"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
    >
      {/* Instructions */}
      {showInstructions && hasMultipleItems && (
        <div
          ref={instructionsRef}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black px-4 py-2 rounded-lg text-sm z-30"
        >
          Swipe left or right to navigate
        </div>
      )}

      {/* Controls */}
      <div
        ref={controlsRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-2 z-30 pointer-events-auto"
          aria-label="Close viewer"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation arrows */}
        {hasMultipleItems && (
          <>
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-3 z-30 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === items.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-3 z-30 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Zoom controls for PDFs */}
        {currentItem.type === "pdf" && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30 pointer-events-auto">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              onClick={zoomIn}
              disabled={scale >= 3}
              className="bg-white bg-opacity-80 hover:bg-white text-black rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Item counter */}
        {hasMultipleItems && (
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 text-black px-3 py-1 rounded-full text-sm z-30">
            {currentIndex + 1} / {items.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="max-w-[95vw] max-h-[95vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src || "/placeholder.svg"}
            alt={currentItem.alt || "Viewer image"}
            className="max-w-full max-h-full object-contain"
            style={{ aspectRatio: "16/9" }}
            onLoad={() => setIsLoading(false)}
            onLoadStart={() => setIsLoading(true)}
          />
        ) : (
          <div className="w-full h-full bg-white rounded-lg overflow-hidden" style={{ transform: `scale(${scale})` }}>
            <iframe
              src={currentItem.src}
              title={currentItem.title || "PDF Viewer"}
              className="w-full h-full border-0"
              style={{ minHeight: "80vh", minWidth: "80vw" }}
              onLoad={() => setIsLoading(false)}
              onLoadStart={() => setIsLoading(true)}
            />
          </div>
        )}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white rounded-lg p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
          </div>
        </div>
      )}
    </div>
  )
}

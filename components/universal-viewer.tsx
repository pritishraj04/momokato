"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
} from "lucide-react";

interface ViewerItem {
  type: "image" | "pdf";
  src: string;
  alt?: string;
  title?: string;
}

interface UniversalViewerProps {
  items: ViewerItem[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function UniversalViewer({
  items,
  initialIndex = 0,
  isOpen,
  onClose,
}: UniversalViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showControls, setShowControls] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const currentItem = items[currentIndex];
  const hasMultipleItems = items.length > 1;

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasMultipleItems && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          }
          break;
        case "ArrowRight":
          if (hasMultipleItems && currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
          break;
      }
    },
    [isOpen, currentIndex, items.length, hasMultipleItems, onClose],
  );

  // Handle touch/mouse events for navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !hasMultipleItems) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const diffX = touchStartRef.current.x - touchEnd.x;
    const diffY = Math.abs(touchStartRef.current.y - touchEnd.y);

    // Only trigger if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > 50 && diffY < 100) {
      if (diffX > 0 && currentIndex < items.length - 1) {
        // Swipe left - next item
        setCurrentIndex(currentIndex + 1);
      } else if (diffX < 0 && currentIndex > 0) {
        // Swipe right - previous item
        setCurrentIndex(currentIndex - 1);
      }
    }

    touchStartRef.current = null;
  };

  // Auto-hide controls
  const resetControlsTimer = () => {
    setShowControls(true);

    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }

    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    resetControlsTimer();
  };

  const handleClick = (e: React.MouseEvent) => {
    // Close viewer if clicking outside content
    if (e.target === overlayRef.current) {
      onClose();
    } else {
      resetControlsTimer();
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setScale(1); // Reset zoom when changing items
    }
  };

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setScale(1); // Reset zoom when changing items
    }
  };

  // Zoom functions for PDFs
  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  // Download function
  const downloadItem = () => {
    if (currentItem) {
      const link = document.createElement("a");
      link.href = currentItem.src;
      link.download = currentItem.title || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Effects
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      // Show instructions for 2 seconds
      if (hasMultipleItems) {
        setTimeout(() => {
          setShowInstructions(false);
        }, 2000);
      }

      resetControlsTimer();
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      setShowInstructions(true);
      setScale(1);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, [isOpen, handleKeyDown, hasMultipleItems]);

  // Reset index when items change
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, items]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black transition-all duration-300 flex items-center justify-center"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
    >
      {/* Instructions for multiple items */}
      {showInstructions && hasMultipleItems && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl z-[10001] animate-bounce">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span>Swipe or use arrow keys to navigate</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      )}

      {/* Prominent Close Button - Top Right */}
      <button
        onClick={onClose}
        className={`fixed top-6 right-6 z-[10001] bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group ${
          showControls ? "opacity-100" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Close viewer"
        title="Close Viewer (ESC)"
      >
        <X className="h-8 w-8 group-hover:rotate-90 transition-transform duration-200" />
      </button>

      {/* Download Button - Top Left */}
      <button
        onClick={downloadItem}
        className={`fixed top-6 left-6 z-[10001] bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Download"
        title="Download Menu"
      >
        <Download className="h-6 w-6 group-hover:animate-pulse" />
      </button>

      {/* Navigation Arrows for Multiple Items */}
      {hasMultipleItems && (
        <>
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-[10001] bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              showControls ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous item"
            title="Previous Menu"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === items.length - 1}
            className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-[10001] bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              showControls ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next item"
            title="Next Menu"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Item Counter for Multiple Items */}
      {hasMultipleItems && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[10001] bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl ${
            showControls ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          {currentIndex + 1} / {items.length}
        </div>
      )}

      {/* Zoom Controls for PDFs - Bottom Center */}
      {currentItem.type === "pdf" && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[10001] bg-black/70 backdrop-blur-sm rounded-full p-2 shadow-2xl transition-all duration-300 ${
            showControls ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full p-3 transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Zoom out"
              title="Zoom Out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <div className="bg-black/50 rounded-full px-4 py-2 min-w-[80px] text-center">
              <span className="text-white font-medium text-sm">
                {Math.round(scale * 100)}%
              </span>
            </div>
            <button
              onClick={zoomIn}
              disabled={scale >= 3}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full p-3 transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Zoom in"
              title="Zoom In"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Full Screen Content Area */}
      <div
        ref={contentRef}
        className="w-full h-full flex items-center justify-center"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {currentItem.type === "image" ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={currentItem.src || "/placeholder.svg"}
              alt={currentItem.alt || "Viewer image"}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.3s ease",
                transformOrigin: "center center",
              }}
              onLoad={() => setIsLoading(false)}
              onLoadStart={() => setIsLoading(true)}
            />
          </div>
        ) : (
          <div
            className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease",
              transformOrigin: "center center",
            }}
          >
            <iframe
              src={currentItem.src}
              title={currentItem.title || "PDF Viewer"}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              onLoadStart={() => setIsLoading(true)}
            />
          </div>
        )}
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-[10002]">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-200"></div>
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent absolute top-0 left-0"></div>
              </div>
              <div className="text-center">
                <p className="text-gray-800 font-semibold text-lg">
                  Loading Menu
                </p>
                <p className="text-gray-600 text-sm mt-1">Please wait...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Hint - Bottom Left */}
      <div
        className={`fixed bottom-6 left-6 z-[10001] bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs shadow-xl transition-all duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2">
          <kbd className="bg-white/20 px-2 py-1 rounded text-xs font-mono">
            ESC
          </kbd>
          <span>to close</span>
          {hasMultipleItems && (
            <>
              <span>•</span>
              <kbd className="bg-white/20 px-2 py-1 rounded text-xs font-mono">
                ←→
              </kbd>
              <span>navigate</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

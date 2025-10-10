"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { X, Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface SimpleMenuViewerProps {
  isOpen: boolean;
  onClose: () => void;
  menuImage: string;
}

export function SimpleMenuViewer({
  isOpen,
  onClose,
  menuImage,
}: SimpleMenuViewerProps) {
  const [scale, setScale] = useState(1);
  const [baseScale, setBaseScale] = useState(1); // new baseline scale
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const img = imageRef.current;
      if (img && img.complete) {
        fitImageToScreen();
      } else if (img) {
        img.onload = fitImageToScreen;
      }
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) fitImageToScreen();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const fitImageToScreen = () => {
    const img = imageRef.current;
    if (!img) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const scaleX = viewportWidth / imgWidth;
    const scaleY = viewportHeight / imgHeight;
    const fitScale = Math.min(scaleX, scaleY);

    // Set both current scale and base scale
    setScale(fitScale);
    setBaseScale(fitScale);
    setPosition({ x: 0, y: 0 });
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = menuImage;
    link.download = "momo-kato-menu.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + baseScale * 0.25, baseScale * 3)); // up to 300%
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - baseScale * 0.25, baseScale * 0.5)); // down to 50%
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(baseScale);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > baseScale) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > baseScale) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > baseScale && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > baseScale && e.touches.length === 1) {
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 z-[9999] flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
      }}
      onClick={onClose}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 z-[10000] bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        style={{ position: "fixed", top: "16px", right: "16px" }}
      >
        <X className="h-6 w-6" />
      </button>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="fixed top-4 left-4 z-[10000] bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        style={{ position: "fixed", top: "16px", left: "16px" }}
      >
        <Download className="h-5 w-5" />
      </button>

      {/* Zoom Controls */}
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-black bg-opacity-70 rounded-full p-2 flex items-center gap-2"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          onClick={zoomOut}
          disabled={scale <= baseScale * 0.5}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full p-2 transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed"
        >
          <ZoomOut className="h-4 w-4" />
        </button>

        <div className="text-white px-3 py-1 text-sm font-medium min-w-[60px] text-center">
          {Math.round((scale / baseScale) * 100)}%
        </div>

        <button
          onClick={zoomIn}
          disabled={scale >= baseScale * 3}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-full p-2 transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed"
        >
          <ZoomIn className="h-4 w-4" />
        </button>

        <button
          onClick={resetZoom}
          className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-2 transition-all duration-200 hover:scale-105 ml-2"
          title="Reset Zoom"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Menu Image Container */}
      <div
        className="max-w-full max-h-full p-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
        }}
      >
        <img
          ref={imageRef}
          src={menuImage || "/placeholder.svg"}
          alt="Momo Kato Menu"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "center center",
            cursor:
              scale > baseScale
                ? isDragging
                  ? "grabbing"
                  : "grab"
                : "default",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          draggable={false}
        />
      </div>

      {/* Instructions */}
      <div
        className="fixed bottom-4 right-4 z-[10000] bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-xs"
        style={{ position: "fixed", bottom: "16px", right: "16px" }}
      >
        <div className="text-center">
          <div>Press ESC to close</div>
          {scale > 1 && <div className="mt-1">Drag to pan</div>}
        </div>
      </div>

      {/* Zoom Level Indicator */}
      {scale !== 1 && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
          style={{
            position: "fixed",
            top: "16px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Zoom: {Math.round((scale / baseScale) * 100)}%
        </div>
      )}
    </div>
  );
}

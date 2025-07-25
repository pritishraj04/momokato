"use client"

import { useEffect, useRef, useState } from "react"

export function MovingRibbon() {
  const ribbonRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const marqueeText =
    "🔥 Binge on Momos | 🍲 Order Now | 🚀 Franchise Open Across Bihar | 😍 100% Handmade Dumplings | 🥟 Freshly Folded Love"

  useEffect(() => {
    // Add entrance animation for the ribbon using CSS
    if (ribbonRef.current) {
      ribbonRef.current.style.opacity = "0"
      ribbonRef.current.style.transform = "translateY(50px)"

      // Animate in
      setTimeout(() => {
        if (ribbonRef.current) {
          ribbonRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease"
          ribbonRef.current.style.opacity = "1"
          ribbonRef.current.style.transform = "translateY(0)"
        }
      }, 100)
    }

    // Add event listeners for hover
    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    if (ribbonRef.current) {
      ribbonRef.current.addEventListener("mouseenter", handleMouseEnter)
      ribbonRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (ribbonRef.current) {
        ribbonRef.current.removeEventListener("mouseenter", handleMouseEnter)
        ribbonRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      className="w-full bg-orange-600 text-white py-2 sm:py-3 md:py-4 overflow-hidden transform -rotate-2 my-4 sm:my-6 md:my-8 gpu-accelerated"
      ref={ribbonRef}
      style={{ marginBottom: "1rem", marginTop: "1rem" }}
    >
      <div className="marquee-container">
        <div
          className={`marquee-smooth ${isPaused ? "paused" : ""}`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            minWidth: "200%",
          }}
        >
          {/* Duplicate content for seamless loop */}
          <div className="flex items-center whitespace-nowrap px-2 sm:px-3 md:px-4 text-sm sm:text-lg md:text-xl font-bold">
            {marqueeText} | {marqueeText}
          </div>
        </div>
      </div>
    </div>
  )
}

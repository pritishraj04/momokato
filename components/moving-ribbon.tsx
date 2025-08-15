"use client";

import { useEffect, useRef, useState } from "react";

export function MovingRibbon() {
  const ribbonRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  const marqueeText =
    "🔥 Binge on Momos | 🍲 Order Now | 🚀 Franchise Open Across Bihar | 😍 100% Handmade Dumplings | 🥟 Freshly Folded Love";

  useEffect(() => {
    // Add entrance animation for the ribbon using CSS
    if (ribbonRef.current) {
      ribbonRef.current.style.opacity = "0";
      ribbonRef.current.style.transform = "translateY(50px)";

      // Animate in
      setTimeout(() => {
        if (ribbonRef.current) {
          ribbonRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          ribbonRef.current.style.opacity = "1";
          ribbonRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }

    // Add event listeners for hover
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    if (ribbonRef.current) {
      ribbonRef.current.addEventListener("mouseenter", handleMouseEnter);
      ribbonRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    // Measure marquee width for seamless animation
    const updateWidth = () => {
      if (marqueeInnerRef.current) {
        setMarqueeWidth(marqueeInnerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      if (ribbonRef.current) {
        ribbonRef.current.removeEventListener("mouseenter", handleMouseEnter);
        ribbonRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Dynamic keyframes for seamless animation
  const marqueeDuration = marqueeWidth ? marqueeWidth / 60 : 20; // px per second, adjust as needed
  const marqueeKeyframes = `@keyframes marquee-dynamic-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-${marqueeWidth}px); }
  }`;

  return (
    <div
      className="w-full bg-orange-600 text-white py-2 sm:py-3 md:py-4 overflow-hidden gpu-accelerated"
      ref={ribbonRef}
    >
      <style>{marqueeKeyframes}</style>
      <div className="marquee-container">
        <div
          className={`marquee-smooth ${isPaused ? "paused" : ""}`}
          style={{
            animationName: marqueeWidth ? "marquee-dynamic-scroll" : undefined,
            animationDuration: marqueeWidth ? `${marqueeDuration}s` : undefined,
            animationTimingFunction: marqueeWidth ? "linear" : undefined,
            animationIterationCount: marqueeWidth ? "infinite" : undefined,
            animationPlayState: isPaused ? "paused" : "running",
            display: "flex",
            width: marqueeWidth ? `${marqueeWidth * 2}px` : undefined,
          }}
        >
          {/* Duplicate content for seamless loop */}
          <div
            ref={marqueeInnerRef}
            className="flex items-center whitespace-nowrap px-2 sm:px-3 md:px-4 text-sm sm:text-lg md:text-xl font-bold flex-shrink-0"
          >
            {marqueeText}
          </div>
          <div className="flex items-center whitespace-nowrap px-2 sm:px-3 md:px-4 text-sm sm:text-lg md:text-xl font-bold flex-shrink-0">
            {marqueeText}
          </div>
          <div className="flex items-center whitespace-nowrap px-2 sm:px-3 md:px-4 text-sm sm:text-lg md:text-xl font-bold flex-shrink-0">
            {marqueeText}
          </div>
        </div>
      </div>
    </div>
  );
}

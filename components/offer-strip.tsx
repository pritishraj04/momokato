"use client";

import { useState, useEffect } from "react";
import { Tag, X } from "lucide-react";

export function OfferStrip() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-scroll effect
    const interval = setInterval(() => {
      const element = document.getElementById("offer-text");
      if (element) {
        element.classList.add("animate-scroll");
        setTimeout(() => {
          element.classList.remove("animate-scroll");
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-yellow-400 py-3 relative">
      <div className="container px-4 md:px-6 flex items-center justify-center">
        <div className="flex items-center gap-2 overflow-hidden">
          <Tag className="h-5 w-5 flex-shrink-0 animate-pulse" />
          <p id="offer-text" className="font-bold text-center">
            First order? Get 10% OFF on Swiggy & Zomato – Limited Time!
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black"
          aria-label="Close offer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

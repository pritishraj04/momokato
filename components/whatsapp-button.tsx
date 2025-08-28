"use client";

import { useEffect, useRef, useState } from "react";
import { getContactInfo } from "@/lib/config";

export function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  const { WHATSAPP } = getContactInfo();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Simple entrance animation using CSS
    if (buttonRef.current) {
      buttonRef.current.style.transform = "scale(0) rotate(-45deg)";
      buttonRef.current.style.opacity = "0";

      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transition =
            "all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
          buttonRef.current.style.transform = "scale(1) rotate(0deg)";
          buttonRef.current.style.opacity = "1";
        }
      }, 1500);
    }

    // Periodic attention animation
    const attentionAnimation = () => {
      if (buttonRef.current) {
        buttonRef.current.style.transform = "scale(1.2)";
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.style.transform = "scale(1)";
          }
        }, 300);
      }
    };

    // Run attention animation every 30 seconds
    const attentionInterval = setInterval(attentionAnimation, 30000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(attentionInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={tooltipRef}
        className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg px-3 py-2 text-sm font-medium opacity-0 transform translate-x-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ minWidth: "120px" }}
      >
        Chat with us!
        <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>

      <div
        ref={pulseRef}
        className="absolute inset-0 bg-green-500 rounded-full opacity-50 animate-pulse"
      ></div>

      <a
        ref={buttonRef}
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
}

"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useAnimation } from "@/components/animation-provider"

export function WhatsAppButton() {
  const { isMobile } = useAnimation()
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const pulseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
        rotation: -45,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
        delay: 1.5,
      },
    )

    // Create continuous pulse animation
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power1.out",
      })
    }

    // Hover animation setup
    if (buttonRef.current && tooltipRef.current) {
      // Create a timeline for the hover animation
      const hoverTl = gsap.timeline({ paused: true })

      // Add animations to the timeline
      hoverTl.to(
        buttonRef.current,
        {
          scale: 1.1,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0,
      )

      hoverTl.to(
        tooltipRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      )

      // Set up event listeners
      buttonRef.current.addEventListener("mouseenter", () => hoverTl.play())
      buttonRef.current.addEventListener("mouseleave", () => hoverTl.reverse())

      // For touch devices
      buttonRef.current.addEventListener("touchstart", () => hoverTl.play(), { passive: true })
      buttonRef.current.addEventListener("touchend", () => hoverTl.reverse(), { passive: true })
    }

    // Periodic attention animation
    const attentionAnimation = () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1.2,
          duration: 0.3,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => {
            // Slight rotation wiggle
            gsap.to(buttonRef.current, {
              rotation: 10,
              duration: 0.2,
              repeat: 3,
              yoyo: true,
              ease: "power1.inOut",
            })
          },
        })
      }
    }

    // Run attention animation every 30 seconds
    const attentionInterval = setInterval(attentionAnimation, 30000)

    return () => {
      // Clean up animations and intervals
      clearInterval(attentionInterval)

      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", () => {})
        buttonRef.current.removeEventListener("mouseleave", () => {})
        buttonRef.current.removeEventListener("touchstart", () => {})
        buttonRef.current.removeEventListener("touchend", () => {})
      }
    }
  }, [isMobile])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={tooltipRef}
        className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg px-3 py-2 text-sm font-medium opacity-0 transform translate-x-10"
        style={{ minWidth: "120px" }}
      >
        Chat with us!
        <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>

      <div ref={pulseRef} className="absolute inset-0 bg-green-500 rounded-full opacity-50"></div>

      <a
        ref={buttonRef}
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
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
  )
}

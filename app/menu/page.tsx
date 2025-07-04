"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MenuPdfViewer } from "@/components/menu-pdf-viewer"
import { MenuCategory } from "@/components/menu-category"
import { useAnimation } from "@/components/animation-provider"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function MenuPage() {
  const { isMobile } = useAnimation()
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const floatingBubblesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a master timeline
    const masterTl = gsap.timeline()

    // Animate header with text reveal if TextPlugin is available
    if (headerRef.current && (window as any).TextPlugin) {
      const heading = headerRef.current.querySelector("h1")
      const subtext = headerRef.current.querySelector("p")
      const button = headerRef.current.querySelector("button")

      masterTl
        .from(heading, {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          subtext,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          button,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
    } else if (headerRef.current) {
      // Fallback if TextPlugin is not available
      masterTl.from(headerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    }

    // Floating bubble animations
    if (floatingBubblesRef.current) {
      const bubbles = floatingBubblesRef.current.querySelectorAll(".floating-bubble")

      bubbles.forEach((bubble, index) => {
        // Random starting position
        gsap.set(bubble, {
          x: gsap.utils.random(-20, 20),
          y: gsap.utils.random(-10, 10),
          rotation: gsap.utils.random(-10, 10),
        })

        // Create floating animation
        gsap.to(bubble, {
          y: gsap.utils.random(-30, -15),
          x: gsap.utils.random(-25, 25),
          rotation: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        })

        // Create entrance animation
        masterTl.from(
          bubble,
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.2 + index * 0.1,
          },
          "-=0.4",
        )
      })
    }

    return () => {
      // Clean up animations
      masterTl.kill()

      if ((window as any).ScrollTrigger) {
        ;(window as any).ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [isMobile])

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFAF5]">
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white" ref={headerRef}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Our Menu</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">EXPLORE OUR DELICIOUS OFFERINGS</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              From classic steamed momos to crispy fried delights and refreshing bubble teas - we've got something for
              everyone!
            </p>
            <div className="mt-4 flex items-center justify-center">
              <MenuPdfViewer />
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12" ref={menuRef}>
        <div className="relative" ref={floatingBubblesRef}>
          <div className="floating-bubble absolute -top-10 left-1/4 bg-orange-100 text-orange-600 font-bold px-4 py-2 rounded-full transform rotate-12 z-10">
            Extra Juicy!
          </div>
          <div className="floating-bubble absolute top-40 right-10 bg-teal-100 text-teal-600 font-bold px-4 py-2 rounded-full transform -rotate-6 z-10">
            Steamed with Love
          </div>
          <div className="floating-bubble absolute top-80 left-10 bg-red-100 text-red-600 font-bold px-4 py-2 rounded-full transform rotate-3 z-10">
            So Spicy 🥵
          </div>
          <div className="floating-bubble absolute top-120 right-20 bg-yellow-100 text-yellow-600 font-bold px-4 py-2 rounded-full transform rotate-6 z-10">
            Street Style Swag
          </div>
        </div>

        <MenuCategory
          title="STEAM CLASSICS"
          items={[
            { name: "VEG STEAMED MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "PANEER STEAMED MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "CHEESE STEAMED MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "CHICKEN STEAMED MOMOS", image: "/placeholder.svg?height=300&width=300" },
          ]}
        />

        <MenuCategory
          title="FRIED FAVOURITES"
          items={[
            { name: "VEG FRIED MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "PANEER FRIED MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "CHEESE FRIED MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "CHICKEN FRIED MOMOS", image: "/placeholder.svg?height=300&width=300" },
          ]}
        />

        <MenuCategory
          title="TANDOORI MOMOS"
          items={[
            { name: "VEG TANDOORI MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "PANEER TANDOORI MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "CHEESE TANDOORI MOMOS", image: "/placeholder.svg?height=300&width=300" },
            { name: "CHICKEN TANDOORI MOMOS", image: "/placeholder.svg?height=300&width=300" },
          ]}
        />

        <MenuCategory
          title="BUBBLE TEA"
          items={[
            { name: "TARO BUBBLE TEA", image: "/placeholder.svg?height=300&width=300" },
            { name: "MATCHA BUBBLE TEA", image: "/placeholder.svg?height=300&width=300" },
            { name: "CLASSIC BUBBLE TEA", image: "/placeholder.svg?height=300&width=300" },
            { name: "COFFEE FRAPPE BUBBLE TEA", image: "/placeholder.svg?height=300&width=300" },
          ]}
        />
      </div>
    </main>
  )
}

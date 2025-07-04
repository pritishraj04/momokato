"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MotionInView, MotionDiv, MotionStagger, fadeInUp, slideInLeft } from "@/components/framer-motion-wrapper"

export function CustomerFavorites() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = [
    { name: "PANEER TANDOORI MOMOS", image: "/placeholder.svg?height=300&width=300" },
    { name: "CHICKEN FRIED MOMOS", image: "/placeholder.svg?height=300&width=300" },
    { name: "CHEESE CORN MOMOS", image: "/placeholder.svg?height=300&width=300" },
    { name: "TARO BUBBLE TEA", image: "/placeholder.svg?height=300&width=300" },
    { name: "VEG SCHEZWAN MOMOS", image: "/placeholder.svg?height=300&width=300" },
    { name: "CHICKEN AFGHANI MOMOS", image: "/placeholder.svg?height=300&width=300" },
  ]

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(items.length - 3, prev + 1))
  }

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <MotionInView
          variants={fadeInUp}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
          threshold={0.3}
          rootMargin="0px 0px -100px 0px"
        >
          <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            Hot Picks
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">CUSTOMER FAVOURITES</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our most loved items that keep our customers coming back for more!
          </p>
        </MotionInView>

        <div className="relative">
          <MotionStagger
            delay={0.3}
            staggerDelay={0.1}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-6"
            style={{
              transform: `translateX(-${currentIndex * 320}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
            threshold={0.2}
            rootMargin="0px 0px -50px 0px"
          >
            {items.map((item, index) => (
              <MotionDiv
                key={index}
                variants={slideInLeft}
                className="slider-item flex-none w-[280px] md:w-[320px] snap-start group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <div className="steam-container absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="steam opacity-0"></div>
                      <div className="steam opacity-0" style={{ left: "40%" }}></div>
                      <div className="steam opacity-0" style={{ left: "60%" }}></div>
                    </div>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="menu-item-image w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-center mb-3">{item.name}</h3>
                    <div className="flex justify-center gap-2">
                      <Link href="https://www.swiggy.com" target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full order-button bg-transparent"
                        >
                          Order on Swiggy
                        </Button>
                      </Link>
                      <Link href="https://www.zomato.com" target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-500 hover:bg-red-50 rounded-full order-button bg-transparent"
                        >
                          Order on Zomato
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionStagger>

          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 hidden md:block nav-button disabled:opacity-50"
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6 text-orange-500" />
          </button>

          <button
            onClick={scrollRight}
            disabled={currentIndex >= items.length - 3}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 hidden md:block nav-button disabled:opacity-50"
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6 text-orange-500" />
          </button>
        </div>

        <MotionInView variants={fadeInUp} delay={0.5} className="flex justify-center mt-8" threshold={0.3}>
          <Link href="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 py-3 cta-button">
              View All Menu Items <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </MotionInView>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MotionDiv, MotionStagger, fadeInUp, slideInLeft, slideInRight } from "@/components/framer-motion-wrapper"

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32 bg-white overflow-hidden">
      <div className="container px-3 md:px-4 lg:px-6 relative">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <MotionStagger
            delay={0.2}
            staggerDelay={0.2}
            className="flex flex-col justify-center space-y-3 md:space-y-4"
            threshold={0.3}
          >
            <MotionDiv
              variants={slideInLeft}
              className="max-w-[150px] md:max-w-[200px] transform -rotate-3"
            >
              <img
                src="/images/uis/sec2.svg?height=180&width=250"
                alt="Momos for every mood sticker"
                className="w-full h-auto max-w-[220px] md:max-w-[260px] lg:max-w-[280px]"
              />
            </MotionDiv>

            <MotionDiv variants={fadeInUp} delay={0.3}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tighter">
                FRESH MOMOS & BUBBLE TEA
              </h1>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} delay={0.4}>
              <p className="max-w-[600px] text-gray-500 text-sm md:text-xl">
                Handcrafted with love, steamed to perfection. Our momos are made fresh daily with quality ingredients!
              </p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} delay={0.5} className="flex gap-4 mt-2">
              <Link href="https://www.swiggy.com" target="_blank">
                <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-6 py-4 md:px-8 md:py-6 text-sm md:text-lg">
                  Order on Swiggy <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link href="https://www.zomato.com" target="_blank">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-orange-600 text-orange-600 hover:bg-orange-50 font-bold rounded-full px-6 py-4 md:px-8 md:py-6 text-sm md:text-lg bg-transparent"
                >
                  Order on Zomato <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} delay={0.6} className="flex items-start sm:items-center gap-4 mt-3 md:mt-4">
              <div className="bg-orange-100 text-orange-600 font-bold px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                Starting @ ₹80 | 6 pcs
              </div>
              <div className="bg-black text-white font-bold px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                2 Locations & Growing!
              </div>
            </MotionDiv>
          </MotionStagger>

          <MotionDiv
            variants={slideInRight}
            delay={0.4}
            className="flex items-center justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-teal-400 text-white text-sm md:text-lg font-bold px-3 py-2 md:px-4 md:py-2 rounded-full transform rotate-12 z-10 sticker">
                NEW!
              </div>
              <div className="relative bg-gray-100 rounded-3xl overflow-hidden">
                <div className="steam"></div>
                <div className="steam" style={{ left: "40%" }}></div>
                <div className="steam" style={{ left: "60%" }}></div>
                <img
                  alt="Momo in bamboo steamer"
                  className="mx-auto object-cover w-full max-w-[400px] md:max-w-[500px]"
                  src="/images/22.jpg"
                  width={500}
                  height={600}
                />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-orange-600 text-white font-bold px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                  6 pcs
                </div>
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-full p-3 md:p-4 shadow-lg">
                <div className="text-orange-600 font-bold text-sm md:text-xl">Bubble Tea</div>
                <div className="text-black text-xs md:text-sm">Try Now!</div>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-100 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MotionInView, MotionStagger, MotionDiv, fadeInUp, slideInLeft } from "@/components/framer-motion-wrapper"

interface MenuItem {
  name: string
  image: string
}

interface MenuCategoryProps {
  title: string
  items: MenuItem[]
}

export function MenuCategory({ title, items }: MenuCategoryProps) {
  return (
    <div className="menu-category mb-16">
      <MotionInView variants={fadeInUp} className="relative mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
        <div className="h-1 w-20 bg-orange-500 mt-2"></div>
      </MotionInView>

      <MotionStagger delay={0.2} staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <MotionDiv key={index} variants={slideInLeft} className="menu-item group relative">
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="steam-container absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="steam opacity-0"></div>
                <div className="steam opacity-0" style={{ left: "40%" }}></div>
                <div className="steam opacity-0" style={{ left: "60%" }}></div>
              </div>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="menu-item-image w-full h-64 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">{item.name}</h3>
            <div className="flex justify-center gap-2">
              <Link href="https://www.swiggy.com" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full order-button"
                >
                  Order on Swiggy
                </Button>
              </Link>
              <Link href="https://www.zomato.com" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-500 text-red-500 hover:bg-red-50 rounded-full order-button"
                >
                  Order on Zomato
                </Button>
              </Link>
            </div>
          </MotionDiv>
        ))}
      </MotionStagger>
    </div>
  )
}

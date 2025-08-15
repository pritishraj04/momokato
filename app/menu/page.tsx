"use client";

import { useEffect, useRef } from "react";
import { MenuPdfViewer } from "@/components/menu-pdf-viewer";
import { MenuCategory } from "@/components/menu-category";
import { useAnimation } from "@/components/animation-provider";
import {
  MotionInView,
  MotionDiv,
  fadeInUp,
  scaleIn,
} from "@/components/framer-motion-wrapper";

export default function MenuPage() {
  const { isMobile } = useAnimation();
  const floatingBubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple CSS-based floating animation for bubbles
    if (floatingBubblesRef.current) {
      const bubbles =
        floatingBubblesRef.current.querySelectorAll(".floating-bubble");

      bubbles.forEach((bubble, index) => {
        const element = bubble as HTMLElement;
        // Add staggered entrance animation
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add("animate-float-in");
      });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFAF5]">
      {/* Header Section */}
      <MotionInView
        variants={fadeInUp}
        className="w-full py-12 md:py-24 bg-orange-600 text-white"
        threshold={isMobile ? 0.05 : 0.1}
        rootMargin={isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px"}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <MotionDiv
              variants={scaleIn}
              delay={0.2}
              className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium"
            >
              Our Menu
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.4}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                EXPLORE OUR DELICIOUS OFFERINGS
              </h1>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} delay={0.6}>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                From classic steamed momos to crispy fried delights and
                refreshing bubble teas - we've got something for everyone!
              </p>
            </MotionDiv>
            <MotionDiv variants={scaleIn} delay={0.8}>
              <div className="mt-4 flex items-center justify-center z-50">
                <MenuPdfViewer />
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionInView>

      {/* Menu Content */}
      <div className="container px-4 md:px-6 py-12">
        {/* Floating Bubbles - Reverted to original */}
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

        {/* Menu Categories with Enhanced Mobile Detection */}
        <MotionInView
          variants={fadeInUp}
          threshold={isMobile ? 0.02 : 0.1}
          rootMargin={isMobile ? "0px 0px 0px 0px" : "0px 0px -50px 0px"}
          className="mb-8"
        >
          <MenuCategory
            title="STEAM CLASSICS"
            items={[
              {
                name: "VEG STEAMED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "PANEER STEAMED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CHEESE STEAMED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CHICKEN STEAMED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
            ]}
          />
        </MotionInView>

        <MotionInView
          variants={fadeInUp}
          threshold={isMobile ? 0.02 : 0.1}
          rootMargin={isMobile ? "0px 0px 0px 0px" : "0px 0px -50px 0px"}
          className="mb-8"
        >
          <MenuCategory
            title="FRIED FAVOURITES"
            items={[
              {
                name: "VEG FRIED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "PANEER FRIED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CHEESE FRIED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CHICKEN FRIED MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
            ]}
          />
        </MotionInView>

        <MotionInView
          variants={fadeInUp}
          threshold={isMobile ? 0.02 : 0.1}
          rootMargin={isMobile ? "0px 0px 0px 0px" : "0px 0px -50px 0px"}
          className="mb-8"
        >
          <MenuCategory
            title="TANDOORI MOMOS"
            items={[
              {
                name: "VEG TANDOORI MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "PANEER TANDOORI MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CHEESE TANDOORI MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CHICKEN TANDOORI MOMOS",
                image: "/placeholder.svg?height=300&width=300",
              },
            ]}
          />
        </MotionInView>

        <MotionInView
          variants={fadeInUp}
          threshold={isMobile ? 0.02 : 0.1}
          rootMargin={isMobile ? "0px 0px 0px 0px" : "0px 0px -50px 0px"}
          className="mb-8"
        >
          <MenuCategory
            title="BUBBLE TEA"
            items={[
              {
                name: "TARO BUBBLE TEA",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "MATCHA BUBBLE TEA",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "CLASSIC BUBBLE TEA",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "COFFEE FRAPPE BUBBLE TEA",
                image: "/placeholder.svg?height=300&width=300",
              },
            ]}
          />
        </MotionInView>
      </div>
    </main>
  );
}

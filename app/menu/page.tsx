"use client";

import { useEffect, useRef, useState } from "react";
import { MenuPdfViewer } from "@/components/menu-pdf-viewer";
import { MenuCategory } from "@/components/menu-category";
import { menuData } from "@/lib/menu-data";

export default function MenuPage() {
  const [isMobile, setIsMobile] = useState(false);
  const floatingBubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

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

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFAF5]">
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center stagger-children">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Our Menu
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              EXPLORE OUR DELICIOUS OFFERINGS
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              From classic steamed momos to crispy fried delights and refreshing
              bubble teas - we've got something for everyone!
            </p>
            <div className="mt-4 flex items-center justify-center z-50">
              <MenuPdfViewer />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="container px-4 md:px-6 py-12">
        {/* Floating Bubbles */}
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

        {/* Menu Categories */}
        {menuData.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}

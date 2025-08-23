"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SwiggyButton, ZomatoButton } from "@/components/delivery-button";
import { MotionInView, fadeInUp } from "@/components/framer-motion-wrapper";

export function CustomerFavorites() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      name: "TANDOORI MOMOS",
      image: "/images/menu/Tandori Momo.jpg",
    },
    {
      name: "Panner Chilli",
      image: "/images/menu/Paneer Chilli.jpg",
    },
    {
      name: "Mint Mojito",
      image: "/images/menu/Mint Mojito.jpg",
    },
    { name: "Bannana Shake", image: "/images/menu/Banana Shake.jpg" },
    {
      name: "Kala Khatta",
      image: "/images/menu/Kala Khatta.jpg",
    },
    {
      name: "Oreo Shake",
      image: "/images/menu/Oreo Shake.jpg",
    },
  ];

  const totalItems = items.length;
  const slideWidth = 300; // Fixed slide width for consistent calculations
  const gap = 24; // Gap between slides

  // Get items per view based on screen size
  const getItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 4; // Desktop: 4 items
    if (width >= 768) return 3; // Tablet: 3 items
    return 1; // Mobile: 1 item
  }, []);

  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView());
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [getItemsPerView]);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const clampedIndex = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(clampedIndex);
    },
    [isTransitioning, maxIndex],
  );

  const scrollLeft = useCallback(() => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, goToSlide, isTransitioning]);

  const scrollRight = useCallback(() => {
    if (isTransitioning) return;
    const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, goToSlide, isTransitioning]);

  // Touch/Mouse event handlers
  const handleStart = useCallback(
    (clientX: number) => {
      if (isTransitioning) return;
      setIsDragging(true);
      setStartX(clientX);
      setCurrentX(clientX);
      setDragOffset(0);
    },
    [isTransitioning],
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || isTransitioning) return;

      const deltaX = clientX - startX;
      setCurrentX(clientX);
      setDragOffset(deltaX);
    },
    [isDragging, startX, isTransitioning],
  );

  const handleEnd = useCallback(() => {
    if (!isDragging || isTransitioning) return;

    setIsDragging(false);
    const deltaX = currentX - startX;
    const threshold = slideWidth * 0.3; // 30% of slide width to trigger change

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        scrollLeft();
      } else {
        scrollRight();
      }
    }

    setDragOffset(0);
  }, [
    isDragging,
    currentX,
    startX,
    slideWidth,
    scrollLeft,
    scrollRight,
    isTransitioning,
  ]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Calculate transform with drag offset
  const getTransform = () => {
    const baseTransform = -(currentIndex * (slideWidth + gap));
    const finalTransform = baseTransform + dragOffset;
    return `translateX(${finalTransform}px)`;
  };

  // Auto-play functionality
  useEffect(() => {
    if (isDragging || isTransitioning) return;

    const interval = setInterval(() => {
      scrollRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging, isTransitioning, scrollRight]);

  // Transition management
  useEffect(() => {
    if (isDragging) return;

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex, isDragging]);

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <MotionInView
          variants={fadeInUp}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
          threshold={0.3}
          rootMargin="0px 0px -100px 0px"
        >
          <Image
            width={150}
            height={150}
            src="/images/uis/hotpicks.svg?height=180&width=250"
            alt="Momos for every mood sticker"
            className="w-full h-auto max-w-[150px] md:max-w-[150px] lg:max-w-[150px]"
          />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            CUSTOMER FAVOURITES
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our most loved items that keep our customers coming back for more!
          </p>
        </MotionInView>

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={carouselRef}
              className="flex pb-6"
              style={{
                transform: getTransform(),
                transition: isDragging
                  ? "none"
                  : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                gap: `${gap}px`,
                width: `${totalItems * (slideWidth + gap)}px`,
              }}
            >
              {items.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex-none group select-none"
                  style={{ width: `${slideWidth}px` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <div className="steam-container absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="steam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div
                          className="steam opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                          style={{ left: "40%" }}
                        ></div>
                        <div
                          className="steam opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                          style={{ left: "60%" }}
                        ></div>
                      </div>
                      <Image
                        width={300}
                        height={300}
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                        draggable={false}
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-base md:text-lg font-bold text-center mb-3 line-clamp-2 min-h-[3rem]">
                        {item.name}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <SwiggyButton
                          size="sm"
                          className="w-full text-xs md:text-sm"
                        />
                        <ZomatoButton
                          size="sm"
                          className="w-full text-xs md:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={scrollLeft}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-20 hidden md:flex items-center justify-center disabled:opacity-50 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-6 w-6 text-orange-500" />
          </button>

          <button
            onClick={scrollRight}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-20 hidden md:flex items-center justify-center disabled:opacity-50 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ArrowRight className="h-6 w-6 text-orange-500" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  currentIndex === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
              <span>Swipe to navigate</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>

        <MotionInView
          variants={fadeInUp}
          delay={0.5}
          className="flex justify-center mt-8"
          threshold={0.3}
        >
          <Link href="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 md:px-8 py-3 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
              View All Menu Items{" "}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </MotionInView>
      </div>
    </section>
  );
}

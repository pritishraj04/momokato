"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SwiggyButton, ZomatoButton } from "@/components/delivery-button";
import { ScrollAnimation } from "@/components/scroll-animation";

export function CustomerFavorites() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const slideWidth = 300;
  const gap = 24;

  // Get items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    return 1;
  };

  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView());
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    goToSlide(newIndex);
  };
  const scrollRight = () => {
    const newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Swiper handles all touch/mouse/keyboard events and transitions

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
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
        </ScrollAnimation>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={gap}
            slidesPerView={itemsPerView}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="pb-6"
            style={{ width: "100%" }}
            // Remove Swiper's built-in pagination
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={`${item.name}-${index}`}
                className="select-none"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full card-hover slide-hover-group w-full">
                  <div className="relative h-48 md:h-64 overflow-hidden w-full">
                    {/* Only show steam/hover effect on devices that support hover */}
                    <style jsx>{`
                      @media (hover: hover) {
                        .slide-hover-group:hover .steam {
                          opacity: 1 !important;
                        }
                        .slide-hover-group:hover img {
                          transform: scale(1.05) !important;
                        }
                        .slide-hover-group:hover {
                          box-shadow:
                            0 10px 24px 0 rgba(0, 0, 0, 0.1),
                            0 1.5px 4px 0 rgba(0, 0, 0, 0.1);
                        }
                      }
                    `}</style>
                    <div className="steam-container absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="steam opacity-0 transition-opacity duration-500"></div>
                      <div
                        className="steam opacity-0 transition-opacity duration-500 delay-100"
                        style={{ left: "40%" }}
                      ></div>
                      <div
                        className="steam opacity-0 transition-opacity duration-500 delay-200"
                        style={{ left: "60%" }}
                      ></div>
                    </div>
                    <Image
                      fill
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-contain transition-transform duration-300 pointer-events-none"
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
                        className="w-full text-xs md:text-sm btn-animate"
                      />
                      <ZomatoButton
                        size="sm"
                        className="w-full text-xs md:text-sm btn-animate"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Swiper navigation and pagination will be rendered outside */}
          </Swiper>
          {/* Swiper navigation buttons (hidden on mobile) */}
          <button
            className="swiper-prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-20 hidden md:flex items-center justify-center disabled:opacity-50 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-6 w-6 text-orange-500" />
          </button>
          <button
            className="swiper-next-btn absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-20 hidden md:flex items-center justify-center disabled:opacity-50 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ArrowRight className="h-6 w-6 text-orange-500" />
          </button>
          {/* Custom Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
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

        <ScrollAnimation delay={500} className="flex justify-center mt-8">
          <Link href="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 md:px-8 py-3 transition-all duration-200 hover:shadow-lg transform hover:scale-105 btn-animate">
              View All Menu Items{" "}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}

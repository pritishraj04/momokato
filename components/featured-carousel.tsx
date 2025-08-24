"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselSlide {
  id: number;
  image: string;
  link: string;
  alt: string;
}

export function FeaturedCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sample carousel data - image only with links
  const slides: CarouselSlide[] = [
    {
      id: 1,
      image: "/images/b1.jpg",
      link: "/menu",
      alt: "New Tandoori Momos - Featured Menu Item",
    },
    {
      id: 2,
      image: "/images/b5.jpg",
      link: "/order-online",
      alt: "Bubble Tea Festival - Special Offer",
    },
    {
      id: 3,
      image: "/images/b3.jpg",
      link: "/order-online",
      alt: "Franchise Opportunity - Join Momo Kato",
    },
    {
      id: 4,
      image: "/images/b2.jpg",
      link: "/menu",
      alt: "Franchise Opportunity - Join Momo Kato",
    },
    {
      id: 5,
      image: "/images/b4.jpg",
      link: "/franchise",
      alt: "Franchise Opportunity - Join Momo Kato",
    },
  ];

  // Initialize refs array
  useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, slides.length);
    dotsRef.current = dotsRef.current.slice(0, slides.length);
  }, [slides.length]);

  // Handle slide change with CSS transitions
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);

    const currentSlideEl = slidesRef.current[currentSlide];
    const nextSlideEl = slidesRef.current[index];

    if (currentSlideEl && nextSlideEl) {
      // Hide current slide
      currentSlideEl.style.opacity = "0";
      currentSlideEl.style.transform =
        index > currentSlide ? "translateX(-5%)" : "translateX(5%)";

      // Show next slide
      nextSlideEl.style.opacity = "1";
      nextSlideEl.style.transform = "translateX(0%)";

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      // Update active dot
      if (dotsRef.current[currentSlide] && dotsRef.current[index]) {
        dotsRef.current[currentSlide]?.classList.remove("bg-orange-600");
        dotsRef.current[currentSlide]?.classList.add("bg-orange-600/30");

        dotsRef.current[index]?.classList.remove("bg-orange-600/30");
        dotsRef.current[index]?.classList.add("bg-orange-600");
      }
    }

    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Swipe left
      } else {
        prevSlide(); // Swipe right
      }
    }

    touchStartXRef.current = null;
  };

  // Autoplay functionality
  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }

      autoplayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    };

    startAutoplay();

    // Pause autoplay on hover
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mouseenter", () => {
        if (autoplayTimerRef.current) {
          clearInterval(autoplayTimerRef.current);
          autoplayTimerRef.current = null;
        }
      });

      carousel.addEventListener("mouseleave", startAutoplay);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }

      if (carousel) {
        carousel.removeEventListener("mouseenter", () => {});
        carousel.removeEventListener("mouseleave", startAutoplay);
      }
    };
  }, [currentSlide, isAnimating]);

  // Initial setup
  useEffect(() => {
    if (slidesRef.current[0]) {
      slidesRef.current[0].style.opacity = "1";
      slidesRef.current[0].style.transform = "translateX(0%)";
    }

    // Initialize active dot
    if (dotsRef.current[0]) {
      dotsRef.current[0].classList.add("bg-orange-600");
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Maintain aspect ratio container */}
      <div className="relative w-full" style={{ paddingBottom: "40%" }}>
        {/* Carousel slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => (slidesRef.current[index] = el)}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === 0 ? "opacity-100" : "opacity-0"} ${index === currentSlide ? "pointer-events-auto" : "pointer-events-none"}`}
            aria-hidden={index !== currentSlide}
          >
            <Link href={slide.link} className="block w-full h-full">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-orange-600 rounded-full p-2 md:p-3 z-20 shadow-md transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-orange-600 rounded-full p-2 md:p-3 z-20 shadow-md transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            ref={(el) => (dotsRef.current[index] = el)}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-600" : "bg-orange-600/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          ></button>
        ))}
      </div>
    </div>
  );
}

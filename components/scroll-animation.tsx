"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-on-scroll";
      case "slide-left":
        return "animate-on-scroll-left";
      case "slide-right":
        return "animate-on-scroll-right";
      case "scale":
        return "animate-on-scroll-scale";
      default:
        return "animate-on-scroll";
    }
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}

// Convenience components
export function FadeInUp({
  children,
  className = "",
  delay = 0,
}: Omit<ScrollAnimationProps, "animation">) {
  return (
    <ScrollAnimation animation="fade-up" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideInLeft({
  children,
  className = "",
  delay = 0,
}: Omit<ScrollAnimationProps, "animation">) {
  return (
    <ScrollAnimation animation="slide-left" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideInRight({
  children,
  className = "",
  delay = 0,
}: Omit<ScrollAnimationProps, "animation">) {
  return (
    <ScrollAnimation
      animation="slide-right"
      className={className}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
}: Omit<ScrollAnimationProps, "animation">) {
  return (
    <ScrollAnimation animation="scale" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

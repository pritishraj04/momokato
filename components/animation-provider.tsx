"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Create context for responsive breakpoints
interface AnimationContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  reducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  reducedMotion: false,
});

// Hook to use the animation context
export const useAnimation = () => useContext(AnimationContext);

// Provider component
export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleReducedMotionChange);

    // Set up media queries for responsive breakpoints
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      mediaQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, []);

  return (
    <AnimationContext.Provider
      value={{ isMobile, isTablet, isDesktop, reducedMotion }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

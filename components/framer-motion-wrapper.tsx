"use client";

import type React from "react";
import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimation } from "@/components/animation-provider";

// Common animation variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Wrapper components with proper scroll-triggered animations
interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export function MotionDiv({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  duration,
  style,
}: MotionWrapperProps) {
  const { reducedMotion } = useAnimation();

  // If reduced motion is preferred, render without animation
  if (reducedMotion) {
    return (
      <div className={`${className} force-visible`} style={style}>
        {children}
      </div>
    );
  }

  const customVariants = duration
    ? {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...(variants.animate as any)?.transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...(variants.animate as any)?.transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={customVariants}
      className={`${className} motion-element`}
      style={{
        ...style,
        position: "relative",
        zIndex: "auto",
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  duration,
  style,
}: MotionWrapperProps) {
  const { reducedMotion } = useAnimation();

  if (reducedMotion) {
    return (
      <section className={`${className} force-visible`} style={style}>
        {children}
      </section>
    );
  }

  const customVariants = duration
    ? {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...(variants.animate as any)?.transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...(variants.animate as any)?.transition,
            delay,
          },
        },
      };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={customVariants}
      className={`${className} motion-element`}
      style={{
        ...style,
        position: "relative",
        zIndex: "auto",
      }}
    >
      {children}
    </motion.section>
  );
}

// Enhanced Intersection Observer based animation trigger
export function MotionInView({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  duration,
  style,
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "0px 0px -50px 0px",
}: MotionWrapperProps & {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}) {
  const ref = useRef(null);
  const { reducedMotion } = useAnimation();
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: rootMargin as any,
  });

  if (reducedMotion) {
    return (
      <div ref={ref} className={`${className} force-visible`} style={style}>
        {children}
      </div>
    );
  }

  const customVariants = duration
    ? {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...(variants.animate as any)?.transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...(variants.animate as any)?.transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      exit="exit"
      variants={customVariants}
      className={`${className} motion-element`}
      style={{
        ...style,
        position: "relative",
        zIndex: "auto",
      }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced stagger container with proper scroll triggering
export function MotionStagger({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  style,
  threshold = 0.1,
  triggerOnce = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  style?: React.CSSProperties;
  threshold?: number;
  triggerOnce?: boolean;
}) {
  const ref = useRef(null);
  const { reducedMotion } = useAnimation();
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "0px 0px -50px 0px" as any,
  });

  if (reducedMotion) {
    return (
      <div ref={ref} className={`${className} force-visible`} style={style}>
        {children}
      </div>
    );
  }

  const staggerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerVariants}
      className={`${className} motion-element`}
      style={{
        ...style,
        position: "relative",
        zIndex: "auto",
      }}
    >
      {children}
    </motion.div>
  );
}

// New component for scroll-triggered sections
export function ScrollTriggeredSection({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  threshold = 0.2,
  rootMargin = "0px 0px -100px 0px",
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef(null);
  const { reducedMotion } = useAnimation();
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    margin: rootMargin as any,
  });

  if (reducedMotion) {
    return (
      <section ref={ref} className={`${className} force-visible`}>
        {children}
      </section>
    );
  }

  const customVariants = {
    ...variants,
    animate: {
      ...variants.animate,
      transition: {
        ...(variants.animate as any)?.transition,
        delay,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={customVariants}
      className={`${className} motion-element`}
      style={{
        position: "relative",
        zIndex: "auto",
      }}
    >
      {children}
    </motion.section>
  );
}

// Hook for custom scroll-triggered animations
export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const ref = useRef(null);
  const { reducedMotion } = useAnimation();
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "0px 0px -50px 0px" as any,
  });

  return {
    ref,
    isInView: reducedMotion ? true : isInView,
    reducedMotion,
  };
}

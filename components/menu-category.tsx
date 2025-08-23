"use client";

import { SwiggyButton, ZomatoButton } from "@/components/delivery-button";
import {
  MotionInView,
  MotionStagger,
  MotionDiv,
  fadeInUp,
  slideInLeft,
  scaleIn,
} from "@/components/framer-motion-wrapper";
import { useAnimation } from "@/components/animation-provider";

interface MenuItem {
  name: string;
  image: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

export function MenuCategory({ title, items }: MenuCategoryProps) {
  const { isMobile } = useAnimation();

  return (
    <div className="menu-category mb-16">
      <MotionInView
        variants={fadeInUp}
        className="relative mb-8"
        threshold={isMobile ? 0.05 : 0.1}
        rootMargin={isMobile ? "0px 0px 0px 0px" : "0px 0px -30px 0px"}
      >
        <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
        <div className="h-1 w-20 bg-orange-500 mt-2"></div>
      </MotionInView>

      <MotionInView
        threshold={isMobile ? 0.02 : 0.05}
        rootMargin={isMobile ? "0px 0px 0px 0px" : "0px 0px -20px 0px"}
      >
        <MotionStagger
          delay={0.1}
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          threshold={isMobile ? 0.02 : 0.05}
        >
          {items.map((item, index) => (
            <MotionDiv
              key={index}
              variants={slideInLeft}
              className="menu-item group relative"
            >
              <MotionDiv
                variants={scaleIn}
                className="relative mb-4 overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="steam-container absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="steam opacity-0"></div>
                  <div
                    className="steam opacity-0"
                    style={{ left: "40%" }}
                  ></div>
                  <div
                    className="steam opacity-0"
                    style={{ left: "60%" }}
                  ></div>
                </div>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="menu-item-image w-full h-64 object-contain"
                />
              </MotionDiv>

              <MotionDiv variants={fadeInUp} delay={0.2}>
                <h3 className="text-xl font-bold text-center mb-3">
                  {item.name}
                </h3>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} delay={0.3}>
                <div className="flex justify-center gap-2">
                  <SwiggyButton size="sm" className="order-button" />
                  <ZomatoButton size="sm" className="order-button" />
                </div>
              </MotionDiv>
            </MotionDiv>
          ))}
        </MotionStagger>
      </MotionInView>
    </div>
  );
}

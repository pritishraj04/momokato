"use client";

import { useState, useEffect } from "react";
import { MenuItemCard } from "@/components/menu-item-card";
import { ScrollAnimation } from "@/components/scroll-animation";
import type { MenuCategory as MenuCategoryType } from "@/lib/menu-data";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export function MenuCategory({ category }: MenuCategoryProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="menu-category mb-16">
      <ScrollAnimation className="relative mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">
          {category.title}
        </h2>
        <div className="h-1 w-20 bg-orange-500 mt-2"></div>
      </ScrollAnimation>

      {/* Updated grid layout: 3 on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-children">
        {category.items.map((item, index) => (
          <ScrollAnimation key={item.id} delay={index * 100}>
            <MenuItemCard
              item={item}
              showOrderButton={true}
              className="group"
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

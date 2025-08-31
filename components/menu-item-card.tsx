import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/lib/menu-data";

interface MenuItemCardProps {
  item: MenuItem;
  showOrderButton?: boolean;
  className?: string;
}

export function MenuItemCard({
  item,
  showOrderButton = true,
  className = "",
}: MenuItemCardProps) {
  return (
    <Card
      className={`overflow-hidden rounded-xl border-none shadow-lg card-hover h-full flex flex-col ${className}`}
    >
      {/* Image Container - No gaps, flush to top */}
      <div className="relative flex-shrink-0">
        {item.id === "veg-steamed" && (
          <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10">
            BESTSELLER
          </div>
        )}
        {item.id === "chicken-fried" && (
          <div className="absolute top-2 right-2 bg-teal-400 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10">
            NEW
          </div>
        )}
        {item.id === "taro-bubble" && (
          <div className="absolute top-2 right-2 bg-teal-400 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10">
            POPULAR
          </div>
        )}
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
        <img
          alt={item.name}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-300 hover:scale-105"
          src={item.image || "/placeholder.svg"}
          width={300}
          height={224}
        />
      </div>

      {/* Content Container - Flexible height with button anchored at bottom */}
      <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
        {/* Header with title and quantity */}
        <div className="flex justify-between items-start mb-2 flex-shrink-0">
          <h3 className="text-lg md:text-xl font-bold line-clamp-2 flex-1 pr-2">
            {item.name}
          </h3>
          {item.quantity && (
            <div className="bg-black text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full flex-shrink-0">
              {item.quantity}
            </div>
          )}
        </div>

        {/* Description - flexible height */}
        {item.description && (
          <p className="text-gray-500 mb-4 text-sm md:text-base line-clamp-3 flex-grow">
            {item.description}
          </p>
        )}

        {/* Bottom section - anchored to bottom */}
        <div className="flex justify-between items-center mt-auto pt-2">
          {item.price && (
            <div className="text-lg md:text-xl font-bold flex-shrink-0">
              {item.price}
            </div>
          )}
          {showOrderButton && (
            <div className="ml-auto">
              <Link href="/order-online">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-3 md:px-4 py-2 text-xs md:text-sm btn-animate whitespace-nowrap">
                  Order Online Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

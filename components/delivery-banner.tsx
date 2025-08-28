import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DeliveryBannerProps {
  platform: string;
  description: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
  buttonText: string;
  buttonLink: string;
  icon: React.ReactNode;
}

export function DeliveryBanner({
  platform,
  description,
  bgColor,
  textColor,
  buttonColor,
  buttonText,
  buttonLink,
  icon,
}: DeliveryBannerProps) {
  return (
    <div
      className={cn("rounded-xl overflow-hidden shadow-lg relative", bgColor)}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center p-8 md:p-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-full">{icon}</div>
            <h3 className={cn("text-2xl md:text-3xl font-bold", textColor)}>
              Order on {platform}
            </h3>
          </div>
          <p className={cn("max-w-[600px] md:text-xl/relaxed", textColor)}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href={buttonLink} target="_blank">
              <Button
                className={cn(
                  "font-bold rounded-full px-8 py-6 text-lg group transition-all duration-300 transform hover:scale-105",
                  buttonColor,
                )}
              >
                {buttonText}{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-white text-lg font-bold px-4 py-2 rounded-full transform rotate-12 z-10 sticker">
              Fast Delivery!
            </div>
            <img
              alt={`Order on ${platform}`}
              className="rounded-xl object-cover w-full max-w-[400px] h-[250px] border-4 border-white shadow-lg"
              src={`/images/${platform.toLowerCase()}1.jpg`}
              width={400}
              height={250}
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <div
                className={cn(
                  "font-bold text-lg",
                  platform === "Swiggy" ? "text-orange-500" : "text-red-500",
                )}
              >
                {platform}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

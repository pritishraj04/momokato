import type React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSwiggyLink, getZomatoLink } from "@/lib/config";

interface DeliveryButtonProps {
  platform: "swiggy" | "zomato";
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export function DeliveryButton({
  platform,
  variant = "outline",
  size = "default",
  className = "",
  children,
  showIcon = true,
}: DeliveryButtonProps) {
  const links = {
    swiggy: getSwiggyLink(),
    zomato: getZomatoLink(),
  };

  const platformConfig = {
    swiggy: {
      text: "Order on Swiggy",
      className:
        "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-200 bg-transparent",
    },
    zomato: {
      text: "Order on Zomato",
      className:
        "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 bg-transparent",
    },
  };

  const config = platformConfig[platform];
  const buttonText = children || config.text;

  return (
    <Link href={links[platform]} target="_blank" rel="noopener noreferrer">
      <Button
        variant={variant}
        size={size}
        className={`${config.className} ${className}`}
      >
        {buttonText}
        {showIcon && <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />}
      </Button>
    </Link>
  );
}

// Convenience components for specific use cases
export function SwiggyButton(props: Omit<DeliveryButtonProps, "platform">) {
  return <DeliveryButton platform="swiggy" {...props} />;
}

export function ZomatoButton(props: Omit<DeliveryButtonProps, "platform">) {
  return <DeliveryButton platform="zomato" {...props} />;
}

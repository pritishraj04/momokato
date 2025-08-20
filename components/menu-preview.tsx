import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function MenuPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
      <Card className="overflow-hidden rounded-xl border-none shadow-lg card-mobile">
        <div className="relative">
          <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10">
            BESTSELLER
          </div>
          <Image
            alt="Steam Classic Momos"
            className="w-full object-cover"
            width={300}
            height={200}
            src="/images/menu/Banana Shake.jpg"
          />
        </div>
        <CardContent className="p-4 md:p-6 card-content-mobile">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg md:text-xl font-bold">
              Steam Classic Momos
            </h3>
            <div className="bg-black text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full">
              6 pcs
            </div>
          </div>
          <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
            Our signature steamed momos with a special filling of vegetables and
            spices.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-lg md:text-xl font-bold">₹80</div>
            <Link href="https://www.swiggy.com" target="_blank">
              <Button
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full btn-mobile order-button transition-all duration-200 bg-transparent"
              >
                Order Now <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-xl border-none shadow-lg card-mobile">
        <div className="relative">
          <div className="absolute top-2 right-2 bg-teal-400 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10">
            NEW
          </div>
          <Image
            alt="Tandoori Momo"
            className="w-full object-cover"
            src="/images/menu/Tandori Momo.jpg"
            width={300}
            height={200}
          />
        </div>
        <CardContent className="p-4 md:p-6 card-content-mobile">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg md:text-xl font-bold">Fried Momo Platter</h3>
            <div className="bg-black text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full">
              8 pcs
            </div>
          </div>
          <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
            Crispy fried momos served with our special dipping sauce and
            chutney.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-lg md:text-xl font-bold">₹120</div>
            <Link href="https://www.swiggy.com" target="_blank">
              <Button
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full btn-mobile order-button transition-all duration-200 bg-transparent"
              >
                Order Now <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-xl border-none shadow-lg card-mobile">
        <div className="relative">
          <div className="absolute top-2 right-2 bg-teal-400 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full z-10">
            POPULAR
          </div>
          <Image
            alt="Bubble Tea"
            className="w-full object-cover"
            src="/images/menu/Blue Curacao.jpg"
            width={300}
            height={200}
          />
        </div>
        <CardContent className="p-4 md:p-6 card-content-mobile">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg md:text-xl font-bold">Taro Bubble Tea</h3>
            <div className="bg-black text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full">
              500ml
            </div>
          </div>
          <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
            Creamy taro flavored milk tea with chewy tapioca pearls and jelly.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-lg md:text-xl font-bold">₹150</div>
            <Link href="https://www.swiggy.com" target="_blank">
              <Button
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full btn-mobile order-button transition-all duration-200 bg-transparent"
              >
                Order Now <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

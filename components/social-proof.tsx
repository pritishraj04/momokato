import { Star } from "lucide-react";
import Image from "next/image";
import { ScrollAnimation } from "@/components/scroll-animation";
import { reviews } from "@/lib/review-data";

export function SocialProof() {
  const featuredReviews = reviews.filter((r) => r.featured).slice(0, 3);

  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-gray-50">
      <div className="container px-3 md:px-4 lg:px-6">
        <ScrollAnimation className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center">
          <Image
            width={100}
            height={100}
            src="/images/uis/customerlove.svg?height=180&width=250"
            alt="Customer reviews illustration"
            className="w-full h-auto max-w-[200px]"
          />
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">
            WHAT PEOPLE SAY ABOUT US
          </h2>
          <p className="max-w-[700px] text-gray-500 text-sm md:text-xl/relaxed">
            Don't just take our word for it. Here's what our customers have to
            say about Momo Kato.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 stagger-children">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md card-hover flex flex-col h-full"
            >
              <div className="flex items-center gap-0.5 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base flex-grow">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-2 md:gap-3 mt-auto">
                <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">
                    {review.name}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    {review.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

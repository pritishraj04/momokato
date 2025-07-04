import { Star } from "lucide-react"
import { MotionInView, MotionStagger, MotionDiv, fadeInUp, slideInLeft } from "@/components/framer-motion-wrapper"

export function SocialProof() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-gray-50">
      <div className="container px-3 md:px-4 lg:px-6">
        <MotionInView
          variants={fadeInUp}
          className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center"
          threshold={0.3}
          rootMargin="0px 0px -100px 0px"
        >
          <div className="inline-block rounded-full bg-orange-100 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-medium text-orange-600">
            Customer Love
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter">WHAT PEOPLE SAY ABOUT US</h2>
          <p className="max-w-[700px] text-gray-500 text-sm md:text-xl/relaxed">
            Don't just take our word for it. Here's what our customers have to say about Momo Kato.
          </p>
        </MotionInView>

        <MotionStagger
          delay={0.4}
          staggerDelay={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12"
          threshold={0.2}
        >
          <MotionDiv variants={slideInLeft} className="bg-white p-4 md:p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-0.5 mb-3 md:mb-4">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
            </div>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
              "The momos at Momo Kato are absolutely delicious! The dough is perfectly steamed and the fillings are so
              flavorful. Their bubble tea is also amazing. Highly recommend!"
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-bold text-sm md:text-base">Priya Sharma</div>
                <div className="text-xs md:text-sm text-gray-500">Patna</div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={slideInLeft} className="bg-white p-4 md:p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-0.5 mb-3 md:mb-4">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
            </div>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
              "Best momos in town! The fried platter is my go-to order. The sauces are incredible and the service is
              always quick. Love the vibrant atmosphere too!"
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-bold text-sm md:text-base">Rahul Gupta</div>
                <div className="text-xs md:text-sm text-gray-500">Gandhi Maidan</div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={slideInLeft} className="bg-white p-4 md:p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-0.5 mb-3 md:mb-4">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-gray-200 text-gray-200" />
            </div>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
              "The taro bubble tea is absolutely divine! Perfect sweetness and the pearls are always cooked just right.
              Their momos are consistently good quality. Great value for money!"
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-bold text-sm md:text-base">Ananya Patel</div>
                <div className="text-xs md:text-sm text-gray-500">Patna Central</div>
              </div>
            </div>
          </MotionDiv>
        </MotionStagger>
      </div>
    </section>
  )
}

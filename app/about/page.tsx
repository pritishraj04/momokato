import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Our Story</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">BORN IN PATNA, LOVED EVERYWHERE</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              The journey of Momo Kato from a small food stall to a growing QSR brand.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Beginning</h2>
              <div className="space-y-4 text-gray-500">
                <p>
                  Momo Kato started as a small food stall in Patna in 2022, founded by two college friends with a
                  passion for authentic momos and bubble tea. What began as a weekend hobby quickly turned into a local
                  sensation.
                </p>
                <p>
                  Our founders, Rahul and Priya, spent months perfecting their recipes, sourcing the freshest
                  ingredients, and creating a unique dining experience that would set Momo Kato apart from other food
                  outlets.
                </p>
                <p>
                  The name "Kato" comes from the Japanese word for "home," reflecting our commitment to creating a warm,
                  welcoming atmosphere where customers can enjoy delicious food made with love and care.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-lg font-bold px-4 py-2 rounded-full transform rotate-12 z-10">
                  Est. 2022
                </div>
                <img
                  alt="Founders of Momo Kato"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">QUALITY, SPEED, FLAVOR</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We're committed to serving the freshest, most delicious momos and bubble tea with quick service and a
              smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold text-xl">Q</span>
              </div>
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-gray-500 mt-2">
                We use only the freshest ingredients and prepare our food daily to ensure the highest quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold">Speed</h3>
              <p className="text-gray-500 mt-2">
                Quick service without compromising on quality - that's our promise to our customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold text-xl">F</span>
              </div>
              <h3 className="text-xl font-bold">Flavor</h3>
              <p className="text-gray-500 mt-2">
                Our unique recipes and special sauces create a flavor experience that keeps customers coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Our Growth
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">3-MONTH GROWTH HIGHLIGHT</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              From a single stall to multiple locations in just three months - our journey has been incredible!
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-orange-200"></div>

            <div className="relative grid gap-8">
              <TimelineItem
                month="January 2022"
                title="First Food Stall"
                description="Opened our first food stall at Patna Food Festival with just 3 momo varieties."
                position="left"
              />

              <TimelineItem
                month="February 2022"
                title="First Permanent Location"
                description="Opened our first permanent location in Patna Central with expanded menu including bubble tea."
                position="right"
              />

              <TimelineItem
                month="March 2022"
                title="Social Media Buzz"
                description="Went viral on Instagram with our unique momo presentations and flavors."
                position="left"
              />

              <TimelineItem
                month="April 2022"
                title="Second Location"
                description="Opened our second location at Gandhi Maidan due to popular demand."
                position="right"
              />

              <TimelineItem
                month="May 2022"
                title="Franchise Program"
                description="Launched our franchise program to expand across Bihar and beyond."
                position="left"
              />

              <TimelineItem
                month="Today"
                title="Growing Strong"
                description="Two thriving locations with plans for rapid expansion through our franchise model."
                position="right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                Join Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">BE PART OF OUR STORY</h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                Whether as a customer, team member, or franchise partner - we invite you to be part of the Momo Kato
                family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button className="bg-white text-orange-600 hover:bg-orange-100 font-bold rounded-full px-8 py-6 text-lg">
                  Join as Franchise Partner <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 font-bold rounded-full px-8 py-6 text-lg"
                >
                  Careers at Momo Kato <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  alt="Momo Kato Team"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                  <div className="text-orange-600 font-bold text-xl">Join Us!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

interface TimelineItemProps {
  month: string
  title: string
  description: string
  position: "left" | "right"
}

function TimelineItem({ month, title, description, position }: TimelineItemProps) {
  return (
    <div className={`relative flex items-center ${position === "right" ? "justify-start" : "justify-end"}`}>
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600 border-4 border-orange-100`}
      ></div>
      <div className={`w-5/12 ${position === "right" ? "ml-8" : "mr-8"}`}>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-sm font-medium text-orange-600 mb-2">{month}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    </div>
  )
}

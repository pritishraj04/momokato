import Link from "next/link"
import { ArrowRight, ExternalLink, Truck, Clock, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DeliveryBanner } from "@/components/delivery-banner"
import { QrCodeDisplay } from "@/components/qr-code-display"
import { OfferStrip } from "@/components/offer-strip"

export default function OrderOnlinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Order Online</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">CRAVING MOMOS? ORDER ONLINE IN A CLICK!</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Now available on your favorite delivery apps. Quick delivery, hot momos, chilled bubble tea!
            </p>
            <div className="relative mt-4">
              <div className="steam"></div>
              <div className="steam" style={{ left: "40%", animationDelay: "0.5s" }}></div>
              <div className="steam" style={{ left: "60%", animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      <OfferStrip />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-12">
            <DeliveryBanner
              platform="Swiggy"
              description="Order from Swiggy and get piping hot momos at your doorstep. Quick delivery, hot momos, chilled bubble tea!"
              bgColor="bg-gradient-to-r from-orange-500 to-orange-600"
              textColor="text-white"
              buttonColor="bg-white text-orange-600 hover:bg-orange-100"
              buttonText="Order Now on Swiggy"
              buttonLink="https://www.swiggy.com"
              icon={<Truck className="h-8 w-8" />}
            />

            <DeliveryBanner
              platform="Zomato"
              description="Zomato delivers your favorite Kato treats with love. Fast delivery. No added MSG. All love."
              bgColor="bg-gradient-to-r from-red-500 to-red-600"
              textColor="text-white"
              buttonColor="bg-white text-red-600 hover:bg-red-100"
              buttonText="Order Now on Zomato"
              buttonLink="https://www.zomato.com"
              icon={<Truck className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Scan & Order
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">SCAN QR CODE TO ORDER</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Quickly scan these QR codes to order directly from your favorite delivery apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <QrCodeDisplay platform="Swiggy" description="Scan to order from Swiggy" logoColor="text-orange-500" />
            <QrCodeDisplay platform="Zomato" description="Scan to order from Zomato" logoColor="text-red-500" />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">LOVED BY MOMO LOVERS</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Join thousands of satisfied customers who enjoy our delicious momos every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Loved by 10,000+ customers</h3>
              <p className="text-gray-500 mt-2">Join our growing family of satisfied momo lovers.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Delivery in 30 mins</h3>
              <p className="text-gray-500 mt-2">Quick delivery to satisfy your momo cravings.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Only on Swiggy & Zomato</h3>
              <p className="text-gray-500 mt-2">Order from your favorite delivery platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Our Menu</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                EXPLORE OUR DELICIOUS MENU
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                From classic steamed momos to crispy fried delights and refreshing bubble teas - we've got something for
                everyone!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/menu">
                  <Button className="bg-white text-orange-600 hover:bg-orange-100 font-bold rounded-full px-8 py-6 text-lg">
                    View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  alt="Menu Preview"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-float">
                  <div className="text-orange-600 font-bold text-xl">Starting @ ₹80</div>
                  <div className="text-black text-sm">6 pcs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

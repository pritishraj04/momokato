import Link from "next/link";
import { ArrowRight, ExternalLink, Truck, Clock, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DeliveryBanner } from "@/components/delivery-banner";
import { SwiggyQrScanner, ZomatoQrScanner } from "@/components/qr-scanner";
import { OfferStrip } from "@/components/offer-strip";
import { ScrollAnimation } from "@/components/scroll-animation";
import { getSwiggyLink, getZomatoLink } from "@/lib/config";


export default function OrderOnlinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Order Online
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              CRAVING MOMOS? ORDER ONLINE IN A CLICK!
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Now available on your favorite delivery apps. Quick delivery, hot
              momos, chilled bubble tea!
            </p>
            <div className="relative mt-4">
              <div className="steam"></div>
              <div
                className="steam"
                style={{ left: "40%", animationDelay: "0.5s" }}
              ></div>
              <div
                className="steam"
                style={{ left: "60%", animationDelay: "1s" }}
              ></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <OfferStrip />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-12 stagger-children">
            <ScrollAnimation delay={100}>
              <DeliveryBanner
                platform="Swiggy"
                description="Order from Swiggy and get piping hot momos at your doorstep. Quick delivery, hot momos, chilled bubble tea!"
                bgColor="bg-gradient-to-r from-orange-500 to-orange-600"
                textColor="text-white"
                buttonColor="bg-white text-orange-600 hover:bg-orange-100"
                buttonText="Order Now on Swiggy"
                buttonLink={getSwiggyLink()}
                icon={<Truck className="h-8 w-8" />}
              />
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <DeliveryBanner
                platform="Zomato"
                description="Zomato delivers your favorite Kato treats with love. Fast delivery. No added MSG. All love."
                bgColor="bg-gradient-to-r from-red-500 to-red-600"
                textColor="text-white"
                buttonColor="bg-white text-red-600 hover:bg-red-100"
                buttonText="Order Now on Zomato"
                buttonLink={getZomatoLink()}
                icon={<Truck className="h-8 w-8" />}
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Scan & Order
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              SCAN QR CODE TO ORDER
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Skip the app downloads! Quickly scan these QR codes to order
              directly from your favorite delivery apps.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children">
            <ScrollAnimation delay={100}>
              <SwiggyQrScanner />
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <ZomatoQrScanner />
            </ScrollAnimation>
          </div>

          {/* QR Code Instructions */}
          <ScrollAnimation delay={300} className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 max-w-2xl mx-auto card-hover">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How to Use QR Codes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <p>Open your phone's camera app</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <p>Point camera at QR code</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <p>Tap notification to order</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              LOVED BY MOMO LOVERS
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Join thousands of satisfied customers who enjoy our delicious
              momos every day.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-children">
            <ScrollAnimation
              delay={100}
              className="bg-orange-50 p-6 rounded-xl text-center card-hover"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Loved by 10,000+ customers</h3>
              <p className="text-gray-500 mt-2">
                Join our growing family of satisfied momo lovers.
              </p>
            </ScrollAnimation>

            <ScrollAnimation
              delay={200}
              className="bg-orange-50 p-6 rounded-xl text-center card-hover"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Delivery in 30 mins</h3>
              <p className="text-gray-500 mt-2">
                Quick delivery to satisfy your momo cravings.
              </p>
            </ScrollAnimation>

            <ScrollAnimation
              delay={300}
              className="bg-orange-50 p-6 rounded-xl text-center card-hover"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Only on Swiggy & Zomato</h3>
              <p className="text-gray-500 mt-2">
                Order from your favorite delivery platforms.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation
              animation="slide-left"
              className="flex flex-col justify-center space-y-4"
            >
              <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                Our Menu
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                EXPLORE OUR DELICIOUS MENU
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                From classic steamed momos to crispy fried delights and
                refreshing bubble teas - we've got something for everyone!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/menu">
                  <Button className="bg-white text-orange-600 hover:bg-orange-100 font-bold rounded-full px-8 py-6 text-lg btn-animate">
                    View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animation="slide-right"
              delay={200}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <img
                  alt="Menu Preview"
                  className="rounded-xl object-cover hover-lift"
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-float">
                  <div className="text-orange-600 font-bold text-xl">
                    Starting @ ₹80
                  </div>
                  <div className="text-black text-sm">6 pcs</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}

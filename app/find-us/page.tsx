import { Phone, Clock } from "lucide-react";
import { LocationMap } from "@/components/location-map";
import { SwiggyQrScanner, ZomatoQrScanner } from "@/components/qr-scanner";
import { getBusinessInfo } from "@/lib/config";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function FindUsPage() {
  const businessInfo = getBusinessInfo();

  // Extended location data with coordinates and images
  const locations = [
    {
      ...businessInfo.LOCATIONS[0],
      coordinates: { lat: 25.5941, lng: 85.1376 }, // Patna Central coordinates
      image: "/placeholder.svg?height=200&width=400",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8944!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
      ...businessInfo.LOCATIONS[1],
      coordinates: { lat: 25.6093, lng: 85.1376 }, // Gandhi Maidan coordinates
      image: "/placeholder.svg?height=200&width=400",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7234!2d85.1376!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzMzLjUiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567891",
    },
    {
      name: "Momo Kato - Boring Road (Coming Soon)",
      address: "Near AIIMS, Boring Road, Patna, Bihar 800013",
      phone: "+91 9876543212",
      hours: "Opening Soon",
      coordinates: { lat: 25.5744, lng: 85.096 },
      image: "/placeholder.svg?height=200&width=400",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2156!2d85.0960!3d25.5744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM0JzI3LjgiTiA4NcKwMDUnNDUuNiJF!5e0!3m2!1sen!2sin!4v1234567892",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Our Locations
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              FIND US NEAR YOU
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Visit one of our locations and experience the Momo Kato
              difference. We're growing fast across Bihar!
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content - Map View Only */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8 stagger-children">
            {locations.map((location, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <LocationMap
                  name={location.name}
                  address={location.address}
                  phone={location.phone}
                  hours={location.hours}
                  coordinates={location.coordinates}
                  mapEmbedUrl={location.mapEmbedUrl}
                />
              </ScrollAnimation>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <ScrollAnimation
            delay={400}
            className="bg-gradient-to-r from-orange-50 to-teal-50 border-2 border-orange-200 rounded-xl p-6 text-center card-hover"
          >
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              Expanding Across Bihar!
            </h3>
            <p className="text-gray-700 mb-4">
              We're rapidly expanding! New locations opening soon in Kankarbagh,
              Rajendra Nagar, and Danapur. Stay tuned for updates and be the
              first to experience Momo Kato in your neighborhood!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Kankarbagh
              </span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Rajendra Nagar
              </span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Danapur
              </span>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Scan to Order Section */}
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
              Skip the wait! Scan these QR codes to order directly from your
              favorite delivery apps and get your momos delivered hot to your
              doorstep.
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

          {/* Additional Info */}
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

      {/* Call to Order Section */}
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-4xl mx-auto">
            <ScrollAnimation animation="slide-left">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  Call to Order
                </h2>
                <p className="text-white/90 mb-6 text-lg">
                  Prefer to call? No problem! Call any of our locations directly
                  to place your order for pickup. We'll have your fresh momos
                  ready when you arrive!
                </p>
                <div className="space-y-4">
                  {businessInfo.LOCATIONS.map((location, index) => (
                    <a
                      key={index}
                      href={`tel:${location.phone}`}
                      className="flex items-center gap-3 bg-white/10 rounded-lg p-3 card-hover"
                    >
                      <Phone className="h-5 w-5 text-white flex-shrink-0" />
                      <div className="w-full">
                        <div className="font-bold text-center">
                          {location.name}
                        </div>
                        <div className="text-white/90">{location.phone}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-white/90">
                  <Clock className="h-5 w-5" />
                  <span>Open daily: 11 AM - 10 PM</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animation="slide-right"
              delay={200}
              className="flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center card-hover">
                <div className="bg-white p-1 rounded-2xl shadow-md mb-4">
                  <img
                    alt="Call to order illustration"
                    // className="w-60 h-32 object-contain mx-auto"
                    src="/images/c1.jpg"
                    width={350}
                    height={250}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Phone Orders</h3>
                <p className="text-white/90 text-sm">
                  Call ahead and skip the wait. Perfect for pickup orders!
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}

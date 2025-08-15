import { MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FindUsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Our Locations
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              FIND US NEAR YOU
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Visit one of our locations and experience the Momo Kato
              difference. We're growing fast!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto">
              <TabsTrigger value="map" className="py-3 text-lg">
                Map View
              </TabsTrigger>
              <TabsTrigger value="list" className="py-3 text-lg">
                List View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="mt-8">
              <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden border shadow-md">
                <img
                  alt="Map of Momo Kato locations"
                  className="w-full h-full object-cover"
                  src="/placeholder.svg?height=600&width=1000"
                  width={1000}
                  height={600}
                />
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <LocationCard
                  name="Momo Kato - Patna Central"
                  address="123 Food Street, Patna, Bihar 800001"
                  phone="+91 9876543210"
                  hours="11 AM - 10 PM"
                />
                <LocationCard
                  name="Momo Kato - Gandhi Maidan"
                  address="45 Flavor Avenue, Gandhi Maidan, Patna, Bihar 800004"
                  phone="+91 9876543211"
                  hours="11 AM - 11 PM"
                />
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <LocationCard
                  name="Momo Kato - Patna Central"
                  address="123 Food Street, Patna, Bihar 800001"
                  phone="+91 9876543210"
                  hours="11 AM - 10 PM"
                />
                <LocationCard
                  name="Momo Kato - Gandhi Maidan"
                  address="45 Flavor Avenue, Gandhi Maidan, Patna, Bihar 800004"
                  phone="+91 9876543211"
                  hours="11 AM - 11 PM"
                />
                <div className="md:col-span-2 bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="text-xl font-bold text-orange-600">
                    Coming Soon!
                  </h3>
                  <p className="mt-2">
                    We're expanding rapidly! New locations opening soon in
                    Boring Road, Kankarbagh, and Rajendra Nagar. Stay tuned for
                    updates!
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Call to Order
              </h2>
              <p className="text-gray-500 mb-6">
                Scan the QR code or call us directly to place your order for
                pickup. We'll have your momos ready when you arrive!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <span className="font-bold">+91 9876543210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span>Open daily: 11 AM - 10 PM</span>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full">
                    Order on Swiggy
                  </Button>
                </a>
                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full">
                    Order on Zomato
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <img
                  alt="QR Code for ordering"
                  className="w-64 h-64 object-cover"
                  src="/placeholder.svg?height=256&width=256"
                  width={256}
                  height={256}
                />
                <p className="text-center mt-2 font-bold">Scan to Order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

function LocationCard({ name, address, phone, hours }: LocationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48">
        <img
          alt={name}
          className="w-full h-full object-cover"
          src="/placeholder.svg?height=200&width=400"
          width={400}
          height={200}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
            <span>{address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-orange-600 mt-0.5" />
            <span>{phone}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
            <span>{hours}</span>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-100 text-orange-600 font-medium px-4 py-2 rounded-full hover:bg-orange-200 transition-colors"
          >
            Order on Swiggy
          </a>
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-100 text-orange-600 font-medium px-4 py-2 rounded-full hover:bg-orange-200 transition-colors"
          >
            Order on Zomato
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

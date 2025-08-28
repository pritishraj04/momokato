import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { SwiggyButton, ZomatoButton } from "@/components/delivery-button";

interface LocationListItemProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function LocationListItem({
  name,
  address,
  phone,
  hours,
  image,
  coordinates,
}: LocationListItemProps) {
  // Generate Google Maps link for "Get Directions"
  const getDirectionsUrl = () => {
    if (coordinates) {
      return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    }
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="md:flex">
        {/* Location Image */}
        <div className="md:w-1/3">
          <div className="h-48 md:h-full relative">
            <img
              alt={name}
              className="w-full h-full object-cover"
              src={image || "/placeholder.svg?height=200&width=400"}
              width={400}
              height={200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Location Details */}
        <div className="md:w-2/3 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-0">
              {name}
            </h3>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 self-start"
            >
              <ExternalLink className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <a
                href={`tel:${phone}`}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{hours}</span>
            </div>
          </div>

          {/* Order Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <SwiggyButton className="flex-1 text-center" showIcon={false} />
            <ZomatoButton className="flex-1 text-center" showIcon={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

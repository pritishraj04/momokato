"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { SwiggyButton, ZomatoButton } from "@/components/delivery-button";

interface LocationMapProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function LocationMap({
  name,
  address,
  phone,
  hours,
  mapEmbedUrl,
  coordinates,
}: LocationMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Generate Google Maps embed URL if coordinates are provided
  const getMapUrl = () => {
    if (mapEmbedUrl) return mapEmbedUrl;
    if (coordinates) {
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=15`;
    }
    // Fallback to address-based embed
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&zoom=15`;
  };

  // Generate Google Maps link for "Get Directions"
  const getDirectionsUrl = () => {
    if (coordinates) {
      return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    }
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Map Container */}
      <div className="relative h-48 md:h-64 bg-gray-100">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Loading map...</p>
            </div>
          </div>
        )}

        {/* Interactive Map Embed */}
        <iframe
          src={getMapUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`w-full h-full transition-opacity duration-300 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setMapLoaded(true)}
          title={`Map of ${name}`}
        />

        {/* Map Overlay with Location Info */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[200px]">
          <h4 className="font-bold text-sm text-gray-900 mb-1">{name}</h4>
          <p className="text-xs text-gray-600 line-clamp-2">{address}</p>
        </div>

        {/* Get Directions Button */}
        <div className="absolute bottom-4 right-4">
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-200 hover:shadow-xl flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Directions
          </a>
        </div>
      </div>

      {/* Location Details */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-4">{name}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm md:text-base text-gray-700">
              {address}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <a
              href={`tel:${phone}`}
              className="text-sm md:text-base text-gray-700 hover:text-orange-600 transition-colors"
            >
              {phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm md:text-base text-gray-700">{hours}</span>
          </div>
        </div>

        {/* Order Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <SwiggyButton
            className="flex-1 text-center text-sm"
            showIcon={false}
          />
          <ZomatoButton
            className="flex-1 text-center text-sm"
            showIcon={false}
          />
        </div>
      </div>
    </div>
  );
}

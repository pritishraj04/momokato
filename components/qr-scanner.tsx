"use client";

import { useState } from "react";
import { QrCode, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSwiggyLink, getZomatoLink } from "@/lib/config";

interface QrScannerProps {
  platform: "swiggy" | "zomato";
  className?: string;
}

export function QrScanner({ platform, className = "" }: QrScannerProps) {
  const [qrLoaded, setQrLoaded] = useState(false);

  const platformConfig = {
    swiggy: {
      name: "Swiggy",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:bg-orange-500",
      link: getSwiggyLink(),
    },
    zomato: {
      name: "Zomato",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      hoverColor: "hover:bg-red-500",
      link: getZomatoLink(),
    },
  };

  const config = platformConfig[platform];

  // Generate QR code URL using a QR code API service
  const getQrCodeUrl = () => {
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/`;
    const params = new URLSearchParams({
      size: "200x200",
      data: config.link,
      format: "png",
      bgcolor: "FFFFFF",
      color: platform === "swiggy" ? "F26522" : "E23744",
      margin: "10",
      qzone: "1",
    });
    return `${qrApiUrl}?${params.toString()}`;
  };

  const handleDirectLink = () => {
    window.open(config.link, "_blank", "noopener,noreferrer");
  };

  const handleDownloadQr = () => {
    const link = document.createElement("a");
    link.href = getQrCodeUrl();
    link.download = `momo-kato-${platform}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {/* Platform Header */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <QrCode className={`h-6 w-6 ${config.color}`} />
        <h3 className="text-xl font-bold text-gray-900">{config.name}</h3>
      </div>

      {/* QR Code Container */}
      <div className="relative mb-4">
        {!qrLoaded && (
          <div className="w-48 h-48 mx-auto bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <QrCode className="h-12 w-12 text-gray-400 mx-auto mb-2 animate-pulse" />
              <p className="text-gray-500 text-sm">Generating QR...</p>
            </div>
          </div>
        )}

        <img
          alt={`QR Code for ${config.name}`}
          className={`w-48 h-48 mx-auto rounded-xl shadow-md transition-opacity duration-300 ${qrLoaded ? "opacity-100" : "opacity-0"}`}
          src={getQrCodeUrl() || "/placeholder.svg"}
          width={200}
          height={200}
          onLoad={() => setQrLoaded(true)}
          onError={() => {
            console.error(`Failed to load QR code for ${platform}`);
            setQrLoaded(true); // Show fallback even on error
          }}
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-sm">
        Scan this QR code with your phone camera to order directly from{" "}
        {config.name}
      </p>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleDirectLink}
          className={`w-full ${config.color} ${config.bgColor} ${config.hoverColor} border-2 ${config.borderColor} font-semibold transition-all duration-200`}
          variant="outline"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Open {config.name}
        </Button>

        <Button
          onClick={handleDownloadQr}
          variant="ghost"
          className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          size="sm"
        >
          <Download className="mr-2 h-4 w-4" />
          Download QR Code
        </Button>
      </div>

      {/* Platform Badge */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}
        >
          Order on {config.name}
        </span>
      </div>
    </div>
  );
}

// Convenience components
export function SwiggyQrScanner(props: Omit<QrScannerProps, "platform">) {
  return <QrScanner platform="swiggy" {...props} />;
}

export function ZomatoQrScanner(props: Omit<QrScannerProps, "platform">) {
  return <QrScanner platform="zomato" {...props} />;
}

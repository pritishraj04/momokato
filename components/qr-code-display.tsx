import { SwiggyQrScanner, ZomatoQrScanner } from "@/components/qr-scanner";

interface QrCodeDisplayProps {
  platform: "swiggy" | "zomato";
  description: string;
  logoColor: string;
}

export function QrCodeDisplay({
  platform,
  description,
  logoColor,
}: QrCodeDisplayProps) {
  if (platform === "swiggy") {
    return <SwiggyQrScanner />;
  }

  if (platform === "zomato") {
    return <ZomatoQrScanner />;
  }

  return null;
}

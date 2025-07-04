import { QrCode } from "lucide-react"
import { cn } from "@/lib/utils"

interface QrCodeDisplayProps {
  platform: string
  description: string
  logoColor: string
}

export function QrCodeDisplay({ platform, description, logoColor }: QrCodeDisplayProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4", logoColor)}>
        <QrCode className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-4">{platform}</h3>
      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <img
          alt={`QR Code for ${platform}`}
          className="w-48 h-48 object-cover mx-auto"
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
        />
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

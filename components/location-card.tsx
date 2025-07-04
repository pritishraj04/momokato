import { MapPin, Phone, Clock } from "lucide-react"

interface LocationCardProps {
  name: string
  address: string
  phone: string
  hours: string
}

export function LocationCard({ name, address, phone, hours }: LocationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-gray-100 location-card-mobile">
      <h3 className="text-lg md:text-xl font-bold">{name}</h3>
      <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
        <div className="flex items-start gap-2 md:gap-3">
          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-600 mt-0.5" />
          <span className="text-sm md:text-base">{address}</span>
        </div>
        <div className="flex items-start gap-2 md:gap-3">
          <Phone className="h-4 w-4 md:h-5 md:w-5 text-orange-600 mt-0.5" />
          <span className="text-sm md:text-base">{phone}</span>
        </div>
        <div className="flex items-start gap-2 md:gap-3">
          <Clock className="h-4 w-4 md:h-5 md:w-5 text-orange-600 mt-0.5" />
          <span className="text-sm md:text-base">{hours}</span>
        </div>
      </div>
      <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 md:gap-4">
        <a
          href="https://www.swiggy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-100 text-orange-600 font-medium px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-orange-200 transition-colors text-center text-sm md:text-base"
        >
          Order on Swiggy
        </a>
        <a
          href="https://www.zomato.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-100 text-orange-600 font-medium px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-orange-200 transition-colors text-center text-sm md:text-base"
        >
          Order on Zomato
        </a>
      </div>
    </div>
  )
}

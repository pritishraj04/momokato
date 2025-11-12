import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import {
  getDeliveryLinks,
  getSocialLinks,
  getContactInfo,
  getBusinessInfo,
} from "@/lib/config";

export function Footer() {
  const deliveryLinks = getDeliveryLinks();
  const socialLinks = getSocialLinks();
  const contactInfo = getContactInfo();
  const businessInfo = getBusinessInfo();
  
  console.log("Contact Info in Footer:", contactInfo);

  return (
    <footer className="relative bg-black text-white py-12 md:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/uis/footer.svg"
          alt="Footer background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-baloo text-3xl font-extrabold text-orange-600">
              <img
                src="/images/footer.svg"
                alt="Logo"
                className="w-full max-w-[120px] md:max-w-[160px] lg:max-w-[180px]"
              />
            </div>
            <p className="text-gray-400">{businessInfo.DESCRIPTION}</p>
            <div className="flex space-x-4">
              <Link
                href={socialLinks.INSTAGRAM}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={socialLinks.FACEBOOK}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/franchise"
                  className="text-gray-400 hover:text-white"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link
                  href="/find-us"
                  className="text-gray-400 hover:text-white"
                >
                  Find Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-us"
                  className="text-gray-400 hover:text-white"
                >
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Order Online</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={deliveryLinks.SWIGGY}
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  Swiggy
                </Link>
              </li>
              <li>
                <Link
                  href={deliveryLinks.ZOMATO}
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  Zomato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>{businessInfo.OFFICE_ADDRESS.split(",")[0]}</p>
              <p>
                {businessInfo.OFFICE_ADDRESS
                  .split(",")
                  .slice(1)
                  .join(",")}
              </p>
              <p className="mt-2">Phone: {contactInfo.PHONE}</p>
              <p>Email: {contactInfo.EMAIL}</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 {businessInfo.NAME}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

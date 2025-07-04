"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="font-baloo text-3xl font-extrabold text-orange-600">Momo Kato</div>
            <div className="absolute -top-1 -right-1 bg-teal-400 text-white text-xs px-1 rounded-full transform rotate-12">
              QSR
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/menu" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Menu
          </Link>
          <Link href="/franchise" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Franchise
          </Link>
          <Link href="/find-us" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Find Us
          </Link>
          <Link href="/about" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Contact
          </Link>
          <Link href="/order-online" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Order Online
          </Link>
          <Link href="/work-with-us" className="font-medium text-lg text-black hover:text-orange-600 transition-colors">
            Work With Us
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/order-online">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full">Order Now</Button>
          </Link>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-8">
              <Link
                href="/"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/franchise"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Franchise
              </Link>
              <Link
                href="/find-us"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Us
              </Link>
              <Link
                href="/about"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/order-online"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Online
              </Link>
              <Link
                href="/work-with-us"
                className="font-medium text-2xl text-black hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work With Us
              </Link>
              <div className="mt-4">
                <Link href="/order-online" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full py-6">
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

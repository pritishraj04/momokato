"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Upload, Users, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function WorkWithUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1A1A1A]">
      {/* Hero Image Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-[#1A1A1A] flex flex-col items-center">
        <div className="container px-3 sm:px-4 md:px-6 max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-3xl">
              <img
                alt="Happy team members at Momo Kato wearing colorful wigs and props"
                className="w-full h-[280px] sm:h-[320px] md:h-[450px] object-cover rounded-xl"
                src="/placeholder.svg?height=450&width=800"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Recruitment Caption */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Momo Kato, which is a growing QSR brand specializing in fresh momos and bubble tea, is always looking for
              passionate and talented individuals to join our vibrant team. We believe in creating a fun, inclusive
              workplace where creativity and dedication are celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Apply Now Form Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-[#1A1A1A]">
        <div className="container px-3 sm:px-4 md:px-6 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
              APPLY NOW
            </h1>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Thank you for your interest in joining the Momo Kato family. Our HR team will review your application
                and get back to you soon.
              </p>
              <Button
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-lg px-6 py-2 sm:px-8 sm:py-3"
                onClick={() => setFormSubmitted(false)}
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-xs sm:text-sm font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-400 focus:border-orange-600 focus:ring-orange-600 rounded-lg py-2 px-3 sm:py-3 sm:px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telephone" className="text-white text-xs sm:text-sm font-medium">
                  Telephone *
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="+91 9876543210"
                  required
                  className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-400 focus:border-orange-600 focus:ring-orange-600 rounded-lg py-2 px-3 sm:py-3 sm:px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-xs sm:text-sm font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-transparent border-2 border-gray-600 text-white placeholder-gray-400 focus:border-orange-600 focus:ring-orange-600 rounded-lg py-2 px-3 sm:py-3 sm:px-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv" className="text-white text-xs sm:text-sm font-medium">
                  Upload CV *
                </Label>
                <div className="relative">
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-full bg-transparent border-2 border-gray-600 text-white rounded-lg py-2 px-3 sm:py-3 sm:px-4 flex items-center justify-between hover:border-orange-600 transition-colors">
                    <span className={selectedFile ? "text-white" : "text-gray-400"}>
                      {selectedFile ? selectedFile.name : "Choose file (PDF, DOC, DOCX)"}
                    </span>
                    <Upload className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-lg px-6 py-2 sm:px-8 sm:py-3 mx-auto block transition-all duration-300"
                >
                  APPLY NOW
                </Button>
              </div>

              <div className="text-center pt-2">
                <p className="text-gray-400 text-[10px] sm:text-xs">
                  By clicking submit, you agree to our{" "}
                  <Link href="/privacy" className="text-orange-600 hover:text-orange-500 underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-orange-600 hover:text-orange-500 underline">
                    Terms of Use
                  </Link>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Dual Section Layout */}
      <section className="w-full py-8 sm:py-12 md:py-16 bg-[#1A1A1A] border-t border-gray-800">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Franchise Section */}
            <div className="bg-[#2A2A2A] rounded-xl p-4 sm:p-6 md:p-8 text-center hover:bg-[#333333] transition-colors duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Franchise With Us</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Start your Momo Kato journey as a franchise partner. Join our growing family and build a successful
                business with our proven model.
              </p>
              <Link href="/franchise">
                <Button className="bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold rounded-lg px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Find Us Section */}
            <div className="bg-[#2A2A2A] rounded-xl p-4 sm:p-6 md:p-8 text-center hover:bg-[#333333] transition-colors duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Find Us</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Discover our outlets across Bihar and beyond. Visit us to experience the authentic taste of fresh momos
                and bubble tea.
              </p>
              <Link href="/find-us">
                <Button className="bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-bold rounded-lg px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base transition-all duration-300">
                  Find a Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

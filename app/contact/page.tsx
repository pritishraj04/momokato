"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setFormSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Get In Touch
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              LET'S GET STEAMY TOGETHER!
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Have questions? Want to know more about our franchise
              opportunities? Drop us a message!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Visit Us</h3>
                    <address className="not-italic text-gray-500 mt-2">
                      <p>Momo Kato - Patna Central</p>
                      <p>123 Food Street, Patna, Bihar 800001</p>
                      <p className="mt-2">Momo Kato - Gandhi Maidan</p>
                      <p>
                        45 Flavor Avenue, Gandhi Maidan, Patna, Bihar 800004
                      </p>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Call Us</h3>
                    <p className="text-gray-500 mt-2">
                      +91 9876543210 (Patna Central)
                    </p>
                    <p className="text-gray-500">
                      +91 9876543211 (Gandhi Maidan)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Email Us</h3>
                    <p className="text-gray-500 mt-2">hello@momokato.com</p>
                    <p className="text-gray-500">
                      franchise@momokato.com (For franchise inquiries)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Opening Hours</h3>
                    <p className="text-gray-500 mt-2">
                      Monday - Sunday: 11 AM - 10 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="bg-orange-100 p-3 rounded-full hover:bg-orange-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-orange-100 p-3 rounded-full hover:bg-orange-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-orange-100 p-3 rounded-full hover:bg-orange-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-orange-100 p-3 rounded-full hover:bg-orange-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  Send Us a Message
                </h2>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-gray-500 mt-2 mb-6">
                      Thank you for reaching out! We'll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-8 py-6 text-lg"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 9876543210" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select defaultValue="general">
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="franchise">
                            Franchise Information
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-8 py-6 text-lg"
                    >
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              Our Locations
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              FIND US NEAR YOU
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Visit one of our locations and experience the Momo Kato
              difference. We have interactive maps and directions to help you
              find us easily!
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-4xl mx-auto">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Multiple Locations Across Bihar
              </h3>
              <p className="text-gray-600 text-lg">
                We're growing fast! Currently serving delicious momos at two
                locations in Patna, with more coming soon across Bihar.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Patna Central</h4>
                    <p className="text-gray-600 text-sm">
                      123 Food Street, Patna, Bihar 800001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Gandhi Maidan</h4>
                    <p className="text-gray-600 text-sm">
                      45 Flavor Avenue, Gandhi Maidan, Patna, Bihar 800004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="bg-orange-200 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-orange-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700">Coming Soon</h4>
                    <p className="text-orange-600 text-sm">
                      Boring Road, Kankarbagh, Rajendra Nagar & more!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/find-us">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-8 py-6 text-lg">
                    View All Locations <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/find-us">
                  <Button
                    variant="outline"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold rounded-full px-8 py-6 text-lg transition-all duration-200 bg-transparent"
                  >
                    Get Directions <MapPin className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-teal-100 rounded-2xl p-8 shadow-lg">
                  <img
                    alt="Interactive map showing Momo Kato locations"
                    className="rounded-xl object-cover w-full max-w-[400px] h-[300px]"
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                  />
                  <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full transform rotate-12 z-10">
                    Interactive Maps!
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                    <div className="text-orange-600 font-bold text-lg">
                      Find Us
                    </div>
                    <div className="text-black text-sm">Easy Directions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                2 Active Locations
              </h4>
              <p className="text-gray-600 text-sm">
                Currently serving in Patna Central & Gandhi Maidan
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Open Daily</h4>
              <p className="text-gray-600 text-sm">
                11 AM - 10 PM at both locations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expanding Soon</h4>
              <p className="text-gray-600 text-sm">
                3+ new locations coming across Bihar
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

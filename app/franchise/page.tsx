"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { ScrollAnimation } from "@/components/scroll-animation";
import { FranchiseDownloadButton } from "@/components/franchise-download-button";
import { FRANCHISE_CONFIG } from "@/lib/franchise-config";

export default function FranchisePage() {
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
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Business Opportunity
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              WANNA OWN A STEAMY FRANCHISE?
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Join the Momo Kato family and be part of our growing success
              story. Low investment, high returns, and full support!
            </p>
            {/* Franchise Download Button */}
            <div className="mt-4 flex items-center justify-center">
              <FranchiseDownloadButton />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Franchise Image Section - Moved directly after banner */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex justify-center">
            <div className="w-full max-w-4xl">
              <img
                src={FRANCHISE_CONFIG.FRANCHISE_IMAGE || "/placeholder.svg"}
                alt={FRANCHISE_CONFIG.FRANCHISE_IMAGE_ALT}
                className="w-full h-auto rounded-xl shadow-lg hover-lift object-cover"
                style={{ aspectRatio: "3/2" }}
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <ScrollAnimation animation="slide-left">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Why Franchise With Us?
              </h2>
              <div className="grid gap-4 stagger-children">
                <ScrollAnimation delay={100}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Check className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Low Setup Cost</h3>
                          <p className="text-gray-500 mt-2">
                            Start your Momo Kato franchise with a minimal
                            investment compared to other food franchises.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Check className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Fast ROI</h3>
                          <p className="text-gray-500 mt-2">
                            Our business model is designed for quick returns on
                            your investment with high-margin products.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Check className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Hot Brand Buzz</h3>
                          <p className="text-gray-500 mt-2">
                            Benefit from our growing brand recognition and
                            trendy, youthful appeal in the market.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                <ScrollAnimation delay={400}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Check className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            Complete Training & Support
                          </h3>
                          <p className="text-gray-500 mt-2">
                            We provide comprehensive training, operational
                            support, and marketing assistance to ensure your
                            success.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>

              <ScrollAnimation delay={500}>
                <h2 className="text-3xl font-bold tracking-tighter mt-12 mb-6">
                  The Franchise Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
                  <ScrollAnimation
                    delay={600}
                    className="bg-gray-50 p-6 rounded-xl card-hover"
                  >
                    <div className="text-4xl font-bold text-orange-600">1</div>
                    <h3 className="text-xl font-bold mt-2">Apply</h3>
                    <p className="text-gray-500 mt-2">
                      Fill out our simple franchise application form
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation
                    delay={700}
                    className="bg-gray-50 p-6 rounded-xl card-hover"
                  >
                    <div className="text-4xl font-bold text-orange-600">2</div>
                    <h3 className="text-xl font-bold mt-2">Meet</h3>
                    <p className="text-gray-500 mt-2">
                      Discussion and location assessment
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation
                    delay={800}
                    className="bg-gray-50 p-6 rounded-xl card-hover"
                  >
                    <div className="text-4xl font-bold text-orange-600">3</div>
                    <h3 className="text-xl font-bold mt-2">Train</h3>
                    <p className="text-gray-500 mt-2">
                      Complete our comprehensive training program
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation
                    delay={900}
                    className="bg-gray-50 p-6 rounded-xl card-hover"
                  >
                    <div className="text-4xl font-bold text-orange-600">4</div>
                    <h3 className="text-xl font-bold mt-2">Launch</h3>
                    <p className="text-gray-500 mt-2">
                      Grand opening with marketing support
                    </p>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={200}>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  Start Your Momo Business
                </h2>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-gray-500 mt-2 mb-6">
                      We've received your franchise inquiry. Our team will
                      contact you within 48 hours to discuss the next steps.
                    </p>
                    <Button
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-8 py-6 text-lg btn-animate"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Inquiry
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
                      <Input id="phone" placeholder="+91 9876543210" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Preferred Location</Label>
                      <Input id="location" placeholder="City, State" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investment">Investment Capacity</Label>
                      <Select defaultValue="500k-1m">
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment capacity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">
                            Under ₹5 Lakhs
                          </SelectItem>
                          <SelectItem value="500k-1m">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="1m-2m">₹10-20 Lakhs</SelectItem>
                          <SelectItem value="above-2m">
                            Above ₹20 Lakhs
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        Previous Business Experience
                      </Label>
                      <Textarea
                        id="experience"
                        placeholder="Tell us about your previous business experience, if any."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Why do you want to join Momo Kato?
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us why you're interested in a Momo Kato franchise."
                        rows={3}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-8 py-6 text-lg btn-animate"
                    >
                      Submit Inquiry <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Get answers to the most common questions about our franchise
              program.
            </p>
          </ScrollAnimation>

          <div className="grid gap-4 mt-8 stagger-children">
            <ScrollAnimation delay={100}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">
                    What is the initial investment required?
                  </h3>
                  <p className="text-gray-500 mt-2">
                    The initial investment for a Momo Kato franchise typically
                    ranges from ₹5-10 Lakhs, depending on the location and size
                    of the outlet.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">
                    What is the franchise term?
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Our standard franchise agreement is for 5 years, with an
                    option to renew for additional terms.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">
                    Do you provide training?
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Yes, we provide comprehensive training on all aspects of the
                    business, including food preparation, operations, customer
                    service, and marketing.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">
                    What ongoing support do you provide?
                  </h3>
                  <p className="text-gray-500 mt-2">
                    We provide continuous operational support, marketing
                    assistance, supply chain management, and regular business
                    reviews to help you succeed.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">
                    What is the typical ROI timeline?
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Most of our franchisees achieve return on investment within
                    12-18 months of operation, depending on location and local
                    market conditions.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}

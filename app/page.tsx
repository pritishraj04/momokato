"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { LocationCard } from "@/components/location-card";
import { MenuPreview } from "@/components/menu-preview";
import { FranchiseTeaser } from "@/components/franchise-teaser";
import { SocialProof } from "@/components/social-proof";
import { CustomerFavorites } from "@/components/customer-favorites";
import { MovingRibbon } from "@/components/moving-ribbon";
import { FeaturedCarousel } from "@/components/featured-carousel";
import {
  ScrollTriggeredSection,
  MotionInView,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/components/framer-motion-wrapper";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Enhanced GSAP animations for floating bubbles only
    const bubbles = document.querySelectorAll(".floating-bubble");
    bubbles.forEach((bubble) => {
      const randomX = Math.random() * 40 - 20;
      const randomDuration = 2 + Math.random() * 2;

      gsap.to(bubble, {
        y: -20,
        x: randomX,
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center" ref={mainRef}>
      {/* Featured Carousel - New addition at the top */}
      <FeaturedCarousel />

      {/* Moving Ribbon - Repositioned below carousel */}
      <MovingRibbon />

      <HeroSection />

      <ScrollTriggeredSection
        className="w-full py-12 md:py-24 bg-white"
        threshold={0.2}
        rootMargin="0px 0px -100px 0px"
      >
        <div className="container px-4 md:px-6">
          <MotionInView
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-4 text-center"
            threshold={0.3}
          >
            <Image
              width={100}
              height={100}
              src="/images/uis/steamy-delicious.svg?height=180&width=250"
              alt="Steamy delicious momos illustration"
              className="w-full h-auto max-w-[150px] md:max-w-[150px] lg:max-w-[150px]"
            />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              STEAMY DELICIOUS MOMOS
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Handcrafted with love, steamed to perfection. Our momos are made
              fresh daily with quality ingredients!
            </p>
          </MotionInView>
          <MenuPreview />
          <MotionInView
            variants={fadeInUp}
            delay={0.3}
            className="flex justify-center mt-8"
            threshold={0.3}
          >
            <Link href="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 py-6 text-lg">
                View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MotionInView>
        </div>
      </ScrollTriggeredSection>

      {/* <div className="relative w-full">
        <div className="floating-bubble absolute top-10 left-1/4 bg-orange-100 text-orange-600 font-bold px-4 py-2 rounded-full transform rotate-12 z-10">
          Street Style Swag
        </div>
      </div> */}

      <CustomerFavorites />

      <div className="relative w-full">
        <div className="floating-bubble absolute top-10 right-1/4 bg-teal-100 text-teal-600 font-bold px-4 py-2 rounded-full transform -rotate-6 z-10">
          Tap to Munch!
        </div>
      </div>

      <FranchiseTeaser />

      <ScrollTriggeredSection
        className="w-full py-12 md:py-24 bg-white"
        threshold={0.2}
        rootMargin="0px 0px -100px 0px"
      >
        <div className="container px-4 md:px-6">
          <MotionInView
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-4 text-center"
            threshold={0.3}
          >
            <Image
              width={100}
              height={100}
              src="/images/uis/location.svg?height=180&width=250"
              alt="Find us near you illustration"
              className="w-full h-auto max-w-[150px] md:max-w-[150px] lg:max-w-[150px]"
            />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              FIND US NEAR YOU
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We're growing fast! Visit one of our locations and experience the
              Momo Kato difference.
            </p>
          </MotionInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <LocationCard
              name="Momo Kato - Patna Central"
              address="123 Food Street, Patna, Bihar 800001"
              phone="+91 9876543210"
              hours="11 AM - 10 PM"
            />
            <LocationCard
              name="Momo Kato - Gandhi Maidan"
              address="45 Flavor Avenue, Gandhi Maidan, Patna, Bihar 800004"
              phone="+91 9876543211"
              hours="11 AM - 11 PM"
            />
          </div>
          <MotionInView
            variants={fadeInUp}
            delay={0.3}
            className="flex justify-center mt-8"
            threshold={0.3}
          >
            <Link href="/find-us">
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold rounded-full px-8 py-6 text-lg transition-all duration-200 bg-transparent"
              >
                View All Locations <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MotionInView>
        </div>
      </ScrollTriggeredSection>

      <SocialProof />

      <ScrollTriggeredSection
        className="w-full py-12 md:py-24 bg-orange-500 text-white overflow-hidden"
        threshold={0.2}
        rootMargin="0px 0px -100px 0px"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <MotionInView
              variants={slideInLeft}
              className="flex flex-col justify-center space-y-4"
              threshold={0.3}
            >
              <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                LET'S GET STEAMY TOGETHER!
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                Have questions? Want to know more about our franchise
                opportunities? Drop us a message!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/contact">
                  <Button className="bg-white text-orange-500 hover:bg-orange-100 font-bold rounded-full px-8 py-6 text-lg">
                    Contact Us <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold rounded-full px-8 py-6 text-lg transition-all duration-200 bg-transparent"
                >
                  Franchise With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </MotionInView>
            <MotionInView
              variants={slideInRight}
              delay={0.2}
              className="flex items-center justify-center"
              threshold={0.3}
            >
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-400 rounded-full flex items-center justify-center rotate-12 z-10">
                  <span className="font-bold text-white text-lg">NEW!</span>
                </div>
                <img
                  alt="Bubble Tea"
                  className="mx-auto rounded-xl object-cover"
                  src="/images/p1.png"
                  width={300}
                  height={400}
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                  <div className="text-orange-500 font-bold text-xl">
                    Bubble Tea
                  </div>
                  <div className="text-black text-sm">Try Now!</div>
                </div>
              </div>
            </MotionInView>
          </div>
        </div>
      </ScrollTriggeredSection>

      {/* Second Moving Ribbon at the bottom */}
      <MovingRibbon />
    </main>
  );
}

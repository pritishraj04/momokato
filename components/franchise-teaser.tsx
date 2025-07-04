import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FranchiseTeaser() {
  return (
    <section className="w-full py-12 md:py-24 bg-orange-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              Business Opportunity
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              WANNA OWN A STEAMY FRANCHISE?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
              Join the Momo Kato family and be part of our growing success story. Low investment, high returns, and full
              support!
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-orange-600" />
                </div>
                <span>Low Setup Cost</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-orange-600" />
                </div>
                <span>Fast ROI</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-orange-600" />
                </div>
                <span>Hot Brand Buzz</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-orange-600" />
                </div>
                <span>Complete Training & Support</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/franchise">
                <Button className="bg-white text-orange-600 hover:bg-orange-100 font-bold rounded-full px-8 py-6 text-lg">
                  Start Your Momo Business <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold">1</div>
                <h3 className="text-xl font-bold mt-2">Apply</h3>
                <p className="text-white/80 mt-2">Fill out our simple franchise application form</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold">2</div>
                <h3 className="text-xl font-bold mt-2">Meet</h3>
                <p className="text-white/80 mt-2">Discussion and location assessment</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold">3</div>
                <h3 className="text-xl font-bold mt-2">Train</h3>
                <p className="text-white/80 mt-2">Complete our comprehensive training program</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold">4</div>
                <h3 className="text-xl font-bold mt-2">Launch</h3>
                <p className="text-white/80 mt-2">Grand opening with marketing support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

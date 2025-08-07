"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bike, Users, CreditCard, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from "lucide-react"
import Image from "next/image"
import { ContactModal } from "@/components/contact-modal"
import { ApplicationModal } from "@/components/application-modal"
import { DemoBanner } from "@/components/demo-banner"
import { joinWaitlist } from "@/lib/actions"
import { useServerAction } from "@/hooks/use-server-action"

export default function LandingPage() {
  const [waitlistState, executeWaitlistAction, isPending] = useServerAction(joinWaitlist, null)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWaitlistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    executeWaitlistAction(formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bike className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl text-gray-900">MotoLease</span>
          </div>
          <ContactModal />
        </div>
      </header>

      {/* Demo Banner */}
      <div className="container mx-auto px-4 pt-4">
        <DemoBanner />
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Solving Youth Unemployment in Kigali
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Own Your Motorcycle, <span className="text-green-600">Start Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              High motorcycle costs are keeping Kigali's youth from becoming moto-taxi drivers. We're changing that with
              affordable lease-to-own financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8"
                onClick={() => scrollToSection("cta-section")}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("how-it-works")}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Challenge Facing Kigali's Youth</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-red-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">High Upfront Costs</h3>
                  <p className="text-gray-600 text-sm">
                    Motorcycles cost 800,000-1,500,000 RWF - too expensive for most youth
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 border-red-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limited Financing</h3>
                  <p className="text-gray-600 text-sm">
                    Few banks offer motorcycle loans, especially to young entrepreneurs
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 border-red-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bike className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Missed Opportunities</h3>
                  <p className="text-gray-600 text-sm">
                    Youth can't access the growing moto-taxi market and earn income
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How MotoLease Works</h2>
              <p className="text-lg text-gray-600">Simple, transparent lease-to-own process designed for you</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-gray-600">
                  Complete our simple application with your ID and basic information. No complex paperwork required.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Approved</h3>
                <p className="text-gray-600">
                  Our partners review your application quickly. Most approvals happen within 24-48 hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Earning</h3>
                <p className="text-gray-600">
                  Make affordable monthly payments while you earn. Own your motorcycle after completing payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose MotoLease?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Low Monthly Payments</h3>
                    <p className="text-gray-600">Pay as little as 50,000 RWF per month instead of 800,000+ upfront</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Bank Requirements</h3>
                    <p className="text-gray-600">Simple approval process without traditional banking barriers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mobile Money Integration</h3>
                    <p className="text-gray-600">Pay easily with MTN Mobile Money or Airtel Money</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Motorcycles</h3>
                    <p className="text-gray-600">Well-maintained bikes from trusted dealers and brands</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Full Ownership</h3>
                    <p className="text-gray-600">The motorcycle becomes yours after completing all payments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Local Support</h3>
                    <p className="text-gray-600">Backed by NGOs and local partners who understand your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Motorcycles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Available Motorcycles</h2>
              <p className="text-lg text-gray-600">Choose from our selection of reliable, affordable motorcycles</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/motocycle.JPG-d3ZNg2QtWXunMyh8GSWAmsvMMfUyqU.jpeg"
                  alt="Sport Motorcycle"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">Sport Motorcycle</h3>
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">Modern design, reliable performance, perfect for city transport</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Price:</span>
                      <span className="font-semibold">850,000 RWF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="font-semibold text-green-600">45,000 RWF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lease Period:</span>
                      <span className="font-semibold">20 months</span>
                    </div>
                  </div>
                  <ApplicationModal motorcycleType="Sport Motorcycle" monthlyPayment="45,000 RWF" />
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/motocyle%202.JPG-HFeq5CGE7ZlOywxwc1TIVtrgInBFQ1.jpeg"
                  alt="Bajaj Pulsar"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">Bajaj Pulsar</h3>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">Popular choice, fuel-efficient, ideal for moto-taxi business</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Price:</span>
                      <span className="font-semibold">950,000 RWF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="font-semibold text-green-600">52,000 RWF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lease Period:</span>
                      <span className="font-semibold">19 months</span>
                    </div>
                  </div>
                  <ApplicationModal motorcycleType="Bajaj Pulsar" monthlyPayment="52,000 RWF" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-green-100 mb-8">
              Join the waitlist and be among the first to access affordable motorcycle financing in Kigali.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <Input name="fullName" type="text" placeholder="Your full name" className="w-full" required />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number (e.g., +250 788 123 456)"
                  className="w-full"
                  required
                />
                <Input name="email" type="email" placeholder="Email address" className="w-full" required />
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isPending}
                >
                  {isPending ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
              {waitlistState && (
                <div
                  className={`mt-4 text-center text-sm ${waitlistState?.success ? "text-green-600" : "text-red-600"}`}
                >
                  {waitlistState?.message}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-3">
                We'll notify you when the platform launches. No spam, promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-6">Supported by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">Rwanda Development Bank</div>
              <div className="text-gray-400 font-semibold">Local NGO Partners</div>
              <div className="text-gray-400 font-semibold">Fintech Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bike className="h-8 w-8 text-green-400" />
                <span className="font-bold text-xl">MotoLease</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making motorcycle ownership accessible to Kigali's youth through innovative financing.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Launching Soon</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@motolease.rw</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <button onClick={() => scrollToSection("how-it-works")} className="hover:text-white cursor-pointer">
                    How It Works
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("cta-section")} className="hover:text-white cursor-pointer">
                    Apply Now
                  </button>
                </div>
                <div>
                  <ContactModal />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MotoLease. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

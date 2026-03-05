"use client"

import { useState } from "react"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import SocialProof from "@/components/sections/SocialProof"
import Services from "@/components/sections/Services"
import Pricing from "@/components/sections/Pricing"
import ConversionBanner from "@/components/sections/ConversionBanner"
import MeetDoctor from "@/components/sections/MeetDoctor"
import Comfort from "@/components/sections/Comfort"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"
import BookingModal from "@/components/BookingModal"
import MobileCTA from "@/components/MobileCTA"
import DynamicBackground from "@/components/DynamicBackground"

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const openBooking = () => setBookingOpen(true)

  return (
    <>
      <DynamicBackground />
      <Header onBookAppointment={openBooking} />

      <main>
        <Hero onBookAppointment={openBooking} />
        <SocialProof onBookAppointment={openBooking} />
        <Services onBookAppointment={openBooking} />
        <Pricing onBookAppointment={openBooking} />
        <ConversionBanner onBookAppointment={openBooking} />
        <MeetDoctor />
        <Comfort onBookAppointment={openBooking} />
        <FAQ />
      </main>

      <Footer onBookAppointment={openBooking} />

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
      <MobileCTA onBookAppointment={openBooking} />
    </>
  )
}

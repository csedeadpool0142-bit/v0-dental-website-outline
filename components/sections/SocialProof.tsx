"use client"

import Image from "next/image"
import { Star, ShieldCheck, Siren, Monitor, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Average Rating", value: "4.9", icon: Star },
  { label: "Patient Reviews", value: "520+", icon: Heart },
  { label: "Years Experience", value: "12+", icon: ShieldCheck },
  { label: "Patients Treated", value: "8,000+", icon: Monitor },
  { label: "Same-Week Apts", value: "Yes", icon: Siren },
]

const transformations = [
  {
    title: "Teeth Whitening",
    description: "One visit. Visibly brighter smile.",
    image: "/images/before-after-whitening.jpg",
  },
  {
    title: "Invisalign",
    description: "~7 months treatment. Perfectly straight teeth.",
    image: "/images/before-after-invisalign.jpg",
  },
  {
    title: "Implant Restoration",
    description: "Natural look. Full bite strength restored.",
    image: "/images/before-after-implant.jpg",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "I avoided the dentist for years because of anxiety. Dr. Patel and her team made the experience incredibly comfortable.",
    rating: 5,
    avatar: "/images/testimonial-avatar-1.jpg",
  },
  {
    name: "Daniel K.",
    quote:
      "The online booking was simple and the appointment was on time. Best dental experience I've had.",
    rating: 5,
    avatar: "/images/testimonial-avatar-2.jpg",
  },
  {
    name: "Priya S.",
    quote:
      "My Invisalign results were amazing. Highly recommend Oceanview Dental to anyone looking for modern care.",
    rating: 5,
    avatar: "/images/testimonial-avatar-3.jpg",
  },
]

const trustBadges = [
  { icon: ShieldCheck, label: "Insurance Accepted" },
  { icon: Siren, label: "Emergency Visits" },
  { icon: Monitor, label: "Modern Equipment" },
  { icon: Heart, label: "Family-Friendly" },
]

export default function SocialProof({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Loved by Patients Across White Rock
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Hundreds of happy smiles and counting
          </p>
        </div>

        {/* Layer 1: Stats Bar */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <stat.icon className="mb-2 h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Layer 2: Before/After Cards */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            Real Results from Real Patients
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {transformations.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video w-full bg-secondary">
                  <Image
                    src={item.image}
                    alt={`Before and after ${item.title} treatment`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3: Testimonials */}
        <div className="mb-12">
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            What Our Patients Say
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.quote}"`}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-secondary">
                    <Image
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micro-trust badges */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <badge.icon className="h-4 w-4 text-primary" />
              {badge.label}
            </span>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center">
          <Button
            onClick={onBookAppointment}
            className="bg-primary text-primary-foreground hover:bg-[#1D4ED8] px-8"
            size="lg"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}

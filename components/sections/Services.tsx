import {
  Sparkles,
  ShieldPlus,
  Siren,
  SmilePlus,
  Users,
  ScanLine,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description:
      "Routine exams and professional cleaning. Recommended every 6 months.",
    price: "Starting at $129",
  },
  {
    icon: SmilePlus,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile improvements.",
    price: "From $250",
  },
  {
    icon: ShieldPlus,
    title: "Dental Implants",
    description:
      "Permanent replacement for missing teeth. Consultation required.",
    price: "From $3,000",
  },
  {
    icon: Siren,
    title: "Emergency Dental Care",
    description: "Same-day appointments for urgent dental issues.",
    price: "Exam from $99",
  },
  {
    icon: ScanLine,
    title: "Invisalign / Clear Aligners",
    description:
      "Straighten teeth without metal braces. Free consultation available.",
    price: "$3,500 - $6,000",
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description: "Comprehensive care for adults and children.",
    price: "Checkup packages available",
  },
]

export default function Services({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <section id="services" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-xl border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
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

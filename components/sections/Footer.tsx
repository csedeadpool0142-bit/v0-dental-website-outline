import { MapPin, Phone, Clock, Star, ShieldCheck, Siren } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

const hours = [
  { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 3:00 PM" },
  { day: "Sunday", time: "Closed" },
]

const trustBadges = [
  { icon: Star, label: "4.9 Google Rating" },
  { icon: ShieldCheck, label: "Insurance Accepted" },
  { icon: Siren, label: "Emergency Visits" },
]

export default function Footer({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <footer id="contact" className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Brand + Contact */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  OD
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight text-card">
                  Oceanview
                </span>
                <span className="text-xs leading-tight text-card/60">
                  Dental Care
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-card/70">
              Modern dentistry for families in White Rock
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-card/70 transition-colors hover:text-card"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                White Rock, BC, Canada
              </a>
              <a
                href="tel:6045550142"
                className="flex items-center gap-2 text-sm text-card/70 transition-colors hover:text-card"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (604) 555-0142
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-card"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onBookAppointment}
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card/50">
              Clinic Hours
            </h3>
            <ul className="flex flex-col gap-3">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center gap-2 text-sm text-card/70"
                >
                  <Clock className="h-4 w-4 shrink-0" />
                  <span className="font-medium text-card/90">{h.day}:</span>{" "}
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t border-card/10 pt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-1.5 text-sm text-card/60"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Final CTA */}
            <Button
              onClick={onBookAppointment}
              className="bg-primary text-primary-foreground hover:bg-[#1D4ED8] px-8"
              size="lg"
            >
              Book Appointment
            </Button>

            <p className="text-xs text-card/40">
              &copy; {new Date().getFullYear()} Oceanview Dental Care. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

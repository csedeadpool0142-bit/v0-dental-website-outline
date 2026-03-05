import { HeartPulse, ScanLine, ShieldCheck, Armchair } from "lucide-react"
import { Button } from "@/components/ui/button"

const comfortCards = [
  {
    icon: HeartPulse,
    title: "Pain-Managed Dentistry",
    description:
      "Gentle techniques and modern anesthetics ensure your comfort throughout every procedure.",
  },
  {
    icon: ScanLine,
    title: "Digital 3D Scanning",
    description:
      "Fast, accurate, and impression-free. Our digital scanners make planning seamless.",
  },
  {
    icon: ShieldCheck,
    title: "Low Radiation Imaging",
    description:
      "State-of-the-art digital X-rays use up to 90% less radiation than traditional methods.",
  },
  {
    icon: Armchair,
    title: "Comfort-First Care",
    description:
      "From calming environments to clear communication, your experience matters to us.",
  },
]

export default function Comfort({
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
            Comfortable & Modern Dentistry
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Technology and care designed to put you at ease
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comfortCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
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

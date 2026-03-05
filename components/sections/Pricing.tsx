import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    title: "Basic Cleaning Package",
    price: "$129",
    description: "Exam + X-rays + Professional Cleaning",
    features: [
      "Comprehensive oral exam",
      "Digital X-rays",
      "Professional cleaning",
      "Personalized care plan",
    ],
    featured: false,
  },
  {
    title: "Professional Whitening",
    price: "$299",
    description: "In-office whitening session",
    features: [
      "Professional-grade treatment",
      "Visibly brighter in one visit",
      "Safe for enamel",
      "Take-home maintenance kit",
    ],
    featured: true,
  },
  {
    title: "Emergency Visit",
    price: "$99",
    description: "Same-day exam + diagnosis",
    features: [
      "Priority scheduling",
      "Comprehensive diagnosis",
      "Pain management",
      "Treatment plan included",
    ],
    featured: false,
  },
]

export default function Pricing({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <section id="pricing" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Know your costs upfront. No surprise bills.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-xl border p-6 transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-primary bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {plan.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="my-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
              </div>
              <ul className="mb-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={onBookAppointment}
                className={`w-full ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-[#1D4ED8]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Book Appointment
              </Button>
            </div>
          ))}
        </div>

        {/* Invisalign Note + Insurance */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Invisalign Consultation:
            </span>{" "}
            Free |{" "}
            <span className="font-semibold text-foreground">Insurance:</span>{" "}
            Most major plans accepted |{" "}
            <span className="font-semibold text-foreground">
              Payment Plans:
            </span>{" "}
            Available
          </p>
        </div>
      </div>
    </section>
  )
}

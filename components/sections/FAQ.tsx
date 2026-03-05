import { Star, DollarSign, HeartHandshake, Siren } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Do dental visits hurt?",
    answer:
      "Modern dentistry is designed to be comfortable. Dr. Patel uses gentle techniques, modern anesthetics, and advanced technology to ensure your visit is as pain-free as possible.",
  },
  {
    question: "I'm nervous about going to the dentist. Can you help?",
    answer:
      "Absolutely. Many of our patients feel the same way. Calm communication, a comfortable environment, and a patient-first approach put you in control of your experience at every step.",
  },
  {
    question: "How much does a typical visit cost?",
    answer:
      "An exam with X-rays and cleaning starts at $129. We believe in transparent pricing so you always know your costs upfront before any treatment begins.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes. We accept most major dental insurance plans. Our team will help you understand your coverage and maximize your benefits.",
  },
  {
    question: "What if I have a dental emergency?",
    answer:
      "Urgent appointments are prioritized at Oceanview Dental Care. We offer same-day visits for dental emergencies so you can get the care you need quickly.",
  },
  {
    question: "Do you offer Invisalign or teeth straightening?",
    answer:
      "Yes. We offer Invisalign and clear aligner treatments. A free consultation helps determine if clear aligners are the right solution for your smile goals.",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "New patient visits typically take 45-60 minutes to allow for a thorough exam and discussion. Follow-up appointments are usually shorter depending on the treatment.",
  },
  {
    question: "What if I haven't seen a dentist in years?",
    answer:
      "No judgment at all. Many of our patients are returning after a long time away. We focus on comfortable next steps and building a care plan that works for you.",
  },
]

const trustBadges = [
  { icon: Star, label: "4.9 Rated" },
  { icon: DollarSign, label: "Transparent Pricing" },
  { icon: HeartHandshake, label: "Gentle Care" },
  { icon: Siren, label: "Emergency Visits Available" },
]

export default function FAQ({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <section id="faq" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Common Questions From New Patients
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Everything you need to know before your first visit
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Micro-trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
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

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button
            onClick={onBookAppointment}
            className="bg-primary text-primary-foreground hover:bg-[#1D4ED8] px-8"
            size="lg"
          >
            Book Appointment
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Or call us directly:{" "}
            <a
              href="tel:6045550142"
              className="font-medium text-primary hover:underline"
            >
              (604) 555-0142
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Star, Users, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <section className="relative overflow-hidden bg-card py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 sm:px-6 md:flex-row md:gap-16 lg:px-8">
        {/* Text Column */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Now Accepting New Patients
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Dentistry Designed Around Your Comfort
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Modern, gentle dental care in White Rock. Experience a calm,
            patient-first approach to your smile.
          </p>

          <Button
            onClick={onBookAppointment}
            size="lg"
            className="mt-8 bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-[#1D4ED8]"
          >
            Book Appointment
          </Button>

          {/* Trust Microcopy */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">4.9</span>
            </span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              500+ Patients
            </span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="h-4 w-4" />
              Same-Week Appointments
            </span>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-secondary">
            <Image
              src="/images/placeholder-doctor.jpg"
              alt="Dr. Maya Patel in the modern Oceanview Dental Care clinic"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"

export default function ConversionBanner({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
          Dental visits shouldn't feel stressful
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
          At Oceanview Dental Care, we combine modern technology with a calm,
          patient-first approach so you can feel confident about your smile.
        </p>
        <Button
          onClick={onBookAppointment}
          size="lg"
          className="mt-8 bg-card text-foreground hover:bg-card/90 px-8"
        >
          Book Appointment
        </Button>
      </div>
    </section>
  )
}

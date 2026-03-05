import Image from "next/image"
import { Award, BookOpen, HeartHandshake, Cpu } from "lucide-react"

const credentials = [
  { icon: Award, label: "12+ Years Experience" },
  { icon: BookOpen, label: "UBC Faculty & Researcher" },
  { icon: Cpu, label: "Technology-Forward Practice" },
  { icon: HeartHandshake, label: "Gentle Care Philosophy" },
]

export default function MeetDoctor() {
  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Meet Dr. Maya Patel, DDS
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Your comfort and health are her top priority
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Photo */}
          <div className="w-full flex-shrink-0 md:w-2/5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/images/placeholder-clinic.jpg"
                alt="Portrait of Dr. Maya Patel, DDS, dentist at Oceanview Dental Care"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Dr. Maya Patel believes dentistry should feel calm, clear, and
              comfortable. After over a decade in practice and teaching at UBC,
              she opened Oceanview Dental Care to create a modern, patient-first
              clinic where every visit is designed around your comfort.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              With a focus on gentle techniques, transparent communication, and
              the latest dental technology, Dr. Patel ensures that every patient
              leaves with a healthier smile and a positive experience.
            </p>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <cred.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

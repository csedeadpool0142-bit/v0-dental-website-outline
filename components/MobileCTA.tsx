"use client"

import { CalendarPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileCTA({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
      <Button
        onClick={onBookAppointment}
        className="w-full bg-primary text-primary-foreground hover:bg-[#1D4ED8]"
        size="lg"
      >
        <CalendarPlus className="mr-2 h-4 w-4" />
        Book Appointment
      </Button>
    </div>
  )
}

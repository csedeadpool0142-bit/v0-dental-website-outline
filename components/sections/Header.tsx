"use client"

import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function Header({
  onBookAppointment,
}: {
  onBookAppointment: () => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">OD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight text-foreground">
              Oceanview
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              Dental Care
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Phone */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:6045550142"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">(604) 555-0142</span>
          </a>
          <Button
            onClick={onBookAppointment}
            className="bg-primary text-primary-foreground hover:bg-[#1D4ED8] px-5"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>

        {/* Mobile Sheet */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <div className="my-3 h-px bg-border" />
              <a
                href="tel:6045550142"
                className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                (604) 555-0142
              </a>
              <SheetClose asChild>
                <Button
                  onClick={() => {
                    setMobileOpen(false)
                    onBookAppointment()
                  }}
                  className="mt-2 w-full bg-primary text-primary-foreground hover:bg-[#1D4ED8]"
                  size="lg"
                >
                  Book Appointment
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

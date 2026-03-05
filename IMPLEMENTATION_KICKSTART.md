# Oceanview Dental Care - Implementation Kickstart

> Single-page, conversion-focused dental website for Dr. Maya Patel, DDS in White Rock, BC.
> This document serves as the canonical reference for all development and AI-assisted coding.

---

## 1. Site Structure & Sections

### Section Order (Top to Bottom)

| #  | Component Name       | Purpose                                      |
|----|----------------------|----------------------------------------------|
| 1  | `Header`             | Sticky nav, logo, links, primary CTA         |
| 2  | `Hero`               | Value prop, headline, CTA, trust microcopy   |
| 3  | `SocialProof`        | Stats bar, before/after cards, testimonials   |
| 4  | `Services`           | 6-card grid of offerings, section CTA        |
| 5  | `Pricing`            | Transparent pricing cards, insurance note     |
| 6  | `ConversionBanner`   | Mid-page re-engagement CTA                   |
| 7  | `MeetDoctor`         | Dr. Patel bio, photo, credentials             |
| 8  | `Comfort`            | 4-card technology/comfort grid               |
| 9  | `FAQ`                | 8-question accordion, trust badges           |
| 10 | `Footer`             | Contact info, links, hours, final CTA        |
| 11 | `BookingModal`       | Frontend-only appointment form + success     |
| 12 | `MobileCTA`          | Sticky bottom CTA (mobile only)              |

### Component File Structure

```
app/
  layout.tsx              # Root layout (Inter font, metadata, globals)
  page.tsx                # Main page composing all sections
  globals.css             # Tailwind theme tokens + custom styles

components/
  sections/
    Header.tsx
    Hero.tsx
    SocialProof.tsx
    Services.tsx
    Pricing.tsx
    ConversionBanner.tsx
    MeetDoctor.tsx
    Comfort.tsx
    FAQ.tsx
    Footer.tsx
  BookingModal.tsx
  MobileCTA.tsx

  ui/                     # shadcn/ui (pre-installed)
    accordion.tsx
    badge.tsx
    button.tsx
    card.tsx
    dialog.tsx
    input.tsx
    label.tsx
    separator.tsx
    sheet.tsx
    ... (all available)

public/
  images/
    placeholder-doctor.jpg
    placeholder-clinic.jpg
    before-after-whitening.jpg
    before-after-invisalign.jpg
    before-after-implant.jpg
    testimonial-avatar-1.jpg
    testimonial-avatar-2.jpg
    testimonial-avatar-3.jpg
```

### Section Layout Details

#### Header
- **Desktop:** Horizontal flex, logo left, nav center/right, CTA button right
- **Mobile:** Logo left, hamburger menu right (Sheet component), nav links inside sheet
- **Sticky:** `sticky top-0 z-50 bg-white/95 backdrop-blur`

#### Hero
- **Desktop:** 2-column flex (`flex-row`), text left, image right
- **Mobile:** Stacked (`flex-col-reverse`), image on top, text below
- **Max-width:** `max-w-7xl mx-auto` (1280px)

#### SocialProof
- **Stats Bar:** 5-column grid desktop (`grid-cols-5`), 2-col + wrap mobile (`grid-cols-2`)
- **Before/After Cards:** 3-column grid desktop (`grid-cols-3`), single column mobile
- **Testimonials:** 3-column grid desktop, horizontal carousel on mobile (embla-carousel)

#### Services
- **Desktop:** 3-column grid (`grid-cols-3 gap-6`)
- **Mobile:** Single column (`grid-cols-1`)
- **Cards:** Uniform height, no individual CTAs

#### Pricing
- **Desktop:** 4-column grid or 3-column with featured card
- **Mobile:** Single column stacked

#### ConversionBanner
- **Full-width** background band, centered text + CTA
- **Both:** Single column centered

#### MeetDoctor
- **Desktop:** 2-column flex, image left, text right
- **Mobile:** Stacked, image on top

#### Comfort
- **Desktop:** 2x2 grid (`grid-cols-2 lg:grid-cols-4`)
- **Mobile:** Single column or 2-col

#### FAQ
- **Both:** Full-width accordion, max-width container
- **Mobile:** Touch-friendly, generous tap targets

#### Footer
- **Desktop:** 3-column grid
- **Mobile:** Stacked single column

---

## 2. CTA Placement

### Primary CTA: "Book Appointment"

| Location            | Visibility      | Notes                                         |
|---------------------|-----------------|-----------------------------------------------|
| Header (desktop)    | Always visible  | Sticky nav, right-aligned button              |
| Header (mobile)     | Inside sheet    | Visible when hamburger menu is open           |
| Hero                | Always visible  | Main CTA below headline                       |
| Footer              | Always visible  | Bottom of page, final conversion opportunity  |
| Mobile sticky CTA   | Always visible  | Fixed bottom bar, mobile viewports only       |
| Services bottom     | Optional        | Single button below service cards grid        |
| Pricing bottom      | Optional        | Button below pricing cards                    |
| ConversionBanner    | Optional        | Mid-page re-engagement                        |
| Comfort bottom      | Optional        | Below technology cards                        |
| FAQ bottom          | Optional        | Below accordion                               |
| SocialProof bottom  | Optional        | Below testimonials                            |

### CTA Button Spec

```tsx
// Primary CTA everywhere
<Button
  className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] 
             transition-colors px-6 py-3 rounded-lg font-semibold"
  onClick={openBookingModal}
>
  Book Appointment
</Button>
```

---

## 3. Design System

### Colors

| Token                | Hex       | Usage                                     |
|----------------------|-----------|-----------------------------------------  |
| Primary Brand        | `#2563EB` | CTA buttons, links, header accents        |
| Primary Hover        | `#1D4ED8` | Button hover states                       |
| Secondary Accent     | `#22C55E` | Success badge, checkmarks, green accents  |
| Background           | `#F8FAFC` | Page background                           |
| Primary Text         | `#0F172A` | Headlines, body text                      |
| Secondary Text       | `#475569` | Subtext, descriptions, microcopy          |
| Card Background      | `#FFFFFF` | Cards, modal, form inputs                 |
| Border / Divider     | `#E2E8F0` | Card borders, separators, input borders   |

### CSS Custom Properties (globals.css)

```css
:root {
  --background: #F8FAFC;
  --foreground: #0F172A;
  --card: #FFFFFF;
  --card-foreground: #0F172A;
  --primary: #2563EB;
  --primary-foreground: #FFFFFF;
  --secondary: #F8FAFC;
  --secondary-foreground: #0F172A;
  --muted: #F1F5F9;
  --muted-foreground: #475569;
  --accent: #22C55E;
  --accent-foreground: #FFFFFF;
  --border: #E2E8F0;
  --input: #E2E8F0;
  --ring: #2563EB;
  --radius: 0.5rem;
}
```

### Typography

| Element          | Font     | Weight  | Size / Tailwind Class              |
|------------------|----------|---------|------------------------------------|
| H1 (Hero)        | Inter    | 700     | `text-4xl md:text-5xl lg:text-6xl font-bold` |
| H2 (Section)     | Inter    | 700     | `text-3xl md:text-4xl font-bold`   |
| H3 (Card Title)  | Inter    | 600     | `text-xl font-semibold`            |
| Body             | Inter    | 400     | `text-base leading-relaxed`        |
| Small / Micro    | Inter    | 400     | `text-sm text-muted-foreground`    |
| Hero Microcopy   | Inter    | 500     | `text-sm text-muted-foreground`    |

### Font Setup (layout.tsx)

```tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// In <html>: className={inter.variable}
// In @theme: --font-sans: var(--font-inter);
```

### Card Component Pattern

```tsx
<div className="bg-card rounded-xl border border-border p-6 
                hover:-translate-y-1 transition-transform duration-300">
  {/* Card content */}
</div>
```

---

## 4. Booking Modal Instructions

### Trigger
Any "Book Appointment" button click opens the modal.

### Technology
- Use shadcn `Dialog` component (`components/ui/dialog.tsx`)
- React `useState` for form state and modal open/close
- No backend, no API calls

### Form Fields

| Field           | Type          | Component              | Required |
|-----------------|---------------|------------------------|----------|
| Full Name       | text          | `<Input />`            | Yes      |
| Phone Number    | tel           | `<Input type="tel" />` | Yes      |
| Email Address   | email         | `<Input type="email"/>` | Yes      |
| Preferred Date  | date picker   | `<Input type="date" />` or `<Calendar />` | Yes |
| Preferred Time  | select        | `<Select />` with time slots | Yes |

### Form State Machine

```
[idle] → user fills fields → [filled]
[filled] → clicks "Request Appointment" → [submitted]
[submitted] → show success state
[success] → "Close" → close modal, reset form
[success] → "Book Another Appointment" → reset to [idle], keep modal open
```

### Success State UI

```
+------------------------------------------+
|              [X] Close                    |
|                                          |
|        [Green Checkmark Circle]          |
|     ✓  Appointment Request Sent          |
|                                          |
|  Name:     [submitted name]              |
|  Date:     [submitted date]              |
|  Time:     [submitted time]              |
|  Email:    [submitted email]             |
|  Phone:    [submitted phone]             |
|                                          |
|  "We'll confirm your appointment         |
|   within 24 hours."                      |
|                                          |
|  [Book Another Appointment]  [Close]     |
+------------------------------------------+
```

- Success badge: Checkmark icon inside a circle with `bg-[#22C55E]` / `text-white`
- Submitted details displayed in a clean list
- Two action buttons at bottom:
  - "Book Another Appointment" (outline/secondary style) -- resets form
  - "Close" (primary style) -- closes modal

---

## 5. Animations & Interactivity

### Hover Lift Effect
Apply to: Service cards, testimonial cards, pricing cards, comfort cards

```css
.hover-lift {
  @apply transition-transform duration-300 hover:-translate-y-1;
}
```

### Fade-In on Scroll
Use Intersection Observer to add a CSS class when sections enter the viewport.

```tsx
// Custom hook: useInView
// Apply: opacity-0 → opacity-100, translate-y-4 → translate-y-0
// Duration: 600ms, ease-out
// Trigger once (don't re-animate on scroll up)
```

### Smooth Scrolling
Set on `<html>` element:

```css
html {
  scroll-behavior: smooth;
}
```

Header nav links use anchor hrefs: `href="#services"`, `href="#pricing"`, etc.
Offset scroll position by header height (~64-80px) using `scroll-margin-top`.

```css
section[id] {
  scroll-margin-top: 5rem; /* 80px for sticky header */
}
```

### Modal Entrance
shadcn Dialog handles this natively with fade + scale animation.

### Accordion Expand/Collapse
shadcn Accordion handles smooth height transitions natively.
- Set `type="single"` and `collapsible={true}`
- No default open item (all collapsed initially)

### Mobile Testimonial Carousel
Use `embla-carousel-react` (already in package.json) via shadcn `Carousel` component.
- Auto-width slides
- Swipe-enabled on touch devices
- Dot indicators below

### Animations NOT Used
- No parallax
- No auto-play animations
- No complex keyframe sequences
- No scroll-jacking

---

## 6. Image Placeholders

### Suggested Images & Aspect Ratios

| Image                        | Filename                        | Aspect Ratio | Size Suggestion |
|------------------------------|---------------------------------|-------------|-----------------|
| Hero doctor/clinic           | `placeholder-doctor.jpg`        | 4:3         | 800x600         |
| Doctor bio portrait          | `placeholder-clinic.jpg`        | 3:4         | 600x800         |
| Before/After Whitening       | `before-after-whitening.jpg`    | 16:9        | 640x360         |
| Before/After Invisalign      | `before-after-invisalign.jpg`   | 16:9        | 640x360         |
| Before/After Implant         | `before-after-implant.jpg`      | 16:9        | 640x360         |
| Testimonial Avatar 1         | `testimonial-avatar-1.jpg`      | 1:1         | 80x80           |
| Testimonial Avatar 2         | `testimonial-avatar-2.jpg`      | 1:1         | 80x80           |
| Testimonial Avatar 3         | `testimonial-avatar-3.jpg`      | 1:1         | 80x80           |

### Placeholder Strategy
- Use `GenerateImage` tool to create realistic dental-themed placeholder images
- Before/After cards: Use gray placeholder boxes with "Before" / "After" labels if images are not yet generated
- Testimonial avatars: Generate friendly portrait photos or use initials in colored circles
- All cards in a set MUST have the same dimensions and aspect ratio for visual uniformity

---

## 7. Technical Notes

### Tailwind Classes Guidance

**Layout:**
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section spacing: `py-16 md:py-24`
- Card grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Flex centering: `flex items-center justify-center`
- Flex between: `flex items-center justify-between`

**Typography:**
- Section heading: `text-3xl md:text-4xl font-bold text-foreground text-center text-balance`
- Section subtext: `text-lg text-muted-foreground text-center max-w-2xl mx-auto`
- Card title: `text-xl font-semibold text-foreground`
- Card body: `text-base text-muted-foreground leading-relaxed`

**Spacing (use scale, not arbitrary):**
- `p-4`, `p-6`, `p-8` for card padding
- `gap-4`, `gap-6`, `gap-8` for grid/flex gaps
- `mb-4`, `mb-8`, `mb-12` for vertical rhythm
- `space-y-*` is NOT used; prefer `gap-*`

**Borders & Radius:**
- Card: `border border-border rounded-xl`
- Button: `rounded-lg`
- Avatar: `rounded-full`

**Responsive Prefixes:**
- Mobile-first: base styles are mobile
- `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

### shadcn/ui Components Used

| Component    | Import From               | Usage                          |
|-------------|---------------------------|--------------------------------|
| `Button`    | `components/ui/button`    | All CTAs, form submit          |
| `Card`      | `components/ui/card`      | Service, pricing, comfort cards|
| `Dialog`    | `components/ui/dialog`    | Booking modal                  |
| `Input`     | `components/ui/input`     | Form text fields               |
| `Label`     | `components/ui/label`     | Form labels                    |
| `Accordion` | `components/ui/accordion` | FAQ section                    |
| `Badge`     | `components/ui/badge`     | Trust badges, price tags       |
| `Separator` | `components/ui/separator` | Visual dividers                |
| `Sheet`     | `components/ui/sheet`     | Mobile nav menu                |
| `Carousel`  | `components/ui/carousel`  | Mobile testimonials            |
| `Select`    | `components/ui/select`    | Time slot picker in modal      |

### State Management
- **Booking Modal:** `useState` for `isOpen`, `formData`, `isSubmitted`
- **Mobile Menu:** `useState` for `isMenuOpen` (or Sheet's built-in state)
- **No global state library needed** -- all state is local to components
- **No localStorage** -- frontend-only, no persistence

### Performance
- Use `next/image` with `placeholder="blur"` for optimized images
- Lazy load below-fold sections with intersection observer
- Inter font loaded via `next/font/google` (automatic optimization)

---

## 8. Section-by-Section Content Reference

### Hero
- **Headline:** "Dentistry Designed Around Your Comfort"
- **Subtext:** "Modern, gentle dental care in White Rock."
- **CTA:** "Book Appointment"
- **Microcopy (below CTA, subtle):**
  - `4.9` star icon + "4.9" | "500+ Patients" | "Same-Week Appointments"
  - Style: `text-sm text-muted-foreground flex items-center gap-4`

### Social Proof Stats
- 4.9 Average Rating
- 520+ Patient Reviews
- 12+ Years Experience
- 8,000+ Patients Treated
- Same-Week Appointments

### Testimonials
1. **Sarah M.** -- "I avoided the dentist for years because of anxiety. Dr. Patel and her team made the experience incredibly comfortable." (5 stars)
2. **Daniel K.** -- "The online booking was simple and the appointment was on time. Best dental experience I've had." (5 stars)
3. **Priya S.** -- "My Invisalign results were amazing. Highly recommend." (5 stars)

### Services (6 Cards)
1. Teeth Cleaning -- Starting at $129
2. Cosmetic Dentistry -- From $250
3. Dental Implants -- From $3,000
4. Emergency Dental Care -- Exam from $99
5. Invisalign / Clear Aligners -- $3,500-$6,000
6. Family Dentistry -- Checkup packages

### Pricing Cards
- Basic Cleaning: $129
- Whitening: $299
- Emergency Visit: $99
- Invisalign Consultation: Free

### FAQ (8 Questions)
1. Do dental visits hurt?
2. I'm nervous about going to the dentist. Can you help?
3. How much does a typical visit cost?
4. Do you accept insurance?
5. What if I have a dental emergency?
6. Do you offer Invisalign or teeth straightening?
7. How long does an appointment take?
8. What if I haven't seen a dentist in years?

### Doctor Bio
"Dr. Maya Patel believes dentistry should feel calm, clear, and comfortable. After over a decade in practice and teaching at UBC, she opened Oceanview Dental Care to create a modern, patient-first clinic."

### Comfort Cards (4)
1. Pain-Managed Dentistry
2. Digital 3D Scanning
3. Low Radiation Imaging
4. Comfort-First Care

### Footer Contact
- Phone: (604) 555-0142
- Address: White Rock, BC, Canada
- Hours: Mon-Fri 9-6, Sat 10-3, Sun Closed

---

## 9. Reminders & Conversion Tips

### Trust Signal Placement
- Hero: microcopy stats immediately below CTA
- Social Proof: dedicated stats bar + testimonials
- FAQ bottom: micro-trust badges
- Footer: micro-trust badges (Google Rating, Insurance, Emergency)

### Mobile-First Priorities
- Sticky bottom CTA visible on all mobile scroll positions
- Touch targets minimum 44x44px
- Carousel for testimonials (swipe-friendly)
- Single-column layouts for cards and pricing
- Sheet component for mobile nav (not dropdown)

### Accessibility
- All images include descriptive `alt` text
- Buttons have clear focus states (`ring` via shadcn defaults)
- Accordion items keyboard-navigable (handled by Radix)
- Color contrast meets WCAG AA (dark text on light backgrounds)
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Screen reader text for icon-only elements using `sr-only` class

### Smooth Scrolling Offset
All sections must have `id` attributes matching nav links:
- `id="services"`, `id="pricing"`, `id="about"`, `id="contact"`
- Apply `scroll-margin-top: 5rem` to offset sticky header

### Conversion Architecture
Every 1-2 sections should offer a path back to the booking modal. The user should never need to scroll more than one viewport height without seeing a CTA. The mobile sticky CTA ensures this on small screens.

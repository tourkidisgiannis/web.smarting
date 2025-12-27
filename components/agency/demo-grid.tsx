"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Stethoscope, Scale, Briefcase, Palette, Utensils, Dumbbell } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const demos = [
  {
    title: "Ιατρικό",
    description: "Χτίστε σχέσεις εμπιστοσύνης με τους ασθενείς σας μέσα από μια καθαρή και επαγγελματική παρουσία.",
    icon: Stethoscope,
    href: "/demos/medical",
    color: "bg-blue-500/10 text-blue-500",
    bgGradient: "from-blue-900/40 to-blue-950/80",
    image: "/demos/medical.png",
  },
  {
    title: "Νομικό",
    description: "Αναδείξτε το κύρος και την εξειδίκευσή σας, κερδίζοντας την εμπιστοσύνη των υποψήφιων πελατών σας.",
    icon: Scale,
    href: "/demos/legal",
    color: "bg-slate-800/10 text-slate-800 dark:text-slate-200",
    bgGradient: "from-slate-900/40 to-slate-950/80",
    image: "/demos/legal.png",
  },
  {
    title: "Συμβουλευτική",
    description: "Ενισχύστε την εταιρική σας εικόνα και προσελκύστε νέες επιχειρηματικές ευκαιρίες με στυλ.",
    icon: Briefcase,
    href: "/demos/consultant",
    color: "bg-emerald-500/10 text-emerald-600",
    bgGradient: "from-emerald-900/40 to-emerald-950/80",
    image: "/demos/consulting.png",
  },
  {
    title: "Personal Trainer",
    description: "Εμπνεύστε το κοινό σας και χτίστε μια δυναμική κοινότητα γύρω από τις υπηρεσίες σας.",
    icon: Dumbbell,
    href: "/demos/personal-trainer",
    color: "bg-lime-500/10 text-lime-600",
    bgGradient: "from-lime-900/40 to-lime-950/80",
    image: "/demos/fitness.png",
  },
  {
    title: "Δημιουργικό",
    description: "Αποτυπώστε το μοναδικό σας όραμα και προβάλλετε το ταλέντο σας με τρόπο που εντυπωσιάζει.",
    icon: Palette,
    href: "/demos/creative",
    color: "bg-purple-500/10 text-purple-600",
    bgGradient: "from-purple-900/40 to-purple-950/80",
    image: "/demos/creative.png",
  },
  {
    title: "Εστίαση",
    description: "Αναδείξτε την εμπειρία που προσφέρετε και αυξήστε τις κρατήσεις σας με ελκυστικό σχεδιασμό.",
    icon: Utensils,
    href: "/demos/restaurant",
    color: "bg-orange-500/10 text-orange-600",
    bgGradient: "from-orange-900/40 to-orange-950/80",
    image: "/demos/restaurant.png",
  },
]

export function DemoGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLElement | null)[]>([])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Header Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })

      // Mobile: Card Stacking Effect - each card stacks exactly above previous
      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return

          // Card entrance animation
          gsap.fromTo(card,
            {
              y: 100,
              opacity: 0,
              scale: 0.95
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top top",
                scrub: 0.8,
              },
              y: - (index * 100), // Each card moves up by 100px times its index
              opacity: 1,
              scale: 1,
              ease: "power2.out",
            }
          )
        })
      })

      // Desktop: Card Stacking Effect - each card stacks exactly above previous
      mm.add("(min-width: 768px)", () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return

          // Card entrance animation
          gsap.fromTo(card,
            {
              y: 100,
              opacity: 0,
              scale: 0.95
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top top",
                scrub: 0.8,
              },
              y: - (index * 100), // Each card moves up by 100px times its index
              opacity: 1,
              scale: 1,
              ease: "power2.out",
            }
          )
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div id="demos" ref={containerRef} className="relative">
      {/* Header Section */}
      <section className="relative z-10 min-h-[50vh] bg-gradient-to-br from-[var(--blue-green-50)] via-white to-[var(--sky-blue-light-100)] rounded-t-[40px] shadow-2xl flex items-center justify-center">
        <div className="container py-16 md:py-24">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[var(--deep-space-blue-900)]">
              Λύσεις για τον Κλάδο σας
            </h2>
            <p className="mt-4 text-[var(--deep-space-blue-700)] text-base md:text-lg">
              Εξερευνήστε πώς προσαρμόζουμε την τεχνολογία στις ανάγκες του δικού σας επαγγέλματος για μέγιστα αποτελέσματα.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Stacked Cards */}
      {demos.map((demo, index) => (
        <section
          key={index}
          ref={(el) => { if (el) cardsRef.current[index] = el }}
          className="relative h-screen rounded-t-[40px] shadow-2xl overflow-hidden"
          style={{ zIndex: 20 + index }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={demo.image}
              alt={demo.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index < 2}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${demo.bgGradient} mix-blend-multiply opacity-80`} />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative z-10 h-full min-h-screen flex items-center justify-center py-12 md:py-16 px-4 sm:px-6">
            <Link 
              href={demo.href}
              className="group w-full max-w-3xl"
            >
              <div className="relative overflow-hidden rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-[var(--blue-green-400)]/50">
                {/* Content */}
                <div className="relative p-8 md:p-14 lg:p-20 text-center">
                  {/* Icon */}
                  <div className={`inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 text-white mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <demo.icon className="h-10 w-10 md:h-12 md:w-12 shadow-2xl" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight group-hover:text-[var(--blue-green-300)] transition-colors">
                    {demo.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="max-w-2xl mx-auto">
                    <p className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 font-medium">
                      {demo.description}
                    </p>
                  </div>

                  {/* CTA Button Style Link */}
                  <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[var(--deep-space-blue-900)] font-bold text-lg md:text-xl transition-all duration-300 group-hover:bg-[var(--blue-green-500)] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(var(--blue-green-rgb),0.5)]">
                    Εξερεύνηση <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Decorative Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </Link>
          </div>
        </section>
      ))}
    </div>
  )
}

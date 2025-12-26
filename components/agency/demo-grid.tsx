"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { ArrowRight, Stethoscope, Scale, Briefcase, Palette, Utensils, Dumbbell } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const demos = [
  {
    title: "Ιατρικό",
    description: "Χτίστε σχέσεις εμπιστοσύνης με τους ασθενείς σας μέσα από μια καθαρή και επαγγελματική παρουσία.",
    icon: Stethoscope,
    href: "/demos/medical",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Νομικό",
    description: "Αναδείξτε το κύρος και την εξειδίκευσή σας, κερδίζοντας την εμπιστοσύνη των υποψήφιων πελατών σας.",
    icon: Scale,
    href: "/demos/legal",
    color: "bg-slate-800/10 text-slate-800 dark:text-slate-200",
  },
  {
    title: "Συμβουλευτική",
    description: "Ενισχύστε την εταιρική σας εικόνα και προσελκύστε νέες επιχειρηματικές ευκαιρίες με στυλ.",
    icon: Briefcase,
    href: "/demos/consultant",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Personal Trainer",
    description: "Εμπνεύστε το κοινό σας και χτίστε μια δυναμική κοινότητα γύρω από τις υπηρεσίες σας.",
    icon: Dumbbell,
    href: "/demos/personal-trainer",
    color: "bg-lime-500/10 text-lime-600",
  },
  {
    title: "Δημιουργικό",
    description: "Αποτυπώστε το μοναδικό σας όραμα και προβάλλετε το ταλέντο σας με τρόπο που εντυπωσιάζει.",
    icon: Palette,
    href: "/demos/creative",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Εστίαση",
    description: "Αναδείξτε την εμπειρία που προσφέρετε και αυξήστε τις κρατήσεις σας με ελκυστικό σχεδιασμό.",
    icon: Utensils,
    href: "/demos/restaurant",
    color: "bg-orange-500/10 text-orange-600",
  },
]

export function DemoGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])

  useGSAP(
    () => {
      // Header Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })

      // Cards Entrance - Staggered from bottom
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <section id="demos" ref={containerRef} className="relative z-30 min-h-screen bg-gradient-to-br from-[var(--blue-green-50)] via-white to-[var(--sky-blue-light-100)] rounded-t-[40px] shadow-2xl">
      <div className="min-h-screen py-32">
      <div className="container">
        <div ref={headerRef} className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)]">
            Λύσεις για τον Κλάδο σας
          </h2>
          <p className="mt-6 text-[var(--deep-space-blue-700)] text-lg md:text-xl">
            Εξερευνήστε πώς προσαρμόζουμε την τεχνολογία στις ανάγκες του δικού σας επαγγέλματος για μέγιστα αποτελέσματα.
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {demos.map((demo, index) => (
            <Link 
              key={index}
              href={demo.href}
              ref={(el) => { if (el) cardsRef.current[index] = el }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-[var(--sky-blue-light-200)]/50 border border-[var(--sky-blue-light-200)] transition-all duration-500 hover:scale-[1.02] hover:border-[var(--blue-green-400)] hover:shadow-xl hover:shadow-[var(--blue-green-300)]/30 ${
                index === 0 || index === 5 ? "md:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-green-100)]/0 via-transparent to-[var(--amber-flame-100)]/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Icon and Title */}
                <div>
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${demo.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <demo.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--deep-space-blue-900)] group-hover:text-[var(--blue-green-600)] transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-[var(--deep-space-blue-700)] leading-relaxed">
                    {demo.description}
                  </p>
                </div>

                {/* CTA Arrow */}
                <div className="mt-8 flex items-center text-sm font-semibold text-[var(--princeton-orange-500)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  Εξερεύνηση <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--blue-green-200)] rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--amber-flame-200)] rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 delay-100" />
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}


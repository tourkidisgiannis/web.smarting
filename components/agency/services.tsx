"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Monitor, Smartphone, Zap, Search } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Προσέγγιση Παντού",
    description:
      "Προσεγγίστε το κοινό σας σε κάθε συσκευή. Εξασφαλίζουμε μια αψεγάδιαστη παρουσία που προσαρμόζεται στις ανάγκες των πελατών σας.",
    icon: Smartphone,
  },
  {
    title: "Ταχύτητα Μετατροπής",
    description:
      "Κερδίστε την εμπιστοσύνη των επισκεπτών με αστραπιαία φόρτωση. Η ταχύτητα είναι το κλειδί για υψηλότερα ποσοστά μετατροπής.",
    icon: Zap,
  },
  {
    title: "Κύρος & Ορατότητα",
    description:
      "Ανέβητε στην κορυφή των αναζητήσεων και χτίστε την αξιοπιστία της μάρκας σας με στρατηγικό SEO και σωστή δομή περιεχομένου.",
    icon: Search,
  },
  {
    title: "Στρατηγική Ανάπτυξη",
    description:
      "Λύσεις σχεδιασμένες αποκλειστικά για τους δικούς σας επιχειρηματικούς στόχους, χρησιμοποιώντας την τελευταία λέξη της τεχνολογίας.",
    icon: Monitor,
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      // Card Stacking Effect
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
        },
        scale: 0.95,
        borderRadius: "40px",
      })

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

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        // Entrance
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 70,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
        })

        // 3D Tilt Effect
        const handleCardMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e
          const { left, top, width, height } = card.getBoundingClientRect()
          const x = (clientX - left) / width - 0.5
          const y = (clientY - top) / height - 0.5

          gsap.to(card, {
            rotateY: x * 15,
            rotateX: -y * 15,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        const handleCardMouseLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          })
        }

        card.addEventListener("mousemove", handleCardMouseMove)
        card.addEventListener("mouseleave", handleCardMouseLeave)
      })
    },
    { scope: containerRef }
  )

  return (
    <section id="services" ref={containerRef} className="sticky top-0 z-20 min-h-[200vh] bg-gradient-to-br from-[var(--sky-blue-light-100)] via-white to-[var(--blue-green-50)] rounded-t-[40px] shadow-2xl">
      <div className="min-h-screen py-32">
      <div className="container">
        <div ref={headerRef} className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)]">
          Οι Υπηρεσίες μας
        </h2>
        <p className="mt-6 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed">
          Ολοκληρωμένες ψηφιακές λύσεις που συνδυάζουν την τεχνολογική υπεροχή με την 
          <span className="text-[var(--blue-green-600)] font-medium"> αισθητική ποιότητα</span>.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => { if (el) cardsRef.current[index] = el }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[var(--blue-green-400)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <Card className="relative h-full border-[var(--sky-blue-light-200)] bg-white shadow-lg shadow-[var(--sky-blue-light-200)]/50 p-2 transition-all group-hover:shadow-xl group-hover:shadow-[var(--blue-green-300)]/30 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--blue-green-100)] text-[var(--blue-green-600)] group-hover:scale-110 group-hover:bg-[var(--blue-green-500)] group-hover:text-white transition-all duration-500 shadow-xl shadow-[var(--blue-green-200)]/50">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl text-[var(--deep-space-blue-900)] group-hover:text-[var(--blue-green-600)] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-[var(--deep-space-blue-700)] group-hover:text-[var(--deep-space-blue-800)] transition-colors">
                  {service.description}
                </CardDescription>
              </CardContent>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                 <div className="h-10 w-10 border-t border-r border-[var(--amber-flame-500)] rounded-tr-lg" />
              </div>
            </Card>
          </div>
        ))}
      </div>
      </div>
      </div>
    </section>
  )
}


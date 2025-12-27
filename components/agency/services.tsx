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
      "Προσεγγίστε το κοινό σας σε κάθε συσκευή. Εξασφαλίζουμε μια αψεγάδιαστη παρουσία.",
    icon: Smartphone,
    tags: ["Responsive", "Mobile First", "Cross-browser", "UX/UI"],
  },
  {
    title: "Ταχύτητα Μετατροπής",
    description:
      "Κερδίστε την εμπιστοσύνη με αστραπιαία φόρτωση. Η ταχύτητα είναι το κλειδί.",
    icon: Zap,
    tags: ["Performance", "Web Vitals", "Optimization", "SSR"],
  },
  {
    title: "Κύρος & Ορατότητα",
    description:
      "Ανέβητε στην κορυφή των αναζητήσεων με στρατηγικό SEO και σωστή δομή.",
    icon: Search,
    tags: ["SEO", "Content Strategy", "Analytics", "Visibility"],
  },
  {
    title: "Στρατηγική Ανάπτυξη",
    description:
      "Λύσεις σχεδιασμένες αποκλειστικά για τους δικούς σας επιχειρηματικούς στόχους.",
    icon: Monitor,
    tags: ["Custom Solutions", "Tech Stack", "Scalability", "Security"],
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

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

        // 3D Tilt Effect - Only on Desktop
        mm.add("(min-width: 1024px)", () => {
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
          
          return () => {
            card.removeEventListener("mousemove", handleCardMouseMove)
            card.removeEventListener("mouseleave", handleCardMouseLeave)
          }
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <section id="services" ref={containerRef} className="relative z-20 min-h-screen bg-gradient-to-br from-[var(--sky-blue-light-100)] via-white to-[var(--blue-green-50)] rounded-t-[40px] shadow-2xl">
      <div className="py-24 md:py-32">
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
                <CardDescription className="text-base leading-relaxed text-[var(--deep-space-blue-700)] group-hover:text-[var(--deep-space-blue-800)] transition-colors mb-6">
                  {service.description}
                </CardDescription>
                
                {/* Horizontal Scroll Tags */}
                <div className="relative mt-auto">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar -mx-2 px-2 mask-linear-fade">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--blue-green-50)] text-[var(--blue-green-700)] border border-[var(--blue-green-100)] whitespace-nowrap transition-colors group-hover:bg-[var(--blue-green-100)] group-hover:border-[var(--blue-green-200)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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


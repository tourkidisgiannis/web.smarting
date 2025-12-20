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
    title: "Responsive Σχεδιασμός",
    description:
      "Εντυπωσιακά layouts που προσαρμόζονται τέλεια σε κάθε οθόνη, εξασφαλίζοντας άψογη εμπειρία σε κινητά, tablets και desktop.",
    icon: Smartphone,
  },
  {
    title: "Βελτιστοποίηση Απόδοσης",
    description:
      "Αστραπιαίοι χρόνοι φόρτωσης και βελτιστοποιημένα assets. Εξασφαλίζουμε υψηλές επιδόσεις στα Core Web Vitals.",
    icon: Zap,
  },
  {
    title: "SEO & Στρατηγική",
    description:
      "Δομή φιλική προς τις μηχανές αναζήτησης. Semantic HTML, meta tags και στρατηγική για υψηλότερη κατάταξη.",
    icon: Search,
  },
  {
    title: "Custom Ανάπτυξη",
    description:
      "Εξειδικευμένες λύσεις με σύγχρονα frameworks όπως Next.js και React για να καλύψουν τις ανάγκες της επιχείρησής σας.",
    icon: Monitor,
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    },
    { scope: containerRef }
  )

  return (
    <section id="services" ref={containerRef} className="container py-24">
      <div ref={headerRef} className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Οι Υπηρεσίες μας
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Ολοκληρωμένες ψηφιακές λύσεις για σύγχρονες επιχειρήσεις.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="service-card group border-none bg-secondary/50 transition-colors hover:bg-secondary"
            ref={(el) => { if (el) cardsRef.current[index] = el }}
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

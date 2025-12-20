"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { ArrowRight, Stethoscope, Scale, Briefcase, Palette, Utensils, Dumbbell } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const demos = [
  {
    title: "Ιατρικό",
    description: "Καθαρός σχεδιασμός που εμπνέει εμπιστοσύνη, για ιατρούς και κλινικές.",
    icon: Stethoscope,
    href: "/demos/medical",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Νομικό",
    description: "Κύρος και επαγγελματισμός για δικηγορικά γραφεία.",
    icon: Scale,
    href: "/demos/legal",
    color: "bg-slate-800/10 text-slate-800 dark:text-slate-200",
  },
  {
    title: "Συμβουλευτική",
    description: "Εταιρικό και κομψό στυλ για συμβούλους επιχειρήσεων.",
    icon: Briefcase,
    href: "/demos/consultant",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Personal Trainer",
    description: "Υψηλή ενέργεια και δυναμισμός για γυμναστές και coaches.",
    icon: Dumbbell,
    href: "/demos/personal-trainer",
    color: "bg-lime-500/10 text-lime-600",
  },
  {
    title: "Δημιουργικό",
    description: "Τολμηρό design για καλλιτέχνες και portfolios.",
    icon: Palette,
    href: "/demos/creative",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Εστίαση",
    description: "Ελκυστική παρουσίαση για εστιατόρια και cafe.",
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      })

      tl.from(headerRef.current, {
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
        stagger: 0.1,
        ease: "power3.out",
      })
    },
    { scope: containerRef }
  )

  return (
    <section id="demos" ref={containerRef} className="bg-muted/50 py-24">
      <div className="container">
        <div ref={headerRef} className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Πρότυπα Επαγγελμάτων
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Επιλέξτε το ιδανικό σημείο εκκίνησης για τον κλάδο σας.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <Link 
              key={index} 
              href={demo.href} 
              className="block h-full"
              ref={(el) => { cardsRef.current[index] = el }}
            >
              <Card className="demo-card h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${demo.color}`}>
                    <demo.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{demo.title}</CardTitle>
                  <CardDescription>{demo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-md bg-muted/50 object-cover" />
                  {/* Placeholder for preview image */}
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Προβολή <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

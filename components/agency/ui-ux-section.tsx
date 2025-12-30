"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Eye, Heart, Zap, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    title: "Σας εμπιστεύονται πιο γρήγορα",
    description: "Ο επισκέπτης καταλαβαίνει άμεσα ότι βρίσκεται μπροστά σε επαγγελματία που αξίζει σοβαρή προσοχή.",
    icon: Heart,
    benefit: "Λιγότερη αντίσταση, περισσότερη εμπιστοσύνη από την αρχή.",
  },
  {
    title: "Σας προσεγγίζουν οι σωστοί άνθρωποι",
    description: "Η ιστοσελίδα λειτουργεί σαν φίλτρο και απομακρύνει όσους δεν ταιριάζουν με το επίπεδό σας.",
    icon: Users,
    benefit: "Λιγότερα άσκοπα αιτήματα, περισσότερες ουσιαστικές συζητήσεις.",
  },
  {
    title: "Δεν χρειάζεται να πείθετε συνεχώς",
    description: "Οι ενδιαφερόμενοι επικοινωνούν ήδη ενημερωμένοι και θετικά προδιατεθειμένοι.",
    icon: Zap,
    benefit: "Πιο εύκολες συζητήσεις, πιο γρήγορες αποφάσεις.",
  },
  {
    title: "Η φήμη σας προστατεύεται",
    description: "Η online εικόνα σας ευθυγραμμίζεται με το επίπεδο της δουλειάς σας.",
    icon: Eye,
    benefit: "Σιγουριά κάθε φορά που κάποιος βλέπει ή μοιράζεται την ιστοσελίδα σας.",
  },
]

export function UIUXSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      // Header animation
      if (headerRef.current) {
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
      }

      // Benefits entrance animation with stagger
      if (benefitsRef.current && benefitsRef.current.length > 0) {
        gsap.from(benefitsRef.current.filter(Boolean), {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        })
      }

      // Interactive elements
      const cleanupFunctions: (() => void)[] = [];

      benefitsRef.current.forEach((benefit, index) => {
        if (!benefit) return

        // Hover effect for benefits
        const hoverTl = gsap.timeline({ paused: true })
        hoverTl.to(benefit, {
          y: -10,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        })

        const handleMouseEnter = () => hoverTl.play();
        const handleMouseLeave = () => hoverTl.reverse();

        benefit.addEventListener('mouseenter', handleMouseEnter)
        benefit.addEventListener('mouseleave', handleMouseLeave)

        // Store cleanup functions for hover events
        cleanupFunctions.push(() => {
          benefit.removeEventListener('mouseenter', handleMouseEnter);
          benefit.removeEventListener('mouseleave', handleMouseLeave);
        });

        // 3D Tilt Effect - Only on Desktop
        const mm = gsap.matchMedia()
        mm.add("(min-width: 1024px)", () => {
          const handleBenefitMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { left, top, width, height } = benefit.getBoundingClientRect()
            const x = (clientX - left) / width - 0.5
            const y = (clientY - top) / height - 0.5

            gsap.to(benefit, {
              rotateY: x * 8,
              rotateX: -y * 8,
              transformPerspective: 1000,
              duration: 0.3,
              ease: "power2.out",
            })
          }

          const handleBenefitMouseLeave = () => {
            gsap.to(benefit, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.3)",
            })
          }

          benefit.addEventListener("mousemove", handleBenefitMouseMove)
          benefit.addEventListener("mouseleave", handleBenefitMouseLeave)

          return () => {
            benefit.removeEventListener("mousemove", handleBenefitMouseMove)
            benefit.removeEventListener("mouseleave", handleBenefitMouseLeave)
          }
        })
      })

      // Return cleanup function
      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      id="ui-ux"
      ref={containerRef}
      className="relative z-20 min-h-screen"
    >
      <div className="py-24 md:py-32">
        <div className="container">
          <div
            ref={headerRef}
            className="mb-20 text-center max-w-3xl mx-auto"
            style={{ opacity: 1, transform: 'translateY(0px)' }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)]">
              Τι αλλάζει όταν η ιστοσελίδα δουλεύει υπέρ σας
            </h2>
            <p className="mt-6 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed">
              Μια ιστοσελίδα που ενισχύει την εμπιστοσύνη και αυξάνει τις μετατροπές.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => { if (el) benefitsRef.current[index] = el }}
                className="group relative bg-white p-6 shadow-[var(--sky-blue-light-200)]/50 border border-[var(--sky-blue-light-200)] transition-all duration-300 overflow-hidden"
                style={{ opacity: 1, transform: 'translateY(0px)' }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--blue-green-400)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-[var(--blue-green-100)] text-[var(--blue-green-600)] group-hover:scale-110 group-hover:bg-[var(--blue-green-500)] group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--deep-space-blue-900)] mb-3 group-hover:text-[var(--blue-green-600)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--deep-space-blue-700)] leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                  <div>
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-[var(--blue-green-50)] text-[var(--blue-green-700)] border border-[var(--blue-green-100)]">
                      Όφελος: {benefit.benefit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
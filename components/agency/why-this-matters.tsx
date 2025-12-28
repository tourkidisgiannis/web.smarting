"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export function WhyThisMatters() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Header animation
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

      // Background gradient animation would go here but is handled via CSS animation
    },
    { scope: containerRef }
  )

  return (
    <section
      id="why-matters"
      ref={containerRef}
      className="relative z-20 min-h-screen why-matters-bg"
    >
      <div className="py-24 md:py-32">
        <div className="container">
          <div ref={headerRef} className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)]">
              Για επαγγελματίες, η πρώτη εντύπωση δεν συγχωρεί λάθη
            </h2>
            <p className="mt-6 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed">
              Οι γιατροί, οι δικηγόροι και οι σύμβουλοι δεν αγοράζουν απλώς υπηρεσίες.
              Αγοράζουν σιγουριά ότι επέλεξαν τον σωστό άνθρωπο.
            </p>
            <div className="mt-8 text-left max-w-2xl mx-auto">
              <p className="text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed mb-4">
                Η ιστοσελίδα σας είτε:
              </p>
              <ul className="text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li>μειώνει το ρίσκο της επιλογής σας</li>
                <li>είτε το αυξάνει</li>
              </ul>
              <p className="text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed mt-4 font-bold">
                Εμείς φροντίζουμε να συμβαίνει το πρώτο.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export function WhatOurClientsSee() {
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
      id="clients-see"
      ref={containerRef}
      className="relative z-20 min-h-screen clients-see-bg"
    >
      <div className="py-24 md:py-32">
        <div className="container">
          <div ref={headerRef} className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)]">
              Αποτελέσματα στην πράξη
            </h2>
            <p className="mt-6 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed">
              Μετά τη σωστή αναβάθμιση της online παρουσίας τους, οι πελάτες μας αναφέρουν:
            </p>
            <ul className="mt-8 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed list-disc list-inside space-y-4 max-w-2xl mx-auto">
              <li>Περισσότερα σοβαρά αιτήματα</li>
              <li>Πελάτες που έρχονται ήδη πεισμένοι</li>
              <li>Λιγότερο χαμένο χρόνο σε εξηγήσεις</li>
            </ul>
            <div className="mt-10 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[var(--sky-blue-light-200)] max-w-2xl mx-auto">
              <p className="text-xl italic text-[var(--deep-space-blue-800)] font-medium">
                «Οι πελάτες καταλαβαίνουν το επίπεδό μας πριν καν μιλήσουμε.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
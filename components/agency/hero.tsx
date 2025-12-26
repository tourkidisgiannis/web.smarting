"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/magnetic"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Floating Orbs Animation - Subtle and Elegant
      gsap.to(orb1Ref.current, {
        x: "15vw",
        y: "10vh",
        scale: 1.1,
        duration: 35,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(orb2Ref.current, {
        x: "-10vw",
        y: "15vh",
        scale: 0.9,
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(orb3Ref.current, {
        x: "8vw",
        y: "-12vh",
        scale: 1.05,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Content Entrance
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        rotateX: -20,
        duration: 1.5,
        delay: 0.5,
      })
        .from(
          textRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
          },
          "-=1"
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )

      // Card Stacking Effect - Scale down when scrolling past
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
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="sticky top-0 z-10 min-h-[200vh] flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-[var(--sky-blue-light-50)] via-white to-[var(--blue-green-50)]"
    >
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center md:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,var(--blue-green-200),transparent_70%)] opacity-30"></div>
      <div 
        ref={orb1Ref}
        className="orb h-[400px] w-[400px] bg-[var(--blue-green-300)] opacity-20 top-[10%] left-[10%]" 
      />
      <div 
        ref={orb2Ref}
        className="orb h-[500px] w-[500px] bg-[var(--sky-blue-light-300)] opacity-15 bottom-[20%] right-[10%] [animation-delay:2s]" 
      />
      <div 
        ref={orb3Ref}
        className="orb h-[300px] w-[300px] bg-[var(--amber-flame-300)] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
      />

      <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-6">
        <h1
          ref={titleRef}
          className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl perspective-[1000px] text-[var(--deep-space-blue-900)]"
        >
          <span className="block overflow-hidden">
            <span className="block">Ενισχύστε την</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block bg-gradient-to-r from-[var(--blue-green-500)] via-[var(--deep-space-blue-500)] to-[var(--blue-green-600)] bg-clip-text text-transparent">Ψηφιακή σας</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">Παρουσία</span>
          </span>
        </h1>
        
        <p
          ref={textRef}
          className="max-w-[42rem] mt-4 text-lg leading-relaxed text-[var(--deep-space-blue-700)] sm:text-2xl"
        >
          Μετατρέψτε τους επισκέπτες σας σε 
          <span className="text-[var(--deep-space-blue-900)] font-medium"> πιστούς πελάτες</span> μέσα από στρατηγικά χτισμένες ιστοσελίδες που 
          <span className="text-[var(--deep-space-blue-900)] font-medium"> παράγουν αποτελέσματα</span>.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 mt-8">
          <Magnetic strength={0.2}>
            <Button size="xl" className="h-14 px-10 text-lg rounded-full shadow-2xl bg-[var(--blue-green-500)] hover:bg-[var(--blue-green-600)] text-white shadow-[var(--blue-green-500)]/20 group" asChild>
              <Link href="#demos">
                Δείτε τα Demos 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Button variant="outline" size="xl" className="h-14 px-10 text-lg rounded-full border-2 border-[var(--princeton-orange-500)] text-[var(--princeton-orange-600)] hover:bg-[var(--princeton-orange-500)] hover:text-white transition-all" asChild>
              <Link href="#contact">Επικοινωνία</Link>
            </Button>
          </Magnetic>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-semibold tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
      </div>
      </div>
    </section>
  )
}


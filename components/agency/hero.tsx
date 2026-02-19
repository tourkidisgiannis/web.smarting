"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Content Entrance
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

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
        );

      return () => mm.revert(); // Cleanup matchMedia
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 min-h-screen w-full flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-center md:px-6">
        {/* Video Background */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-10 grayscale"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,var(--landing-secondary),transparent_70%)] opacity-20"></div>

        <div className="container relative z-10 flex flex-col items-center gap-6">
          <div className="font-mono text-sm uppercase tracking-widest text-[var(--landing-primary)] font-semibold mb-4">
            Για Επιστήμονες & Επαγγελματίες
          </div>
          <h1
            ref={titleRef}
            className="font-mono text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl perspective-[1000px] text-[var(--landing-text)] max-w-full"
          >
            <span className="block overflow-hidden">
              <span className="block">Εμπιστοσύνη με την πρώτη</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block bg-linear-to-r from-[var(--landing-primary)] via-[var(--landing-secondary)] to-[var(--landing-primary)] bg-clip-text text-transparent break-words">
                ματιά.
              </span>
            </span>
          </h1>

          <p
            ref={textRef}
            className="font-sans mt-4 text-lg leading-relaxed text-[var(--landing-text)]/80 sm:text-2xl max-w-3xl"
          >
            Εξειδικευμένες ψηφιακές λύσεις για επιστήμονες και επαγγελματίες που
            δεν συμβιβάζονται
            <span className="text-[var(--landing-text)] font-semibold">
              {" "}
              με τίποτα λιγότερο
            </span>{" "}
            από την κορυφή.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col items-center gap-6 mt-8"
          >
            <Magnetic strength={0.2}>
              <Button
                size="xl"
                className="font-sans h-14 px-10 text-lg rounded-full shadow-2xl bg-[var(--landing-cta)] hover:bg-[var(--landing-cta)]/90 text-white shadow-[var(--landing-cta)]/20 group transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  Ζητήστε Ιδιωτική Αξιολόγηση
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <div className="text-xs text-[var(--landing-text)]/50 mt-4">
              Μας εμπιστεύονται: [Placeholder for Client Logos]
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="font-mono text-xs font-semibold tracking-widest uppercase mb-1 text-[var(--landing-text)]">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-[var(--landing-text)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

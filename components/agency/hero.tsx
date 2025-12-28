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
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,var(--blue-green-200),transparent_70%)] opacity-30"></div>

        <div className="container relative z-10 flex flex-col items-center gap-6">
          <h1
            ref={titleRef}
            className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl perspective-[1000px] text-(--deep-space-blue-900)"
          >
            <span className="block overflow-hidden">
              <span className="block">Ιστοσελίδες που σας</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block bg-linear-to-r from-(--blue-green-500) via-(--deep-space-blue-500) to-(--blue-green-600) bg-clip-text text-transparent">
                κάνουν να επιλέγεστε
              </span>
            </span>
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-lg leading-relaxed text-[var(--deep-space-blue-700)] sm:text-2xl"
          >
            Για γιατρούς, δικηγόρους και επαγγελματίες που θέλουν να
            <span className="text-[var(--deep-space-blue-900)] font-medium">
              {" "}
              εμπνέουν εμπιστοσύνη
            </span>{" "}
            πριν καν μιλήσουν.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <Magnetic strength={0.2}>
              <Button
                size="xl"
                className="h-14 px-10 text-lg rounded-full shadow-2xl bg-[var(--blue-green-500)] hover:bg-[var(--blue-green-600)] text-white shadow-[var(--blue-green-500)]/20 group"
                asChild
              >
                <Link href="#contact">
                  Ζητήστε Ιδιωτική Αξιολόγηση
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
          <span className="text-xs font-semibold tracking-widest uppercase mb-1">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-[var(--deep-space-blue-700)]"
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

"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import SplitText from "../SplitText";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const line1 = "Εμπιστοσύνη με την πρώτη ματιά.";

  useGSAP(
    () => {
      // --- 1. ENTRANCE TIMELINE ---
      const masterTl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.5 },
      });

      // Reveal paragraph text and CTA buttons
      masterTl
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 40,
            clearProps: "all",
          },
          1.2, // Slightly overlap with SplitText end
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 40,
            clearProps: "all",
          },
          "-=1",
        );

      // --- 2. SCROLL ORCHESTRATION ---

      // Cinematic Layered Parallax for Video
      gsap.to(videoRef.current, {
        yPercent: 15,
        scale: 1.15,
        opacity: 0.1,
        filter: "blur(12px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle Parallax for Content
      gsap.to([textRef.current, ctaRef.current], {
        yPercent: -15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // --- 3. SCROLL HINT REVEAL ---
      gsap.from(".hero-scroll-hint", {
        opacity: 0,
        y: -30,
        duration: 1.2,
        delay: 2,
        ease: "power2.out",
      });

      // Hide Hint on Scroll
      gsap.to(".hero-scroll-hint", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "10% top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 md:px-6 py-20">
      {/* Cinematic Background Layer */}
      <div
        ref={videoRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 grayscale brightness-110 contrast-110 scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/70 to-white" />
      </div>

      {/* Main Content Grid */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-7xl">
        <h1 className="flex flex-col items-center gap-2 md:gap-4 mb-10 md:mb-16 select-none">
          <SplitText
            text={line1}
            className="inline-block font-mono text-landing-primary italic text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tight leading-tight pb-6 md:pb-8 pr-2 drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
            delay={300}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-200px"
            textAlign="center"
          />
          {/* <SplitText
            text={line2}
              className="inline-block font-mono text-landing-secondary italic text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tight leading-tight pb-6 md:pb-8 pr-2 drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)] "
            delay={300}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          /> */}

          {/* <div className="relative py-4 md:py-8 px-4 z-10 flex items-center justify-center">
           
          </div> */}
        </h1>

        <p
          ref={textRef}
          className="font-sans text-lg sm:text-xl md:text-2xl text-landing-text/90 max-w-4xl leading-relaxed mb-10 md:mb-16 font-light px-4"
        >
          Εξειδικευμένες ψηφιακές λύσεις για επιστήμονες και επαγγελματίες που
          δεν συμβιβάζονται
          <span className="text-landing-primary font-black">
            {" "}
            με τίποτα λιγότερο
          </span>{" "}
          από την κορυφή.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col items-center gap-10 md:gap-12 w-full"
        >
          <Magnetic strength={0.3}>
            <Button
              size="xl"
              className="bg-landing-cta hover:bg-landing-cta/90 text-white rounded-full px-10 md:px-16 h-16 md:h-20 text-lg md:text-2xl font-black shadow-2xl shadow-landing-cta/20 group border-none transition-all duration-500 scale-100 hover:scale-105 active:scale-95 cursor-pointer"
              asChild
            >
              <Link href="/#contact">
                Ζητήστε Ιδιωτική Αξιολόγηση
                <ArrowRight className="ml-2 md:ml-3 h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:translate-x-3" />
              </Link>
            </Button>
          </Magnetic>

          {/* Trust Authority Bar */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-landing-text/50 font-black">
              Validated Expertise
            </span>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[10px] sm:text-xs font-black text-landing-text tracking-widest">
              <span className="hover:text-landing-primary transition-colors cursor-default">
                ΙΑΤΡΟΙ
              </span>
              <div className="w-1 h-1 rounded-full bg-landing-primary opacity-30" />
              <span className="hover:text-landing-primary transition-colors cursor-default">
                ΔΙΚΗΓΟΡΟΙ
              </span>
              <div className="w-1 h-1 rounded-full bg-landing-primary opacity-30" />
              <span className="hover:text-landing-primary transition-colors cursor-default">
                ΕΠΙΧΕΙΡΗΜΑΤΙΕΣ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="hero-scroll-hint absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-landing-text/20">
        <span className="text-[8px] uppercase tracking-[0.8em] font-black translate-x-[0.4em]">
          Scroll
        </span>
        <div className="relative w-px h-24 bg-landing-text/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-landing-primary animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-setup";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const line1 = "Εμπιστοσύνη με την πρώτη";
  const line2 = "ματιά.";

  useGSAP(
    () => {
      // --- 1. INITIAL STATES ---
      gsap.set(".char-1", { opacity: 0 });
      gsap.set([textRef.current, ctaRef.current, ".cursor"], {
        opacity: 0,
        y: 30,
      });

      // --- 2. ENTRANCE TIMELINE ---
      const masterTl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.5 },
      });

      masterTl
        // 1. Line 1 Typing
        .to(
          ".char-1",
          {
            opacity: 1,
            stagger: 0.1,
            duration: 0.05,
            ease: "none",
          },
          0,
        )
        // 2. Hand-off to Line 2
        .fromTo(
          title2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "+=0.2", // Slight pause after line 1
        )
        // 3. Line 2 Typing
        .to(
          ".cursor",
          {
            opacity: 1,
            duration: 0.1,
          },
          "<",
        )
        .from(".char-type", {
          opacity: 0,
          stagger: 0.1,
          duration: 0.05,
          ease: "none",
        })
        .to(
          ".cursor",
          {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "steps(1)",
          },
          "<",
        )
        // 4. Content Reveal
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          },
          "+=0.2",
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          },
          "-=1",
        )
        .to(".cursor", {
          opacity: 0,
          duration: 1,
          delay: 2,
        });

      // --- 3. SCROLL ORCHESTRATION ---
      // Cinematic Layered Parallax
      gsap.to(title1Ref.current, {
        yPercent: -30,
        opacity: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(title2Ref.current, {
        yPercent: -15,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(videoRef.current, {
        yPercent: 20,
        scale: 1.2,
        opacity: 0.05,
        filter: "blur(8px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text and CTA subtle parallax
      gsap.to([textRef.current, ctaRef.current], {
        yPercent: -10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll Hint Reveal & Hide
      gsap.from(".hero-scroll-hint", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 3,
      });

      gsap.to(".hero-scroll-hint", {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4 md:px-6 py-20"
    >
      {/* Cinematic Background Layer  */}
      <div
        ref={videoRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 grayscale brightness-110 contrast-110 scale-110"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/60 to-white dark:via-slate-950/60 dark:to-slate-950" />
      </div>

      {/* Main Content Grid */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-7xl">
        <h1 className="flex flex-col items-center gap-2 md:gap-4 mb-10 md:mb-16">
          {/* Line 1 - Character Level Typing Effect */}
          <div
            ref={title1Ref}
            className="flex flex-wrap justify-center gap-x-[0.4em] font-mono items-center"
          >
            {line1.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block py-1 md:py-2 whitespace-nowrap"
              >
                {word.split("").map((char, j) => (
                  <span
                    key={j}
                    className="char-1 inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-landing-text tracking-tight leading-none"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </div>

          {/* Line 2 - The Cinematic Gradient Statement with Typing Effect */}
          <div
            ref={title2Ref}
            className="relative py-4 md:py-8 px-4 z-10 flex items-center justify-center"
          >
            <span
              className="inline-block font-mono bg-linear-to-r from-landing-primary via-landing-secondary to-landing-primary bg-clip-text text-landing-primary italic text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tight leading-tight pb-6 md:pb-8 pr-2"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {line2.split("").map((char, i) => (
                <span key={i} className="char-type">
                  {char}
                </span>
              ))}
            </span>
            <span className="cursor inline-block w-[4px] h-[0.8em] bg-landing-primary ml-1 -mt-4 md:-mt-8" />
          </div>
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
              className="bg-landing-cta hover:bg-landing-cta/90 text-white rounded-full px-10 md:px-16 h-16 md:h-20 text-lg md:text-2xl font-black shadow-2xl shadow-landing-cta/20 group border-none transition-all duration-500 scale-100 hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="#contact">
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

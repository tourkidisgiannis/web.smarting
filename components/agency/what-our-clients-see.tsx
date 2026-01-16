"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function WhatOurClientsSee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Staggered List Animation
      if (listRef.current) {
        gsap.from(listRef.current.children, {
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          },
          x: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      }

      // Quote Pop-in
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 90%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="clients-see"
      ref={containerRef}
      className="relative container z-20 py-24 md:py-32 clients-see-bg overflow-hidden"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-[var(--deep-space-blue-900)] mb-6">
              Αποτελέσματα στην πράξη
            </h2>
            <p className="text-[var(--deep-space-blue-900)] text-lg md:text-xl leading-relaxed">
              Μετά τη σωστή αναβάθμιση της online παρουσίας τους, οι πελάτες μας
              αναφέρουν:
            </p>
          </div>

          {/* Results List */}
          <div className="max-w-2xl mx-auto mb-16">
            <ul ref={listRef} className="space-y-6">
              {[
                "Περισσότερα σοβαρά αιτήματα",
                "Πελάτες που έρχονται ήδη πεισμένοι",
                "Λιγότερο χαμένο χρόνο σε εξηγήσεις",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-[var(--deep-space-blue-900)] text-xl md:text-2xl font-medium"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Quote */}
          <div
            ref={quoteRef}
            className="relative p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-3xl border border-[var(--sky-blue-light-200)] shadow-xl max-w-3xl mx-auto"
          >
            <span className="absolute -top-6 left-10 text-8xl text-[var(--sky-blue-light-300)] font-serif opacity-50 block h-10 leading-none select-none">
              “
            </span>
            <p className="relative z-10 text-2xl md:text-3xl italic text-[var(--deep-space-blue-900)] font-semibold leading-snug text-center">
              «Οι πελάτες καταλαβαίνουν το επίπεδό μας πριν καν μιλήσουμε.»
            </p>
            <div className="mt-6 flex justify-center items-center gap-2 text-[var(--deep-space-blue-900)] font-semibold uppercase tracking-widest text-sm">
              <span className="h-px w-8 bg-[var(--deep-space-blue-200)]"></span>
              Feedback Πελάτη
              <span className="h-px w-8 bg-[var(--deep-space-blue-200)]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

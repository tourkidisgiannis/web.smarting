"use client";

import { useRef } from "react";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionReveal } from "@/components/animations/section-reveal";

const testimonials = [
  {
    quote:
      "Η νέα ιστοσελίδα μας έφερε αύξηση 40% στα οργανικά ραντεβού μέσα στους πρώτους 3 μήνες. Η ποιότητα των πελατών είναι πλέον κορυφαία.",
    name: "Dr. Eleni Papadopoulou",
    role: "Ιατρός Δερματολόγος",
  },
  {
    quote:
      "Δεν χάνω πλέον χρόνο να πείθω για την αξία της δουλειάς μου. Οι πελάτες έρχονται ενημερωμένοι και έτοιμοι να συνεργαστούν. Αύξηση 25% στα έσοδα το πρώτο εξάμηνο.",
    name: "George Konstantinou",
    role: "Νομικός Σύμβουλος",
  },
  {
    quote:
      "Η online εικόνα μου επιτέλους αντικατοπτρίζει το επίπεδο των υπηρεσιών μου. Το rebranding μας έφερε 2 μεγάλα εταιρικά συμβόλαια.",
    name: "Maria Sotiropoulou",
    role: "Creative Director",
  },
];

export function WhatOurClientsSee() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="clients-see"
      ref={containerRef}
      className="relative container z-20 py-24 md:py-32 clients-see-bg overflow-hidden"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl text-[var(--landing-text)] mb-6">
              <TextReveal type="words" className="inline-block">
                Τι βλέπουν οι πελάτες μας
              </TextReveal>
            </h2>
            <SectionReveal delay={0.3}>
              <p className="font-sans text-[var(--landing-text)]/80 text-lg md:text-xl leading-relaxed">
                Αποτελέσματα που μιλούν από μόνα τους.
              </p>
            </SectionReveal>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SectionReveal key={index} delay={index * 0.1} className="h-full">
                <div className="relative p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-[var(--landing-secondary)]/50 shadow-lg h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
                  <span className="absolute -top-6 left-6 text-8xl text-[var(--landing-secondary)]/50 font-serif opacity-50 block h-10 leading-none select-none">
                    “
                  </span>
                  <p className="font-sans relative z-10 text-lg italic text-[var(--landing-text)] font-medium leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 pt-6 border-t border-[var(--landing-secondary)]/30 text-right">
                    <p className="font-mono font-semibold text-[var(--landing-text)]">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sm text-[var(--landing-text)]/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

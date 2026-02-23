"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { cn } from "@/lib/utils";

type ServiceDetailProps = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  outcomes: string[];
  timeline: string[];
  accent?: string;
};

export function ServiceDetail({
  title,
  subtitle,
  description,
  highlights,
  deliverables,
  outcomes,
  timeline,
  accent = "from-[var(--landing-primary)] via-[var(--landing-secondary)] to-[var(--landing-primary)]",
}: ServiceDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-hero-line", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".service-chip", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.4,
      });

      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 75%",
        },
      });

      gsap.from(".service-step", {
        x: -20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-steps",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[var(--landing-bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(#00000006_1.2px,transparent_1.2px)] [background-size:46px_46px] opacity-80" />
      <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-[var(--landing-primary)]/10 blur-[120px]" />
      <div className="absolute top-60 -left-40 h-[420px] w-[420px] rounded-full bg-[var(--landing-secondary)]/10 blur-[120px]" />

      <section className="relative z-10 px-4 md:px-8 pt-32 md:pt-40 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] font-black text-[var(--landing-primary)] service-hero-line">
            <Sparkles className="h-4 w-4" />
            Υπηρεσία
          </div>
          <h1 className="mt-6 font-mono text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-[var(--landing-text)] service-hero-line">
            {title}
          </h1>
          <h2
            className={cn(
              "mt-4 font-mono text-2xl md:text-4xl italic font-light bg-clip-text text-transparent service-hero-line",
              `bg-linear-to-r ${accent}`,
            )}
          >
            {subtitle}
          </h2>
          <p className="font-sans mt-6 max-w-3xl text-lg md:text-xl text-[var(--landing-text)]/90 font-light leading-relaxed service-hero-line">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="service-chip inline-flex items-center gap-2 rounded-full border border-[var(--landing-primary)]/20 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[var(--landing-text)] font-mono"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--landing-primary)]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--landing-cta)] px-6 py-3 text-sm md:text-base font-black text-white shadow-[0_18px_40px_rgba(9,66,143,0.25)] transition-transform hover:-translate-y-0.5"
            >
              Κλείστε Στρατηγική Κλήση <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--landing-primary)]/20 bg-white/70 px-6 py-3 text-sm md:text-base font-black text-[var(--landing-text)] transition-transform hover:-translate-y-0.5"
            >
              Επιστροφή στην Αρχική
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 md:px-8 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="service-grid grid gap-6 md:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="service-card rounded-[2rem] bg-white/70 border border-white/60 p-6 md:p-8 shadow-[0_16px_40px_rgba(10,30,70,0.08)]"
              >
                <div className="flex items-center gap-3 text-[var(--landing-primary)] font-black text-sm uppercase tracking-[0.25em]">
                  <Check className="h-4 w-4" />
                  Παραδοτέο
                </div>
                <p className="font-sans mt-4 text-lg font-bold text-[var(--landing-text)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 md:px-8 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 md:p-10 shadow-[0_20px_50px_rgba(10,30,70,0.1)]">
            <h3 className="font-mono text-2xl md:text-3xl font-black text-[var(--landing-text)] mb-6">
              Τι πετυχαίνουμε
            </h3>
            <div className="space-y-4">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="font-sans flex items-start gap-4 text-lg text-[var(--landing-text)] font-light"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--landing-secondary)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-steps rounded-[2.5rem] border border-white/60 bg-[var(--landing-primary)]/5 p-8 md:p-10">
            <h3 className="font-mono text-2xl md:text-3xl font-black text-[var(--landing-text)] mb-6">
              Χρονοδιάγραμμα
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={item}
                  className="service-step flex items-center gap-4 rounded-2xl bg-white/70 px-4 py-3 text-[var(--landing-text)] font-sans"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--landing-primary)] text-white font-black">
                    {index + 1}
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

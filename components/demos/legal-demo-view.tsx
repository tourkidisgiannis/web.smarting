"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function LegalDemoView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    (context) => {
      const q = (selector: string) =>
        context.selector
          ? context.selector(selector)
          : containerRef.current?.querySelectorAll(selector) ?? [];

      gsap.from(q(".legal-animate"), {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>(q(".section-title")).forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.from(q(".stat-item"), {
        scrollTrigger: {
          trigger: q(".stats-section")[0],
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0a0f1d] text-white font-serif selection:bg-[#d4af37] selection:text-[#0a0f1d]"
    >
      {/* Nav */}
      <nav className="border-b border-white/10 bg-[#0a0f1d]/90 p-6 sticky top-0 z-40 backdrop-blur-md">
        <div className="container flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider uppercase flex items-center gap-3">
            <Scale aria-hidden className="text-[#d4af37] h-8 w-8" />
            <span className="hidden sm:inline">Blackwood & Συνεργάτες</span>
            <span className="sm:hidden">Blackwood</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-gray-400 font-sans">
            <Link href="#practice-areas" className="hover:text-[#d4af37]">
              Τομείς
            </Link>
            <Link href="#attorneys" className="hover:text-[#d4af37]">
              Δικηγόρος
            </Link>
            <Link href="#results" className="hover:text-[#d4af37]">
              Επιτυχίες
            </Link>
            <Link href="#contact" className="hover:text-[#d4af37]">
              Επικοινωνία
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0f1d] uppercase tracking-wider font-sans text-sm"
            >
              Δωρεάν Συμβουλευτική
            </Button>

            <button
              type="button"
              className="md:hidden text-[#d4af37]"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0f1d] border-b border-white/10 py-8 px-6 flex flex-col gap-6">
            <Link href="#practice-areas" onClick={() => setIsMenuOpen(false)}>
              Τομείς
            </Link>
            <Link href="#attorneys" onClick={() => setIsMenuOpen(false)}>
              Δικηγόρος
            </Link>
            <Link href="#results" onClick={() => setIsMenuOpen(false)}>
              Επιτυχίες
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              Επικοινωνία
            </Link>
            <Button className="bg-[#d4af37] text-[#0a0f1d]">
              Δωρεάν Συμβουλευτική
            </Button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/demos/legal/hero.jpg"
            alt="Δικαιοσύνη"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0f1d] via-[#0a0f1d]/90 to-[#0a0f1d]/60" />
        </div>

        <div className="container border-l-2 border-[#d4af37] pl-8 md:pl-16 relative z-10">
          <h1 className="legal-animate text-5xl md:text-7xl font-bold mb-6">
            Αλέξανδρος Μαύρος <br />
            <span className="text-[#d4af37] italic text-4xl md:text-6xl">
              Δικηγόρος παρ’ Αρείω Πάγω
            </span>
          </h1>

          <p className="legal-animate text-xl text-gray-400 max-w-2xl mb-10 font-sans">
            Στρατηγική και τεκμηριωμένη νομική εκπροσώπηση, με προσωπική ευθύνη
            και απόλυτη προσήλωση στο συμφέρον του εντολέα.
          </p>

          <div className="legal-animate flex gap-4 font-sans">
            <Button size="lg" className="bg-[#d4af37] text-[#0a0f1d]">
              Προγραμματίστε Ραντεβού
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/20"
            >
              Βιογραφικό
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section border-y border-white/10 bg-[#0d1221] py-16 font-sans">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "20+", label: "Έτη Εμπειρίας" },
            { value: "500+", label: "Υποθέσεις" },
            { value: "100%", label: "Αφοσίωση" },
            { value: "24/7", label: "Υποστήριξη" },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div className="text-4xl font-bold text-[#d4af37]">{s.value}</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#0a0f1d]">
        <div className="container max-w-3xl">
          <form className="space-y-6 font-sans bg-[#0f1629] p-12 border border-white/10">
            <Input placeholder="Ονοματεπώνυμο" />
            <Input placeholder="Email" />
            <Textarea placeholder="Περιγραφή υπόθεσης" />
            <Button className="w-full bg-[#d4af37] text-[#0a0f1d]">
              Αποστολή
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Η υποβολή της φόρμας δεν δημιουργεί σχέση δικηγόρου-εντολέα.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Stethoscope,
  Scale,
  Briefcase,
  Palette,
  Utensils,
  Dumbbell,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const demos = [
  {
    title: "Σύμβουλος Υγείας",
    description:
      "Χτίστε σχέσεις εμπιστοσύνης με τους ασθενείς σας μέσα από μια καθαρή και επαγγελματική παρουσία.",
    icon: Stethoscope,
    href: "/demos/medical",
    bgGradient: "from-blue-900/60 to-blue-950/90",
    image: "/demos/medical.png",
  },
  {
    title: "Νομικός Σύμβουλος",
    description:
      "Αναδείξτε το κύρος και την εξειδίκευσή σας, κερδίζοντας την εμπιστοσύνη των υποψήφιων πελατών σας.",
    icon: Scale,
    href: "/demos/legal",
    bgGradient: "from-slate-900/60 to-slate-950/90",
    image: "/demos/legal.png",
  },
  {
    title: "Σύμβουλος Φυσικής Υγείας",
    description:
      "Εμπνεύστε το κοινό σας και χτίστε μια δυναμική κοινότητα γύρω από τις υπηρεσίες σας.",
    icon: Dumbbell,
    href: "/demos/personal-trainer",
    bgGradient: "from-lime-900/60 to-lime-950/90",
    image: "/demos/fitness.png",
  },
  {
    title: "Σελίδα Εστίασης",
    description:
      "Αναδείξτε την εμπειρία που προσφέρετε και αυξήστε τις κρατήσεις σας με ελκυστικό σχεδιασμό.",
    icon: Utensils,
    href: "/demos/restaurant",
    bgGradient: "from-orange-900/60 to-orange-950/90",
    image: "/demos/restaurant.png",
  },
  {
    title: "Σύμβουλος Επιχειρήσεων",
    description:
      "Ενισχύστε την εταιρική σας εικόνα και προσελκύστε νέες επιχειρηματικές ευκαιρίες με στυλ.",
    icon: Briefcase,
    href: "/demos/consultant",
    bgGradient: "from-emerald-900/60 to-emerald-950/90",
    image: "/demos/consulting.png",
  },
];

export function DemoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const total = cards.length;

      cards.forEach((card, index) => {
        if (index >= total - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative bg-slate-950 overflow-x-hidden">
      {/* Header */}
      <section
        className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4"
        id="demos"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Λύσεις για τον <span className="text-blue-400">Κλάδο σας</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
          Εξερευνήστε πώς προσαρμόζουμε την τεχνολογία στις ανάγκες σας.
        </p>
      </section>

      {/* Cards */}
      {demos.map((demo, index) => (
        <section
          key={demo.href}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
          style={{ zIndex: index + 10 }}
        >
          {/* Background */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={demo.image}
              alt={demo.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index < 2}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${demo.bgGradient}`}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Card */}
          <div className="relative z-20 px-4">
            <Link href={demo.href} className="group block max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 md:p-16 lg:p-24 rounded-3xl transition hover:border-white/40 hover:bg-white/15">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white mb-8">
                  <demo.icon className="h-8 w-8" />
                </div>

                <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
                  {demo.title}
                </h3>

                <p className="text-lg md:text-2xl text-white/80 mb-10">
                  {demo.description}
                </p>

                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-full group-hover:bg-blue-500 group-hover:text-white">
                  Εξερεύνηση
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

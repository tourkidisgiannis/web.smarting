"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-setup";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Stethoscope,
  Scale,
  Briefcase,
  Utensils,
  Dumbbell,
} from "lucide-react";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionReveal } from "@/components/animations/section-reveal";
import { Magnetic } from "@/components/magnetic";

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
  const sectionsRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      const sections = sectionsRef.current;

      sections.forEach((section, index) => {
        const bgImage = section.querySelector(".bg-image");
        const content = section.querySelector(".card-content");

        // Pinning and overlap effect
        // We pin all sections except the last one to allow it to scroll away naturally
        if (index < sections.length - 1) {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        // Content Fade and Scale Out
        if (index < sections.length - 1) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sections[index + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });

          tl.to(content, {
            opacity: 0,
            scale: 0.8,
            y: -50,
            filter: "blur(10px)",
            ease: "none",
          });

          tl.to(
            bgImage,
            {
              scale: 1.2,
              opacity: 0.5,
              filter: "blur(5px)",
              ease: "none",
            },
            0,
          );
        }

        // Parallax effect for the background image
        gsap.to(bgImage, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative bg-slate-950 overflow-x-hidden">
      {/* Header */}
      <section
        className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4"
        id="demos"
      >
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-400 font-bold mb-6 block">
              Sector Specific Demos
            </span>
          </SectionReveal>
          <h2 className="font-mono text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            <TextReveal type="words" className="inline-block">
              Λύσεις για τον
            </TextReveal>{" "}
            <br />
            <TextReveal
              type="words"
              className="inline-block bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent"
            >
              Κλάδο σας
            </TextReveal>
          </h2>
          <SectionReveal delay={0.4}>
            <p className="font-sans text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Εξερευνήστε πώς προσαρμόζουμε την τεχνολογία και το design{" "}
              <br className="hidden md:block" />
              στις ανάγκες της δικής σας επιχείρησης.
            </p>
          </SectionReveal>
        </div>

        {/* Animated Scroll Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-blue-400 to-transparent"></div>
      </section>

      {/* Sticky Demo Sections */}
      {demos.map((demo, index) => (
        <section
          key={demo.href}
          ref={(el) => {
            if (el) sectionsRef.current[index] = el;
          }}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
          style={{ zIndex: index + 10 }}
        >
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="bg-image absolute inset-0">
              <Image
                src={demo.image}
                alt={demo.title}
                fill
                sizes="100vw"
                className="object-cover scale-110"
                priority={index < 2}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${demo.bgGradient}`}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>

          {/* Card Content */}
          <div className="card-content relative z-20 px-4 w-full max-w-6xl">
            <Link
              href={demo.href}
              className="group block"
              data-cursor-text="VIEW"
            >
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-16 lg:p-20 rounded-[3rem] transition-all duration-500 hover:border-white/30 hover:bg-white/10 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                  <div className="flex-1">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-950 mb-8 shadow-xl group-hover:scale-110 transition-transform">
                      <demo.icon className="h-8 w-8" />
                    </div>

                    <h3 className="font-mono text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                      {demo.title}
                    </h3>

                    <p className="font-sans text-xl md:text-3xl text-white/70 font-medium mb-12 leading-relaxed">
                      {demo.description}
                    </p>

                    <Magnetic strength={0.2}>
                      <div className="inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-950 text-lg font-bold rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all shadow-xl">
                        Εξερεύνηση Demo
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Magnetic>
                  </div>

                  <div className="hidden lg:block w-1/3 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      width={600}
                      height={450}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

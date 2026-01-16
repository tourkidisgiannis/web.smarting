"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  SearchCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MessageSquare,
    title: "1. Η Γνωριμία",
    description:
      "Συζητάμε τις ιδέες σας και βάζουμε κάτω το πλάνο. Στόχος μας; Να καταλάβουμε ακριβώς τι χρειάζεστε.",
  },
  {
    icon: PenTool,
    title: "2. Ο Σχεδιασμός",
    description:
      "Δίνουμε μορφή στο όραμά σας. Φτιάχνουμε κάτι που όχι μόνο δείχνει υπέροχο, αλλά λειτουργεί και τέλεια.",
  },
  {
    icon: Code2,
    title: "3. Η Κατασκευή",
    description:
      "Ώρα για δράση. Χτίζουμε την ιστοσελίδα σας με τις καλύτερες τεχνολογίες για να έχετε ταχύτητα και ασφάλεια.",
  },
  {
    icon: SearchCheck,
    title: "4. Ο Έλεγχος",
    description:
      "Δεν μας αρέσουν τα λάθη. Τσεκάρουμε τα πάντα διπλά για να είμαστε σίγουροι ότι όλα είναι στην εντέλεια.",
  },
  {
    icon: Rocket,
    title: "5. Η Πρεμιέρα",
    description:
      "Είμαστε στον αέρα! Και αφού ξεκινήσουμε, παραμένουμε δίπλα σας για να το εξελίξουμε κι άλλο.",
  },
];

export function OnboardingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      });

      // Animate the vertical line drawing down
      tl.fromTo(
        lineRef.current,
        { height: "0%" },
        { height: "100%", ease: "none", duration: 1 }
      );

      // Animate the cards appearing as the line passes them
      steps.forEach((_, index) => {
        gsap.from(`.timeline-step-${index}`, {
          scrollTrigger: {
            trigger: `.timeline-step-${index}`,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          x: index % 2 === 0 ? -30 : 30, // Alternate entry direction
          duration: 0.6,
          ease: "power2.out",
        });

        // Animate the dot popping in
        gsap.from(`.timeline-dot-${index}`, {
          scrollTrigger: {
            trigger: `.timeline-step-${index}`,
            start: "top 85%",
          },
          scale: 0,
          duration: 0.4,
          delay: 0.2,
          ease: "back.out(1.7)",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-32 container px-6 relative overflow-hidden "
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-[var(--deep-space-blue-900)]">
            Πώς Δουλεύουμε
          </h2>
          <p className="text-[var(--deep-space-blue-900)] text-lg max-w-2xl mx-auto">
            Απλά βήματα, χωρίς μπερδεμένους όρους. Από την πρώτη καλημέρα μέχρι
            το τελικό αποτέλεσμα.
          </p>
        </div>

        <div className="relative">
          {/* Central Line Background (Grey) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--sky-blue-light-200)] md:-translate-x-1/2" />

          {/* Animated Line (Blue-Green) */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[var(--blue-green-500)] to-[var(--deep-space-blue-500)] md:-translate-x-1/2 origin-top"
          />

          <div className="     space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "timeline-step relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div
                  className={cn(
                    "flex-1 w-full md:w-auto pl-12 md:pl-0",
                    `timeline-step-${index}`
                  )}
                >
                  <div
                    className={cn(
                      "p-8 rounded-3xl border border-[var(--sky-blue-light-200)] bg-white/40 backdrop-blur-md shadow-xl hover:border-[var(--blue-green-500)]/[0.3] transition-colors",
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    )}
                  >
                    <h3 className="text-2xl mb-3 flex items-center md:inline-flex gap-3">
                      <span
                        className={cn(
                          "inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-green-100)] text-[var(--blue-green-600)]"
                        )}
                      >
                        <step.icon size={16} />
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-[var(--deep-space-blue-900)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={cn(
                      `timeline-dot-${index}`,
                      "w-8 h-8 rounded-full bg-white border-4 border-[var(--blue-green-500)] z-10 shadow-lg shadow-[var(--blue-green-500)]/50"
                    )}
                  />
                </div>

                {/* Empty Side for Grid Balance */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

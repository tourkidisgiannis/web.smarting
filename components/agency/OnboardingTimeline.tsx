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
    title: "1. Στρατηγική Ανάλυση",
    description:
      "Εμβαθύνουμε στο όραμά σας και καθορίζουμε τους στόχους που θα φέρουν πραγματικά αποτελέσματα.",
  },
  {
    icon: PenTool,
    title: "2. Σχεδιασμός Εμπειρίας",
    description:
      "Δημιουργούμε μια μοναδική αισθητική ταυτότητα που αποπνέει κύρος και επαγγελματισμό.",
  },
  {
    icon: Code2,
    title: "3. High-End Ανάπτυξη",
    description:
      "Μετατρέπουμε το σχέδιο σε μια ταχύτατη ιστοσελίδα χρησιμοποιώντας Next.js για κορυφαίες επιδόσεις.",
  },
  {
    icon: SearchCheck,
    title: "4. Διασφάλιση Ποιότητας",
    description:
      "Εξαλείφουμε κάθε τεχνικό σφάλμα, διασφαλίζοντας άψογη εμπειρία σε κάθε συσκευή και browser.",
  },
  {
    icon: Rocket,
    title: "5. Go-Live & Υποστήριξη",
    description:
      "Το project σας εκτοξεύεται. Παραμένουμε δίπλα σας για τη συνεχή εξέλιξη της παρουσίας σας.",
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
      className="py-32 px-6 relative overflow-hidden "
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-[var(--deep-space-blue-900)]">
            Η Διαδικασία μας
          </h2>
          <p className="text-[var(--deep-space-blue-700)] text-lg max-w-2xl mx-auto">
            Από την ιδέα στην υλοποίηση, πιστεύουμε στη διαφάνεια και την
            ποιότητα σε κάθε βήμα.
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

          <div className="space-y-12 md:space-y-24">
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
                          "md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--blue-green-100)] text-[var(--blue-green-600)]"
                        )}
                      >
                        <step.icon size={16} />
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-[var(--deep-space-blue-700)] leading-relaxed">
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

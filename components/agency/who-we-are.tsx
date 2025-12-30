"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Background gradient animation would go here but is handled via CSS animation
    },
    { scope: containerRef }
  );

  return (
    <section
      id="who-we-are"
      ref={containerRef}
      className="relative z-20 min-h-screen who-we-are-bg"
    >
      <div className="py-24 md:py-32">
        <div className="container">
          <div ref={headerRef} className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)]">
              Δουλεύουμε με επαγγελματίες που δεν έχουν περιθώριο για λάθος
              εικόνα
            </h2>
            <p className="mt-6 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed">
              Εξειδικευόμαστε σε online παρουσία για ανθρώπους των οποίων η φήμη
              είναι περιουσιακό στοιχείο.
            </p>
            <div className="mt-8 text-left max-w-2xl mx-auto">
              <p className="text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed mb-4 font-bold">
                Τι σημαίνει αυτό για εσάς:
              </p>
              <ul className="text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed list-disc list-inside space-y-2 ml-4">
                <li>Καμία πρόχειρη εικόνα</li>
                <li>Καμία υπερβολή ή «διαφημιστικό» ύφος</li>
                <li>Καμία λύση που μπορεί να σας εκθέσει</li>
              </ul>
              <p className="text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed mt-6">
                Ο στόχος μας είναι ένας: να νιώθετε σίγουροι κάθε φορά που
                κάποιος βλέπει την ιστοσελίδα σας.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

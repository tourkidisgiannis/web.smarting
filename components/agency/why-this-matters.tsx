"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Σας εμπιστεύονται πιο γρήγορα",
    description:
      "Ο επισκέπτης καταλαβαίνει άμεσα ότι βρίσκεται μπροστά σε επαγγελματία που αξίζει σοβαρή προσοχή.",
    benefit: "Λιγότερη αντίσταση, περισσότερη εμπιστοσύνη από την αρχή.",
  },
  {
    title: "Σας προσεγγίζουν οι σωστοί άνθρωποι",
    description:
      "Η ιστοσελίδα λειτουργεί σαν φίλτρο και απομακρύνει όσους δεν ταιριάζουν με το επίπεδό σας.",
    benefit: "Λιγότερα άσκοπα αιτήματα, περισσότερες ουσιαστικές συζητήσεις.",
  },
  {
    title: "Δεν χρειάζεται να πείθετε συνεχώς",
    description:
      "Οι ενδιαφερόμενοι επικοινωνούν ήδη ενημερωμένοι και θετικά προδιατεθειμένοι.",
    benefit: "Πιο εύκολες συζητήσεις, πιο γρήγορες αποφάσεις.",
  },
  {
    title: "Η φήμη σας προστατεύεται",
    description:
      "Η online εικόνα σας ευθυγραμμίζεται με το επίπεδο της δουλειάς σας.",
    benefit: "Σιγουριά κάθε φορά που κάποιος βλέπει ή μοιράζεται το site σας.",
  },
];

export function WhyThisMatters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
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

      // Cards animation with stagger
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="why-matters"
      ref={containerRef}
      className="relative container z-20 min-h-screen why-matters-bg"
    >
      <div className="py-24 md:py-32">
        <div className="container px-4">
          {/* Main Content Header */}
          <div ref={headerRef} className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[var(--deep-space-blue-900)] mb-8">
              Για επαγγελματίες, η πρώτη εντύπωση δεν επιτρέπει περιθώρια
              σφάλματος.
            </h2>
            <p className="text-[var(--deep-space-blue-900)] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Οι πελάτες σας δεν επιλέγουν απλώς μια υπηρεσία· αναζητούν τη
              βεβαιότητα ότι εμπιστεύονται τον κατάλληλο άνθρωπο.
            </p>

            <div className="inline-block bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[var(--deep-space-blue-100)] text-left shadow-sm">
              <p className="text-[var(--deep-space-blue-900)] font-medium mb-4">
                Η ιστοσελίδα σας είτε:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-[var(--deep-space-blue-900)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-3" />
                  Ενισχύει την αβεβαιότητα της επιλογής
                </li>
                <li className="flex items-center text-[var(--deep-space-blue-900)] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                  Περιορίζει το ρίσκο και εδραιώνει την εμπιστοσύνη
                </li>
              </ul>
              <p className="text-[var(--deep-space-blue-900)] font-bold italic">
                Εμείς διασφαλίζουμε το δεύτερο.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

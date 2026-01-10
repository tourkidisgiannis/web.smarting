"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Eye, Heart, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Σας εμπιστεύονται πιο γρήγορα",
    description:
      "Ο επισκέπτης καταλαβαίνει άμεσα ότι βρίσκεται μπροστά σε επαγγελματία που αξίζει σοβαρή προσοχή.",
    icon: Heart,
    benefit: "Λιγότερη αντίσταση, περισσότερη εμπιστοσύνη από την αρχή.",
  },
  {
    title: "Σας προσεγγίζουν οι σωστοί άνθρωποι",
    description:
      "Η ιστοσελίδα λειτουργεί σαν φίλτρο και απομακρύνει όσους δεν ταιριάζουν με το επίπεδό σας.",
    icon: Users,
    benefit: "Λιγότερα άσκοπα αιτήματα, περισσότερες ουσιαστικές συζητήσεις.",
  },
  {
    title: "Δεν χρειάζεται να πείθετε συνεχώς",
    description:
      "Οι ενδιαφερόμενοι επικοινωνούν ήδη ενημερωμένοι και θετικά προδιατεθειμένοι.",
    icon: Zap,
    benefit: "Πιο εύκολες συζητήσεις, πιο γρήγορες αποφάσεις.",
  },
  {
    title: "Η φήμη σας προστατεύεται",
    description:
      "Η online εικόνα σας ευθυγραμμίζεται με το επίπεδο της δουλειάς σας.",
    icon: Eye,
    benefit:
      "Σιγουριά κάθε φορά που κάποιος βλέπει ή μοιράζεται την ιστοσελίδα σας.",
  },
];

export function UIUXSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slider = sliderRef.current;
      const trigger = triggerRef.current;

      if (!slider || !trigger) return;

      let ctx = gsap.context(() => {
        // Horizontal Scroll Animation
        const mm = gsap.matchMedia();

        // Desktop/Tablet: Horizontal Scroll
        mm.add("(min-width: 768px)", () => {
          const totalWidth = slider.scrollWidth;
          const viewportWidth = window.innerWidth;
          const xTranslation = -(totalWidth - viewportWidth + 64); // 64px padding

          gsap.to(slider, {
            x: xTranslation,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${totalWidth}`,
              invalidateOnRefresh: true,
            },
          });
        });

        // Benefits entrance animation (optional, for individual cards appearing)
        // Kept simple for now as the scroll is the main effect
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32">
      <div
        ref={triggerRef}
        className="md:h-screen flex flex-col justify-center"
      >
        <div className="container ">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl text-[var(--deep-space-blue-900)]">
              Τι αλλάζει όταν η ιστοσελίδα δουλεύει υπέρ σας
            </h2>
          </div>
        </div>

        {/* Slider Container */}
        <div className="w-full overflow-hidden md:overflow-visible px-4 md:px-0">
          <div
            ref={sliderRef}
            className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-fit md:px-[10vw]"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card group relative bg-white p-6 md:p-8 rounded-2xl shadow-[var(--sky-blue-light-200)]/50 border border-[var(--sky-blue-light-200)] min-w-full md:min-w-[450px] md:max-w-[450px] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--sky-blue-light-300)]/40 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-green-50)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--blue-green-100)] text-[var(--blue-green-600)] group-hover:bg-[var(--blue-green-500)] group-hover:text-white transition-all duration-300 shadow-sm">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--deep-space-blue-900)] mb-4 group-hover:text-[var(--blue-green-700)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--deep-space-blue-700)] leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--sky-blue-light-100)]">
                    <span className="inline-flex items-center text-sm font-semibold bg-[var(--blue-green-50)] text-[var(--blue-green-700)] px-3 py-1.5 rounded-full border border-[var(--blue-green-100)]">
                      ✨ {benefit.benefit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

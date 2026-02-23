"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { Eye, Heart, Zap, Users } from "lucide-react";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionReveal } from "@/components/animations/section-reveal";

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
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slider = sliderRef.current;
      const trigger = triggerRef.current;
      const progressBar = progressBarRef.current;

      if (!slider || !trigger) return;

      const mm = gsap.matchMedia();

      // Desktop/Tablet: Horizontal Scroll
      mm.add("(min-width: 768px)", () => {
        const totalWidth = slider.scrollWidth;
        const viewportWidth = window.innerWidth;
        const xTranslation = -(totalWidth - viewportWidth + 64);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });

        tl.to(slider, {
          x: xTranslation,
          ease: "none",
        });

        if (progressBar) {
          tl.to(
            progressBar,
            {
              scaleX: 1,
              ease: "none",
            },
            0,
          );
        }

        // Staggered entrance for cards inside the horizontal scroll
        const cards = gsap.utils.toArray<HTMLElement>(".benefit-card");
        cards.forEach((card) => {
          gsap.from(card.querySelector(".card-inner"), {
            y: 50,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 80%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      // Mobile: Standard vertical entrance
      mm.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".benefit-card");
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: slider,
            start: "top 80%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="ui-ux"
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-slate-50/30"
    >
      <div
        ref={triggerRef}
        className="md:h-screen flex flex-col justify-center"
      >
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <SectionReveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--landing-primary)] font-bold mb-4 block">
                Experience the difference
              </span>
            </SectionReveal>
            <h2 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-[var(--landing-text)]">
              <TextReveal type="words" className="inline-block">
                Τι αλλάζει όταν η ιστοσελίδα
              </TextReveal>{" "}
              <br />
              <TextReveal
                type="words"
                className="inline-block text-[var(--landing-primary)]"
              >
                δουλεύει υπέρ σας
              </TextReveal>
            </h2>
          </div>
        </div>

        {/* Progress Bar (Desktop only) */}
        <div className="hidden md:block fixed bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-slate-200 rounded-full overflow-hidden z-20">
          <div
            ref={progressBarRef}
            className="h-full bg-[var(--landing-primary)] origin-left scale-x-0"
          />
        </div>

        {/* Slider Container */}
        <div className="w-full overflow-hidden md:overflow-visible px-4 md:px-0">
          <div
            ref={sliderRef}
            className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-fit md:px-[15vw]"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card group min-w-full md:min-w-[500px] md:max-w-[500px]"
                data-cursor-text="EXPLORE"
              >
                <div className="card-inner relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--landing-primary)]/10 hover:-translate-y-2 h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black font-mono select-none">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--landing-primary)]/5 text-[var(--landing-primary)] group-hover:bg-[var(--landing-primary)] group-hover:text-white transition-all duration-500">
                      <benefit.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-mono text-3xl font-bold text-[var(--landing-text)] mb-6 group-hover:text-[var(--landing-primary)] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="font-sans text-xl text-[var(--landing-text)] leading-relaxed mb-10 flex-grow">
                      {benefit.description}
                    </p>

                    <div className="pt-8 border-t border-slate-50 mt-auto">
                      <span className="font-sans inline-flex items-center text-sm font-bold text-[var(--landing-primary)] bg-[var(--landing-primary)]/5 px-4 py-2 rounded-full border border-[var(--landing-primary)]/10">
                        ✨ {benefit.benefit}
                      </span>
                    </div>
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

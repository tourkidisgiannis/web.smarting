"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, Users, ShieldAlert, Fingerprint, ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    title: "Κερδίστε την Εμπιστοσύνη",
    description:
      "Μια επαγγελματική εικόνα εμπνέει ασφάλεια και σιγουριά από την πρώτη στιγμή, θέτοντας τα θεμέλια για μια επιτυχημένη συνεργασία.",
    icon: ShieldAlert,
    tag: "Trust",
  },
  {
    title: "Προσελκύστε το Ιδανικό Κοινό",
    description:
      "Η στοχευμένη παρουσία φέρνει κοντά σας πελάτες που εκτιμούν την ποιότητα και ταιριάζουν απόλυτα με τη φιλοσοφία σας.",
    icon: Users,
    tag: "Targeting",
  },
  {
    title: "Αναδείξτε την Αυθεντία σας",
    description:
      "Αφήστε την ιστοσελίδα σας να μιλήσει για την εμπειρία σας, αποδεικνύοντας την αξία σας χωρίς να χρειάζεται να πείτε λέξη.",
    icon: Zap,
    tag: "Authority",
  },
  {
    title: "Η Εικόνα που σας Αξίζει",
    description:
      "Ευθυγραμμίστε την ψηφιακή σας ταυτότητα με την πραγματική ποιότητα των υπηρεσιών σας, ενισχύοντας τη φήμη σας στην αγορά.",
    icon: Fingerprint,
    tag: "Reputation",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Header Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });

      // Cards Staggered Entrance
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
        });

        // Desktop 3D Hover Effect
        mm.add("(min-width: 1024px)", () => {
          const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            gsap.to(card, {
              rotateY: x * 8,
              rotateX: -y * 8,
              transformPerspective: 1200,
              duration: 0.4,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.7,
              ease: "back.out(1.7)",
            });
          };

          card.addEventListener("mousemove", handleMouseMove);
          card.addEventListener("mouseleave", handleMouseLeave);
          return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
          };
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative container  py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container relative z-10">
        <div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-24 md:mb-32"
        >
          <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-(--blue-green-600) bg-(--blue-green-50) rounded-full">
            Digital Growth
          </span>
          <h2 className="text-4xl md:text-7xl font-bold text-(--deep-space-blue-900) mb-8 tracking-tight">
            Η Ιστοσελίδα σας,{" "}
            <span className="text-(--blue-green-600)">
              ο Καλύτερος Σύμμαχός σας.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-(--deep-space-blue-900) font-medium mb-12">
            Μια προσεγμένη online παρουσία εργάζεται για εσάς 24/7, ανοίγοντας
            δρόμους για νέες ευκαιρίες.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-slate-100 pt-12">
            {["Αύξηση Κύρους", "Περισσότεροι Πελάτες", "Ανάδειξη Αξίας"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-(--blue-green-500)" />
                  <span className="text-(--deep-space-blue-900) font-semibold">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid gap-6 md:gap-10 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group"
            >
              <Card className="h-full bg-slate-50/50 border-slate-100 p-8 md:p-12 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] border-none relative overflow-hidden">
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-(--blue-green-500) transition-all duration-500 group-hover:w-full" />

                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-(--blue-green-600) group-hover:bg-(--blue-green-600) group-hover:text-white transition-all duration-500">
                      <problem.icon size={28} />
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-(--blue-green-600) transition-colors">
                      {problem.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-(--deep-space-blue-900) mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-lg text-(--deep-space-blue-900) leading-relaxed mb-8 flex-grow">
                    {problem.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-(--deep-space-blue-900) font-medium mb-6">
            Δώστε στην επιχείρησή σας την ώθηση που της αξίζει.
          </p>
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-(--deep-space-blue-900) text-white rounded-full font-bold transition-all duration-300 hover:bg-(--blue-green-600) shadow-lg hover:shadow-xl overflow-hidden inline-block"
          >
            <span className="relative z-10">Ξεκινήστε την Αλλαγή</span>
            <span className="absolute inset-0 bg-(--blue-green-500) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
            <ArrowRight className="ml-2 h-5 w-5 relative z-10 inline-block transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

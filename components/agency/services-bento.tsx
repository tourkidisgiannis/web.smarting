"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  Smartphone,
  Search,
  Zap,
  ArrowUpRight,
  Headset,
  Code2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".bento-card");

      // Entrance Animation
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        rotateX: -10,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      // 3D Hover & Content Parallax
      cards.forEach((card) => {
        const image = card.querySelector(".card-image");

        card.addEventListener("mousemove", (e: MouseEvent) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          gsap.to(card, {
            rotateY: x * 5,
            rotateX: -y * 5,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out",
          });

          if (image) {
            gsap.to(image, {
              x: x * 20,
              y: y * 20,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
          if (image) {
            gsap.to(image, {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            });
          }
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 container px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-[var(--landing-text)] mb-6">
            Υπηρεσίες που{" "}
            <span className="text-[var(--landing-primary)]">Ξεχωρίζουν</span>
          </h2>
          <p className="font-sans text-xl text-[var(--landing-text)]/80 max-w-2xl mx-auto">
            Ολοκληρωμένες λύσεις για την ψηφιακή σας ανάπτυξη, από τον σχεδιασμό
            μέχρι την υποστήριξη.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. SEO - Large Card */}
          <div 
            className="bento-card group col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm hover:shadow-xl transition-all border border-blue-100 cursor-pointer"
            data-cursor-text="VIEW"
          >
            <div className="card-content relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6">
                  <Search size={32} strokeWidth={2.5} />
                </div>
                <h3 className="font-mono text-3xl md:text-4xl font-bold text-[var(--landing-text)] mb-4">
                  Κυριαρχία στην Google (SEO)
                </h3>
                <p className="font-sans text-lg text-[var(--landing-text)]/80 leading-relaxed max-w-md">
                  Στρατηγικές SEO που φέρνουν την ιστοσελίδα σας στην πρώτη
                  σελίδα. Αυξήστε την οργανική επισκεψιμότητα.
                </p>
              </div>
              <div className="mt-8">
                <span className="flex items-center gap-2 text-blue-700 font-bold group-hover:gap-4 transition-all font-mono">
                  Μάθετε περισσότερα <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
            
            <div className="card-image absolute right-[-20px] bottom-[-40px] md:right-[-40px] md:bottom-[-60px] opacity-20 md:opacity-100 transition-transform duration-500 pointer-events-none">
              <div className="relative w-80 h-64 bg-white rounded-t-2xl shadow-2xl border border-blue-100 overflow-hidden">
                <div className="bg-blue-50 px-4 py-3 flex items-center gap-2 border-b border-blue-100">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="p-6">
                  <div className="w-full h-32 bg-gradient-to-t from-blue-50 to-transparent rounded-lg relative overflow-hidden">
                    <svg viewBox="0 0 100 40" className="w-full h-full absolute bottom-0 left-0 text-blue-500 fill-current opacity-20" preserveAspectRatio="none">
                      <path d="M0,40 L10,35 L20,38 L30,25 L40,30 L50,15 L60,20 L70,10 L80,15 L90,5 L100,0 V40 H0 Z" />
                    </svg>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end gap-2">
                      {[10, 16, 12, 20, 14, 24, 18].map((h, i) => (
                        <div key={i} className={`w-4 bg-blue-${i === 5 ? '500 shadow-lg shadow-blue-500/30' : '300/50'} rounded-t-sm`} style={{ height: `${h * 4}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Responsive Design */}
          <div 
            className="bento-card group col-span-1 md:col-span-1 row-span-2 bg-[#fff1f2] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all border border-rose-100 cursor-pointer"
            data-cursor-text="MOBILE"
          >
            <div className="card-content relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-500 mb-6">
                <Smartphone size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-mono text-2xl font-bold text-[var(--landing-text)] mb-4">
                Responsive & Modern
              </h3>
              <p className="font-sans text-[var(--landing-text)]/80 mb-8">
                Σχεδιασμός που μαγνητίζει και προσαρμόζεται άψογα.
              </p>
              <div className="mt-auto flex justify-center">
                <div className="card-image relative w-full aspect-[3/5] bg-white rounded-[2rem] shadow-2xl transform transition-transform duration-500 border-[6px] border-rose-100 flex flex-col overflow-hidden">
                  <div className="h-full w-full bg-slate-50 relative p-3 flex flex-col gap-3">
                    <div className="w-full h-24 bg-rose-50 rounded-xl" />
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-rose-100/50" />
                      <div className="flex-1 flex flex-col gap-1 justify-center">
                        <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
                        <div className="w-1/2 h-1.5 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map(i => <div key={i} className="bg-white rounded-lg shadow-sm" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Speed */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#fefce8] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all border border-yellow-100 cursor-pointer">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-yellow-600 mb-4">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-mono text-xl font-bold text-[var(--landing-text)] mb-2">
                Αστραπιαία Ταχύτητα
              </h3>
              <p className="font-sans text-sm text-[var(--landing-text)]/80">
                Core Web Vitals Optimized. Γιατί κανείς δεν περιμένει.
              </p>
            </div>
            <div className="card-image absolute right-[-10px] bottom-[-10px]">
              <Rocket className="w-24 h-24 text-yellow-500/10 transform rotate-45 group-hover:rotate-12 transition-transform duration-700" />
            </div>
          </div>

          {/* 4. Support */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#f3e8ff] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all border border-purple-100 cursor-pointer">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-4">
                <Headset size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-mono text-xl font-bold text-[var(--landing-text)] mb-2">
                Τεχνική Υποστήριξη
              </h3>
              <p className="font-sans text-sm text-[var(--landing-text)]/80">
                Δίπλα σας και μετά την παράδοση. Ασφάλεια 24/7.
              </p>
            </div>
            <div className="card-image absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
          </div>

          {/* 5. Custom Dev */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#ecfeff] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all border border-cyan-100 cursor-pointer">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-cyan-600 mb-4">
                <Code2 size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-mono text-xl font-bold text-[var(--landing-text)] mb-2">
                Custom Εφαρμογές
              </h3>
              <p className="font-sans text-sm text-[var(--landing-text)]/80">
                Εξειδικευμένες λύσεις λογισμικού για εσάς.
              </p>
            </div>
            <div className="card-image absolute right-0 bottom-0 opacity-10">
              <pre className="text-[8px] leading-tight text-cyan-800 p-2 font-mono">
                {`function Init() {
  return "Success";
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

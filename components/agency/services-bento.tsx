"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  Smartphone,
  Search,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  ShoppingCart,
  Headset,
  Code2,
  CreditCard,
  Lock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".bento-card");

      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 container px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-(--deep-space-blue-900) mb-6">
            Υπηρεσίες που{" "}
            <span className="text-(--blue-green-600)">Ξεχωρίζουν</span>
          </h2>
          <p className="text-xl text-(--deep-space-blue-900) max-w-2xl mx-auto">
            Ολοκληρωμένες λύσεις για την ψηφιακή σας ανάπτυξη, από τον σχεδιασμό
            μέχρι την υποστήριξη.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. SEO - Large Card (Top Left) */}
          <div className="bento-card group col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6">
                  <Search size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-(--deep-space-blue-900) mb-4">
                  Κυριαρχία στην Google (SEO)
                </h3>
                <p className="text-lg text-(--deep-space-blue-900) leading-relaxed max-w-md">
                  Στρατηγικές SEO που φέρνουν την ιστοσελίδα σας στην πρώτη
                  σελίδα. Αυξήστε την οργανική επισκεψιμότητα και κερδίστε
                  πελάτες χωρίς διαφημίσεις.
                </p>
              </div>
              <div className="mt-8">
                <button className="flex items-center gap-2 text-blue-700 font-bold group-hover:gap-4 transition-all">
                  Μάθετε περισσότερα <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
            {/* Decoration: Browser Window with Graph */}
            <div className="absolute right-[-20px] bottom-[-40px] md:right-[-40px] md:bottom-[-60px] opacity-20 md:opacity-100 transition-transform group-hover:scale-105 duration-500">
              <div className="relative w-80 h-64 bg-white rounded-t-2xl shadow-xl border border-blue-100 overflow-hidden">
                <div className="bg-blue-50 px-4 py-3 flex items-center gap-2 border-b border-blue-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="p-6 relative">
                  <div className="w-full h-32 bg-gradient-to-t from-blue-50 to-transparent rounded-lg relative overflow-hidden">
                    {/* CSS Graph */}
                    <svg
                      viewBox="0 0 100 40"
                      className="w-full h-full absolute bottom-0 left-0 text-blue-500 fill-current opacity-20"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,40 L10,35 L20,38 L30,25 L40,30 L50,15 L60,20 L70,10 L80,15 L90,5 L100,0 V40 H0 Z" />
                    </svg>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end gap-2">
                      <div className="w-4 h-10 bg-blue-200 rounded-t-sm" />
                      <div className="w-4 h-16 bg-blue-300 rounded-t-sm" />
                      <div className="w-4 h-12 bg-blue-200 rounded-t-sm" />
                      <div className="w-4 h-20 bg-blue-400 rounded-t-sm" />
                      <div className="w-4 h-14 bg-blue-200 rounded-t-sm" />
                      <div className="w-4 h-24 bg-blue-500 rounded-t-sm shadow-lg shadow-blue-500/30" />
                      <div className="w-4 h-18 bg-blue-300 rounded-t-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Responsive Design - Tall Card (Top Right) */}
          <div className="bento-card group col-span-1 md:col-span-1 row-span-2 bg-[#fff1f2] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-500 mb-6">
                <Smartphone size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-(--deep-space-blue-900) mb-4">
                Responsive & Modern
              </h3>
              <p className="text-(--deep-space-blue-900) mb-8">
                Σχεδιασμός που μαγνητίζει και προσαρμόζεται άψογα σε κινητά,
                tablets και desktops.
              </p>
              <div className="mt-auto flex justify-center">
                <div className="relative w-full aspect-[3/5] bg-white rounded-[2rem] shadow-xl transform group-hover:translate-y-[-10px] transition-transform duration-500 border-[6px] border-rose-100 flex flex-col overflow-hidden">
                  <div className="h-full w-full bg-slate-50 relative p-3 flex flex-col gap-3">
                    {/* Abstract Mobile UI */}
                    <div className="w-full h-24 bg-rose-50 rounded-xl" />
                    <div className="flex gap-2">
                      <div className="w-12 h-12 rounded-full bg-rose-100/50" />
                      <div className="flex-1 flex flex-col gap-1 justify-center">
                        <div className="w-3/4 h-2 bg-slate-200 rounded-full" />
                        <div className="w-1/2 h-2 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-lg shadow-sm" />
                      <div className="bg-white rounded-lg shadow-sm" />
                      <div className="bg-white rounded-lg shadow-sm" />
                      <div className="bg-white rounded-lg shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Speed - Standard Card */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#fefce8] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-yellow-600 mb-4">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-(--deep-space-blue-900) mb-2">
                Αστραπιαία Ταχύτητα
              </h3>
              <p className="text-sm text-(--deep-space-blue-900)">
                Core Web Vitals Optimized. Γιατί κανείς δεν περιμένει.
              </p>
            </div>
            <div className="absolute right-[-10px] bottom-[-10px]">
              <Rocket className="w-24 h-24 text-yellow-500/10 transform rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </div>
          </div>

          {/* 4. E-commerce - Standard Card [NEW] */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#fdf2f8] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-pink-600 mb-4">
                <ShoppingCart size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-(--deep-space-blue-900) mb-2">
                E-shop & Πωλήσεις
              </h3>
              <p className="text-sm text-(--deep-space-blue-900)">
                Σύγχρονα ηλεκτρονικά καταστήματα, σχεδιασμένα για μετατροπές.
              </p>
            </div>
            <div className="absolute right-[-10px] bottom-[-10px] flex gap-1 transform rotate-[-10deg] opacity-20">
              <div className="bg-pink-300 w-12 h-8 rounded-md" />
              <div className="bg-pink-400 w-12 h-8 rounded-md translate-y-2" />
            </div>
            <CreditCard className="absolute right-[-5px] bottom-[-5px] w-24 h-24 text-pink-500/10 rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* 5. Support - Standard Card [NEW] */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#f3e8ff] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-4">
                <Headset size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-(--deep-space-blue-900) mb-2">
                Τεχνική Υποστήριξη
              </h3>
              <p className="text-sm text-(--deep-space-blue-900)">
                Δίπλα σας και μετά την παράδοση. Ασφάλεια ότι όλα λειτουργούν
                ρολόι.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
          </div>

          {/* 6. Security - Wide (Bottom) */}
          <div className="bento-card group col-span-1 md:col-span-2 bg-[#f0fdf4] rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-green-600 mb-4">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-(--deep-space-blue-900) mb-2">
                Ασφάλεια & Hosting
              </h3>
              <p className="text-(--deep-space-blue-900)">
                Πιστοποιητικά SSL, καθημερινά backups και hosting σε ταχύτατους
                servers για μέγιστη ασφάλεια και uptime 99.9%.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center relative z-10">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100 w-full max-w-[200px]">
                <div className="flex items-center gap-2 text-green-700 font-bold mb-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />{" "}
                  System Secure
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Lock size={12} className="text-green-600" />
                    <div className="h-1.5 flex-1 bg-green-50 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-green-500 rounded-full" />
                    </div>
                  </div>
                  <div className="bg-green-50 p-2 rounded-lg text-[10px] text-green-800 font-mono">
                    Zero threats detected
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Custom Dev - Standard Card [NEW] */}
          <div className="bento-card group col-span-1 md:col-span-1 bg-[#ecfeff] rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-cyan-600 mb-4">
                <Code2 size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-(--deep-space-blue-900) mb-2">
                Custom Εφαρμογές
              </h3>
              <p className="text-sm text-(--deep-space-blue-900)">
                Εξειδικευμένες λύσεις λογισμικού για τις μοναδικές ανάγκες της
                επιχείρησής σας.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
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

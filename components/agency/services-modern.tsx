"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-setup";
import { 
  Zap, 
  Users, 
  ShieldAlert, 
  ArrowUpRight, 
  Search, 
  Smartphone, 
  Rocket, 
  ShoppingCart, 
  Code2, 
  Lock 
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionReveal } from "@/components/animations/section-reveal";

const businessBenefits = [
  {
    title: "Κύρος & Εμπιστοσύνη",
    description: "Μια ψηφιακή παρουσία που εμπνέει ασφάλεια και σιγουριά από το πρώτο δευτερόλεπτο.",
    icon: ShieldAlert,
    tag: "Trust",
  },
  {
    title: "Στοχευμένο Κοινό",
    description: "Προσελκύστε πελάτες που εκτιμούν την ποιότητα και το επίπεδο των υπηρεσιών σας.",
    icon: Users,
    tag: "Targeting",
  },
  {
    title: "Ψηφιακή Αυθεντία",
    description: "Αναδείξτε την εμπειρία σας και εδραιώστε τη θέση σας ως ηγέτης στον κλάδο σας.",
    icon: Zap,
    tag: "Authority",
  },
];

const technicalArsenal = [
  {
    title: "Κυριαρχία SEO",
    description: "Στρατηγική εμφάνιση στην πρώτη σελίδα της Google.",
    icon: Search,
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-600",
    size: "large",
  },
  {
    title: "Mobile First",
    description: "Άψογη εμπειρία σε κάθε οθόνη.",
    icon: Smartphone,
    color: "from-rose-500/10 to-transparent",
    iconColor: "text-rose-600",
  },
  {
    title: "Performance",
    description: "Ταχύτητα που δεν αφήνει περιθώρια αναμονής.",
    icon: Rocket,
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-600",
  },
  {
    title: "E-commerce",
    description: "Σχεδιασμός εστιασμένος στις πωλήσεις.",
    icon: ShoppingCart,
    color: "from-pink-500/10 to-transparent",
    iconColor: "text-pink-600",
  },
  {
    title: "Custom Dev",
    description: "Λύσεις κομμένες και ραμμένες στα μέτρα σας.",
    icon: Code2,
    color: "from-cyan-500/10 to-transparent",
    iconColor: "text-cyan-600",
  },
  {
    title: "Security",
    description: "Απόλυτη προστασία και αξιοπιστία.",
    icon: Lock,
    color: "from-green-500/10 to-transparent",
    iconColor: "text-green-600",
    size: "wide",
  },
];

export function ServicesModern() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 3D Card Effect with smoother interpolation
      const arsenalCards = gsap.utils.toArray<HTMLElement>(".arsenal-card");
      arsenalCards.forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xc = rect.width / 2;
          const yc = rect.height / 2;
          const dx = x - xc;
          const dy = y - yc;

          gsap.to(card, {
            rotateY: dx / 15,
            rotateX: -dy / 15,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-32 md:py-56 overflow-hidden bg-[var(--landing-bg)]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00000005_1.5px,transparent:1.5px)] [background-size:48px_48px] opacity-70" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-32 md:mb-48">
          <SectionReveal>
            <span className="inline-block py-2 px-5 mb-10 text-[10px] font-black tracking-[0.5em] uppercase text-[var(--landing-primary)] bg-[var(--landing-primary)]/5 border border-[var(--landing-primary)]/10 rounded-full">
              The Mastery
            </span>
          </SectionReveal>
          
          <h2 className="font-mono text-5xl md:text-[6rem] font-bold text-[var(--landing-text)] mb-10 tracking-tighter leading-[0.85]">
            <TextReveal type="words" className="inline-block">Η Ιστοσελίδα σας,</TextReveal> <br />
            <TextReveal 
              type="words" 
              className="inline-block bg-linear-to-r from-[var(--landing-primary)] via-[var(--landing-secondary)] to-[var(--landing-primary)] bg-clip-text text-transparent italic font-light"
              delay={0.2}
            >
              ο Κορυφαίος Σύμμαχός σας.
            </TextReveal>
          </h2>
          
          <SectionReveal delay={0.4}>
            <p className="font-sans text-xl md:text-3xl text-[var(--landing-text)] font-light max-w-2xl mx-auto leading-relaxed">
              Δεν φτιάχνουμε απλώς &quot;sites&quot;. Δημιουργούμε ψηφιακά εργαλεία ανάπτυξης που λειτουργούν για εσάς 24/7.
            </p>
          </SectionReveal>
        </div>

        {/* Benefits Section */}
        <div className="mb-48">
          <SectionReveal className="flex items-center gap-6 mb-16 opacity-30">
            <div className="h-[1px] flex-1 bg-[var(--landing-text)]/20" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] font-black">Business Value</span>
            <div className="h-[1px] flex-1 bg-[var(--landing-text)]/20" />
          </SectionReveal>
          
          <div className="benefits-grid grid gap-10 md:grid-cols-3">
            {businessBenefits.map((benefit, index) => (
              <SectionReveal 
                key={index} 
                delay={index * 0.1}
                className="h-full"
              >
                <Card 
                  className="benefit-card group relative p-12 bg-white/40 backdrop-blur-xl border-white/20 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[var(--landing-primary)]/5 transition-all duration-700 border-none overflow-hidden h-full"
                >
                  <div className="relative z-10">
                    <div className="h-16 w-16 rounded-2xl bg-[var(--landing-primary)]/5 flex items-center justify-center text-[var(--landing-primary)] mb-10 group-hover:bg-[var(--landing-primary)] group-hover:text-white group-hover:scale-110 transition-all duration-700">
                      <benefit.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-mono text-2xl font-bold text-[var(--landing-text)] mb-6 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-lg text-[var(--landing-text)] leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Arsenal Section */}
        <div>
          <SectionReveal className="flex items-center gap-6 mb-16 opacity-30">
            <div className="h-[1px] flex-1 bg-[var(--landing-text)]/20" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] font-black">Technical Arsenal</span>
            <div className="h-[1px] flex-1 bg-[var(--landing-text)]/20" />
          </SectionReveal>

          <div className="arsenal-grid grid grid-cols-1 md:grid-cols-4 gap-8 perspective-[1000px]">
            {technicalArsenal.map((item, index) => (
              <SectionReveal
                key={index}
                delay={index * 0.05}
                className={cn(
                  "h-full",
                  item.size === "large" && "md:col-span-2 md:row-span-2",
                  item.size === "wide" && "md:col-span-2"
                )}
              >
                <div
                  className={cn(
                    "arsenal-card group relative p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-slate-100/50 shadow-sm transition-all duration-500 overflow-hidden h-full"
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", item.color)} />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className={cn("h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", item.iconColor)}>
                        <item.icon size={28} />
                      </div>
                      <h4 className={cn("font-mono font-bold text-[var(--landing-text)] mb-4 transition-colors duration-500 tracking-tight", item.size === "large" ? "text-4xl" : "text-2xl")}>
                        {item.title}
                      </h4>
                                          <p className="font-sans text-[var(--landing-text)] text-base md:text-lg font-light leading-relaxed">
                                            {item.description}
                                          </p>
                      
                    </div>
                    
                    {item.size === "large" && (
                      <div className="mt-12 pt-8 border-t border-slate-100">
                        <Link 
                          href="#contact"
                          className="flex items-center gap-3 text-[var(--landing-primary)] font-black text-xs uppercase tracking-[0.2em] font-mono group/btn"
                        >
                          Explore Strategy <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1] transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

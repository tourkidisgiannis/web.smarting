"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap-setup";
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
  Lock,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionReveal } from "@/components/animations/section-reveal";

const businessBenefits = [
  {
    key: "trust",
    title: "Κύρος & Εμπιστοσύνη",
    description:
      "Μια ψηφιακή παρουσία που εμπνέει ασφάλεια και σιγουριά από το πρώτο δευτερόλεπτο.",
    icon: ShieldAlert,
    tag: "Trust",
  },
  {
    key: "targeting",
    title: "Στοχευμένο Κοινό",
    description:
      "Προσελκύστε πελάτες που εκτιμούν την ποιότητα και το επίπεδο των υπηρεσιών σας.",
    icon: Users,
    tag: "Targeting",
  },
  {
    key: "authority",
    title: "Ψηφιακή Αυθεντία",
    description:
      "Αναδείξτε την εμπειρία σας και εδραιώστε τη θέση σας ως ηγέτης στον κλάδο σας.",
    icon: Zap,
    tag: "Authority",
  },
];

const technicalArsenal = [
  {
    key: "seo",
    title: "Κυριαρχία SEO",
    description: "Στρατηγική εμφάνιση στην πρώτη σελίδα της Google.",
    icon: Search,
    href: "/services/seo",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-600",
    size: "large",
  },
  {
    key: "mobile",
    title: "Mobile First",
    description: "Άψογη εμπειρία σε κάθε οθόνη.",
    icon: Smartphone,
    href: "/services/mobile-first",
    color: "from-rose-500/10 to-transparent",
    iconColor: "text-rose-600",
  },
  {
    key: "performance",
    title: "Performance",
    description: "Ταχύτητα που δεν αφήνει περιθώρια αναμονής.",
    icon: Rocket,
    href: "/services/performance",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-600",
  },
  {
    key: "commerce",
    title: "E-commerce",
    description: "Σχεδιασμός εστιασμένος στις πωλήσεις.",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    color: "from-pink-500/10 to-transparent",
    iconColor: "text-pink-600",
  },
  {
    key: "custom-dev",
    title: "Custom Dev",
    description: "Λύσεις κομμένες και ραμμένες στα μέτρα σας.",
    icon: Code2,
    href: "/services/custom-dev",
    color: "from-cyan-500/10 to-transparent",
    iconColor: "text-cyan-600",
  },
  {
    key: "security",
    title: "Security",
    description: "Απόλυτη προστασία και αξιοπιστία.",
    icon: Lock,
    href: "/services/security",
    color: "from-green-500/10 to-transparent",
    iconColor: "text-green-600",
    size: "wide",
  },
];

function renderServiceOrnament(
  key: string,
  className: string,
  variant: "a" | "b",
) {
  const shared = {
    className: cn(
      "service-ornament absolute opacity-20",
      variant === "a" ? "service-ornament--a" : "service-ornament--b",
      className,
    ),
    viewBox: "0 0 120 120",
    fill: "none",
  };

  switch (key) {
    case "trust":
      return (
        <svg {...shared}>
          <path
            d="M60 14c18 10 30 10 46 14v30c0 26-18 39-46 48-28-9-46-22-46-48V28c16-4 28-4 46-14z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M44 60l10 10 22-22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "targeting":
      return (
        <svg {...shared}>
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="6" stroke="currentColor" strokeWidth="2" />
          <path
            d="M60 20v18M60 82v18M20 60h18M82 60h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "authority":
      return (
        <svg {...shared}>
          <path
            d="M20 72l12-20 16 18 20-34 12 20 20-36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="18"
            y="80"
            width="84"
            height="10"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "seo":
      return (
        <svg {...shared}>
          <circle cx="52" cy="52" r="28" stroke="currentColor" strokeWidth="2" />
          <path
            d="M72 72l20 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M36 52h32M52 36v32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mobile":
      return (
        <svg {...shared}>
          <rect
            x="36"
            y="16"
            width="48"
            height="88"
            rx="14"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="60" cy="88" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M44 34h32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "performance":
      return (
        <svg {...shared}>
          <path
            d="M20 70c8-22 26-36 40-36s32 14 40 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M60 60l18-18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="60" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "commerce":
      return (
        <svg {...shared}>
          <path
            d="M28 36h64l-6 40H34l-6-40z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M44 36l8-16h16l8 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="46" cy="88" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="78" cy="88" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "custom-dev":
      return (
        <svg {...shared}>
          <path
            d="M44 40L26 60l18 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M76 40l18 20-18 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54 82l12-44"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "security":
      return (
        <svg {...shared}>
          <rect
            x="30"
            y="54"
            width="60"
            height="40"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M42 54v-8c0-10 8-18 18-18s18 8 18 18v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="74" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}

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
    { scope: containerRef },
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
            <TextReveal type="words" className="inline-block">
              Η Ιστοσελίδα σας,
            </TextReveal>{" "}
            <br />
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
              Δεν φτιάχνουμε απλώς &quot;sites&quot;. Δημιουργούμε ψηφιακά
              εργαλεία ανάπτυξης που λειτουργούν για εσάς 24/7.
            </p>
          </SectionReveal>
        </div>

        {/* Benefits Section */}
        <div className="mb-48">
          <SectionReveal className="flex items-center gap-6 mb-16 opacity-30">
            <div className="h-[1px] flex-1 bg-[var(--landing-text)]/20" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] font-black">
              Business Value
            </span>
            <div className="h-[1px] flex-1 bg-[var(--landing-text)]/20" />
          </SectionReveal>

          <div className="benefits-grid grid gap-10 md:grid-cols-3">
            {businessBenefits.map((benefit, index) => (
              <SectionReveal key={index} delay={index * 0.1} className="h-full">
                <Card className="benefit-card group relative p-12 bg-white/40 backdrop-blur-xl border-white/20 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[var(--landing-primary)]/5 transition-all duration-700 border-none overflow-hidden h-full">
                  {renderServiceOrnament(
                    benefit.key,
                    "-top-6 -right-6 h-28 w-28 text-[var(--landing-primary)]",
                    index % 2 === 0 ? "a" : "b",
                  )}
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
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] font-black">
              Technical Arsenal
            </span>
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
                  item.size === "wide" && "md:col-span-2",
                )}
              >
                <div
                  className={cn(
                    "arsenal-card group relative p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-slate-100/50 shadow-sm transition-all duration-500 overflow-hidden h-full",
                  )}
                >
                  {renderServiceOrnament(
                    item.key,
                    cn("-bottom-8 -left-6 h-32 w-32", item.iconColor),
                    index % 2 === 0 ? "b" : "a",
                  )}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                      item.color,
                    )}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div
                        className={cn(
                          "h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500",
                          item.iconColor,
                        )}
                      >
                        <item.icon size={28} />
                      </div>
                      <h4
                        className={cn(
                          "font-mono font-bold text-[var(--landing-text)] mb-4 transition-colors duration-500 tracking-tight",
                          item.size === "large" ? "text-4xl" : "text-2xl",
                        )}
                      >
                        {item.title}
                      </h4>
                      <p className="font-sans text-[var(--landing-text)] text-base md:text-lg font-light leading-relaxed">
                        {item.description}
                      </p>
                      {item.href && (
                        <Link
                          href={item.href}
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--landing-primary)]/20 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[var(--landing-text)] transition-transform hover:-translate-y-0.5"
                        >
                          Δείτε λεπτομέρειες
                          <ArrowUpRight size={14} />
                        </Link>
                      )}
                    </div>

                    {item.size === "large" && (
                      <div className="mt-12 pt-8 border-t border-slate-100">
                        <Link
                          href={item.href || "/#contact"}
                          className="flex items-center gap-3 text-[var(--landing-primary)] font-black text-xs uppercase tracking-[0.2em] font-mono group/btn"
                        >
                          Δείτε την υπηρεσία
                          <ArrowUpRight
                            size={18}
                            className="group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1] transition-transform"
                          />
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

      <style jsx>{`
        .service-ornament {
          pointer-events: none;
          will-change: transform, opacity;
        }
        .service-ornament--a {
          animation:
            floatA 7s ease-in-out infinite,
            pulseA 6s ease-in-out infinite;
        }
        .service-ornament--b {
          animation:
            floatB 9s ease-in-out infinite,
            pulseB 7.5s ease-in-out infinite;
        }
        @keyframes floatA {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(6px, -8px, 0) rotate(6deg);
          }
        }
        @keyframes floatB {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(-6px, 10px, 0) rotate(-5deg);
          }
        }
        @keyframes pulseA {
          0%,
          100% {
            opacity: 0.14;
            filter: blur(0px);
          }
          50% {
            opacity: 0.28;
            filter: blur(0.2px);
          }
        }
        @keyframes pulseB {
          0%,
          100% {
            opacity: 0.12;
            filter: blur(0px);
          }
          50% {
            opacity: 0.24;
            filter: blur(0.3px);
          }
        }
      `}</style>
    </section>
  );
}

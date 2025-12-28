"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Monitor,
  Smartphone,
  Zap,
  Search,
  Eye,
  Heart,
  Users,
  Shield,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    title: "Χαμένη Εμπιστοσύνη",
    description: "Η ιστοσελίδα σας δεν καταφέρνει να εμπνεύσει εμπιστοσύνη από την πρώτη στιγμή.",
    icon: Heart,
  },
  {
    title: "Λανθασμένο Κοινό",
    description: "Προσελκύετε τύπους που δεν ταιριάζουν με το επίπεδό σας και τις υπηρεσίες σας.",
    icon: Users,
  },
  {
    title: "Συνεχής Πειθώ",
    description: "Χρειάζεται να πείθετε συνεχώς για την αξία της δουλειάς σας.",
    icon: Zap,
  },
  {
    title: "Κίνδυνος Φήμης",
    description: "Η online παρουσία σας δεν ανταποκρίνεται στο επίπεδο της πραγματικής δουλειάς σας.",
    icon: Shield,
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
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Entrance
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 70,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
        });

        // 3D Tilt Effect - Only on Desktop
        mm.add("(min-width: 1024px)", () => {
          const handleCardMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            gsap.to(card, {
              rotateY: x * 15,
              rotateX: -y * 15,
              transformPerspective: 1000,
              duration: 0.5,
              ease: "power2.out",
            });
          };

          const handleCardMouseLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.3)",
            });
          };

          card.addEventListener("mousemove", handleCardMouseMove);
          card.addEventListener("mouseleave", handleCardMouseLeave);

          return () => {
            card.removeEventListener("mousemove", handleCardMouseMove);
            card.removeEventListener("mouseleave", handleCardMouseLeave);
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
      className="relative z-20 min-h-screen"
    >
      <div className="py-24 md:py-32">
        <div className="container">
          <div ref={headerRef} className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-(--deep-space-blue-900)">
              Όταν η ιστοσελίδα δεν βοηθά, σας κοστίζει
            </h2>
            <p className="mt-6 text-(--deep-space-blue-700) text-lg md:text-xl leading-relaxed">
              Ακόμη και μια «απλή» ιστοσελίδα μπορεί να λειτουργεί εναντίον σας.
              Αν η online παρουσία σας:
            </p>
            <ul className="mt-4 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed list-disc list-inside space-y-2">
              <li>Δεν σας κάνει να φαίνεστε όσο σοβαρός είστε</li>
              <li>Δεν προσελκύει τους πελάτες που θέλετε</li>
              <li>Δημιουργεί αμφιβολία από την πρώτη επαφή</li>
            </ul>
            <p className="mt-4 text-[var(--deep-space-blue-700)] text-lg md:text-xl leading-relaxed">
              τότε χάνετε ευκαιρίες χωρίς να το καταλαβαίνετε.
            </p>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[var(--deep-space-blue-900)] mb-4">
              Λιγότερη αμφιβολία = περισσότερες σωστές επαφές.
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--blue-green-400)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <Card className="relative h-full border-[var(--sky-blue-light-200)] bg-white shadow-[var(--sky-blue-light-200)]/50 p-6 transition-all group-hover:shadow-[var(--blue-green-300)]/30 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 inline-flex h-12 w-12 items-center justify-center bg-[var(--blue-green-100)] text-[var(--blue-green-600)] group-hover:scale-110 group-hover:bg-[var(--blue-green-500)] group-hover:text-white transition-all duration-500">
                      <problem.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--deep-space-blue-900)] group-hover:text-[var(--blue-green-600)] transition-colors duration-300 mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[var(--deep-space-blue-700)] group-hover:text-[var(--deep-space-blue-800)] transition-colors">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

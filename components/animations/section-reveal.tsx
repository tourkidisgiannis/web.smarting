"use client";

import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  ease?: string;
  trigger?: "onLoad" | "onScroll";
}

export function SectionReveal({
  children,
  className,
  delay = 0.1,
  duration = 1,
  y = 40,
  opacity = 0,
  scale = 0.95,
  ease = "power4.out",
  trigger = "onScroll",
}: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const animation = {
        y,
        opacity,
        scale,
        duration,
        ease,
        delay,
      };

      if (trigger === "onScroll") {
        gsap.from(containerRef.current, {
          ...animation,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.from(containerRef.current, {
          ...animation,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}

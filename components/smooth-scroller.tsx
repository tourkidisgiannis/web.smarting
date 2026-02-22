"use client";

import { ReactNode, useRef, useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-setup";

interface SmoothScrollerProps {
  children: ReactNode;
}

export function SmoothScroller({ children }: SmoothScrollerProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href*="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle both "#section" and "/#section"
      const isHomePage = window.location.pathname === "/";
      const isHashLink = href.startsWith("#") || (href.startsWith("/#") && isHomePage);

      if (!isHashLink) return;

      const targetId = href.split("#")[1];
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);

      if (!(targetElement instanceof HTMLElement)) return;
      if (!lenisRef.current) return;

      e.preventDefault();

      lenisRef.current.scrollTo(targetElement, {
        offset: -80,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}

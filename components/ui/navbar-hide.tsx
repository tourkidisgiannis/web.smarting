"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface NavbarHideProps {
  children: React.ReactNode;
}

export function NavbarHide({ children }: NavbarHideProps) {
  const navbarRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const tl = gsap.timeline({ paused: true });

    // Improved animation to hide navbar with smoother transitions
    tl.to(navbar, {
      y: -100,
      duration: 0.4,
      ease: "power2.out",
      opacity: 0.8,
      scale: 0.98,
      onComplete: () => {
        navbar.style.visibility = 'hidden';
      },
      onReverseComplete: () => {
        navbar.style.visibility = 'visible';
      }
    });

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide navbar
          if (tl.progress() < 1) tl.play();
        } else if (currentScrollY < lastScrollY && currentScrollY > 10) {
          // Scrolling up - show navbar
          if (tl.progress() > 0) tl.reverse();
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    // Add scroll event listener with passive option
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial setup
    navbar.style.visibility = 'visible';

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--sky-blue-light-200)] transition-all duration-300"
    >
      {children}
    </header>
  );
}
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
    let isScrolling = false;

    const tl = gsap.timeline({ paused: true });

    // Animation to hide navbar
    tl.to(navbar, {
      y: -100,
      duration: 0.5,
      ease: "power2.inOut",
      opacity: 0,
    });

    const handleScroll = () => {
      if (isScrolling) return;
      isScrolling = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide navbar
          tl.play();
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          tl.reverse();
        }

        lastScrollY = currentScrollY;
        isScrolling = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill();
    };
  }, []);

  return (
    <header ref={navbarRef} className="sticky top-0 z-50 transition-transform duration-300">
      {children}
    </header>
  );
}
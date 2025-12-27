"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export function MagneticLink({ children, href, className = "", onClick }: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = link.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Apply magnetic effect with GSAP for smooth animation
      gsap.to(link, {
        x: x * 0.15, // Adjust the multiplier to control the magnetic strength
        y: y * 0.15,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const handleMouseLeave = () => {
      // Reset to original position when mouse leaves
      gsap.to(link, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
        overwrite: "auto"
      });
    };

    link.addEventListener("mousemove", handleMouseMove);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mousemove", handleMouseMove);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={linkRef}
      href={href}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
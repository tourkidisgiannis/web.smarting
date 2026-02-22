"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string; icon: React.ElementType }[];
}

export function MobileMenuOverlay({
  isOpen,
  onClose,
  navItems,
}: MobileMenuOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      }).from(
        ".nav-link",
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.1"
      );

      if (isOpen) {
        gsap.set(containerRef.current, { display: "block" });
        tl.play();
      } else {
        tl.reverse().then(() => {
          gsap.set(containerRef.current, { display: "none" });
        });
      }
    },
    { scope: containerRef, dependencies: [isOpen] }
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg"
      style={{ display: "none", opacity: 0 }}
    >
      <div className="container h-full mx-auto">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[var(--landing-text)] hover:bg-[var(--landing-bg)]"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex h-full items-center justify-center -mt-16">
          <nav ref={navRef} className="flex flex-col space-y-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="nav-link font-mono cursor-pointer py-2 text-4xl font-black text-[var(--landing-text)] transition-colors hover:text-[var(--landing-primary)] text-center tracking-tight flex items-center justify-center gap-4"
                >
                  <IconComponent className="h-8 w-8" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

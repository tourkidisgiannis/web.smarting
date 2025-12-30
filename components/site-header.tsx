"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { NavbarHide } from "@/components/ui/navbar-hide";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { href: "/#services", label: "Υπηρεσίες" },
  { href: "/#ui-ux", label: "Λύσεις" },
  { href: "/#why-matters", label: "Γιατί" },
  { href: "/#clients-see", label: "Πελάτες" },
  { href: "/#who-we-are", label: "Ποιοι Είμαστε" },
  { href: "/#demos", label: "Παραδείγματα" },
  { href: "/#contact", label: "Επικοινωνία" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <NavbarHide>
      <header
        className="w-full border-b border-(--sky-blue-light-200) bg-white"
        style={{
          animation: hasLoaded ? "fadeInUp 0.6s ease-out forwards" : "none",
          opacity: hasLoaded ? 1 : 0,
          transform: hasLoaded ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="flex h-14 items-center justify-between px-4 md:px-8">
          <Logo width={300} height={15} priority />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex  gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <MagneticLink
                key={item.href}
                href={item.href}
                className="relative group cursor-pointer text-(--deep-space-blue-700) transition-colors hover:text-(--blue-green-600)"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 -z-10 rounded-full bg-(--blue-green-500) opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" />
              </MagneticLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className={`md:hidden text-(--deep-space-blue-700) transition-transform duration-300 hover:bg-(--sky-blue-light-100) ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden overflow-hidden border-b border-(--sky-blue-light-200) bg-white"
            style={{
              animation:
                "slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
          >
            <nav className="container flex flex-col space-y-3 py-5">
              {navItems.map((item) => (
                <MagneticLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative cursor-pointer py-3 text-base font-medium text-(--deep-space-blue-700) transition-colors hover:text-(--blue-green-600)"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-(--blue-green-500) transition-transform duration-300 group-hover:scale-x-100" />
                </MagneticLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </NavbarHide>
  );
}

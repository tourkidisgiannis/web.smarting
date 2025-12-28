"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { NavbarHide } from "@/components/ui/navbar-hide";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    setHasLoaded(true);
  }, []);

  return (
    <NavbarHide>
      <div
        className="w-full border-b border-[var(--sky-blue-light-200)] bg-white"
        style={{
          animation: hasLoaded ? 'fadeInUp 0.6s ease-out forwards' : 'none',
          opacity: hasLoaded ? 1 : 0,
          transform: hasLoaded ? 'translateY(0)' : 'translateY(-20px)'
        }}
      >
        <div className="container flex h-14 items-center justify-between">
          {/* Logo - Visible on all screens */}
          <div className="flex items-center gap-2">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold font-bbh-bartle inline-block bg-linear-to-r from-[var(--blue-green-600)] to-[var(--deep-space-blue-500)] bg-clip-text text-transparent">
                web.smarting.gr
              </span>
            </Link>
          </div>

          {/* Desktop Nav - Now at the end (right side) with enhanced animations */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <nav className="flex items-center space-x-6">
              <MagneticLink
                href="/#services"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Πρόβλημα</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
              <MagneticLink
                href="/#ui-ux"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Οφέλη</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
              <MagneticLink
                href="/#why-matters"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Σημασία</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
              <MagneticLink
                href="/#clients-see"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Αποτελέσματα</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
              <MagneticLink
                href="/#who-we-are"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Ποιοι Είμαστε</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
              <MagneticLink
                href="/#demos"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Παραδείγματα</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
              <MagneticLink
                href="/#contact"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Επικοινωνία</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-all duration-500 -z-10 scale-75 group-hover:scale-100"></span>
              </MagneticLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              className={`md:hidden text-[var(--deep-space-blue-700)] hover:bg-[var(--sky-blue-light-100)] transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              size="icon"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 transition-all duration-300" />
              ) : (
                <Menu className="h-5 w-5 transition-all duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden border-b border-[var(--sky-blue-light-200)] bg-white overflow-hidden"
            style={{
              animation: 'slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
          >
            <div className="container py-5 flex flex-col space-y-3">
              <MagneticLink
                href="/#services"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Πρόβλημα</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
              <MagneticLink
                href="/#ui-ux"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Οφέλη</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
              <MagneticLink
                href="/#why-matters"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Σημασία</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
              <MagneticLink
                href="/#clients-see"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Αποτελέσματα</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
              <MagneticLink
                href="/#who-we-are"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Ποιοι Είμαστε</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
              <MagneticLink
                href="/#demos"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Παραδείγματα</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
              <MagneticLink
                href="/#contact"
                className="text-base font-medium py-3 transition-all duration-300 hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Επικοινωνία</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--blue-green-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </MagneticLink>
            </div>
          </div>
        )}
      </div>
    </NavbarHide>
  );
}

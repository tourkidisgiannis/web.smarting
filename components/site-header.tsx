"use client";

import { useState } from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { NavbarHide } from "@/components/ui/navbar-hide";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <NavbarHide>
      <div className="w-full border-b border-[var(--sky-blue-light-200)] bg-white">
        <div className="container flex h-14 items-center justify-between">
          {/* Logo - Visible on all screens */}
          <div className="flex items-center gap-2">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold font-bbh-bartle inline-block bg-gradient-to-r from-[var(--blue-green-600)] to-[var(--deep-space-blue-500)] bg-clip-text text-transparent">
                web2.smarting.gr
              </span>
            </Link>
          </div>

          {/* Desktop Nav - Now at the end (right side) with floating effect */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <nav className="flex items-center space-x-6">
              <MagneticLink
                href="/#services"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Υπηρεσίες</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 -z-10"></span>
              </MagneticLink>
              <MagneticLink
                href="/#demos"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Demos</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 -z-10"></span>
              </MagneticLink>
              <MagneticLink
                href="/#contact"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer relative group"
              >
                <span className="relative z-10">Επικοινωνία</span>
                <span className="absolute inset-0 bg-[var(--blue-green-500)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 -z-10"></span>
              </MagneticLink>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              className="md:hidden text-[var(--deep-space-blue-700)] hover:bg-[var(--sky-blue-light-100)]"
              size="icon"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-[var(--sky-blue-light-200)] bg-white">
            <div className="container py-4 flex flex-col space-y-4">
              <MagneticLink
                href="/#services"
                className="text-sm font-medium transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer"
                onClick={toggleMenu}
              >
                Υπηρεσίες
              </MagneticLink>
              <MagneticLink
                href="/#demos"
                className="text-sm font-medium transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer"
                onClick={toggleMenu}
              >
                Demos
              </MagneticLink>
              <MagneticLink
                href="/#contact"
                className="text-sm font-medium transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)] cursor-pointer"
                onClick={toggleMenu}
              >
                Επικοινωνία
              </MagneticLink>
            </div>
          </div>
        )}
      </div>
    </NavbarHide>
  );
}

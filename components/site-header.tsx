"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { NavbarHide } from "@/components/ui/navbar-hide";
import { Logo } from "@/components/ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import {
  Menu,
  Wrench,
  Palette,
  Heart,
  Users,
  User,
  Monitor,
  Mail,
} from "lucide-react";

const navItems = [
  { href: "/#services", label: "Υπηρεσίες", icon: Wrench },
  { href: "/#ui-ux", label: "Λύσεις", icon: Palette },
  { href: "/#why-matters", label: "Γιατί", icon: Heart },
  { href: "/#clients-see", label: "Πελάτες", icon: Users },
  { href: "/#demos", label: "Demos", icon: Monitor },
  { href: "/#contact", label: "Επικοινωνία", icon: Mail },
];

export function SiteHeader() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

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
          <Logo
            width={200}
            height={15}
            priority
            className="max-w-[80%] md:max-w-[300px]"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <MagneticLink
                key={item.href}
                href={item.href}
                className="relative group cursor-pointer text-(--deep-space-blue-700) transition-colors hover:text-(--blue-green-100)"
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className="
    absolute -inset-x-3 -inset-y-2
    rounded-full
    bg-[var(--blue-green-500)]
    opacity-0 scale-75
    transition-all duration-500
    group-hover:opacity-100
    group-hover:scale-100
   
  "
                />
              </MagneticLink>
            ))}
          </nav>

          {/* Mobile Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-(--deep-space-blue-700) hover:bg-(--sky-blue-light-100)"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 bg-gradient-to-br from-white to-(--sky-blue-light-50)"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="p-6 pt-16">
                <nav className="flex flex-col space-y-8">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="cursor-pointer py-4 text-3xl font-black text-(--deep-space-blue-900) transition-colors hover:text-(--blue-green-600) text-center tracking-tight flex items-center justify-center gap-4"
                        >
                          <IconComponent className="h-8 w-8" />
                          <span>{item.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </NavbarHide>
  );
}

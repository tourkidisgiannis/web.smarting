"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

import { Menu, Palette, Monitor, Mail } from "lucide-react";

const navItems = [
  { href: "/#ui-ux", label: "Λύσεις", icon: Palette },
  { href: "/#demos", label: "Demos", icon: Monitor },
  { href: "/#contact", label: "Επικοινωνία", icon: Mail },
];

const serviceLinks = [
  { href: "/services/seo", label: "Κυριαρχία SEO" },
  { href: "/services/mobile-first", label: "Mobile First" },
  { href: "/services/performance", label: "Performance" },
  { href: "/services/ecommerce", label: "E-commerce" },
  { href: "/services/custom-dev", label: "Custom Dev" },
  { href: "/services/security", label: "Security" },
];

export function SiteHeader() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const pathname = usePathname();
  const isDemoPage = pathname?.startsWith("/demos");

  useEffect(() => {
    // Check if component has mounted
    const timeout = setTimeout(() => {
      setHasLoaded(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  if (isDemoPage) return null;

  return (
    <NavbarHide>
      <header
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6"
        style={{
          animation: hasLoaded ? "fadeInUp 0.6s ease-out forwards" : "none",
          opacity: hasLoaded ? 1 : 0,
          transform: hasLoaded ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="relative flex h-14 md:h-16 w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-(--sky-blue-light-200) bg-white/85 px-5 md:px-8 backdrop-blur-md shadow-[0_10px_30px_rgba(12,26,75,0.12)]">
          <div className="flex items-center gap-4 z-10">
            <Logo
              width={200}
              height={15}
              priority
              className="max-w-[80%] md:max-w-[300px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold absolute left-1/2 -translate-x-1/2">
            <div className="relative group">
              <Link
                href="/#services"
                className="relative group inline-flex items-center gap-2 cursor-pointer text-(--deep-space-blue-700) transition-colors hover:text-(--blue-green-700)"
              >
                <span className="relative z-10 text-(--deep-space-blue-900)">
                  Υπηρεσίες
                </span>
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
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-[420px] -translate-x-1/2 rounded-[2rem] border border-(--sky-blue-light-200) bg-white/95 p-4 opacity-0 shadow-[0_20px_50px_rgba(12,26,75,0.18)] backdrop-blur-md transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 before:content-[''] before:absolute before:-top-6 before:left-0 before:right-0 before:h-6">
                <div className="grid grid-cols-2 gap-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-(--sky-blue-light-200) bg-white/80 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-(--deep-space-blue-900) transition-all hover:-translate-y-0.5 hover:border-(--blue-green-200) hover:text-(--blue-green-700) hover:shadow-[0_10px_24px_rgba(12,26,75,0.12)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <MagneticLink
                key={item.href}
                href={item.href}
                className="relative group cursor-pointer text-(--deep-space-blue-700) transition-colors hover:text-(--blue-green-700)"
              >
                <span className="relative z-10 text-(--deep-space-blue-900)">
                  {item.label}
                </span>
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
          <div className="z-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-(--deep-space-blue-900) hover:bg-(--sky-blue-light-100)"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="m-4 w-[calc(100%-2rem)] max-w-sm rounded-3xl border border-(--sky-blue-light-200) bg-white/90 p-0 shadow-[0_20px_60px_rgba(12,26,75,0.18)] backdrop-blur-md"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="p-6 pt-14">
                  <nav className="flex flex-col gap-4">
                    <div className="text-xs font-black uppercase tracking-[0.35em] text-(--deep-space-blue-700) text-center">
                      Υπηρεσίες
                    </div>
                    {serviceLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="cursor-pointer rounded-full border border-(--sky-blue-light-200) bg-white/80 px-6 py-3 text-lg font-black text-(--deep-space-blue-900) transition-all hover:-translate-y-0.5 hover:border-(--blue-green-200) hover:text-(--blue-green-700) hover:shadow-[0_10px_24px_rgba(12,26,75,0.12)] text-center tracking-tight"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}

                    <div className="mt-4 text-xs font-black uppercase tracking-[0.35em] text-(--deep-space-blue-700) text-center">
                      Πλοήγηση
                    </div>
                    {navItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className="cursor-pointer rounded-full border border-(--sky-blue-light-200) bg-white/80 px-6 py-4 text-2xl font-black text-(--deep-space-blue-900) transition-all hover:-translate-y-0.5 hover:border-(--blue-green-200) hover:text-(--blue-green-700) hover:shadow-[0_10px_24px_rgba(12,26,75,0.12)] text-center tracking-tight flex items-center justify-center gap-4"
                          >
                            <IconComponent className="h-8 w-8 text-(--blue-green-600)" />
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
        </div>
      </header>
    </NavbarHide>
  );
}

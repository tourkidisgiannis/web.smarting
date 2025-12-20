"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        
        {/* Logo - Visible on all screens */}
        <div className="flex items-center gap-2">
            <Link className="flex items-center space-x-2" href="/">
                <span className="font-bold inline-block">
                web2.smarting.gr
                </span>
            </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <nav className="flex items-center space-x-6">
                <Link
                href="/#services"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                Υπηρεσίες
                </Link>
                <Link
                href="/#demos"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                Demos
                </Link>
                <Link
                href="/#contact"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                Επικοινωνία
                </Link>
            </nav>
        </div>

        <div className="flex items-center gap-4">
            <nav className="flex items-center">
                <ModeToggle />
            </nav>
            
            {/* Mobile Menu Toggle */}
            <Button variant="ghost" className="md:hidden" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container py-4 flex flex-col space-y-4">
                <Link
                href="/#services"
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={toggleMenu}
                >
                Υπηρεσίες
                </Link>
                <Link
                href="/#demos"
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={toggleMenu}
                >
                Demos
                </Link>
                <Link
                href="/#contact"
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={toggleMenu}
                >
                Επικοινωνία
                </Link>
            </div>
        </div>
      )}
    </header>
  )
}

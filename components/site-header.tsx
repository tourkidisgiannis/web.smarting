"use client"

import { useState } from "react"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--sky-blue-light-200)] bg-[var(--sky-blue-light-50)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--sky-blue-light-50)]/60">
      <div className="container flex h-14 items-center justify-between">
        
        {/* Logo - Visible on all screens */}
        <div className="flex items-center gap-2">
            <Link className="flex items-center space-x-2" href="/">
                <span className="font-bold inline-block bg-gradient-to-r from-[var(--blue-green-600)] to-[var(--deep-space-blue-500)] bg-clip-text text-transparent">
                web2.smarting.gr
                </span>
            </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <nav className="flex items-center space-x-6">
                <Link
                href="/#services"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)]"
                >
                Υπηρεσίες
                </Link>
                <Link
                href="/#demos"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)]"
                >
                Demos
                </Link>
                <Link
                href="/#contact"
                className="transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)]"
                >
                Επικοινωνία
                </Link>
            </nav>
        </div>

        <div className="flex items-center gap-4">
            
            {/* Mobile Menu Toggle */}
            <Button variant="ghost" className="md:hidden text-[var(--deep-space-blue-700)] hover:bg-[var(--sky-blue-light-100)]" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-[var(--sky-blue-light-200)] bg-[var(--sky-blue-light-50)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--sky-blue-light-50)]/60">
            <div className="container py-4 flex flex-col space-y-4">
                <Link
                href="/#services"
                className="text-sm font-medium transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)]"
                onClick={toggleMenu}
                >
                Υπηρεσίες
                </Link>
                <Link
                href="/#demos"
                className="text-sm font-medium transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)]"
                onClick={toggleMenu}
                >
                Demos
                </Link>
                <Link
                href="/#contact"
                className="text-sm font-medium transition-colors hover:text-[var(--blue-green-600)] text-[var(--deep-space-blue-700)]"
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

"use client";

import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="relative z-50  border-t border-[var(--sky-blue-light-200)] pb-12 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-lg font-bold font-bbh-bartle bg-gradient-to-r from-[var(--blue-green-600)] to-[var(--deep-space-blue-500)] bg-clip-text text-transparent">
                web.smarting.gr
              </span>
            </Link>
            <p className="text-[var(--deep-space-blue-700)] leading-relaxed max-w-xs">
              Δημιουργούμε υψηλής αισθητικής ψηφιακές εμπειρίες που βοηθούν την
              επιχείρησή σας να ξεχωρίσει στην ψηφιακή εποχή.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[var(--blue-green-100)] hover:text-[var(--blue-green-600)] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[var(--blue-green-100)] hover:text-[var(--blue-green-600)] transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[var(--blue-green-100)] hover:text-[var(--blue-green-600)] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[var(--blue-green-100)] hover:text-[var(--blue-green-600)] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[var(--deep-space-blue-900)] font-bold mb-6">
              Υπηρεσίες
            </h3>
            <ul className="space-y-4 text-[var(--deep-space-blue-700)]">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  Το Πρόβλημα
                </Link>
              </li>
              <li>
                <Link
                  href="#ui-ux"
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  Τα Οφέλη
                </Link>
              </li>
              <li>
                <Link
                  href="#why-matters"
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  Γιατί Είναι Σημαντικό
                </Link>
              </li>
              <li>
                <Link
                  href="#clients-see"
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  Αποτελέσματα
                </Link>
              </li>
              <li>
                <Link
                  href="#who-we-are"
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  Ποιοι Είμαστε
                </Link>
              </li>
              <li>
                <Link
                  href="#demos"
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  Παραδείγματα
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-[var(--deep-space-blue-900)] font-bold mb-6">
              Επικοινωνία
            </h3>
            <ul className="space-y-4 text-[var(--deep-space-blue-700)]">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--blue-green-500)]" />
                <span>info@smarting.gr</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--blue-green-500)]" />
                <span>+30 210 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[var(--blue-green-500)]" />
                <span>Αθήνα, Ελλάδα</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-[var(--deep-space-blue-900)] font-bold mb-6">
              Newsletter
            </h3>
            <p className="text-[var(--deep-space-blue-700)] text-sm mb-4">
              Εγγραφείτε για να λαμβάνετε τα τελευταία νέα και ενημερώσεις.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Email address"
                className="bg-white border-[var(--sky-blue-light-200)] focus:ring-[var(--blue-green-400)]"
              />
              <Button
                size="icon"
                className="bg-[var(--blue-green-500)] hover:bg-[var(--blue-green-600)] text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--sky-blue-light-200)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--deep-space-blue-700)]">
          <p>
            Online παρουσία για επαγγελματίες που δεν μπορούν να ρισκάρουν την
            εικόνα τους.
          </p>
          <div className="flex gap-4">
            <span className="text-[var(--blue-green-600)] font-medium">
              Εμπιστοσύνη
            </span>
            <span className="text-[var(--deep-space-blue-700)]">·</span>
            <span className="text-[var(--blue-green-600)] font-medium">
              Σαφήνεια
            </span>
            <span className="text-[var(--deep-space-blue-700)]">·</span>
            <span className="text-[var(--blue-green-600)] font-medium">
              Αποτελέσματα
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

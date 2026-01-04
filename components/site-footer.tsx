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
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import businessInfo from "@/app/mocks/business-info.json";
import { Card } from "./ui/card";

export function SiteFooter() {
  return (
    <footer className="relative z-50 border-t border-(--sky-blue-light-200) pb-8 pt-12 md:pb-12 md:pt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Column 1: Company info */}
          <div className="space-y-6">
            <Logo
              width={200}
              height={80}
              className="max-w-[80%] md:max-w-[140px]"
            />
            <p className="text-(--deep-space-blue-700) leading-relaxed max-w-full text-sm">
              {businessInfo?.description}
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-(--blue-green-100) hover:text-(--blue-green-600) transition-colors"
                asChild
              >
                <Link href={businessInfo?.socials?.facebook}>
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[var(--blue-green-100)] hover:text-[var(--blue-green-600)] transition-colors"
                asChild
              >
                <Link href={businessInfo?.socials?.instagram}>
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[var(--deep-space-blue-900)] font-bold mb-4 md:mb-6 text-base md:text-lg">
              Υπηρεσίες
            </h3>
            <ul className="space-y-2 md:space-y-3 text-[var(--deep-space-blue-700)] text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[var(--blue-green-600)] transition-colors block py-1"
                >
                  Το Πρόβλημα
                </Link>
              </li>
              <li>
                <Link
                  href="#ui-ux"
                  className="hover:text-[var(--blue-green-600)] transition-colors block py-1"
                >
                  Τα Οφέλη
                </Link>
              </li>
              <li>
                <Link
                  href="#why-matters"
                  className="hover:text-[var(--blue-green-600)] transition-colors block py-1"
                >
                  Γιατί Είναι Σημαντικό
                </Link>
              </li>
              <li>
                <Link
                  href="#clients-see"
                  className="hover:text-[var(--blue-green-600)] transition-colors block py-1"
                >
                  Αποτελέσματα
                </Link>
              </li>
              <li>
                <Link
                  href="#who-we-are"
                  className="hover:text-[var(--blue-green-600)] transition-colors block py-1"
                >
                  Ποιοι Είμαστε
                </Link>
              </li>
              <li>
                <Link
                  href="#demos"
                  className="hover:text-[var(--blue-green-600)] transition-colors block py-1"
                >
                  Παραδείγματα
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-[var(--deep-space-blue-900)] font-bold mb-4 md:mb-6 text-base md:text-lg">
              Επικοινωνία
            </h3>
            <ul className="space-y-3 text-[var(--deep-space-blue-700)] text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[var(--blue-green-500)] mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${businessInfo?.email}`}
                  className="hover:text-[var(--blue-green-600)] transition-colors break-words"
                >
                  {businessInfo?.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--blue-green-500)] flex-shrink-0" />
                <a
                  href={`tel:${businessInfo?.phone}`}
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  {businessInfo?.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--blue-green-500)] flex-shrink-0" />
                <a
                  href={`tel:${businessInfo?.mobile}`}
                  className="hover:text-[var(--blue-green-600)] transition-colors"
                >
                  {businessInfo?.mobile}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[var(--blue-green-500)] mt-0.5 flex-shrink-0" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    businessInfo?.address?.street +
                      ", " +
                      businessInfo?.address?.city +
                      ", " +
                      businessInfo?.address?.postalCode +
                      ", " +
                      businessInfo?.address?.country
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--blue-green-600)] transition-colors break-words"
                >
                  {businessInfo?.address?.street}, {businessInfo?.address?.city}
                  , {businessInfo?.address?.postalCode},{" "}
                  {businessInfo?.address?.country}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-[var(--blue-green-500)] flex-shrink-0"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="break-words">
                  Γ.Ε.ΜΗ {businessInfo?.["business-registry-number"]}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="text-[var(--deep-space-blue-900)] font-bold mb-4 md:mb-6 text-base md:text-lg">
              Τοποθεσία
            </h3>
            <div className="rounded-lg overflow-hidden border border-[var(--sky-blue-light-200)] shadow-sm">
              <Card
                className="overflow-hidden p-0 border-0 anim-card"
                data-anim
              >
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.36905179205!2d22.85383218314381!3d40.6878690653583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83b3c9dcfbbe3%3A0xdd67b6323ff9fb39!2sSMARTING.GR!5e0!3m2!1sel!2sgr!4v1764905598394!5m2!1sel!2sgr"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps location of SMARTING.GR"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[var(--sky-blue-light-200)] flex flex-col items-center gap-4 text-xs md:text-sm text-[var(--deep-space-blue-700)]">
          <p className="text-center">
            Online παρουσία για επαγγελματίες που δεν μπορούν να ρισκάρουν την
            εικόνα τους.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
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

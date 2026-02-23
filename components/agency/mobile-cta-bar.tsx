"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import businessInfo from "@/app/mocks/business-info.json";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-full border border-(--sky-blue-light-200) bg-white/90 p-2 shadow-[0_12px_30px_rgba(12,26,75,0.18)] backdrop-blur-md">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`tel:${businessInfo?.phone || businessInfo?.mobile || ""}`}
              className="flex h-12 items-center justify-center rounded-full bg-[var(--landing-cta)] text-white transition-transform active:scale-95"
              aria-label="Call"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${businessInfo?.email || ""}`}
              className="flex h-12 items-center justify-center rounded-full border border-(--sky-blue-light-200) bg-white text-(--deep-space-blue-900) transition-transform active:scale-95"
              aria-label="Contact"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

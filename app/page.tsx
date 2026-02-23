"use client";

import { Hero } from "@/components/agency/hero";
import { ServicesModern } from "@/components/agency/services-modern";
import { UIUXSection } from "@/components/agency/ui-ux-section";
import { WhyThisMatters } from "@/components/agency/why-this-matters";
import { WhatOurClientsSee } from "@/components/agency/what-our-clients-see";
import { DemoGrid } from "@/components/agency/demo-grid";
import { ContactForm } from "@/components/agency/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { OnboardingTimeline } from "@/components/agency/OnboardingTimeline";
import { MobileCtaBar } from "@/components/agency/mobile-cta-bar";

export default function Home() {
  return (
    <main className="grainy-bg flex min-h-screen flex-col items-center bg-white">
      <div className="w-full relative overflow-x-hidden">
        <Hero />
        <WhyThisMatters />
        <ServicesModern />
        <UIUXSection />
        <WhatOurClientsSee />
        <DemoGrid />
        <OnboardingTimeline />
        <ContactForm />
      </div>
      <MobileCtaBar />
      <SiteFooter />
    </main>
  );
}

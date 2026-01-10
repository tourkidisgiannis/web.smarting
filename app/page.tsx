import { Hero } from "@/components/agency/hero";
import { Services } from "@/components/agency/services";
import { UIUXSection } from "@/components/agency/ui-ux-section";
import { WhyThisMatters } from "@/components/agency/why-this-matters";
import { WhatOurClientsSee } from "@/components/agency/what-our-clients-see";
import { DemoGrid } from "@/components/agency/demo-grid";
import { ContactForm } from "@/components/agency/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { OnboardingTimeline } from "@/components/agency/OnboardingTimeline";
import { ServicesBento } from "@/components/agency/services-bento";

export default function Home() {
  return (
    <main className="grainy-bg flex min-h-screen flex-col items-center bg-linear-to-br from-(--sky-blue-light-100) via-(--sky-blue-light-50) to-(--blue-green-100)">
      <div className="w-full relative overflow-x-hidden">
        <Hero />
        <WhyThisMatters />
        <Services />
        <ServicesBento />
        <UIUXSection />
        <DemoGrid />
        <WhatOurClientsSee />
        <OnboardingTimeline />
        <ContactForm />
      </div>
      <SiteFooter />
    </main>
  );
}

import { Hero } from "@/components/agency/hero";
import { Services } from "@/components/agency/services";
import { UIUXSection } from "@/components/agency/ui-ux-section";
import { WhyThisMatters } from "@/components/agency/why-this-matters";
import { WhatOurClientsSee } from "@/components/agency/what-our-clients-see";
import { WhoWeAre } from "@/components/agency/who-we-are";
import { DemoGrid } from "@/components/agency/demo-grid";
import { ContactForm } from "@/components/agency/contact-form";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-linear-to-br from-(--sky-blue-light-50) via-white to-(--blue-green-50)">
      <div className="w-full relative">
        <Hero />
        <Services />
        <UIUXSection />
        <WhyThisMatters />
        <WhatOurClientsSee />
        <WhoWeAre />
        <DemoGrid />
        <ContactForm />
      </div>
      <SiteFooter />
    </main>
  );
}

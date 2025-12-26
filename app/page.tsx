import { Hero } from "@/components/agency/hero"
import { Services } from "@/components/agency/services"
import { DemoGrid } from "@/components/agency/demo-grid"
import { ContactForm } from "@/components/agency/contact-form"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <DemoGrid />
      <ContactForm />
      <SiteFooter />
    </main>
  )
}

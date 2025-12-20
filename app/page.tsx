import { Hero } from "@/components/agency/hero"
import { Services } from "@/components/agency/services"
import { DemoGrid } from "@/components/agency/demo-grid"
import { ContactForm } from "@/components/agency/contact-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <DemoGrid />
      <ContactForm />
      
      <footer className="w-full border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} web2.smarting.gr. All rights reserved.
      </footer>
    </main>
  )
}

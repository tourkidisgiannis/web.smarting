"use client"

import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useTypewriter } from "@/hooks/use-typewriter"

const formSchema = z.object({
  email: z.string().email({
    message: "Παρακαλώ εισάγετε ένα έγκυρο email.",
  }),
  message: z.string().min(10, {
    message: "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.",
  }),
})

export function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const shape1Ref = useRef<HTMLDivElement>(null)
  const shape2Ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  useGSAP(() => {
    const mm = gsap.matchMedia()

    // Content Entrance
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })

    // Floating Shapes
    gsap.to(shape1Ref.current, {
      y: -50,
      x: 30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
    gsap.to(shape2Ref.current, {
      y: 50,
      x: -30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Trigger typewriter when section is in view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => setStartTyping(true),
    })





    return () => mm.revert()
  }, { scope: containerRef })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast.success("Message sent! We'll get back to you soon.")
    form.reset()
  }

  const typewriterText = useTypewriter("Ξεκινήστε χωρίς ρίσκο", 70, startTyping)

  return (
    <section id="contact" ref={containerRef} className="relative z-40 min-h-screen flex items-center">
      <div className="py-20 md:py-32 w-full">
        <div className="container relative overflow-visible">
          {/* Decorative Shapes */}
          <div ref={shape1Ref} className="absolute -top-20 right-0 lg:right-[10%] h-64 w-64 bg-[var(--blue-green-400)]/20 blur-[80px] -z-10" />
          <div ref={shape2Ref} className="absolute bottom-0 left-0 lg:left-[10%] h-80 w-80 bg-[var(--sky-blue-light-300)]/20 blur-[80px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & Info */}
            <div className="text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--blue-green-50)] border border-[var(--blue-green-100)] text-[var(--blue-green-700)] text-sm font-medium mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--blue-green-500)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--blue-green-600)]"></span>
                </span>
                Ζητήστε Ιδιωτική Αξιολόγηση
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--deep-space-blue-900)] mb-4 min-h-[1.2em]">
                {typewriterText}
                <span className="animate-pulse text-[var(--blue-green-500)]">|</span>
              </h2>

              <p className="text-[var(--deep-space-blue-700)] text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-6">
                Μια σύντομη, ιδιωτική αξιολόγηση της ιστοσελίδας σας.
                Χωρίς δεσμεύσεις.
                Χωρίς περίπλοκες διαδικασίες.
              </p>

              {/* Contact Info Pills */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 max-w-full">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-2xl shadow-sm border border-[var(--sky-blue-light-100)] text-[var(--deep-space-blue-800)] min-w-0">
                  <div className="p-1.5 bg-[var(--sky-blue-light-50)] rounded-full text-[var(--blue-green-600)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <span className="font-medium text-sm truncate">contact@smarting.gr</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-2xl shadow-sm border border-[var(--sky-blue-light-100)] text-[var(--deep-space-blue-800)] min-w-0">
                  <div className="p-1.5 bg-[var(--sky-blue-light-50)] rounded-full text-[var(--blue-green-600)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span className="font-medium text-sm truncate">+30 210 1234567</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div
              ref={formRef}
              className="bg-white/80 backdrop-blur-md border border-[var(--sky-blue-light-200)] p-6 sm:p-8 relative z-20 group hover:shadow-[var(--blue-green-300)]/10 transition-all duration-500"
              suppressHydrationWarning
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 0V60H60V0H0ZM58 58H2V2H58V58Z" fill="currentColor" className="text-[var(--blue-green-500)]"/>
                 </svg>
              </div>

              {mounted && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[var(--deep-space-blue-700)] font-semibold tracking-wider uppercase text-xs ml-1">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              {...field}
                              className="bg-white/50 border-[var(--sky-blue-light-200)] h-12 sm:h-14 focus:ring-[var(--blue-green-400)]/30 focus:border-[var(--blue-green-500)] transition-all text-base"
                              suppressHydrationWarning
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full h-12 sm:h-14 bg-[var(--blue-green-500)] hover:bg-[var(--blue-green-600)] text-white text-base sm:text-lg font-medium shadow-lg shadow-[var(--blue-green-500)]/20 hover:scale-[1.02] hover:shadow-[var(--blue-green-500)]/30 transition-all duration-300 group/btn" disabled={form.formState.isSubmitting}>
                    Ζητήστε Ιδιωτική Αξιολόγηση
                    <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Button>
                </form>
              </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


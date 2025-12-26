"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
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
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

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
  
  useGSAP(() => {
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

  return (
    <section id="contact" ref={containerRef} className="relative z-40 bg-gradient-to-br from-[var(--sky-blue-light-50)] via-white to-[var(--blue-green-50)] rounded-t-[40px] shadow-2xl">
      <div className="py-32">
      <div className="container relative overflow-hidden">
        {/* Decorative Shapes */}
      <div ref={shape1Ref} className="absolute top-20 right-[10%] h-32 w-32 rounded-full bg-[var(--blue-green-400)]/15 blur-3xl -z-10" />
      <div ref={shape2Ref} className="absolute bottom-20 left-[10%] h-48 w-48 rounded-full bg-[var(--sky-blue-light-300)]/15 blur-3xl -z-10" />

      <div 
        ref={formRef}
        className="mx-auto max-w-2xl bg-white border border-[var(--sky-blue-light-200)] rounded-3xl p-8 shadow-xl shadow-[var(--sky-blue-light-200)]/30 sm:p-10 relative z-10"
        suppressHydrationWarning
      >
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--deep-space-blue-900)]">Ξεκινήστε την Επιτυχία σας</h2>
          <p className="mt-4 text-[var(--deep-space-blue-700)] text-lg">
            Είστε έτοιμοι να <span className="text-[var(--blue-green-600)] font-medium">μεταμορφώσετε</span> την ψηφιακή σας παρουσία; Ας συζητήσουμε τους στόχους σας.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--deep-space-blue-700)] font-semibold tracking-wider uppercase text-xs">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@example.com" 
                      {...field} 
                      className="bg-[var(--sky-blue-light-50)] border-[var(--sky-blue-light-200)] h-12 rounded-xl focus:ring-[var(--blue-green-400)]/50 focus:border-[var(--blue-green-500)] transition-all"
                      suppressHydrationWarning 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--deep-space-blue-700)] font-semibold tracking-wider uppercase text-xs">Μήνυμα</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Πείτε μας για το project σας..."
                      className="min-h-[150px] bg-[var(--sky-blue-light-50)] border-[var(--sky-blue-light-200)] rounded-xl focus:ring-[var(--blue-green-400)]/50 focus:border-[var(--blue-green-500)] transition-all"
                      {...field}
                      suppressHydrationWarning
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="xl" className="w-full rounded-xl bg-[var(--blue-green-500)] hover:bg-[var(--blue-green-600)] text-white shadow-xl shadow-[var(--blue-green-500)]/20 hover:scale-[1.02] transition-transform active:scale-[0.98]" disabled={form.formState.isSubmitting}>
              Αποστολή Μηνύματος
            </Button>
          </form>
        </Form>
      </div>
      </div>
      </div>
    </section>
  )
}


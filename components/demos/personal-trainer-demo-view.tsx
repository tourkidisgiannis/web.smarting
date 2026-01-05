"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { 
  Activity, 
  Timer, 
  Trophy, 
  Instagram, 
  Twitter, 
  Facebook,
  Menu,
  X,
  Check,
  Star,
  Quote
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function PersonalTrainerDemoView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useGSAP(() => {
    // Hero Text Reveal with a "Crash" effect
    const tl = gsap.timeline()
    
    tl.from(".hero-title-line", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    })
    .to(".hero-title-line", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.8
    }, "<")

    tl.from(".hero-sub", {
      opacity: 0,
      x: -20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")

    // Stats Counter - Running Numbers
    gsap.utils.toArray<HTMLElement>(".stat-counter").forEach((stat) => {
        const targetValue = parseInt(stat.getAttribute("data-target") || "0")
        
        gsap.to(stat, {
            scrollTrigger: {
                trigger: stat,
                start: "top 85%",
            },
            textContent: targetValue,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            stagger: 0.2,
        })
    })

    gsap.from(".stat-item", {
         scrollTrigger: {
             trigger: "#stats-section",
             start: "top 80%"
         },
         y: 50,
         opacity: 0,
         duration: 1,
         stagger: 0.2,
         ease: "power3.out"
    })

    // Program Cards - Staggered Entry with 3D tilt feel
    gsap.from(".program-card", {
        scrollTrigger: {
            trigger: "#programs",
            start: "top 70%", 
        },
        y: 100,
        opacity: 0,
        rotationX: 15,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    })

    // Parallax Background for About
    gsap.to(".about-bg-text", {
        scrollTrigger: {
            trigger: "#about",
            scrub: 1,
        },
        y: -100,
        ease: "none"
    })

    // Results Fade In
    gsap.from(".result-card", {
        scrollTrigger: {
            trigger: "#results",
            start: "top 60%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-lime-400 selection:text-black">
      
      {/* Navigation - Sticky below master header */}
      <nav className="sticky top-14 left-0 w-full z-40 bg-neutral-950/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container flex justify-between items-center">
            <Link href="#" className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">
                Iron<span className="text-lime-400">Forge</span>
            </Link>

            <div className="hidden md:flex gap-8 font-bold text-xs tracking-widest uppercase">
                <Link href="#about" className="hover:text-lime-400 transition-colors">Φιλοσοφία</Link>
                <Link href="#programs" className="hover:text-lime-400 transition-colors">Προγράμματα</Link>
                <Link href="#pricing" className="hover:text-lime-400 transition-colors">Τιμές</Link>
                <Link href="#results" className="hover:text-lime-400 transition-colors">Αποτελέσματα</Link>
                <Link href="#faq" className="hover:text-lime-400 transition-colors">FAQ</Link>
                <Link href="#contact" className="hover:text-lime-400 transition-colors">Επικοινωνία</Link>
            </div>

            <Button size="icon" variant="ghost" className="md:hidden text-white hover:text-lime-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
            </Button>
        </div>
      </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                <Button size="icon" variant="ghost" className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}>
                    <X size={32} />
                </Button>
                <div className="flex flex-col gap-8 text-center text-3xl font-black uppercase italic">
                    <Link href="#about" onClick={() => setIsMenuOpen(false)}>Φιλοσοφία</Link>
                    <Link href="#programs" onClick={() => setIsMenuOpen(false)}>Προγράμματα</Link>
                    <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Τιμές</Link>
                    <Link href="#results" onClick={() => setIsMenuOpen(false)}>Αποτελέσματα</Link>
                    <Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Επικοινωνία</Link>
                </div>
            </div>
        )}

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-56px)] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Image */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-80 z-0"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
         
         <div className="relative z-10 container grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-0">
            <div className="space-y-4">
                <div className="overflow-hidden">
                    <h1 className="hero-title-line text-6xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter">
                        Ορισε τη <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Δυναμη</span> <br/> σου
                    </h1>
                </div>
                <p className="hero-sub text-lg md:text-2xl text-neutral-400 max-w-lg border-l-4 border-lime-400 pl-6 mt-8 font-medium">
                    Elite personal training για όσους αρνούνται τη μετριότητα. Ξεπέρασε τα όριά σου.
                </p>
                <div className="hero-sub pt-8 flex flex-col sm:flex-row gap-4">
                    <Button className="bg-lime-400 text-black hover:bg-lime-500 h-16 px-10 rounded-none font-black uppercase tracking-widest text-lg transition-transform hover:scale-105 active:scale-95">
                        Ξεκίνησε Τώρα
                    </Button>
                    <Button variant="outline" className="text-white border-white bg-black/40 backdrop-blur-md hover:bg-white hover:text-black h-16 px-10 rounded-none font-black uppercase tracking-widest text-lg transition-all">
                        Success Stories
                    </Button>
                </div>
            </div>
            
            <div className="hidden lg:block relative">
                 <div className="w-full aspect-[3/4] border-2 border-lime-400/30 rounded-full rotate-12 relative animate-pulse-slow">
                    <div className="absolute inset-4 border border-white/20 rounded-full -rotate-6"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Activity className="w-48 h-48 text-lime-400 opacity-20" />
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* Stats - Brutalist Grid */}
      <section id="stats-section" className="py-20 border-y border-white/5 bg-neutral-900/30 backdrop-blur-sm">
          <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
                  {[
                      { val: 500, suffix: "+", label: "Ζωές που Άλλαξαν" },
                      { val: 10, suffix: "k", label: "Ώρες Προπόνησης" },
                      { val: 100, suffix: "%", label: "Αφοσίωση" },
                      { val: 24, suffix: "/7", label: "Υποστήριξη" }
                  ].map((stat, i) => (
                      <div key={i} className="stat-item group bg-neutral-950 p-8 text-center hover:bg-neutral-900 transition-colors duration-500 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1 bg-lime-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                          <h3 className="text-4xl md:text-6xl font-black text-white group-hover:text-lime-400 transition-colors flex justify-center items-baseline">
                              <span className="stat-counter" data-target={stat.val}>0</span>
                              <span>{stat.suffix}</span>
                          </h3>
                          <p className="font-bold uppercase tracking-widest text-xs md:text-sm mt-2 text-neutral-500 group-hover:text-white transition-colors">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Partners / Trusted By */}
      <section className="py-12 border-b border-white/5 bg-neutral-950">
        <div className="container">
            <p className="text-center text-neutral-500 uppercase text-xs font-black tracking-[0.3em] mb-8">
                Εξοπλισμός & Συνεργάτες
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Text-based Logos for simplicity, could be SVGs */}
                <h3 className="text-2xl font-black italic text-white/40 hover:text-white transition-colors cursor-default">ROGUE</h3>
                <h3 className="text-2xl font-black italic text-white/40 hover:text-white transition-colors cursor-default">NIKE</h3>
                <h3 className="text-2xl font-black italic text-white/40 hover:text-white transition-colors cursor-default">GYMSHARK</h3>
                <h3 className="text-2xl font-black italic text-white/40 hover:text-white transition-colors cursor-default">WHOOP</h3>
                <h3 className="text-2xl font-black italic text-white/40 hover:text-white transition-colors cursor-default">UNDER ARMOUR</h3>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 text-[25vw] font-black text-white/[0.03] leading-none select-none about-bg-text">
              GRIND
          </div>
          
          <div className="container grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="relative">
                  <div className="aspect-[4/5] bg-neutral-800 relative z-10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-2xl">
                       <img 
                        src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2787&auto=format&fit=crop" 
                        alt="Trainer" 
                        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                       />
                       <div className="absolute inset-0 border-b-[12px] border-r-[12px] border-lime-400 pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pattern-grid opacity-20 z-0"></div>
              </div>
              
              <div className="space-y-8">
                  <div className="inline-block px-4 py-1 bg-lime-400 text-black font-black uppercase text-xs tracking-tighter">
                      The Philosophy
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.9]">
                      Πέρα από <br/> <span className="text-lime-400">Μύες</span>
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-medium">
                      &quot;Δεν χτίζω μόνο σώματα. Χτίζω νοοτροπίες. Το σίδερο είναι απλώς το εργαλείο που χρησιμοποιούμε για να σφυρηλατήσουμε πειθαρχία, ανθεκτικότητα και ακλόνητη αυτοπεποίθηση. Οι δυνατότητές σου είναι απεριόριστες—χρειάζεσαι απλώς το σωστό σχέδιο.&quot;
                  </p>
                  <div className="pt-4">
                      <p className="font-black text-white uppercase tracking-widest text-xl">
                          Alex &quot;The Forge&quot; Stefanos
                      </p>
                      <p className="text-lime-400 font-bold uppercase text-sm">Head Coach & Founder</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 md:py-40 bg-neutral-900/50 border-y border-white/5">
          <div className="container">
              <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                  <div className="max-w-xl">
                      <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-6">Επίλεξε τη <span className="text-lime-400">Διαδρομή</span> σου</h2>
                      <p className="text-neutral-500 font-medium text-lg">Προγράμματα σχεδιασμένα για να σε πιέσουν στα άκρα. Χωρίς δικαιολογίες, μόνο αποτελέσματα.</p>
                  </div>
                  <div className="h-px flex-1 bg-white/10 hidden md:block mb-4 ml-12"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="program-card group p-10 bg-black border border-white/10 hover:border-lime-400/50 transition-all duration-500 hover:-translate-y-4">
                      <div className="mb-8 p-5 bg-lime-400/5 w-fit rounded-full text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                          <Activity className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Υπερτροφία</h3>
                      <p className="text-neutral-400 mb-10 leading-relaxed">
                          Καθαρή μυϊκή ανάπτυξη. Βελτιστοποιημένος όγκος και ένταση για μέγιστη εξέλιξη του φυσικού σου δυναμικού.
                      </p>
                      <ul className="space-y-4 mb-10 text-sm md:text-base text-neutral-300 font-bold">
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-400"/> Πρόγραμμα 5 Ημερών</li>
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-400"/> Εξατομικευμένη Διατροφή</li>
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-400"/> Ανάλυση Τεχνικής</li>
                      </ul>
                      <Button className="w-full h-16 bg-white text-black hover:bg-lime-400 font-black uppercase rounded-none transition-all text-sm tracking-widest">
                          Γίνε Μέλος
                      </Button>
                  </div>

                   <div className="program-card group p-10 bg-lime-400 text-black border border-lime-400 transform md:-translate-y-12 relative z-10 shadow-[0_30px_60px_-15px_rgba(163,230,53,0.4)]">
                      <div className="absolute -top-4 right-8 bg-black text-white text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em]">Δημοφιλέστερο</div>
                      <div className="mb-8 p-5 bg-black/10 w-fit rounded-full text-black">
                          <Timer className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Επιδόσεις</h3>
                      <p className="text-neutral-900 mb-10 font-bold leading-tight text-lg">
                          Αθλητική προετοιμασία Pro-Level. Ταχύτητα, εκρηκτική δύναμη και αντοχή για σοβαρούς αθλητές.
                      </p>
                       <ul className="space-y-4 mb-10 text-sm md:text-base text-neutral-950 font-black">
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Υβριδική Προπόνηση</li>
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Καθημερινός Έλεγχος</li>
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Feedback με Video</li>
                      </ul>
                      <Button className="w-full h-16 bg-black text-white hover:bg-neutral-800 font-black uppercase rounded-none border-none transition-all text-sm tracking-widest">
                          Ξεκίνησε 1-on-1
                      </Button>
                  </div>

                   <div className="program-card group p-10 bg-black border border-white/10 hover:border-lime-400/50 transition-all duration-500 hover:-translate-y-4">
                      <div className="mb-8 p-5 bg-lime-400/5 w-fit rounded-full text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                          <Trophy className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Απώλεια Λίπους</h3>
                      <p className="text-neutral-400 mb-10 leading-relaxed">
                          Βιώσιμη απώλεια. Διατηρήστε τους μυς ενώ καίτε λίπος. Επιστημονική προσέγγιση χωρίς πείνα.
                      </p>
                       <ul className="space-y-4 mb-10 text-sm md:text-base text-neutral-300 font-bold">
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-400"/> Στρατηγική Μακροθρεπτικών</li>
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-400"/> Μεταβολική Προπόνηση</li>
                          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-400"/> Lifestyle Hacks</li>
                      </ul>
                      <Button className="w-full h-16 bg-white text-black hover:bg-lime-400 font-black uppercase rounded-none transition-all text-sm tracking-widest">
                          Γράμμωση
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-40 bg-neutral-950 relative border-b border-white/5">
         <div className="container">
            <div className="text-center mb-24 max-w-3xl mx-auto">
                 <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-none mb-8">
                    Επενδυσε στον <span className="text-lime-400">Εαυτο</span> σου
                 </h2>
                 <p className="text-neutral-400 text-lg font-medium">
                    Δεν είναι έξοδο. Είναι η καλύτερη επένδυση που θα κάνεις ποτέ. Ξεκάθαρες τιμές, χωρίς κρυφές χρεώσεις.
                 </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                
                {/* Tier 1 */}
                <div className="border border-white/10 bg-neutral-900/50 p-8 md:p-12 hover:border-lime-400/30 transition-all group">
                    <div className="mb-6">
                        <h3 className="text-xl font-black uppercase tracking-widest text-neutral-300">Online Coaching</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">€120</span>
                            <span className="text-neutral-500 font-bold">/μήνα</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm text-neutral-400 font-bold">
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Εξατομικευμένο Πρόγραμμα</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Εβδομαδιαίο Check-in</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Προσαρμογή Διατροφής</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Υποστήριξη μέσω App</li>
                    </ul>
                    <Button className="w-full h-14 border border-white/20 bg-transparent hover:bg-white hover:text-black font-black uppercase rounded-none tracking-widest transition-all">
                        Επιλογή
                    </Button>
                </div>

                {/* Tier 2 - Highlighted */}
                <div className="border-2 border-lime-400 bg-neutral-900/80 p-8 md:p-12 transform md:-translate-y-8 relative shadow-[0_0_40px_rgba(163,230,53,0.15)]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-400 text-black px-4 py-1 font-black uppercase text-xs tracking-widest whitespace-nowrap">
                        Best Value
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-black uppercase tracking-widest text-lime-400">Hybrid System</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-5xl font-black text-white">€250</span>
                            <span className="text-neutral-500 font-bold">/μήνα</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm text-white font-bold">
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Όλα του Online Coaching</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> 2x Προπονήσεις / Μήνα (Live)</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Λιπομέτρηση & Μετρήσεις</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Άμεση πρόσβαση WhatsApp</li>
                    </ul>
                    <Button className="w-full h-14 bg-lime-400 hover:bg-lime-500 text-black font-black uppercase rounded-none tracking-widest transition-all hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]">
                        Ξεκίνα Τώρα
                    </Button>
                </div>

                {/* Tier 3 */}
                <div className="border border-white/10 bg-neutral-900/50 p-8 md:p-12 hover:border-lime-400/30 transition-all group">
                    <div className="mb-6">
                        <h3 className="text-xl font-black uppercase tracking-widest text-neutral-300">1-on-1 Elite</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">€500</span>
                            <span className="text-neutral-500 font-bold">/μήνα</span>
                        </div>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm text-neutral-400 font-bold">
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> 12x Προπονήσεις / Μήνα</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Πλήρης Διατροφική Παρακολούθηση</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> Physio Assessment</li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-lime-400"/> 24/7 VIP Υποστήριξη</li>
                    </ul>
                    <Button className="w-full h-14 border border-white/20 bg-transparent hover:bg-white hover:text-black font-black uppercase rounded-none tracking-widest transition-all">
                        Αίτηση
                    </Button>
                </div>

            </div>
         </div>
      </section>

      {/* Results / Transformations */}
      <section id="results" className="py-24 md:py-40 bg-black overflow-hidden">
          <div className="container">
              <div className="text-center mb-24">
                  <h2 className="text-6xl md:text-9xl font-black uppercase italic leading-none mb-6">
                      Πριν & <span className="text-lime-400">Μετα</span>
                  </h2>
                  <p className="text-neutral-500 font-bold uppercase tracking-[0.3em]">Αληθινά αποτελέσματα από αληθινούς ανθρώπους</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                  {/* Result 1 */}
                  <div className="group relative result-card">
                      <div className="grid grid-cols-2 gap-2 aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop" alt="Before" className="w-full h-full object-cover" />
                          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2940&auto=format&fit=crop" alt="After" className="w-full h-full object-cover" />
                      </div>
                      <div className="mt-8 flex justify-between items-end border-b border-white/10 pb-6">
                          <div>
                              <h4 className="text-2xl font-black uppercase italic">Νίκος Π.</h4>
                              <p className="text-lime-400 font-bold uppercase text-xs mt-1">-15kg Λίπος / +5kg Μύες</p>
                          </div>
                          <p className="text-neutral-500 font-bold italic tracking-tighter">12 ΕΒΔΟΜΑΔΕΣ</p>
                      </div>
                  </div>

                   {/* Result 2 */}
                  <div className="group relative md:translate-y-24 result-card">
                      <div className="grid grid-cols-2 gap-2 aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src="https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=2787&auto=format&fit=crop" alt="Before" className="w-full h-full object-cover" />
                          <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop" alt="After" className="w-full h-full object-cover" />
                      </div>
                      <div className="mt-8 flex justify-between items-end border-b border-white/10 pb-6">
                          <div>
                              <h4 className="text-2xl font-black uppercase italic">Μαρία Κ.</h4>
                              <p className="text-lime-400 font-bold uppercase text-xs mt-1">Απόλυτο Recomposition</p>
                          </div>
                          <p className="text-neutral-500 font-bold italic tracking-tighter">16 ΕΒΔΟΜΑΔΕΣ</p>
                      </div>
                  </div>
              </div>

               <div className="mt-40 text-center">
                    <Button variant="outline" className="text-lime-400 border-lime-400 hover:bg-lime-400 hover:text-black h-20 px-12 rounded-none font-black uppercase tracking-widest text-xl transition-all">
                        Δες Περισσότερα Results
                    </Button>
               </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-white/5 bg-neutral-900/20">
        <div className="container">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-center mb-16">Iron <span className="text-lime-400">Voices</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {name: "Γιώργος Κ.", role: "Επιχειρηματίας", text: "Η πειθαρχία που έχτισα εδώ μεταφέρθηκε και στην επιχείρησή μου. Δεν είναι απλά γυμναστική, είναι σχολείο ζωής."},
                    {name: "Άννα Μ.", role: "Αρχιτέκτων", text: "Ποτέ δεν πίστευα ότι θα μπορούσα να σηκώσω αυτά τα κιλά. Ο Alex με έκανε να πιστέψω στον εαυτό μου ξανά."},
                    {name: "Δημήτρης Σ.", role: "Αθλητής", text: "Η μεθοδολογία είναι σε άλλο επίπεδο. Αν θες σοβαρά αποτελέσματα και είσαι διατεθειμένος να πονέσεις, εδώ είναι το μέρος σου."}
                ].map((testimonial, i) => (
                    <div key={i} className="bg-neutral-950 p-8 border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                        <Quote className="absolute top-6 right-6 text-lime-400/20 w-10 h-10 group-hover:text-lime-400/40 transition-colors" />
                        <div className="flex gap-1 text-lime-400 mb-6">
                            {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-neutral-300 font-medium mb-8 leading-relaxed">
                            &quot;{testimonial.text}&quot;
                        </p>
                        <div>
                            <h4 className="font-black uppercase text-white">{testimonial.name}</h4>
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-black">
        <div className="container max-w-3xl">
            <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">Συχνές <span className="text-lime-400">Ερωτήσεις</span></h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
                {[
                    {q: "Είναι το πρόγραμμα κατάλληλο για αρχάριους;", a: "Ναι, αλλά απαιτεί αφοσίωση. Κάθε πρόγραμμα προσαρμόζεται στο επίπεδό σου, αλλά η ένταση και η απαίτηση για πειθαρχία είναι αδιαπραγμάτευτες."},
                    {q: "Παρέχετε διατροφικό πλάνο;", a: "Φυσικά. Η προπόνηση είναι μόνο το 40% της εξίσωσης. Παρέχουμε πλήρη καθοδήγηση macronutrients και στρατηγική γευμάτων βασισμένη στους στόχους σου."},
                    {q: "Μπορώ να κάνω το πρόγραμμα από το σπίτι;", a: "Το Online Coaching μπορεί να προσαρμοστεί για εξοπλισμό σπιτιού, αρκεί να υπάρχει ο βασικός εξοπλισμός (αλτήρες, πάγκος). Για βέλτιστα αποτελέσματα, προτείνουμε συνδρομή σε γυμναστήριο."},
                    {q: "Τι συμβαίνει αν χάσω μια προπόνηση;", a: "Η συνέπεια είναι το κλειδί. Αν χάσεις μια, την αναπληρώνουμε. Αν γίνει συνήθεια, δεν είμαστε το κατάλληλο fit για σένα."},
                    {q: "Επιστροφή χρημάτων;", a: "Πιστεύουμε στο έργο μας. Αν ακολουθήσεις το πρόγραμμα 100% και δεν δεις αποτελέσματα σε 30 μέρες, επιστρέφουμε τα χρήματά σου."}
                ].map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-neutral-900/30 px-6">
                        <AccordionTrigger className="text-lg font-bold text-white uppercase hover:text-lime-400 hover:no-underline text-left">
                            {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-400 text-base leading-relaxed">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 md:py-40 bg-neutral-950 text-center relative overflow-hidden border-t border-white/5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-900/10 to-transparent pointer-events-none"></div>
           
           <div className="container relative z-10 max-w-4xl" suppressHydrationWarning>
               <div className="mb-16">
                    <h2 className="text-6xl md:text-9xl font-black uppercase italic mb-8 leading-[0.8] tracking-tighter">
                        Ετοιμος για <br/> <span className="text-lime-400 underline decoration-[12px] decoration-lime-400/20 underline-offset-8">Μάχη;</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Οι θέσεις για Personal Coaching είναι εξαιρετικά περιορισμένες. Δουλεύω μόνο με 10 άτομα ταυτόχρονα για να εγγυηθώ την απόλυτη προσοχή μου. Αν είσαι έτοιμος, κάνε την αίτησή σου.
                    </p>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" suppressHydrationWarning>
                   <Input placeholder="ΤΟ ΟΝΟΜΑ ΣΟΥ" className="bg-neutral-900 border-neutral-800 h-16 text-center font-black uppercase tracking-widest text-lg focus:border-lime-400 focus:ring-0 rounded-none border-2 placeholder:text-neutral-700" suppressHydrationWarning />
                   <Input placeholder="ΤΟ EMAIL ΣΟΥ" className="bg-neutral-900 border-neutral-800 h-16 text-center font-black uppercase tracking-widest text-lg focus:border-lime-400 focus:ring-0 rounded-none border-2 placeholder:text-neutral-700" suppressHydrationWarning />
                   <div className="md:col-span-2">
                        <Button className="w-full h-20 bg-lime-400 hover:bg-lime-500 text-black font-black text-2xl uppercase italic tracking-[0.2em] rounded-none shadow-[0_20px_40px_rgba(163,230,53,0.2)] transition-all transform hover:-translate-y-1 active:translate-y-0">
                            Υποβολή Αίτησης
                        </Button>
                   </div>
               </div>

               <div className="mt-24 flex justify-center gap-10">
                   <a href="#" className="p-5 rounded-full border-2 border-neutral-800 hover:border-lime-400 hover:text-lime-400 transition-all hover:scale-110 active:scale-95 bg-neutral-900">
                       <Instagram size={32} />
                   </a>
                   <a href="#" className="p-5 rounded-full border-2 border-neutral-800 hover:border-lime-400 hover:text-lime-400 transition-all hover:scale-110 active:scale-95 bg-neutral-900">
                       <Twitter size={32} />
                   </a>
                   <a href="#" className="p-5 rounded-full border-2 border-neutral-800 hover:border-lime-400 hover:text-lime-400 transition-all hover:scale-110 active:scale-95 bg-neutral-900">
                       <Facebook size={32} />
                   </a>
               </div>
           </div>
      </section>
      
      <footer className="py-16 bg-black text-center text-neutral-600 border-t border-white/5 uppercase text-xs tracking-[0.4em] font-black">
            <div className="container">
                <p className="mb-4">&copy; 2025 IronForge Training Systems • Crafted by Smarting</p>
                <div className="flex justify-center gap-8 text-[10px] text-neutral-700">
                    <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a>
                </div>
            </div>
      </footer>
    </div>
  )
}

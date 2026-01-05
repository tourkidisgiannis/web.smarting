"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { 
  Scale, Menu, X, Briefcase, FileText, 
  MapPin, Phone, Mail, ArrowRight, Gavel, 
  Shield, CheckCircle2, Trophy, Linkedin, Twitter, Facebook 
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function LegalDemoView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    (context) => {
      const q = (selector: string) =>
        context.selector
          ? context.selector(selector)
          : containerRef.current?.querySelectorAll(selector) ?? [];

      // Hero Animations
      const result = gsap.from(q(".hero-animate"), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });

      // Section Titles
      gsap.utils.toArray<HTMLElement>(q(".section-header")).forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // Staggered Cards (Practice Areas)
      gsap.from(q(".practice-card"), {
        scrollTrigger: {
          trigger: q(".practice-section")[0],
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Feature List
      gsap.from(q(".feature-item"), {
        scrollTrigger: {
          trigger: q(".why-us-section")[0],
          start: "top 70%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0f1d] text-white font-sans selection:bg-[#d4af37] selection:text-[#0a0f1d]">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 border-b border-white/5 bg-[#0a0f1d]/80 backdrop-blur-md transition-all duration-300">
        <div className="container flex items-center justify-between h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 border border-[#d4af37]/30 rounded-sm bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 transition-colors">
              <Scale size={24} className="text-[#d4af37]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-wide text-white leading-none">BLACKWOOD</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">ΝΟΜΙΚΟΙ ΣΥΜΒΟΥΛΟΙ</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-gray-400">
            {[
              { label: 'Τομείς', id: 'expertise' }, 
              { label: 'Δικηγόροι', id: 'attorneys' }, 
              { label: 'Επιτυχίες', id: 'about' }, 
              { label: 'Επικοινωνία', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#d4af37] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action & Mobile */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end text-right mr-4 border-r border-white/10 pr-6">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Δωρεάν Συμβουλευτική</span>
              <span className="text-sm font-bold text-white font-serif">+30 210 123 4567</span>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex bg-[#d4af37] hover:bg-[#b5952f] text-[#0a0f1d] font-medium tracking-wide rounded-none h-12 px-8 uppercase text-xs"
            >
              Αξιολόγηση Υπόθεσης
            </Button>

            <button 
              className="md:hidden text-[#d4af37] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-[#0a0f1d] border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top-5">
            {[
              { label: 'Τομείς', id: 'expertise' }, 
              { label: 'Δικηγόροι', id: 'attorneys' }, 
              { label: 'Επιτυχίες', id: 'about' }, 
              { label: 'Επικοινωνία', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-serif font-medium text-white hover:text-[#d4af37] text-left"
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-[#d4af37] text-[#0a0f1d] w-full mt-4">Κλείστε Ραντεβού</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/demos/legal/hero-bg.png"
            alt="Supreme Court Architecture"
            fill
            className="object-cover opacity-20 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/95 to-[#0a0f1d]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/0 via-[#0a0f1d]/0 to-[#0a0f1d]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="hero-animate flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs font-bold">ΙΔΡΥΣΗ 1998</span>
            </div>
            
            <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] text-white">
              Αταλάντευτη <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5b5]">Υπεράσπιση</span>
            </h1>
            
            <p className="hero-animate text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed border-l-2 border-white/10 pl-6">
              Όταν διακυβεύονται πολλά, η εμπειρία μετράει. Παρέχουμε στρατηγική, 
              επιθετική εκπροσώπηση για πολύπλοκες δικαστικές και εταιρικές υποθέσεις.
            </p>
            
            <div className="hero-animate flex flex-wrap gap-5 pt-4">
              <Button 
                size="lg" 
                className="h-14 px-8 bg-[#d4af37] hover:bg-[#e6c248] text-black font-bold tracking-wide rounded-sm uppercase text-xs shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Δωρεάν Αξιολόγηση
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-black font-medium tracking-wide rounded-sm uppercase text-xs transition-all duration-300"
                onClick={() => scrollToSection('expertise')}
              >
                Τομείς Δικαίου
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Κύλιση</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0f1629] border-y border-white/5 py-16 relative">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Ποσοστό Επιτυχίας" },
              { value: "500€+", label: "Εκατομμύρια Ανακτηθέντα" },
              { value: "25+", label: "Έτη Εμπειρίας" },
              { value: "Top 100", label: "Διακεκριμένοι Νομικοί" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Practice Areas */}
      <section id="expertise" className="practice-section py-24 lg:py-32 relative">
        <div className="container">
          <div className="section-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/5 pb-8">
            <div>
              <span className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-3 block">Νομική Εξειδίκευση</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Τομείς Δικαίου</h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
              Ειδικευόμαστε σε νομικές υποθέσεις υψηλών απαιτήσεων που απαιτούν εξελιγμένη στρατηγική και αδιάκοπη αφοσίωση.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Briefcase, 
                title: "Εταιρικό Δίκαιο", 
                desc: "Συγχωνεύσεις, εξαγορές και ολοκληρωμένη εταιρική διακυβέρνηση για παγκόσμιες οντότητες." 
              },
              { 
                icon: Gavel, 
                title: "Αστικό Δίκαιο", 
                desc: "Επιθετική επίλυση διαφορών και δικαστική εκπροσώπηση για σύνθετες εμπορικές υποθέσεις." 
              },
              { 
                icon: Shield, 
                title: "Ποινικό Δίκαιο", 
                desc: "Προστασία δικαιωμάτων και φήμης σε έρευνες οικονομικού εγκλήματος και σοβαρών κακουργημάτων." 
              },
              { 
                icon: FileText, 
                title: "Διαχείριση Περιουσίας", 
                desc: "Στρατηγική διατήρηση πλούτου και σχεδιασμός διαδοχής για άτομα υψηλής καθαρής περιουσίας." 
              },
              { 
                icon: Trophy, 
                title: "Πνευματική Ιδιοκτησία", 
                desc: "Διασφάλιση καινοτομιών, εμπορικών σημάτων και δημιουργικών περιουσιακών στοιχείων στον ψηφιακό κόσμο." 
              },
              { 
                icon: Scale, 
                title: "Εργατικό Δίκαιο", 
                desc: "Πλοήγηση σε πολύπλοκους κανονισμούς εργασίας και συμβάσεις αποζημίωσης στελεχών." 
              },
            ].map((area, i) => (
              <Card key={i} className="practice-card bg-[#0f1629]/50 border-white/5 hover:bg-[#d4af37] hover:text-[#0a0f1d] transition-all duration-500 group rounded-sm overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#d4af37]/10 group-hover:bg-[#0a0f1d]/10 rounded-sm flex items-center justify-center mb-4 transition-colors">
                    <area.icon size={24} className="text-[#d4af37] group-hover:text-[#0a0f1d]" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#0a0f1d]/70 font-serif">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 group-hover:text-[#0a0f1d]/70 text-sm leading-relaxed mb-6 transition-colors">
                    {area.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#d4af37] group-hover:text-[#0a0f1d] text-xs font-bold uppercase tracking-wider">
                    <span>Περισσότερα</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Feature Split */}
      <section id="about" className="why-us-section bg-[#0f1629] py-24 lg:py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-auto min-h-[600px]">
             <Image
                src="/demos/legal/meeting.png"
                alt="Lawyers meeting"
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay" />
          </div>

          {/* Content Side */}
          <div className="p-12 lg:p-24 flex flex-col justify-center">
             <div className="section-header mb-12">
               <span className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-3 block">Γιατί Εμάς</span>
               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ανελέητη Δίωξη <br/> της Δικαιοσύνης</h2>
               <p className="text-gray-400 text-lg leading-relaxed">
                 Δεν ερμηνεύουμε απλά το νόμο, τον αξιοποιούμε προς όφελός σας. 
                 Η εταιρεία μας βασίζεται στην αριστεία, την ακεραιότητα και τα νικηφόρα αποτελέσματα.
               </p>
             </div>

             <div className="space-y-6">
                {[
                  "Εξατομικευμένη Στρατηγική για Κάθε Υπόθεση",
                  "24/7 Πρόσβαση σε Ανώτερους Συνέταιρους",
                  "Αποδεδειγμένο Ιστορικό στα Ανώτατα Δικαστήρια",
                  "Διαφανής Δομή Αμοιβών"
                ].map((item, i) => (
                  <div key={i} className="feature-item flex items-center gap-4 group">
                    <CheckCircle2 size={24} className="text-[#d4af37] shrink-0" />
                    <span className="text-lg text-white font-medium group-hover:text-[#d4af37] transition-colors">{item}</span>
                  </div>
                ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/5 flex gap-8">
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-1">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Κερδισμένες Υποθέσεις</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-1">45+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Νομικά Βραβεία</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="attorneys" className="py-24 lg:py-32">
        <div className="container">
           <div className="section-header text-center max-w-3xl mx-auto mb-20">
              <span className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-3 block">Η Ομάδα Μας</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Κορυφαίοι Νομικοί</h2>
              <p className="text-gray-400">
                Οι εταίροι μας φέρνουν δεκαετίες συνδυασμένης εμπειρίας από κορυφαίες δικηγορικές εταιρείες και εισαγγελικά γραφεία.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  name: "Αλέξανδρος Μαύρος", 
                  role: "Διευθύνων Εταίρος", 
                  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                },
                { 
                  name: "Σοφία Ιωαννίδου", 
                  role: "Ανώτερη Δικηγόρος", 
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                },
                { 
                  name: "Μιχάλης Ρώσσης", 
                  role: "Επικεφαλής Εταιρικού", 
                  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                },
                { 
                  name: "Ελένη Γεωργίου", 
                  role: "Οικογενειακό Δίκαιο", 
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                },
              ].map((member, i) => (
                <div key={i} className="group relative">
                   <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm">
                      <Image 
                        src={member.img} 
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-80" />
                   </div>
                   <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-xl font-serif font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {member.name}
                      </h3>
                      <p className="text-[#d4af37] text-sm uppercase tracking-wider transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {member.role}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0d1221] border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-10">
              <div className="section-header">
                <span className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-3 block">Επικοινωνία</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ελάτε σε Επαφή</h2>
                <p className="text-gray-400 leading-relaxed">
                  Κάθε υπόθεση έχει χρονικά περιθώρια. Μην περιμένετε για να προστατεύσετε τα δικαιώματά σας. 
                  Επικοινωνήστε μαζί μας σήμερα για μια εμπιστευτική συμβουλευτική.
                </p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-start gap-4 p-6 bg-[#0a0f1d] border border-white/5 rounded-sm">
                    <Phone className="text-[#d4af37] mt-1" />
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white mb-1">Τηλέφωνο</h4>
                      <p className="text-gray-400">+30 210 123 4567</p>
                      <p className="text-gray-500 text-xs mt-1">Δευ-Παρ, 9πμ - 6μμ</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-6 bg-[#0a0f1d] border border-white/5 rounded-sm">
                    <MapPin className="text-[#d4af37] mt-1" />
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white mb-1">Γραφείο</h4>
                      <p className="text-gray-400">Λεωφόρος Κηφισίας 100<br/>Αθήνα, 115 26</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-6 bg-[#0a0f1d] border border-white/5 rounded-sm">
                    <Mail className="text-[#d4af37] mt-1" />
                    <div>
                      <h4 className="text-lg font-serif font-bold text-white mb-1">Email</h4>
                      <p className="text-gray-400">contact@blackwood.gr</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-[#0a0f1d] p-8 md:p-12 border border-white/5 rounded-sm h-fit">
               <h3 className="text-2xl font-serif font-bold text-white mb-8">Ζητήστε Συμβουλή</h3>
               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-gray-500">Όνομα</label>
                       <Input className="bg-[#0f1629] border-white/10 h-12 focus:border-[#d4af37] rounded-sm" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-gray-500">Επώνυμο</label>
                       <Input className="bg-[#0f1629] border-white/10 h-12 focus:border-[#d4af37] rounded-sm" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                    <Input className="bg-[#0f1629] border-white/10 h-12 focus:border-[#d4af37] rounded-sm" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Τύπος Υπόθεσης</label>
                    <select className="w-full bg-[#0f1629] border border-white/10 h-12 px-3 focus:outline-none focus:border-[#d4af37] text-white rounded-sm text-sm">
                       <option>Εταιρικό Δίκαιο</option>
                       <option>Ποινικό Δίκαιο</option>
                       <option>Οικογενειακό Δίκαιο</option>
                       <option>Άλλο / Δεν είμαι σίγουρος</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Λεπτομέρειες</label>
                    <Textarea className="bg-[#0f1629] border-white/10 min-h-[120px] focus:border-[#d4af37] rounded-sm" placeholder="Περιγράψτε σύντομα το ζήτημα..." />
                 </div>

                 <Button className="w-full h-14 bg-[#d4af37] hover:bg-[#b5952f] text-[#0a0f1d] font-bold text-xs uppercase tracking-widest rounded-sm">
                    Αποστολή Αιτήματος
                 </Button>

                 <p className="text-[10px] text-gray-600 text-center leading-relaxed">
                   Με την υποβολή αυτής της φόρμας, κατανοείτε ότι δεν δημιουργείται σχέση δικηγόρου-εντολέα έως ότου υπογραφεί γραπτή συμφωνία.
                 </p>
               </form>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-[#05080f] pt-24 pb-12 border-t border-white/5 font-sans">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center w-10 h-10 border border-[#d4af37]/30 rounded-sm bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 transition-colors">
                  <Scale size={20} className="text-[#d4af37]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-serif font-bold tracking-wide text-white leading-none">BLACKWOOD</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">ΝΟΜΙΚΟΙ ΣΥΜΒΟΥΛΟΙ</span>
                </div>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                Παρέχουμε νομικές υπηρεσίες υψηλού επιπέδου με ακεραιότητα και αποτελεσματικότητα. Η επιτυχία σας είναι η δέσμευσή μας.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                    <Linkedin size={14} />
                 </a>
                 <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                    <Twitter size={14} />
                 </a>
                 <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                    <Facebook size={14} />
                 </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="text-white font-serif font-bold mb-6">Σύνδεσμοι</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><button onClick={() => scrollToSection('expertise')} className="hover:text-[#d4af37] transition-colors">Τομείς Εξειδίκευσης</button></li>
                <li><button onClick={() => scrollToSection('attorneys')} className="hover:text-[#d4af37] transition-colors">Η Ομάδα Μας</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#d4af37] transition-colors">Σχετικά με Εμάς</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#d4af37] transition-colors">Επικοινωνία</button></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-white font-serif font-bold mb-6">Τομείς</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Εταιρικό Δίκαιο</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Ποινικό Δίκαιο</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Αστικές Διαφορές</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Διαχείριση Περιουσίας</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Πνευματική Ιδιοκτησία</a></li>
              </ul>
            </div>

            {/* Newsletter/Contact */}
            <div>
               <h4 className="text-white font-serif font-bold mb-6">Ενημέρωση</h4>
               <p className="text-gray-500 text-sm mb-4">
                 Εγγραφείτε για νομικά νέα και ενημερώσεις της εταιρείας μας.
               </p>
               <div className="flex gap-2">
                 <Input placeholder="Email" className="bg-[#0a0f1d] border-white/10 h-10 text-sm focus:border-[#d4af37] rounded-sm" />
                 <Button className="bg-[#d4af37] hover:bg-[#b5952f] text-[#0a0f1d] h-10 px-3 rounded-sm">
                   <ArrowRight size={16} />
                 </Button>
               </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="text-gray-600 text-xs uppercase tracking-wider">
                © 2025 Blackwood Law. Με επιφύλαξη παντός δικαιώματος.
             </div>
             
             <div className="flex gap-6">
                <a href="#" className="text-gray-600 text-xs hover:text-[#d4af37] transition-colors">Πολιτική Απορρήτου</a>
                <a href="#" className="text-gray-600 text-xs hover:text-[#d4af37] transition-colors">Όροι Χρήσης</a>
             </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

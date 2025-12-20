"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { Scale, Shield, FileText, Gavel, Users, Trophy, Quote, ArrowRight, Phone, Mail, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function LegalDemoView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useGSAP(() => {
    // Hero Animation
    gsap.from(".legal-animate", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out"
    })

    // Section Headers
    gsap.utils.toArray<HTMLElement>(".section-title").forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
    })

    // Stats Animation
    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0f1d] text-white font-serif selection:bg-[#d4af37] selection:text-[#0a0f1d]">
      {/* Nav */}
      <nav className="border-b border-white/10 bg-[#0a0f1d]/90 p-6 sticky top-14 z-40 backdrop-blur-md">
        <div className="container flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider uppercase flex items-center gap-3">
            <Scale className="text-[#d4af37] h-8 w-8" />
            <span className="hidden sm:inline">Blackwood & Συνεργάτες</span>
            <span className="sm:hidden">Blackwood</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-gray-400 font-sans">
            <Link href="#practice-areas" className="hover:text-[#d4af37] transition-colors">Τομείς</Link>
            <Link href="#attorneys" className="hover:text-[#d4af37] transition-colors">Δικηγόρος</Link>
            <Link href="#results" className="hover:text-[#d4af37] transition-colors">Επιτυχίες</Link>
            <Link href="#contact" className="hover:text-[#d4af37] transition-colors">Επικοινωνία</Link>
          </div>
          
          <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0f1d] uppercase tracking-wider font-sans text-xs sm:text-sm">
                Δωρεάν Συμβουλευτική
              </Button>
              
              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-[#d4af37]" onClick={toggleMenu}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0f1d] border-b border-white/10 py-8 px-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
                <div className="flex flex-col gap-4 text-sm tracking-widest uppercase text-gray-400 font-sans">
                    <Link href="#practice-areas" onClick={toggleMenu} className="hover:text-[#d4af37]">Τομείς</Link>
                    <Link href="#attorneys" onClick={toggleMenu} className="hover:text-[#d4af37]">Δικηγόρος</Link>
                    <Link href="#results" onClick={toggleMenu} className="hover:text-[#d4af37]">Επιτυχίες</Link>
                    <Link href="#contact" onClick={toggleMenu} className="hover:text-[#d4af37]">Επικοινωνία</Link>
                </div>
                <Button className="w-full bg-[#d4af37] text-[#0a0f1d] hover:bg-[#b5952f] uppercase tracking-wider font-sans">
                    Δωρεάν Συμβουλευτική
                </Button>
            </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/demos/legal/hero.jpg" alt="Justice" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/90 to-[#0a0f1d]/60"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111827] to-transparent opacity-50 pointer-events-none"></div>
        <div className="container border-l-2 border-[#d4af37] pl-8 md:pl-16 relative z-10">
          <h1 className="legal-animate text-5xl md:text-7xl font-bold leading-tight mb-6">
            Αλέξανδρος Μαύρος <br />
            <span className="text-[#d4af37] italic text-4xl md:text-6xl">Δικηγόρος Παρ&apos; Αρείω Πάγω</span>
          </h1>
          <p className="legal-animate text-xl text-gray-400 max-w-2xl mb-10 font-sans leading-relaxed">
            Εξειδικευμένη νομική εκπροσώπηση με προσωπική προσέγγιση. 
            Υπερασπιζόμαστε τα δικαιώματά σας με ακεραιότητα, στρατηγική και αποτελεσματικότητα.
          </p>
          <div className="legal-animate flex flex-col sm:flex-row gap-4 font-sans">
            <Button size="lg" className="bg-[#d4af37] text-[#0a0f1d] hover:bg-[#b5952f] text-lg px-8">
              Προγραμματίστε Ραντεβού
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:text-[#d4af37] text-lg px-8 border border-white/20 hover:border-[#d4af37]">
              Βιογραφικό
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section border-y border-white/10 bg-[#0d1221] py-16 font-sans">
          <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                  { value: "20+", label: "Έτη Εμπειρίας" },
                  { value: "500+", label: "Επιτυχημένες Υποθέσεις" },
                  { value: "100%", label: "Αφοσίωση" },
                  { value: "24/7", label: "Νομική Υποστήριξη" },
              ].map((stat, i) => (
                  <div key={i} className="stat-item">
                      <div className="text-4xl lg:text-5xl font-bold text-[#d4af37] mb-2 font-serif">{stat.value}</div>
                      <div className="text-gray-400 uppercase tracking-widest text-sm">{stat.label}</div>
                  </div>
              ))}
          </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 bg-[#0f1629] font-sans">
        <div className="container">
          <div className="section-title mb-16 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Τομείς Εξειδίκευσης</h2>
              <div className="h-1 w-20 bg-[#d4af37] mb-6"></div>
              <p className="text-gray-400 text-lg">Παρέχουμε υψηλού επιπέδου νομικές υπηρεσίες σε επιλεγμένους τομείς του δικαίου.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#0a0f1d] border-white/10 hover:border-[#d4af37] transition-all duration-300 group cursor-pointer">
                <CardHeader>
                    <Shield className="h-12 w-12 text-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-2xl font-serif text-white group-hover:text-[#d4af37] transition-colors">Ποινικό Δίκαιο</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Δυναμική υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας, με στόχο την προστασία της ελευθερίας και της υπόληψής σας.
                    </p>
                    <div className="flex items-center text-[#d4af37] text-sm font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        Περισσότερα <ArrowRight className="h-4 w-4" />
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0a0f1d] border-white/10 hover:border-[#d4af37] transition-all duration-300 group cursor-pointer">
                <CardHeader>
                    <Gavel className="h-12 w-12 text-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-2xl font-serif text-white group-hover:text-[#d4af37] transition-colors">Αστικό & Εμπορικό</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Συμβουλευτική και δικαστική εκπροσώπηση για ιδιώτες και επιχειρήσεις σε διαφορές, συμβάσεις και εταιρικά ζητήματα.
                    </p>
                    <div className="flex items-center text-[#d4af37] text-sm font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        Περισσότερα <ArrowRight className="h-4 w-4" />
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-[#0a0f1d] border-white/10 hover:border-[#d4af37] transition-all duration-300 group cursor-pointer">
                <CardHeader>
                    <FileText className="h-12 w-12 text-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-2xl font-serif text-white group-hover:text-[#d4af37] transition-colors">Κληρονομικό & Οικογενειακό</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Χειρισμός ευαίσθητων προσωπικών υποθέσεων με διακριτικότητα, σεβασμό και έμφαση στην εξεύρεση βιώσιμων λύσεων.
                    </p>
                    <div className="flex items-center text-[#d4af37] text-sm font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        Περισσότερα <ArrowRight className="h-4 w-4" />
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Attorney Section */}
      <section id="attorneys" className="py-24 bg-[#0a0f1d]">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                     {/* Placeholder for Lawyer Image */}
                     <div className="relative overflow-hidden w-full aspect-[3/4] bg-[#151b2e] border border-white/5 shadow-2xl">
                         <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                             <Users className="h-32 w-32 opacity-20" />
                         </div>
                     </div>
                     <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4af37]/10 -z-10"></div>
                     <div className="absolute -top-6 -left-6 w-48 h-48 border border-[#d4af37]/20 -z-10"></div>
                </div>
                
                <div>
                     <div className="section-title mb-8">
                        <h2 className="text-3xl md:text-5xl font-serif mb-6">Ο Δικηγόρος</h2>
                        <div className="h-1 w-20 bg-[#d4af37] mb-6"></div>
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Αλέξανδρος Μαύρος</h3>
                    <p className="text-[#d4af37] uppercase tracking-widest font-sans mb-6">Δικηγορος Παρ&apos; Αρειω Παγω</p>
                    
                    <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-lg">
                        <p>
                            Με περισσότερα από 20 χρόνια μάχιμης δικηγορίας, ο Αλέξανδρος Μαύρος έχει χειριστεί εκατοντάδες υποθέσεις με επιτυχία, κερδίζοντας την εμπιστοσύνη των εντολέων του και τον σεβασμό των δικαστηρίων.
                        </p>
                        <p>
                            Απόφοιτος της Νομικής Σχολής Αθηνών με μεταπτυχιακές σπουδές στο Ποινικό Δίκαιο, συνδυάζει τη βαθιά νομική κατάρτιση με τη στρατηγική σκέψη.
                        </p>
                        <p>
                            &quot;Στόχος μου είναι η απόλυτη προστασία των συμφερόντων του εντολέα μου, με ειλικρίνεια και μαχητικότητα.&quot;
                        </p>
                    </div>

                    {/* Signature removed or kept as simple text/placeholder if no image */}
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-24 bg-[#0f1629] font-sans relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
             <img src="/demos/legal/office.jpg" alt="Law Office" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                     <div className="section-title mb-10">
                        <h2 className="text-3xl md:text-5xl font-serif mb-6">Τι Λένε οι Πελάτες Μας</h2>
                        <div className="h-1 w-20 bg-[#d4af37] mb-6"></div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Η φήμη μας χτίζεται πάνω στην εμπιστοσύνη και τα αποτελέσματα που φέρνουμε στους πελάτες μας.
                        </p>
                    </div>
                    <div className="flex gap-4 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Trophy key={star} className="h-6 w-6 text-[#d4af37]" />
                        ))}
                    </div>
                    <p className="text-2xl font-serif italic text-white mb-6">
                        &quot;Ο επαγγελματισμός και η αφοσίωση της ομάδας ήταν πέρα από κάθε προσδοκία. Το αποτέλεσμα της υπόθεσής μου ήταν η απόλυτη δικαίωση.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0a0f1d] font-bold">ΓΠ</div>
                        <div>
                            <p className="font-bold text-white">Γιώργος Παπαδόπουλος</p>
                            <p className="text-sm text-gray-500">CEO, TechStart</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] w-full bg-[#0a0f1d]/80 backdrop-blur-sm border border-white/10 p-12 flex items-center justify-center">
                    <Quote className="h-32 w-32 text-[#d4af37] opacity-20" />
                    <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]"></div>
                    <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a0f1d] relative">
         <div className="container max-w-4xl relative z-10">
            <div className="bg-[#0f1629] border border-white/10 p-8 md:p-12 lg:p-16">
                <div className="section-title text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Δωρεάν Αξιολόγηση Υπόθεσης</h2>
                    <p className="text-gray-400 font-sans">
                        Συμπληρώστε τη φόρμα και ένας εξειδικευμένος δικηγόρος θα επικοινωνήσει μαζί σας εντός 24 ωρών.
                    </p>
                </div>

                <form className="space-y-6 font-sans">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ονοματεπωνυμο</label>
                             <Input className="bg-[#0a0f1d] border-white/10 text-white h-12 focus:border-[#d4af37] focus:ring-[#d4af37]/20" placeholder="Γιάννης Παππάς" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                             <Input className="bg-[#0a0f1d] border-white/10 text-white h-12 focus:border-[#d4af37] focus:ring-[#d4af37]/20" placeholder="giannis@example.com" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Τηλεφωνο</label>
                             <Input className="bg-[#0a0f1d] border-white/10 text-white h-12 focus:border-[#d4af37] focus:ring-[#d4af37]/20" placeholder="6912345678" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Τομεας</label>
                             <Input className="bg-[#0a0f1d] border-white/10 text-white h-12 focus:border-[#d4af37] focus:ring-[#d4af37]/20" placeholder="π.χ. Ποινικό Δίκαιο" />
                        </div>
                    </div>
                    <div className="space-y-2">
                         <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Περιγραφη Υποθεσης</label>
                         <Textarea className="bg-[#0a0f1d] border-white/10 text-white min-h-[150px] focus:border-[#d4af37] focus:ring-[#d4af37]/20" placeholder="Περιγράψτε συνοπτικά το ζήτημα που σας απασχολεί..." />
                    </div>
                    <Button className="w-full bg-[#d4af37] hover:bg-[#b5952f] text-[#0a0f1d] font-bold text-lg h-14 uppercase tracking-widest">
                        Αποστολη Αιτηματος
                    </Button>
                </form>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05080f] py-12 border-t border-white/5 font-sans text-gray-500 text-sm">
          <div className="container grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-1">
                <div className="text-xl font-bold tracking-wider uppercase flex items-center gap-2 text-white mb-6">
                    <Scale className="text-[#d4af37] h-6 w-6" />
                    <span>Blackwood</span>
                </div>
                <p className="leading-relaxed mb-6">
                    Αφοσιωμένοι στην παροχή νομικών υπηρεσιών υψηλού επιπέδου με ακεραιότητα και επαγγελματισμό.
                </p>
                <div className="flex gap-4 text-white">
                    {/* Social icons placeholders */}
                </div>
              </div>
              <div>
                  <h4 className="text-white font-bold uppercase tracking-widest mb-6">Πλοηγηση</h4>
                  <ul className="space-y-3">
                      <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Αρχική</Link></li>
                      <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Η Εταιρεία</Link></li>
                      <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Δικηγόροι</Link></li>
                      <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Νέα & Άρθρα</Link></li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-white font-bold uppercase tracking-widest mb-6">Επικοινωνια</h4>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#d4af37]" /> 210 123 4567</li>
                      <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#d4af37]" /> info@blackwood.gr</li>
                      <li className="flex items-center gap-3"><Users className="h-4 w-4 text-[#d4af37]" /> Λεωφ. Κηφισίας 100, Αθήνα</li>
                  </ul>
              </div>
              <div>
                   <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
                   <p className="mb-4">Εγγραφείτε για νομικά νέα και ενημερώσεις.</p>
                   <div className="flex gap-2">
                       <Input placeholder="Email" className="bg-[#0a0f1d] border-white/10 h-10" />
                       <Button className="bg-[#d4af37] text-[#0a0f1d] hover:bg-[#b5952f] h-10">OK</Button>
                   </div>
              </div>
          </div>
          <div className="container pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; 2024 Blackwood & Συνεργάτες. Με επιφύλαξη παντός δικαιώματος.</p>
              <div className="flex gap-6">
                  <Link href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</Link>
                  <Link href="#" className="hover:text-white transition-colors">Όροι Χρήσης</Link>
              </div>
          </div>
      </footer>
    </div>
  )
}

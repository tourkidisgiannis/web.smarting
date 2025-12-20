"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import {  ChefHat, Star, MapPin, Phone, Instagram, Facebook, Twitter, Calendar, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function RestaurantDemoView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  useGSAP(() => {
    // Hero Animation
    gsap.from(".hero-content > *", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    })

    // Menu Items Stagger
    gsap.utils.toArray<HTMLElement>(".menu-category").forEach((category) => {
      gsap.from(category.children, {
        scrollTrigger: {
            trigger: category,
            start: "top 80%"
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      })
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
    
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen bg-[#1c1c1c] text-orange-50 font-serif selection:bg-orange-500 selection:text-white">
      {/* Nav */}
      <nav className="fixed top-14 left-0 w-full z-40 bg-[#1c1c1c]/90 backdrop-blur-md border-b border-orange-500/20">
         <div className="container flex items-center justify-between h-20">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-widest uppercase text-orange-400">
                <ChefHat className="h-8 w-8" />
                <span>Gusto</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-orange-100/80 font-sans">
                <Link href="#about" className="hover:text-orange-400 transition-colors">Φιλοσοφια</Link>
                <Link href="#menu" className="hover:text-orange-400 transition-colors">Μενού</Link>
                <Link href="#reviews" className="hover:text-orange-400 transition-colors">Κριτικες</Link>
                <Link href="#reservations" className="hover:text-orange-400 transition-colors">Κρατησεις</Link>
            </div>
            
            <div className="flex items-center gap-4">
                <Button variant="outline" className="hidden md:flex border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-sans uppercase tracking-wider rounded-none">
                    Κλειστε Τραπεζι
                </Button>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-orange-400" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
         </div>

         {/* Mobile Menu Overlay */}
         {isMenuOpen && (
             <div className="md:hidden absolute top-20 left-0 w-full bg-[#1c1c1c] border-b border-orange-500/20 py-8 px-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
                 <div className="flex flex-col gap-4 text-sm uppercase tracking-widest text-orange-100/80 font-sans">
                     <Link href="#about" onClick={toggleMenu} className="hover:text-orange-400">Φιλοσοφια</Link>
                     <Link href="#menu" onClick={toggleMenu} className="hover:text-orange-400">Μενού</Link>
                     <Link href="#reviews" onClick={toggleMenu} className="hover:text-orange-400">Κριτικες</Link>
                     <Link href="#reservations" onClick={toggleMenu} className="hover:text-orange-400">Κρατησεις</Link>
                 </div>
                 <Button variant="outline" className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-sans uppercase tracking-wider rounded-none">
                    Κλειστε Τραπεζι
                 </Button>
             </div>
         )}
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         {/* Background Image Placeholder */}
         <div className="absolute inset-0 bg-black/40 z-10"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-60 scale-105 animate-slow-zoom"></div>
         
         <div className="relative z-20 text-center container px-4 hero-content">
            <div className="inline-block border-y border-orange-400/50 py-2 mb-6">
                <p className="text-orange-300 text-sm md:text-base font-sans font-bold uppercase tracking-[0.4em]">
                   Αυθεντικη Ιταλικη Κουζινα
                </p>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none tracking-tight">
               Γεύση από <br/><span className="text-orange-500 italic font-light">Παράδοση</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
               Ένα γαστρονομικό ταξίδι στην καρδιά της Ιταλίας, με φρέσκα υλικά, πάθος και σεβασμό στην κληρονομιά μας.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center font-sans">
               <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black font-bold uppercase tracking-widest px-10 h-14 rounded-none text-lg">
                  Δείτε το Μενού
               </Button>
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest px-10 h-14 rounded-none text-lg">
                  Κρατησεις
               </Button>
            </div>
         </div>
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <div className="w-[1px] h-16 bg-gradient-to-b from-orange-400 to-transparent"></div>
         </div>
      </section>

      {/* Philosophy / About */}
      <section id="about" className="py-24 bg-[#232323]">
          <div className="container grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                  <div className="absolute -inset-4 border border-orange-500/30 rotate-3"></div>
                  <div className="relative aspect-[4/5] bg-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      {/* Chef Image Placeholder */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2680&auto=format&fit=crop')] bg-cover bg-center"></div>
                  </div>
              </div>
              <div className="space-y-8 section-title">
                  <h2 className="text-4xl md:text-6xl font-bold italic text-orange-400">Η Φιλοσοφία μας</h2>
                  <p className="text-xl text-gray-300 font-sans leading-relaxed">
                      Στο <span className="text-orange-400 font-bold">Gusto</span>, πιστεύουμε ότι το φαγητό είναι μια μορφή τέχνης και αγάπης. Κάθε πιάτο διηγείται μια ιστορία από την Τοσκάνη, φτιαγμένο με τα πιο αγνά υλικά και αφοσίωση στην αυθεντικότητα.
                  </p>
                  <p className="text-lg text-gray-400 font-sans leading-relaxed">
                      Ο σεφ μας, Marco Rossi, φέρνει μαζί του 20 χρόνια εμπειρίας και μυστικές συνταγές που περνούν από γενιά σε γενιά. Εδώ δεν σερβίρουμε απλά φαγητό, προσφέρουμε εμπειρίες που μένουν αξέχαστες.
                  </p>
                  <div className="pt-4 flex items-center gap-4 text-orange-300 font-sans text-sm uppercase tracking-widest">
                      <div className="h-px w-12 bg-orange-500"></div>
                      <span>Marco Rossi, Executive Chef</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 bg-[#1c1c1c]">
          <div className="container">
              <div className="text-center mb-20 section-title">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6">Το Μενού</h2>
                  <p className="text-orange-400 font-sans uppercase tracking-[0.2em]">Επιλογές που ξεχωρίζουν</p>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                  {/* Starters */}
                  <div className="space-y-12 menu-category">
                      <h3 className="text-3xl font-bold italic text-orange-200 border-b border-orange-500/20 pb-4">Ορεκτικά</h3>
                      {[
                          { name: "Carpaccio di Manzo", desc: "Λεπτές φέτες μοσχαριού, ρόκα, παρμεζάνα, λάδι τρούφας", price: "18€" },
                          { name: "Bruschetta Al Pomodoro", desc: "Φρυγανισμένο ψωμί, φρέσκια ντομάτα, σκόρδο, βασιλικός", price: "9€" },
                          { name: "Burrata & Prosciutto", desc: "Κρεμώδης μπουράτα, προσούτο Πάρμας, σύκα", price: "16€" },
                          { name: "Arancini Siciliani", desc: "Τραγανές μπάλες ριζότο με σαφράν και μοτσαρέλα", price: "12€" },
                      ].map((item, i) => (
                          <div key={i} className="group">
                              <div className="flex justify-between items-baseline mb-2">
                                  <h4 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{item.name}</h4>
                                  <div className="flex-1 border-b border-dotted border-gray-700 mx-4"></div>
                                  <span className="text-orange-400 font-bold font-sans">{item.price}</span>
                              </div>
                              <p className="text-gray-500 font-sans text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>

                  {/* Main Courses */}
                  <div className="space-y-12 menu-category">
                      <h3 className="text-3xl font-bold italic text-orange-200 border-b border-orange-500/20 pb-4">Κυρίως Πιάτα</h3>
                      {[
                          { name: "Tagliatelle al Tartufo", desc: "Χειροποίητα ζυμαρικά, μαύρη τρούφα, κρέμα παρμεζάνας", price: "24€" },
                          { name: "Ossobuco alla Milanese", desc: "Σιγομαγειρεμένο μοσχαράκι, ριζότο σαφράν, gremolata", price: "28€" },
                          { name: "Pizza Napoletana", desc: "Σάλτσα San Marzano, bufala mozzarella, φρέσκος βασιλικός", price: "16€" },
                          { name: "Bistecca alla Fiorentina", desc: "T-bone steak σχάρας (800g), πατάτες δεντρολίβανου", price: "45€" },
                      ].map((item, i) => (
                          <div key={i} className="group">
                              <div className="flex justify-between items-baseline mb-2">
                                  <h4 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{item.name}</h4>
                                  <div className="flex-1 border-b border-dotted border-gray-700 mx-4"></div>
                                  <span className="text-orange-400 font-bold font-sans">{item.price}</span>
                              </div>
                              <p className="text-gray-500 font-sans text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
              
              <div className="text-center mt-16 font-sans">
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black rounded-none px-8 py-6 h-auto text-lg uppercase tracking-widest">
                      Δείτε ολο τον Κατάλογο
                  </Button>
              </div>
          </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-[#232323]">
          <div className="container">
               <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { txt: "Η καλύτερη ιταλική εμπειρία που είχα στην Αθήνα. Η πίτσα τους είναι απλά μαγική.", author: "Ελένη Κ." },
                      { txt: "Εξαιρετική ατμόσφαιρα και άψογο σέρβις. Το ριζότο τρούφας είναι must!", author: "Γιώργος Π." },
                      { txt: "Ένα κρυμμένο διαμάντι. Αυθεντικές γεύσεις που σε ταξιδεύουν.", author: "Μαρία Σ." },
                  ].map((review, i) => (
                      <Card key={i} className="bg-[#1c1c1c] border-none p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                          <CardContent className="pt-6">
                              <div className="flex justify-center gap-1 text-orange-400 mb-6">
                                  {[1,2,3,4,5].map(s => <Star key={s} className="fill-current w-4 h-4" />)}
                              </div>
                              <p className="text-gray-300 italic mb-6 font-serif text-lg leading-relaxed">&quot;{review.txt}&quot;</p>
                              <p className="text-orange-400 font-bold font-sans text-sm uppercase tracking-wider">- {review.author}</p>
                          </CardContent>
                      </Card>
                  ))}
               </div>
          </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-24 bg-orange-500 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container relative z-10">
              <div className="bg-[#1c1c1c] max-w-4xl mx-auto p-8 md:p-16 shadow-2xl">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Κάντε Κράτηση</h2>
                      <p className="text-orange-400 font-sans">Εξασφαλίστε το τραπέζι σας για μια αξέχαστη βραδιά.</p>
                  </div>

                  <form className="space-y-6 font-sans">
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ονομα</label>
                              <Input className="bg-[#232323] border-gray-700 text-white h-12 rounded-none focus:border-orange-500" placeholder="Το όνομά σας" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Τηλεφωνο</label>
                              <Input className="bg-[#232323] border-gray-700 text-white h-12 rounded-none focus:border-orange-500" placeholder="6912345678" />
                          </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ημερομηνια</label>
                               <div className="relative">
                                  <Input type="date" className="bg-[#232323] border-gray-700 text-white h-12 rounded-none focus:border-orange-500" />
                               </div>
                          </div>
                          <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ωρα</label>
                               <Select>
                                  <SelectTrigger className="bg-[#232323] border-gray-700 text-white h-12 rounded-none w-full">
                                      <SelectValue placeholder="Επιλέξτε ώρα" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#232323] border-gray-700 text-white">
                                      <SelectItem value="19:00">19:00</SelectItem>
                                      <SelectItem value="20:00">20:00</SelectItem>
                                      <SelectItem value="21:00">21:00</SelectItem>
                                      <SelectItem value="22:00">22:00</SelectItem>
                                  </SelectContent>
                               </Select>
                          </div>
                          <div className="space-y-2">
                               <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ατομα</label>
                               <Select>
                                  <SelectTrigger className="bg-[#232323] border-gray-700 text-white h-12 rounded-none w-full">
                                      <SelectValue placeholder="2 Άτομα" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#232323] border-gray-700 text-white">
                                      <SelectItem value="2">2 Άτομα</SelectItem>
                                      <SelectItem value="4">4 Άτομα</SelectItem>
                                      <SelectItem value="6">6 Άτομα</SelectItem>
                                      <SelectItem value="8">8+ Άτομα</SelectItem>
                                  </SelectContent>
                               </Select>
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ειδικα Αιτηματα</label>
                          <Textarea className="bg-[#232323] border-gray-700 text-white min-h-[100px] rounded-none focus:border-orange-500" placeholder="Αλλεργίες, γενέθλια, κλπ." />
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold h-14 uppercase tracking-widest text-lg rounded-none mt-4">
                          Επιβεβαιωση Κρατησης
                      </Button>
                  </form>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-16 border-t border-gray-800 font-sans text-sm text-gray-400">
          <div className="container grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2 space-y-6">
                 <div className="flex items-center gap-2 font-bold text-2xl tracking-widest uppercase text-white">
                    <ChefHat className="h-6 w-6 text-orange-500" />
                    <span>Gusto</span>
                 </div>
                 <p className="max-w-md leading-relaxed">
                     Μια γαστρονομική εμπειρία που συνδυάζει την παράδοση με τη σύγχρονη αισθητική. Σας περιμένουμε να μοιραστούμε το πάθος μας για το καλό φαγητό.
                 </p>
                 <div className="flex gap-4">
                     <Link href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></Link>
                     <Link href="#" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></Link>
                     <Link href="#" className="hover:text-orange-500 transition-colors"><Twitter className="h-5 w-5" /></Link>
                 </div>
              </div>

              <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-6">Επικοινωνια</h4>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                          <span>Κολοκοτρώνη 15, Αθήνα<br/>105 62</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                          <span>210 321 4567</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-orange-500 shrink-0" />
                          <span>Δευ-Κυρ: 13:00 - 01:00</span>
                      </li>
                  </ul>
              </div>

              <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
                  <p className="mb-4">Μείνετε ενημερωμένοι για τα νέα μενού και τις εκδηλώσεις μας.</p>
                  <div className="flex gap-2">
                       <Input placeholder="Email" className="bg-[#232323] border-gray-700 h-10 rounded-none" />
                       <Button className="bg-orange-500 hover:bg-orange-600 text-black h-10 rounded-none">OK</Button>
                  </div>
              </div>
          </div>
          <div className="container pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
               <p>&copy; 2024 Gusto Ristorante. All rights reserved.</p>
               <div className="flex gap-6">
                   <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                   <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
               </div>
          </div>
      </footer>
    </div>
  )
}

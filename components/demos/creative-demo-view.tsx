"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { Menu, X, ArrowUpRight, Palette, Layers, Monitor, Type, Eye, MousePointer2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CreativeDemoView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useGSAP(() => {
    // Hero Title Animation
    gsap.from(".creative-title span", {
      y: 100,
      opacity: 0,
      skewY: 10,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out"
    })

    // Marquee Animation
    gsap.to(".marquee-content", {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "linear",
    })

    // Reveal Elements on Scroll
    gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
    })

  }, { scope: containerRef })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-mono selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      {/* Navbar overlay */}
      <nav className="fixed top-14 left-0 w-full p-6 z-40 flex justify-between items-center mix-blend-difference">
         <div className="text-xl font-black uppercase tracking-widest border-2 border-white px-2 py-1">Studio_X</div>
         <button onClick={toggleMenu} className="p-2 hover:bg-white hover:text-black transition-colors rounded-full border border-white/20">
           {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
         </button>
      </nav>

      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 bg-[#ccff00] text-black z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-expo ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col gap-8 text-center">
              {['Εργα', 'Υπηρεσιες', 'Στουντιο', 'Επαφη'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-6xl md:text-8xl font-black uppercase hover:italic transition-all hover:tracking-widest">
                      {item}
                  </Link>
              ))}
          </div>
      </div>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center p-6 relative overflow-hidden border-b border-white/10">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
         
         <div className="relative z-10 text-center mix-blend-difference">
            <h1 className="creative-title text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter mix-blend-color-dodge">
              <span className="block">Ψηφιακο</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-pink-500">Χαος</span>
              <span className="block">& Τάξη</span>
            </h1>
            <p className="mt-8 text-sm md:text-xl uppercase tracking-[0.3em] opacity-70">
              Ανατρεπτικο Design Agency
            </p>
         </div>

         {/* Scrolling Marquee */}
         <div className="absolute bottom-12 w-full overflow-hidden whitespace-nowrap border-y border-white/10 py-3 md:py-6 bg-black/50 backdrop-blur-sm">
            <div className="marquee-content inline-block text-4xl md:text-6xl font-black text-[#ccff00] uppercase tracking-tighter">
               BRANDING — WEB DESIGN — ART DIRECTION — TYPOGRAPHY — DEVELOPMENT — STRATEGY — MOTION — 3D — 
               BRANDING — WEB DESIGN — ART DIRECTION — TYPOGRAPHY — DEVELOPMENT — STRATEGY — MOTION — 3D — 
            </div>
         </div>
         
         <div className="absolute bottom-0 left-0 p-6 font-xs uppercase text-gray-500 hidden md:block">
            Athens, GR <br/> EST. 2024
         </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="border-b border-white/10">
         <div className="grid md:grid-cols-2">
            {[
                { id: "01", title: "Project Alpha", cat: "Branding / Web", color: "hover:bg-purple-600" },
                { id: "02", title: "Neon City", cat: "Art Direction", color: "hover:bg-pink-600" },
                { id: "03", title: "The Void", cat: "3D Motion", color: "hover:bg-blue-600" },
                { id: "04", title: "Cyber Punk", cat: "Typography", color: "hover:bg-[#ccff00] hover:text-black" }
            ].map((project, i) => (
                <div key={i} className={`aspect-square border-b md:border-b-0 border-r border-white/10 p-8 md:p-12 flex flex-col justify-between group cursor-pointer transition-colors duration-500 ${project.color}`}>
                    <div className="flex justify-between items-start">
                        <span className="text-xl font-bold border rounded-full px-3 py-1 border-white/20 group-hover:border-current">{project.id}</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" size={48} />
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black uppercase mb-2 leading-none">{project.title}</h3>
                        <p className="uppercase tracking-widest opacity-60 group-hover:opacity-100">{project.cat}</p>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* Services - Big Type */}
      <section id="services" className="py-24 md:py-48 bg-[#111] border-b border-white/10">
          <div className="container mx-auto">
              <div className="mb-24 reveal-text">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccff00] mb-4">Οι Υπηρεσιες μας</h2>
                  <p className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
                      Δημιουργούμε ψηφιακές εμπειρίες που σπάνε τους κανόνες και μένουν αξέχαστες.
                  </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { icon: <Palette size={40} />, title: "Branding", desc: "Οπτική ταυτότητα που ξεχωρίζει." },
                      { icon: <Monitor size={40} />, title: "Web Design", desc: "Ιστοσελίδες υψηλής αισθητικής και απόδοσης." },
                      { icon: <Layers size={40} />, title: "Development", desc: "Κώδικας καθαρός, γρήγορος, αξιόπιστος." },
                      { icon: <Type size={40} />, title: "Content", desc: "Λέξεις που πείθουν και αφηγούνται ιστορίες." },
                  ].map((service, i) => (
                      <div key={i} className="reveal-text bg-black border border-white/10 p-8 hover:border-[#ccff00] transition-colors group">
                          <div className="text-[#ccff00] mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                          <h3 className="text-2xl font-bold uppercase mb-4">{service.title}</h3>
                          <p className="text-gray-400">{service.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* About / Manifesto */}
      <section id="studio" className="py-24 md:py-48 bg-[#ccff00] text-black">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div>
                 <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
                     We Are <br/> Studio_X
                 </h2>
                 <p className="text-xl md:text-2xl font-bold leading-tight mb-8 max-w-lg">
                     Μια ομάδα από σχεδιαστές, developers και ονειροπόλους που αρνούνται το μέτριο. Πιστεύουμε στο design που προκαλεί συναισθήματα.
                 </p>
                 <Button className="bg-black text-white hover:bg-white hover:text-black rounded-none h-16 px-12 text-xl uppercase font-bold border-2 border-black transition-all">
                     Το Μανιφεστο
                 </Button>
             </div>
             <div className="relative">
                 <div className="aspect-[3/4] bg-black p-2 md:rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div className="h-full w-full border-2 border-[#ccff00] flex items-center justify-center p-8">
                         <div className="text-center">
                             <Eye size={80} className="text-[#ccff00] mx-auto mb-6" />
                             <h4 className="text-[#ccff00] text-4xl font-black uppercase">Vision</h4>
                         </div>
                     </div>
                 </div>
                 <div className="absolute -bottom-10 -left-10 md:left-10 bg-white p-6 border-4 border-black font-bold text-xl uppercase transform -rotate-6">
                     Since 2024
                 </div>
             </div>
          </div>
      </section>

      {/* Contact Footer */}
      <section id="contact" className="py-24 md:py-32 bg-black border-t border-white/10 text-center">
          <div className="container mx-auto">
              <div className="mb-12 reveal-text">
                  <h2 className="text-5xl md:text-8xl font-black uppercase mb-6 hover:text-[#ccff00] transition-colors cursor-default">
                      Lets Talk
                  </h2>
                  <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                      Έχετε μια τρελή ιδέα; Ας την κάνουμε πραγματικότητα.
                  </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 mb-24 reveal-text">
                  <Button className="bg-[#ccff00] text-black hover:bg-white rounded-none h-16 w-full md:w-auto px-12 text-xl uppercase font-bold">
                      Start Project
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-16 w-full md:w-auto px-12 text-xl uppercase font-bold">
                      Hello@studiox.gr
                  </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12 text-sm uppercase tracking-widest text-gray-500">
                  <div>
                      <h4 className="text-white mb-4">Athens</h4>
                      <p>Ermou 123, Syntagma</p>
                      <p>105 64, Greece</p>
                  </div>
                  <div>
                      <h4 className="text-white mb-4">Socials</h4>
                      <div className="flex flex-col gap-2">
                          <Link href="#" className="hover:text-[#ccff00]">Instagram</Link>
                          <Link href="#" className="hover:text-[#ccff00]">Behance</Link>
                          <Link href="#" className="hover:text-[#ccff00]">LinkedIn</Link>
                      </div>
                  </div>
                  <div>
                      <h4 className="text-white mb-4">Legal</h4>
                      <div className="flex flex-col gap-2">
                          <Link href="#" className="hover:text-[#ccff00]">Privacy Policy</Link>
                          <Link href="#" className="hover:text-[#ccff00]">Terms of Use</Link>
                      </div>
                  </div>
              </div>
              
              <div className="mt-24 text-gray-700 text-xs uppercase tracking-widest">
                  &copy; {new Date().getFullYear()} Studio_X Agency. All Rights Reserved.
              </div>
          </div>
      </section>

      {/* Custom Cursor Hint */}
      <div className="fixed bottom-8 right-8 mix-blend-difference z-50 pointer-events-none hidden md:block animate-bounce">
         <MousePointer2 className="text-white" size={32} />
      </div>
    </div>
  )
}

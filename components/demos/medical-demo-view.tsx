"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  Heart,
  Activity,
  UserPlus,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Quote,
  CheckCircle2,
  Stethoscope,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MedicalDemoView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(
    () => {
      // Hero
      gsap.from(".medical-hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Stats
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Section headers
      gsap.utils.toArray<HTMLElement>(".section-header").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // Cards
      gsap.utils.toArray<HTMLElement>(".animate-card").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-blue-600">
            <Heart className="fill-current h-8 w-8" />
            <span>MediCare</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="#about">Σχετικά</Link>
            <Link href="#services">Υπηρεσίες</Link>
            <Link href="#doctors">Ιατροί</Link>
            <Link href="#testimonials">Μαρτυρίες</Link>
            <Link href="#contact">Επικοινωνία</Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex" asChild>
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
              </Link>
            </Button>

            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
              Κλείστε Ραντεβού
            </Button>

            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl py-8 px-6">
            <div className="flex flex-col gap-4 text-lg text-slate-600">
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                Σχετικά
              </Link>
              <Link href="#services" onClick={() => setIsMenuOpen(false)}>
                Υπηρεσίες
              </Link>
              <Link href="#doctors" onClick={() => setIsMenuOpen(false)}>
                Ιατροί
              </Link>
              <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Μαρτυρίες
              </Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Επικοινωνία
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32 xl:py-40">
        <div className="container relative z-10 grid gap-12 lg:gap-24 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="medical-hero-text inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Δεχόμαστε Νέους Ασθενείς
            </div>
            <h1 className="medical-hero-text text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
              Προηγμένη Φροντίδα για <br />
              <span className="text-blue-600">Καλύτερη Ζωή</span>
            </h1>
            <p className="medical-hero-text text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg">
              Ζήστε την εμπειρία παγκόσμιας κλάσης υγειονομικής περίθαλψης με
              προσωπική πινελιά. Η διεπιστημονική μας ομάδα είναι αφοσιωμένη
              στην ευημερία σας.
            </p>
            <div className="medical-hero-text flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-lg shadow-xl shadow-blue-600/20"
              >
                Κλείστε Ραντεβού
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                Υπηρεσίες
              </Button>
            </div>
            <div className="medical-hero-text pt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full border-2 border-white bg-slate-200"
                  />
                ))}
              </div>
              <p className="font-medium">Μας εμπιστεύονται 10.000+ ασθενείς</p>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-160 rounded-[2rem] bg-blue-50 overflow-hidden shadow-2xl medical-hero-text">
            <div className="absolute inset-0">
              <Image
                src="/demos/medical/hero.png"
                alt="Medical Team"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-blue-600 py-20 text-white">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Χρόνια Εμπειρίας", value: "25+" },
            { label: "Εξειδικευμένοι Ιατροί", value: "50+" },
            { label: "Ιατρεία", value: "12" },
            { label: "Ικανοποίηση Ασθενών", value: "99%" },
          ].map((stat, i) => (
            <div key={i} className="stat-item space-y-3">
              <h3 className="text-5xl lg:text-6xl font-bold tracking-tight">
                {stat.value}
              </h3>
              <p className="text-blue-100 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-auto h-125 rounded-2xl bg-slate-100 overflow-hidden order-2 lg:order-1 shadow-lg">
            <div className="absolute inset-0">
              <Image
                src="/demos/medical/about.png"
                alt="Caring Doctor"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="section-header space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Γιατί να επιλέξετε τη MediCare;
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Πιστεύουμε ότι η υγειονομική περίθαλψη πρέπει να είναι
                προσβάσιμη, εξατομικευμένη και αποτελεσματική. Η ολιστική μας
                προσέγγιση συνδυάζει την ιατρική εμπειρογνωμοσύνη με την
                προληπτική φροντίδα.
              </p>
            </div>
            <ul className="space-y-6 pt-4">
              {[
                "Δυνατότητα ραντεβού αυθημερόν",
                "Διαγνωστική απεικόνιση τελευταίας τεχνολογίας",
                "Portal ασθενών για εύκολη πρόσβαση στο ιστορικό",
                "Ολοκληρωμένη υποστήριξη ασφαλίσεων",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-slate-700 text-lg"
                >
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button
                variant="link"
                className="text-blue-600 p-0 text-lg font-semibold"
              >
                Μάθετε περισσότερα για εμάς &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 lg:py-32 bg-slate-50">
        <div className="container">
          <div className="section-header text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Τμήματα & Ειδικότητες
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Ολοκληρωμένη φροντίδα που καλύπτει κάθε πτυχή της υγείας σας, από
              την πρωτοβάθμια περίθαλψη έως την εξειδικευμένη χειρουργική.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="animate-card border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-8">
                <div className="h-14 w-14 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-rose-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Καρδιολογία</CardTitle>
                <CardDescription className="text-base">
                  Υγεία καρδιάς & χειρουργική
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-slate-600 leading-relaxed">
                Προηγμένη καρδιολογική φροντίδα, συμπεριλαμβανομένων
                διαγνωστικών, επεμβατικών διαδικασιών και προγραμμάτων
                αποκατάστασης.
              </CardContent>
            </Card>
            <Card className="animate-card border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-8">
                <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <UserPlus className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Παιδιατρική</CardTitle>
                <CardDescription className="text-base">
                  Φροντίδα παιδιών & εφήβων
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-slate-600 leading-relaxed">
                Συμπονετική φροντίδα για τα μικρά σας, από ελέγχους νεογνών έως
                εξετάσεις υγείας εφήβων.
              </CardContent>
            </Card>
            <Card className="animate-card border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-8">
                <div className="h-14 w-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Activity className="h-7 w-7 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Νευρολογία</CardTitle>
                <CardDescription className="text-base">
                  Ειδικοί εγκεφάλου & σπονδυλικής στήλης
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-slate-600 leading-relaxed">
                Εξειδικευμένη διάγνωση και θεραπεία για διαταραχές του νευρικού
                συστήματος, του εγκεφάλου και της σπονδυλικής στήλης.
              </CardContent>
            </Card>
            <Card className="animate-card border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-8">
                <div className="h-14 w-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                  <Stethoscope className="h-7 w-7 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Γενική Ιατρική</CardTitle>
                <CardDescription className="text-base">
                  Πρωτοβάθμια φροντίδα υγείας
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 text-slate-600 leading-relaxed">
                Το πρώτο σημείο επαφής για όλα τα θέματα υγείας, με εστίαση στην
                πρόληψη και τη συνεχή ευεξία.
              </CardContent>
            </Card>
            {/* Add empty cards to maintain grid if needed or remove comment */}
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section id="doctors" className="py-24 lg:py-32 bg-white">
        <div className="container">
          <div className="section-header text-center mb-20 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Η Ιατρική μας Ομάδα
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Κορυφαίοι ιατροί με πολυετή εμπειρία και εξειδίκευση στον τομέα
              τους.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Δρ. Μαρία Παπαδοπούλου",
                role: "Καρδιολόγος",
                img: "/demos/medical/dr-maria.png",
                color: "bg-blue-100",
              },
              {
                name: "Δρ. Γιώργος Δημητρίου",
                role: "Παιδίατρος",
                img: "/demos/medical/dr-giorgos.png",
                color: "bg-green-100",
              },
              {
                name: "Δρ. Ελένη Κωνσταντίνου",
                role: "Νευρολόγος",
                img: "/demos/medical/dr-eleni.png",
                color: "bg-purple-100",
              },
              {
                name: "Δρ. Ιωάννης Σταύρου",
                role: "Χειρουργός",
                img: "/demos/medical/dr-ioannis.png",
                color: "bg-orange-100",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="animate-card group text-center cursor-pointer"
              >
                <div
                  className={`mx-auto mb-8 h-56 w-56 rounded-full ${doc.color} overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl`}
                >
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {doc.name}
                </h3>
                <p className="text-blue-600 font-medium text-lg mb-4">
                  {doc.role}
                </p>
                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 lg:py-32 bg-blue-900 text-white"
      >
        <div className="container">
          <div className="section-header text-center mb-20">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">
              Ιστορίες Ασθενών
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Διαβάστε τις εμπειρίες ανθρώπων που μας εμπιστεύτηκαν την υγεία
              τους.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="animate-card bg-blue-800 border-none text-blue-50 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <Quote className="h-10 w-10 text-blue-400 opacity-50" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="italic text-lg leading-relaxed">
                    &quot;Η φροντίδα που έλαβα ήταν εξαιρετική. Οι γιατροί
                    αφιέρωσαν χρόνο για να μου εξηγήσουν τα πάντα με σαφήνεια.
                    Μια πραγματικά ανθρώπινη προσέγγιση.&quot;
                  </p>
                  <div className="flex items-center gap-4 border-t border-blue-700/50 pt-6">
                    <Avatar className="h-12 w-12 border-2 border-blue-400">
                      <AvatarFallback>A{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-bold text-base">Άννα Π.</p>
                      <div className="flex text-yellow-500 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-3.5 w-3.5 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment & Contact */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="section-header space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl mb-6">
                Επικοινωνία
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Έχετε ερωτήσεις ή θέλετε να προγραμματίσετε μια επίσκεψη;
                Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-xl transition-colors">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">
                    Επισκεφθείτε μας
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Λεωφόρος Κηφισίας 100
                    <br />
                    Αθήνα, 115 26
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-xl transition-colors">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">
                    Καλέστε μας
                  </h3>
                  <p className="text-slate-600 text-lg">
                    210 123 4567
                    <br />
                    Δευ-Παρ, 8πμ-8μμ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group cursor-pointer hover:bg-slate-50 p-4 -mx-4 rounded-xl transition-colors">
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">
                    Ώρες Λειτουργίας
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Καθημερινές: 8:00 - 20:00
                    <br />
                    Σαββατοκύριακο: 9:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="animate-card border-none shadow-2xl overflow-hidden rounded-2xl">
            <CardHeader className="bg-slate-50 p-8 border-b">
              <CardTitle className="text-2xl">Κλείστε Ραντεβού</CardTitle>
              <CardDescription className="text-base mt-2">
                Θα επιβεβαιώσουμε το ραντεβού σας εντός 24 ωρών.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Όνομα
                  </label>
                  <Input
                    placeholder="Γιάννης"
                    className="h-12"
                    suppressHydrationWarning
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Επώνυμο
                  </label>
                  <Input
                    placeholder="Παπαδόπουλος"
                    className="h-12"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="giannis@example.com"
                  className="h-12"
                  suppressHydrationWarning
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700">
                  Τηλέφωνο
                </label>
                <Input
                  type="tel"
                  placeholder="6912345678"
                  className="h-12"
                  suppressHydrationWarning
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700">
                  Αιτία Επίσκεψης
                </label>
                <Textarea
                  placeholder="Περιγράψτε τα συμπτώματά σας..."
                  className="min-h-[120px] resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
                Αποστολή Αιτήματος
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 lg:py-20 border-t border-slate-800">
        <div className="container grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-bold text-2xl text-white">
              <Heart className="fill-current text-blue-500" />
              <span>MediCare</span>
            </div>
            <p className="text-base leading-relaxed text-slate-400">
              Παρέχουμε εξαιρετικές υπηρεσίες υγείας για πάνω από 25 χρόνια. Η
              υγεία σας είναι η προτεραιότητά μας.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Σύνδεσμοι</h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Αρχική
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  Σχετικά
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link
                  href="#doctors"
                  className="hover:text-blue-400 transition-colors"
                >
                  Ιατροί
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-6">
              Φροντίδα Ασθενών
            </h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portal Ασθενών
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Ραντεβού
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Ασφάλειες
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Επείγοντα
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Newsletter</h3>
            <p className="text-base mb-6 text-slate-400">
              Εγγραφείτε για συμβουλές υγείας και νέα.
            </p>
            <div className="flex gap-2">
              <Input
                className="bg-slate-800 border-slate-700 text-white h-11"
                placeholder="Email"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 h-11 px-6">
                OK
              </Button>
            </div>
          </div>
        </div>
        <div className="container pt-8 border-t border-slate-800 text-center text-sm md:flex md:justify-between md:text-left text-slate-500">
          <p>&copy; 2024 MediCare Clinic. Με επιφύλαξη παντός δικαιώματος.</p>
          <p className="mt-4 md:mt-0">Πολιτική Απορρήτου | Όροι Χρήσης</p>
        </div>
      </footer>
    </div>
  );
}

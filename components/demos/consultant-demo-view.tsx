"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  PieChart,
  Target,
  BarChart,
  CheckCircle2,
  ArrowRight,
  Building,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ... (inside the component return)

<p className="text-slate-300 leading-relaxed">
  &quot;Η συνεργασία με τη StratEx ήταν καθοριστική. Μέσα σε 12 μήνες, αυξήσαμε
  την κερδοφορία μας κατά 40% και μειώσαμε τα λειτουργικά έξοδα κατά 25%.&quot;
</p>;

export function ConsultantDemoView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(
    () => {
      // Hero Animation
      gsap.from(".consult-hero", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Section Headers
      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900"
    >
      {/* Nav */}
      <nav className="bg-white/90 border-b border-slate-200 sticky top-14 z-40 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl text-emerald-800 tracking-tight">
            <TrendingUp className="h-8 w-8" />
            <span className="hidden sm:inline">StratEx Partners</span>
            <span className="sm:hidden">StratEx</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link
              href="#services"
              className="hover:text-emerald-700 transition-colors"
            >
              Υπηρεσίες
            </Link>
            <Link
              href="#process"
              className="hover:text-emerald-700 transition-colors"
            >
              Διαδικασία
            </Link>
            <Link
              href="#results"
              className="hover:text-emerald-700 transition-colors"
            >
              Αποτελέσματα
            </Link>
            <Link
              href="#contact"
              className="hover:text-emerald-700 transition-colors"
            >
              Επικοινωνία
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-emerald-800 hover:bg-emerald-900 text-white rounded-none px-6 font-bold">
              Δωρεάν Ανάλυση
            </Button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-slate-900" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-8 px-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4 font-medium text-slate-600">
              <Link
                href="#services"
                onClick={toggleMenu}
                className="hover:text-emerald-700"
              >
                Υπηρεσίες
              </Link>
              <Link
                href="#process"
                onClick={toggleMenu}
                className="hover:text-emerald-700"
              >
                Διαδικασία
              </Link>
              <Link
                href="#results"
                onClick={toggleMenu}
                className="hover:text-emerald-700"
              >
                Αποτελέσματα
              </Link>
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-emerald-700"
              >
                Επικοινωνία
              </Link>
            </div>
            <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white rounded-none font-bold">
              Δωρεάν Ανάλυση
            </Button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-full mb-4 consult-hero">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Διαθέσιμοι για νέα projects Q1 2025
            </div>
            <h1 className="consult-hero text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
              Οδηγούμε την <span className="text-emerald-700">Ανάπτυξη</span>{" "}
              μέσω Στρατηγικής.
            </h1>
            <p className="consult-hero text-xl text-slate-500 max-w-lg leading-relaxed">
              Βοηθάμε ηγέτες και φιλόδοξες επιχειρήσεις να πλοηγηθούν στην
              πολυπλοκότητα, να βελτιστοποιήσουν τις διαδικασίες και να
              επιτύχουν απτά αποτελέσματα.
            </p>
            <div className="consult-hero flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-none bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 text-lg"
              >
                Οι Υπηρεσίες μας
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-slate-300 h-14 px-8 text-lg hover:bg-slate-50 text-slate-900"
              >
                Case Studies
              </Button>
            </div>

            <div className="consult-hero pt-8 grid grid-cols-3 gap-8 border-t border-slate-100">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-sm text-slate-500 font-medium">
                  Επιχειρήσεις
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">$2B+</h3>
                <p className="text-sm text-slate-500 font-medium">
                  Αξία Πελατών
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">25</h3>
                <p className="text-sm text-slate-500 font-medium">
                  Έτη Εμπειρίας
                </p>
              </div>
            </div>
          </div>

          <div className="relative consult-hero">
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-lg transform rotate-3"></div>
            <div className="bg-slate-100 rounded-lg aspect-[4/3] relative overflow-hidden group shadow-xl">
              {/* Placeholder for Business Meeting Image - Abstract Rep */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <BarChart className="h-32 w-32 text-slate-400 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply group-hover:bg-emerald-900/0 transition-colors duration-500" />

              {/* Floating Value Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-lg border-l-4 border-emerald-500">
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">
                      Μεσος Ρυθμος Αναπτυξης
                    </p>
                    <h4 className="text-3xl font-bold text-slate-900">+145%</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Σε ετήσια βάση για τους πελάτες μας
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 section-reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Στρατηγικές Λύσεις
            </h2>
            <p className="text-xl text-slate-500">
              Προσφέρουμε εξειδικευμένες συμβουλευτικές υπηρεσίες που
              μετασχηματίζουν τις επιχειρήσεις και οδηγούν σε βιώσιμη
              κερδοφορία.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="section-reveal bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-800 transition-colors duration-300">
                  <PieChart className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Ανάλυση Δεδομένων
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Μετατρέπουμε τα πολύπλοκα δεδομένα σε ξεκάθαρες, αξιοποιήσιμες
                  στρατηγικές. Δεν υποθέτουμε, βασιζόμαστε σε γεγονότα.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Προγνωστική Μοντελοποίηση
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Ανάλυση Αγοράς
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> KPIs &
                    Metrics
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all"
                >
                  Μάθετε περισσότερα <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="section-reveal bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-800 transition-colors duration-300">
                  <Target className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Στρατηγική Εκτέλεση
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Γεφυρώνουμε το χάσμα μεταξύ οράματος και πράξης. Σχεδιάζουμε
                  και υλοποιούμε πλάνα που φέρνουν αποτελέσματα.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Ψηφιακός Μετασχηματισμός
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Βελτιστοποίηση Διαδικασιών
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Διαχείριση Αλλαγών
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all"
                >
                  Μάθετε περισσότερα <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="section-reveal bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-800 transition-colors duration-300">
                  <Users className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Ηγεσία & Κουλτούρα
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Ενδυναμώνουμε τους ανθρώπους σας. Χτίζουμε κουλτούρες υψηλής
                  απόδοσης και αναπτύσσουμε τους ηγέτες του αύριο.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Executive Coaching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Ανάπτυξη Ταλέντων
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                    Οργανωτικός Σχεδιασμός
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all"
                >
                  Μάθετε περισσότερα <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies / Process */}
      <section id="process" className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Η Μεθοδολογία μας
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Η προσέγγισή μας είναι δομημένη, αλλά ευέλικτη. Προσαρμόζουμε
                κάθε βήμα στις μοναδικές ανάγκες της επιχείρησής σας για να
                διασφαλίσουμε τη μέγιστη δυνατή αξία.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-500 text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Διάγνωση & Ανάλυση
                    </h4>
                    <p className="text-slate-400">
                      Κατανοούμε σε βάθος τις προκλήσεις, τις ευκαιρίες και το
                      περιβάλλον της αγοράς σας.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-500 text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Στρατηγικός Σχεδιασμός
                    </h4>
                    <p className="text-slate-400">
                      Δημιουργούμε ένα λεπτομερές οδικό χάρτη με σαφείς στόχους,
                      KPIs και ορόσημα.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-500 text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Υλοποίηση & Βελτιστοποίηση
                    </h4>
                    <p className="text-slate-400">
                      Είμαστε δίπλα σας σε κάθε βήμα της εφαρμογής,
                      προσαρμόζοντας τη στρατηγική όπου απαιτείται.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative section-reveal">
              <div className="absolute -inset-4 border-2 border-slate-700/50 rounded-xl transform -rotate-3"></div>
              <div className="bg-slate-800 rounded-xl p-8 lg:p-12 relative z-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Building className="text-emerald-500" />
                  Case Study: TechFlow
                </h3>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    &quot;Η συνεργασία με τη StratEx ήταν καθοριστική. Μέσα σε
                    12 μήνες, αυξήσαμε την κερδοφορία μας κατά 40% και μειώσαμε
                    τα λειτουργικά έξοδα κατά 25%.&quot;
                  </p>
                  <div className="h-px bg-slate-700"></div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        40%
                      </div>
                      <div className="text-xs uppercase tracking-wider text-emerald-500 font-bold">
                        Αυξηση Κερδων
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">
                        25%
                      </div>
                      <div className="text-xs uppercase tracking-wider text-emerald-500 font-bold">
                        Μειωση Εξοδων
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                    <div>
                      <p className="font-bold text-white text-sm">
                        Πέτρος Δημητρίου
                      </p>
                      <p className="text-slate-500 text-xs text-xs">
                        CEO, TechFlow Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Snippet */}
      <section className="py-24 bg-white">
        <div className="container text-center max-w-4xl mx-auto section-reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Οι Άνθρωποί μας
          </h2>
          <p className="text-xl text-slate-500 mb-12">
            Μια ομάδα από έμπειρους στρατηγικούς αναλυτές, πρώην στελέχη
            πολυεθνικών και ειδικούς του κλάδου, αφοσιωμένοι στην επιτυχία σας.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 px-8 h-12 text-lg hover:bg-slate-50"
          >
            Γνωρίστε την Ομάδα
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-slate-50 border-t border-slate-200"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 shadow-xl rounded-2xl overflow-hidden section-reveal">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Ας Ξεκινήσουμε τη Συζήτηση
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Είστε έτοιμοι να πάτε την επιχείρησή σας στο επόμενο επίπεδο;
                  Συμπληρώστε τη φόρμα και ένας σύμβουλός μας θα επικοινωνήσει
                  μαζί σας άμεσα.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Τηλέφωνο</h4>
                    <p className="text-slate-500">+30 210 555 0123</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Δευ-Παρ, 9πμ - 6μμ
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-500">contact@stratex.gr</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Απαντάμε εντός 24 ωρών
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Γραφεία</h4>
                    <p className="text-slate-500">
                      Λεωφόρος Βασιλίσσης Σοφίας 45
                    </p>
                    <p className="text-slate-500">Αθήνα, 106 76</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Όνομα
                    </label>
                    <Input
                      placeholder="Γιώργος"
                      className="bg-white border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Επώνυμο
                    </label>
                    <Input
                      placeholder="Παπαδόπουλος"
                      className="bg-white border-slate-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email Εργασίας
                  </label>
                  <Input
                    placeholder="name@company.com"
                    className="bg-white border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Εταιρεία
                  </label>
                  <Input
                    placeholder="Η Εταιρεία σας Α.Ε."
                    className="bg-white border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Μήνυμα
                  </label>
                  <Textarea
                    placeholder="Πώς μπορούμε να βοηθήσουμε;"
                    className="bg-white border-slate-200 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-12 text-lg">
                  Αποστολή Μηνύματος
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 font-sans text-sm">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl text-white tracking-tight mb-6">
                <TrendingUp className="h-6 w-6 text-emerald-500" />
                <span>StratEx Partners</span>
              </div>
              <p className="max-w-md leading-relaxed mb-6">
                Η StratEx Partners είναι μια κορυφαία εταιρεία συμβούλων
                επιχειρήσεων. Συνεργαζόμαστε με ηγέτες για να αντιμετωπίσουμε
                τις πιο σημαντικές προκλήσεις και να αξιοποιήσουμε τις
                μεγαλύτερες ευκαιρίες τους.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
                Υπηρεσιες
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Στρατηγική
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Λειτουργική Βελτίωση
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    M&A
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Βιωσιμότητα
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
                Εταιρεια
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Σχετικά με εμάς
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Καριέρα
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Επικοινωνία
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Πολιτική Απορρήτου
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              &copy; 2024 StratEx Partners. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <p className="text-slate-600">Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

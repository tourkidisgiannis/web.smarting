"use client";

import { ServiceDetail } from "@/components/agency/service-detail";

export default function EcommerceServicePage() {
  return (
    <ServiceDetail
      title="E-commerce"
      subtitle="Μετατρέπουμε επισκέπτες σε αγοραστές."
      description="Σχεδιάζουμε e-commerce εμπειρίες με έμφαση στη ροή, την αξιοπιστία και την αύξηση της αξίας ανά παραγγελία."
      highlights={["Conversion", "Automation", "Retention"]}
      deliverables={[
        "Σχεδιασμός ροής αγοράς χωρίς τριβές",
        "Ρυθμίσεις πληρωμών, αποστολών & αυτοματισμών",
        "Πλαίσιο CRM/analytics για παρακολούθηση",
      ]}
      outcomes={[
        "Περισσότερες ολοκληρωμένες αγορές",
        "Καλύτερη εμπειρία post-purchase",
        "Μετρήσιμη αύξηση εσόδων",
      ]}
      timeline={[
        "Εβδομάδα 1: Στρατηγική & ροές",
        "Εβδομάδες 2-3: Ανάπτυξη & integrations",
        "Εβδομάδα 4: QA και launch plan",
      ]}
    />
  );
}

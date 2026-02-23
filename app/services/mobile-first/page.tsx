"use client";

import { ServiceDetail } from "@/components/agency/service-detail";

export default function MobileFirstServicePage() {
  return (
    <ServiceDetail
      title="Mobile First Εμπειρία"
      subtitle="Σχεδιασμός που κερδίζει σε κάθε οθόνη."
      description="Σχεδιάζουμε εμπειρίες πρώτα για κινητό, ώστε το brand σας να είναι γρήγορο, καθαρό και αξιόπιστο παντού. Κάθε λεπτομέρεια είναι βελτιστοποιημένη για άμεση δράση."
      highlights={["UX focus", "Speed", "Accessibility"]}
      deliverables={[
        "Responsive UI που λειτουργεί άψογα σε όλες τις συσκευές",
        "Mobile UX flows που μειώνουν το drop-off",
        "Βελτιστοποίηση φόρτωσης για κινητές συνδέσεις",
      ]}
      outcomes={[
        "Περισσότερες ενέργειες από κινητό",
        "Καλύτερη εμπειρία για τους πελάτες σας",
        "Ισχυρότερη εικόνα επαγγελματισμού",
      ]}
      timeline={[
        "Ημέρες 1-5: UX χαρτογράφηση",
        "Ημέρες 6-12: Σχεδιασμός & ανάπτυξη",
        "Ημέρες 13-16: Έλεγχοι συσκευών & βελτιώσεις",
      ]}
    />
  );
}

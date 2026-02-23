"use client";

import { ServiceDetail } from "@/components/agency/service-detail";

export default function PerformanceServicePage() {
  return (
    <ServiceDetail
      title="Performance"
      subtitle="Ταχύτητα που κάνει τη διαφορά."
      description="Βελτιστοποιούμε κάθε επίπεδο ώστε οι σελίδες σας να φορτώνουν αστραπιαία, να βαθμολογούνται υψηλά και να κρατούν τους επισκέπτες ενεργούς."
      highlights={["Core Web Vitals", "Caching", "Optimization"]}
      deliverables={[
        "Ανάλυση απόδοσης με προτεραιότητες",
        "Βελτιστοποίηση assets & χρόνων φόρτωσης",
        "Στρατηγική cache και περιεχομένου",
      ]}
      outcomes={[
        "Γρηγορότερη εμπειρία χρήστη",
        "Υψηλότερη κατάταξη & καλύτερα conversions",
        "Μειωμένα τεχνικά bottlenecks",
      ]}
      timeline={[
        "Ημέρες 1-3: Performance audit",
        "Ημέρες 4-9: Βελτιστοποίηση κώδικα & assets",
        "Ημέρες 10-12: Μετρήσεις & fine-tuning",
      ]}
    />
  );
}

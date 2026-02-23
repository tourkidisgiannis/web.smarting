"use client";

import { ServiceDetail } from "@/components/agency/service-detail";

export default function SecurityServicePage() {
  return (
    <ServiceDetail
      title="Security"
      subtitle="Ασφάλεια που εμπνέει εμπιστοσύνη."
      description="Θωρακίζουμε την ψηφιακή σας παρουσία με σύγχρονα πρωτόκολλα, monitoring και πρακτικές που προλαμβάνουν κινδύνους."
      highlights={["Hardening", "Monitoring", "Compliance"]}
      deliverables={[
        "Έλεγχος ασφάλειας & διορθώσεις",
        "Ρυθμίσεις προστασίας δεδομένων & backups",
        "Παρακολούθηση και ειδοποιήσεις",
      ]}
      outcomes={[
        "Μειωμένο ρίσκο επιθέσεων",
        "Αξιοπιστία για τους πελάτες σας",
        "Συμμόρφωση με πρότυπα ασφαλείας",
      ]}
      timeline={[
        "Ημέρες 1-4: Security audit",
        "Ημέρες 5-9: Εφαρμογή μέτρων",
        "Ημέρες 10-12: Monitoring & τεκμηρίωση",
      ]}
    />
  );
}

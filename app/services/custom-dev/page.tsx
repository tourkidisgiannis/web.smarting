"use client";

import { ServiceDetail } from "@/components/agency/service-detail";

export default function CustomDevServicePage() {
  return (
    <ServiceDetail
      title="Custom Development"
      subtitle="Λύσεις κομμένες στα μέτρα σας."
      description="Αναπτύσσουμε custom πλατφόρμες και εφαρμογές που δένουν με τις διαδικασίες σας, αυτοματοποιούν εργασίες και δημιουργούν νέα έσοδα."
      highlights={["Integrations", "Scalability", "Automation"]}
      deliverables={[
        "Ανάλυση απαιτήσεων & αρχιτεκτονική λύσης",
        "Custom εφαρμογή με dashboards & ροές",
        "Εκπαίδευση ομάδας & τεχνική τεκμηρίωση",
      ]}
      outcomes={[
        "Μείωση χειροκίνητων διαδικασιών",
        "Σταθερή βάση για ανάπτυξη προϊόντων",
        "Καλύτερη εικόνα δεδομένων σε πραγματικό χρόνο",
      ]}
      timeline={[
        "Φάση 1: Discovery & wireframes",
        "Φάση 2: Ανάπτυξη & iterations",
        "Φάση 3: QA, launch & υποστήριξη",
      ]}
    />
  );
}


import { Metadata } from "next"
import { PersonalTrainerDemoView } from "@/components/demos/personal-trainer-demo-view"

export const metadata: Metadata = {
  title: "Personal Trainer Demo | web2.smarting.gr",
  description: "A high-energy, fitness-focused demo template.",
}

export default function PersonalTrainerPage() {
  return <PersonalTrainerDemoView />
}

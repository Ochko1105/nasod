import { Header } from "@/components/header";
import { ScoreSimulator } from "@/components/score-simulator";

export const metadata = {
  title: "Score Simulator - UniMatch",
  description:
    "Simulate different scores to see which universities and majors you can qualify for",
};

export default function SimulatorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ScoreSimulator />
    </div>
  );
}

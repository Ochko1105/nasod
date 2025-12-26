import { UniversityList } from "@/components/university-list";
import { Header } from "@/components/header";

export const metadata = {
  title: "All Universities - UniMatch",
  description:
    "Browse and filter through all available universities based on your preferences and scores",
};

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <UniversityList />
    </div>
  );
}

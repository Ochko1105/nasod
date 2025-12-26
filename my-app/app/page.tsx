import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SearchSection } from "@/components/search-section";
import { UniversityCards } from "@/components/university-cards";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* <SearchSection /> */}
        <UniversityCards />
      </main>
    </div>
  );
}

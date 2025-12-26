import { Suspense } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SearchCard } from "../_nasocomponent/search-card";
import { PopularUniversities } from "../_nasocomponent/popular-universities";
import { CallToAction } from "../_nasocomponent/call-to-action";
import { Footer } from "../_nasocomponent/footer";

function PageContent() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <SearchCard />
      </div>
      <PopularUniversities />
      <CallToAction />
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Suspense fallback={null}>
          <PageContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to start your journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Create a free account to save your favorite universities, track
            deadlines, and receive personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8"
            >
              Create Free Account
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

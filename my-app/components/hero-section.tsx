export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-accent/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />

      <div className="container mx-auto px-4 pt-24 pb-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-ээр дэмжигдсэн зөвлөмжүүд
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Их сургууль, мэргэжил, элсэлтийн шаардлагыг{" "}
            <span className="text-primary">нэг дор олж мэдэх</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Шалгалтын оноо, англи хэлний мэдлэг, хувийн зан чанарын профайлын
            үндсэн дээр таны төгс их сургуулийг олох, хувийн зөвлөмж авах.
          </p>
        </div>
      </div>
    </section>
  );
}

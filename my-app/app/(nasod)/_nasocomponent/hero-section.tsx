export function HeroSection() {
  return (
    <section className="relative bg-slate-800 py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/university-campus.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Find universities, majors, and admission requirements in one place.
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-pretty">
            Your gateway to higher education. Compare scores, check dates, and
            apply with confidence to your dream school.
          </p>
        </div>
      </div>
    </section>
  );
}

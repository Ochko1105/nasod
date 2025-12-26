import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UniversityCard } from "./university-card";

const universities = [
  {
    id: 1,
    name: "Монгол Улсын Их Сургууль",
    location: "Улаанбаатар",
    image: "/university-logo-arts.jpg",
    status: "open" as const,
    minScore: "ЭЕШ 500+",
    admissionRate: "40%",
    deadline: null,
    nextCycle: null,
  },
  {
    id: 2,
    name: "Шинжлэх Ухаан Технологийн Их Сургууль",
    location: "Улаанбаатар",
    image: "/university-logo-business.jpg",
    status: "closing-soon" as const,
    minScore: "ЭЕШ 520+",
    admissionRate: null,
    deadline: "2024-10-15",
    nextCycle: null,
  },
  {
    id: 3,
    name: "Анагаахын Шинжлэх Ухааны Үндэсний Их Сургууль",
    location: "Улаанбаатар",
    image: "/university-logo-medical.jpg",
    status: "closed" as const,
    minScore: "ЭЕШ 560+",
    admissionRate: null,
    deadline: null,
    nextCycle: "2025 хавар",
  },
  {
    id: 4,
    name: "Хүмүүнлэгийн Ухааны Их Сургууль",
    location: "Улаанбаатар",
    image: "/university-logo-tech.jpg",
    status: "open" as const,
    minScore: "ЭЕШ 480+",
    admissionRate: "55%",
    deadline: null,
    nextCycle: null,
  },
  {
    id: 5,
    name: "Санхүү Эдийн Засгийн Их Сургууль",
    location: "Улаанбаатар",
    image: "/university-logo-arts.jpg",
    status: "closing-soon" as const,
    minScore: "ЭЕШ 530+",
    admissionRate: null,
    deadline: "2024-11-01",
    nextCycle: null,
  },
  {
    id: 6,
    name: "Соёл Урлагийн Их Сургууль",
    location: "Улаанбаатар",
    image: "/university-logo-arts.jpg",
    status: "open" as const,
    minScore: "Авьяасын шалгалт + ЭЕШ 450+",
    admissionRate: null,
    deadline: null,
    nextCycle: "60%",
  },
];

export function PopularUniversities() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Popular Universities
            </h2>
            <p className="text-muted-foreground">
              Explore top-rated institutions currently accepting applications.
            </p>
          </div>
          <Link
            href="/universities"
            className="text-[#00BCD4] hover:text-[#00ACC1] flex items-center gap-1 font-semibold"
          >
            View All Universities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {universities.map((university) => (
            <UniversityCard key={university.id} {...university} />
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-slate-300 rounded-lg font-semibold text-foreground hover:bg-slate-50 transition-colors">
            Load More Universities
          </button>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const universities = [
  {
    id: 1,
    name: "National Technology University",
    location: "Бангкок, Тайланд",
    logo: "/university-logo-tech.jpg",
    status: "open" as const,
    minScore: 80,
    ieltsRequired: 6.0,
    matchLevel: "strong" as const,
    scholarships: true,
    deadline: "2025 оны 5 сарын 15",
  },
  {
    id: 2,
    name: "International Business Institute",
    location: "Чианг Май, Тайланд",
    logo: "/university-logo-business.jpg",
    status: "closing-soon" as const,
    minScore: 75,
    ieltsRequired: 6.5,
    matchLevel: "possible" as const,
    scholarships: true,
    deadline: "2025 оны 4 сарын 30",
  },
  {
    id: 3,
    name: "Medical Sciences University",
    location: "Пхукет, Тайланд",
    logo: "/university-logo-medical.jpg",
    status: "open" as const,
    minScore: 90,
    ieltsRequired: 7.0,
    matchLevel: "not-eligible" as const,
    scholarships: false,
    deadline: "2025 оны 6 сарын 1",
  },
  {
    id: 4,
    name: "Creative Arts College",
    location: "Паттайя, Тайланд",
    logo: "/university-logo-arts.jpg",
    status: "open" as const,
    minScore: 70,
    ieltsRequired: 5.5,
    matchLevel: "strong" as const,
    scholarships: true,
    deadline: "2025 оны 5 сарын 20",
  },
];

export const matchColors = {
  strong: "border-primary/50 bg-primary/5",
  possible: "border-accent/50 bg-accent/5",
  "not-eligible": "border-border/50 bg-card",
};

export const matchBadgeColors = {
  strong: "bg-primary/10 text-primary border-primary/20",
  possible: "bg-accent/10 text-accent border-accent/20",
  "not-eligible": "bg-muted text-muted-foreground border-border",
};

export const statusColors = {
  open: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  "closing-soon": "bg-destructive/10 text-destructive border-destructive/20",
  closed: "bg-muted text-muted-foreground border-border",
};

export function UniversityCards() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Зөвлөсөн их сургуулиуд</h2>
          <p className="text-muted-foreground">
            Таны профайл болон сонголтоор үндэслэн
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/universities">Бүгдийг үзэх</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {universities.map((uni) => (
          <Card
            key={uni.id}
            className={`p-6 transition-all hover:shadow-lg hover:shadow-primary/5 ${
              matchColors[uni.matchLevel]
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={uni.logo || "/placeholder.svg"}
                alt={`${uni.name} логог`}
                className="w-14 h-14 rounded-lg bg-muted"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1 text-balance">
                  {uni.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{uni.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className={statusColors[uni.status]}>
                {uni.status === "open"
                  ? "Элсэлт нээлттэй"
                  : uni.status === "closing-soon"
                  ? "Ойрын хугацаанд хаагдана"
                  : "Хаалттай"}
              </Badge>
              <Badge
                variant="outline"
                className={matchBadgeColors[uni.matchLevel]}
              >
                {uni.matchLevel === "strong"
                  ? "✓ Тохиромжтой"
                  : uni.matchLevel === "possible"
                  ? "~ Боломжит"
                  : "✗ Тохирохгүй"}
              </Badge>
              {uni.scholarships && (
                <Badge
                  variant="outline"
                  className="bg-chart-5/10 text-chart-5 border-chart-5/20"
                >
                  <Award className="w-3 h-3 mr-1" />
                  Тэтгэлэгтэй
                </Badge>
              )}
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Минимум элсэлтийн оноо:
                </span>
                <span className="font-medium">{uni.minScore}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Шаардлагатай IELTS:
                </span>
                <span className="font-medium">{uni.ieltsRequired}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Хугацаа дуусах:
                </span>
                <span className="font-medium">{uni.deadline}</span>
              </div>
            </div>

            <Button
              className="w-full gap-2"
              variant={uni.matchLevel === "strong" ? "default" : "outline"}
            >
              <TrendingUp className="w-4 h-4" />
              Дэлгэрэнгүй үзэх
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

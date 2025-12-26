import {
  MapPin,
  Building2,
  Landmark,
  School,
  GraduationCap,
  Palette,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type UniversityCardProps = {
  name: string;
  location: string;
  image: string;
  status: "open" | "closing-soon" | "closed";
  minScore: string;
  admissionRate: string | null;
  deadline: string | null;
  nextCycle: string | null;
};

const getIconForUniversity = (name: string) => {
  if (name.includes("Tech")) return Building2;
  if (name.includes("Liberal Arts")) return Landmark;
  if (name.includes("Science")) return School;
  if (name.includes("Business")) return Building2;
  if (name.includes("Arts")) return Palette;
  return GraduationCap;
};

export function UniversityCard({
  name,
  location,
  image,
  status,
  minScore,
  admissionRate,
  deadline,
  nextCycle,
}: UniversityCardProps) {
  const Icon = getIconForUniversity(name);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          {status === "open" && (
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Open
            </span>
          )}
          {status === "closing-soon" && (
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Closing Soon
            </span>
          )}
          {status === "closed" && (
            <span className="bg-slate-400 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Closed
            </span>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-[#00BCD4]/10 p-2 rounded-lg">
            <Icon className="h-5 w-5 text-[#00BCD4]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
          <span className="text-muted-foreground">Min. Score</span>
          <span className="font-semibold text-foreground">{minScore}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          {admissionRate && (
            <>
              <span className="text-muted-foreground">Admission Rate</span>
              <span className="font-semibold text-foreground">
                {admissionRate}
              </span>
            </>
          )}
          {deadline && (
            <>
              <span className="text-muted-foreground">Deadline</span>
              <span className="font-semibold text-orange-600">{deadline}</span>
            </>
          )}
          {nextCycle && (
            <>
              <span className="text-muted-foreground">Next Cycle</span>
              <span className="font-semibold text-foreground">{nextCycle}</span>
            </>
          )}
        </div>

        {status === "closed" ? (
          <Button variant="outline" className="w-full bg-transparent" disabled>
            Applications Closed
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white bg-transparent"
          >
            View Details
          </Button>
        )}
      </div>
    </Card>
  );
}

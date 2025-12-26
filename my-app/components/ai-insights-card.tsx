import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import type { StudentProfile, Major, University } from "@/lib/types";
import {
  calculateMajorMatch,
  checkScholarshipEligibility,
  generateAIInsight,
} from "@/lib/ai-matching";

interface AIInsightsCardProps {
  university: University;
  major: Major;
  profile: StudentProfile;
}

export function AIInsightsCard({
  university,
  major,
  profile,
}: AIInsightsCardProps) {
  const majorMatch = calculateMajorMatch(major, profile);
  const scholarshipEligibility = checkScholarshipEligibility(
    university,
    major,
    profile
  );
  const aiInsight = generateAIInsight(majorMatch, scholarshipEligibility);

  if (!profile.examScore && !profile.ieltsScore && !profile.mbtiType) {
    return null;
  }

  return (
    <Card className="p-6 border-primary/50 bg-primary/5">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">AI Match Analysis</h3>
          <p className="text-sm text-muted-foreground">{aiInsight}</p>
        </div>
      </div>

      {/* Match Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Match Score</span>
          <Badge
            variant="outline"
            className={
              majorMatch.matchLevel === "strong"
                ? "bg-chart-4/10 text-chart-4 border-chart-4/20"
                : majorMatch.matchLevel === "possible"
                ? "bg-accent/10 text-accent border-accent/20"
                : "bg-muted text-muted-foreground"
            }
          >
            {majorMatch.score}/100
          </Badge>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${
              majorMatch.matchLevel === "strong"
                ? "bg-chart-4"
                : majorMatch.matchLevel === "possible"
                ? "bg-accent"
                : "bg-muted-foreground"
            }`}
            style={{ width: `${majorMatch.score}%` }}
          />
        </div>
      </div>

      {/* Match Reasons */}
      <div className="space-y-2 mb-4">
        {majorMatch.reasons.map((reason, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-chart-4 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{reason}</span>
          </div>
        ))}
      </div>

      {/* Scholarship Eligibility */}
      {scholarshipEligibility.eligible && (
        <div className="pt-4 border-t border-border">
          <div className="flex items-start gap-2 mb-2">
            <Award className="w-5 h-5 text-chart-5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-sm mb-1">Scholarship Potential</p>
              <p className="text-xs text-muted-foreground">
                {scholarshipEligibility.reason}
              </p>
              <Badge
                variant="outline"
                className="mt-2 bg-chart-5/10 text-chart-5 border-chart-5/20"
              >
                {scholarshipEligibility.level === "high"
                  ? "High Chance"
                  : scholarshipEligibility.level === "medium"
                  ? "Moderate Chance"
                  : "Possible"}
              </Badge>
            </div>
          </div>
        </div>
      )}

      {/* Personality Match */}
      {profile.mbtiType && major.personalityFit?.includes(profile.mbtiType) && (
        <div className="pt-4 border-t border-border mt-4">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium text-sm mb-1">
                Perfect Personality Fit
              </p>
              <p className="text-xs text-muted-foreground">
                This major is highly recommended for {profile.mbtiType}{" "}
                personality types based on career success data.
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

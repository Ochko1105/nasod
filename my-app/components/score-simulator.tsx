"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, MapPin, RefreshCcw, Sparkles } from "lucide-react";
import type { University } from "@/lib/types";

const universities: University[] = [
  {
    id: 1,
    name: "National Technology University",
    location: "Bangkok, Thailand",
    logo: "/university-logo-tech.jpg",
    status: "open",
    minScore: 80,
    ieltsRequired: 6.0,
    scholarships: true,
    deadline: "May 15, 2025",
  },
  {
    id: 2,
    name: "International Business Institute",
    location: "Chiang Mai, Thailand",
    logo: "/university-logo-business.jpg",
    status: "closing-soon",
    minScore: 75,
    ieltsRequired: 6.5,
    scholarships: true,
    deadline: "April 30, 2025",
  },
  {
    id: 3,
    name: "Medical Sciences University",
    location: "Phuket, Thailand",
    logo: "/university-logo-medical.jpg",
    status: "open",
    minScore: 90,
    ieltsRequired: 7.0,
    scholarships: false,
    deadline: "June 1, 2025",
  },
  {
    id: 4,
    name: "Creative Arts College",
    location: "Pattaya, Thailand",
    logo: "/university-logo-arts.jpg",
    status: "open",
    minScore: 70,
    ieltsRequired: 5.5,
    scholarships: true,
    deadline: "May 20, 2025",
  },
  {
    id: 5,
    name: "Engineering Excellence Institute",
    location: "Bangkok, Thailand",
    logo: "/university-logo-tech.jpg",
    status: "open",
    minScore: 85,
    ieltsRequired: 6.5,
    scholarships: true,
    deadline: "May 10, 2025",
  },
  {
    id: 6,
    name: "Global Business School",
    location: "Bangkok, Thailand",
    logo: "/university-logo-business.jpg",
    status: "open",
    minScore: 78,
    ieltsRequired: 7.0,
    scholarships: false,
    deadline: "June 5, 2025",
  },
];

type EligibilityLevel = "eligible" | "competitive" | "not-eligible";

interface UniversityEligibility extends University {
  eligibility: EligibilityLevel;
  scoreGap?: number;
  ieltsGap?: number;
}

export function ScoreSimulator() {
  const [examScore, setExamScore] = useState<[number]>([75]);
  const [ieltsScore, setIeltsScore] = useState<[number]>([6.0]);

  const eligibilityResults = useMemo(() => {
    return universities
      .map((uni) => {
        const meetsExamScore = examScore[0] >= uni.minScore;
        const meetsIELTS = ieltsScore[0] >= uni.ieltsRequired;
        const isCompetitive =
          examScore[0] >= uni.minScore + 5 &&
          ieltsScore[0] >= uni.ieltsRequired + 0.5;

        let eligibility: EligibilityLevel;
        if (meetsExamScore && meetsIELTS) {
          eligibility = isCompetitive ? "competitive" : "eligible";
        } else {
          eligibility = "not-eligible";
        }

        return {
          ...uni,
          eligibility,
          scoreGap: Math.max(0, uni.minScore - examScore[0]),
          ieltsGap: Math.max(0, uni.ieltsRequired - ieltsScore[0]),
        };
      })
      .sort((a, b) => {
        // Sort by eligibility, then by score
        const eligibilityOrder = {
          competitive: 0,
          eligible: 1,
          "not-eligible": 2,
        };
        const aOrder = eligibilityOrder[a.eligibility];
        const bOrder = eligibilityOrder[b.eligibility];
        if (aOrder !== bOrder) return aOrder - bOrder;
        return b.minScore - a.minScore;
      });
  }, [examScore, ieltsScore]);

  const stats = useMemo(() => {
    const eligible = eligibilityResults.filter(
      (u) => u.eligibility === "eligible"
    ).length;
    const competitive = eligibilityResults.filter(
      (u) => u.eligibility === "competitive"
    ).length;
    const notEligible = eligibilityResults.filter(
      (u) => u.eligibility === "not-eligible"
    ).length;
    const scholarshipEligible = eligibilityResults.filter(
      (u) =>
        u.eligibility !== "not-eligible" &&
        u.scholarships &&
        examScore[0] >= 85 &&
        ieltsScore[0] >= 6.5
    ).length;

    return {
      eligible,
      competitive,
      notEligible,
      scholarshipEligible,
      total: universities.length,
    };
  }, [eligibilityResults, examScore, ieltsScore]);

  const resetScores = () => {
    setExamScore([75]);
    setIeltsScore([6.0]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            Score Simulator
          </h1>
          <p className="text-muted-foreground">
            Adjust your scores to see which universities and majors you can
            qualify for in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Your Scores</h2>
                <Button variant="ghost" size="sm" onClick={resetScores}>
                  <RefreshCcw className="w-3.5 h-3.5 mr-1" />
                  Reset
                </Button>
              </div>

              {/* Exam Score Slider */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <Label>Entrance Exam Score</Label>
                  <span className="text-2xl font-bold text-primary">
                    {examScore[0]}
                  </span>
                </div>
                <Slider
                  value={examScore}
                  onValueChange={(value) => setExamScore(value as [number])}
                  min={50}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>

              {/* IELTS Score Slider */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <Label>IELTS Score</Label>
                  <span className="text-2xl font-bold text-primary">
                    {ieltsScore[0].toFixed(1)}
                  </span>
                </div>
                <Slider
                  value={ieltsScore}
                  onValueChange={(value) => setIeltsScore(value as [number])}
                  min={4.0}
                  max={9.0}
                  step={0.5}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>4.0</span>
                  <span>6.5</span>
                  <span>9.0</span>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Highly Competitive
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-chart-4/10 text-chart-4 border-chart-4/20"
                  >
                    {stats.competitive}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Eligible
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    {stats.eligible}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Not Eligible
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-muted text-muted-foreground"
                  >
                    {stats.notEligible}
                  </Badge>
                </div>
                {stats.scholarshipEligible > 0 && (
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Scholarship Potential
                    </span>
                    <Badge
                      variant="outline"
                      className="bg-chart-5/10 text-chart-5 border-chart-5/20"
                    >
                      {stats.scholarshipEligible}
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="all">
                  All ({universities.length})
                </TabsTrigger>
                <TabsTrigger value="eligible">
                  Eligible ({stats.competitive + stats.eligible})
                </TabsTrigger>
                <TabsTrigger value="competitive">
                  Competitive ({stats.competitive})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {eligibilityResults.map((uni) => (
                  <UniversityEligibilityCard key={uni.id} university={uni} />
                ))}
              </TabsContent>

              <TabsContent value="eligible" className="space-y-4">
                {eligibilityResults
                  .filter(
                    (u) =>
                      u.eligibility === "eligible" ||
                      u.eligibility === "competitive"
                  )
                  .map((uni) => (
                    <UniversityEligibilityCard key={uni.id} university={uni} />
                  ))}
              </TabsContent>

              <TabsContent value="competitive" className="space-y-4">
                {eligibilityResults.filter(
                  (u) => u.eligibility === "competitive"
                ).length === 0 ? (
                  <Card className="p-12 text-center">
                    <p className="text-muted-foreground">
                      No competitive matches yet. Try increasing your scores to
                      see more options.
                    </p>
                  </Card>
                ) : (
                  eligibilityResults
                    .filter((u) => u.eligibility === "competitive")
                    .map((uni) => (
                      <UniversityEligibilityCard
                        key={uni.id}
                        university={uni}
                      />
                    ))
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

function UniversityEligibilityCard({
  university,
}: {
  university: UniversityEligibility;
}) {
  const eligibilityConfig = {
    competitive: {
      badge: "Highly Competitive",
      badgeClass: "bg-chart-4/10 text-chart-4 border-chart-4/20",
      cardClass: "border-chart-4/50 bg-chart-4/5",
      icon: "✓✓",
    },
    eligible: {
      badge: "Eligible",
      badgeClass: "bg-accent/10 text-accent border-accent/20",
      cardClass: "border-accent/50 bg-accent/5",
      icon: "✓",
    },
    "not-eligible": {
      badge: "Not Eligible",
      badgeClass: "bg-muted text-muted-foreground border-border",
      cardClass: "border-border/50 bg-card opacity-60",
      icon: "✗",
    },
  };

  const config = eligibilityConfig[university.eligibility];

  return (
    <Card className={`p-6 transition-all ${config.cardClass}`}>
      <div className="flex items-start gap-4">
        <img
          src={university.logo || "/placeholder.svg"}
          alt={`${university.name} logo`}
          className="w-14 h-14 rounded-lg bg-muted flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-semibold text-lg mb-1 text-balance">
                {university.name}
              </h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>{university.location}</span>
              </div>
            </div>
            <Badge variant="outline" className={config.badgeClass}>
              {config.icon} {config.badge}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Required Score
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{university.minScore}</span>
                {university.eligibility === "not-eligible" &&
                  university.scoreGap &&
                  university.scoreGap > 0 && (
                    <span className="text-xs text-destructive">
                      (-{university.scoreGap} points)
                    </span>
                  )}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Required IELTS
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  {university.ieltsRequired}
                </span>
                {university.eligibility === "not-eligible" &&
                  university.ieltsGap &&
                  university.ieltsGap > 0 && (
                    <span className="text-xs text-destructive">
                      (-{university.ieltsGap.toFixed(1)})
                    </span>
                  )}
              </div>
            </div>
          </div>

          {university.scholarships &&
            university.eligibility !== "not-eligible" && (
              <div className="flex items-center gap-1.5 text-sm text-chart-5">
                <Award className="w-3.5 h-3.5" />
                <span>Scholarship opportunities available</span>
              </div>
            )}

          {university.eligibility === "not-eligible" && (
            <p className="text-sm text-muted-foreground">
              Increase your scores to become eligible for this university
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

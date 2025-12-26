"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import type { University } from "@/lib/types";

const allUniversities: University[] = [
  {
    id: 1,
    name: "National Technology University",
    location: "Bangkok, Thailand",
    logo: "/university-logo-tech.jpg",
    status: "open",
    minScore: 80,
    ieltsRequired: 6.0,
    matchLevel: "strong",
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
    matchLevel: "possible",
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
    matchLevel: "not-eligible",
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
    matchLevel: "strong",
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
    matchLevel: "possible",
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
    matchLevel: "strong",
    scholarships: false,
    deadline: "June 5, 2025",
  },
];

const matchColors = {
  strong: "border-primary/50 bg-primary/5",
  possible: "border-accent/50 bg-accent/5",
  "not-eligible": "border-border/50 bg-card",
};

const matchBadgeColors = {
  strong: "bg-primary/10 text-primary border-primary/20",
  possible: "bg-accent/10 text-accent border-accent/20",
  "not-eligible": "bg-muted text-muted-foreground border-border",
};

const statusColors = {
  open: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  "closing-soon": "bg-destructive/10 text-destructive border-destructive/20",
  closed: "bg-muted text-muted-foreground border-border",
};

export function UniversityList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<string>("all");
  const [admissionStatus, setAdmissionStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("match");
  const [scoreRange, setScoreRange] = useState<[number]>([60]);
  const [ieltsRange, setIeltsRange] = useState<[number]>([5.0]);
  const [showFilters, setShowFilters] = useState(true);

  // Filter universities
  let filteredUniversities = allUniversities.filter((uni) => {
    const matchesSearch = uni.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLocation =
      location === "all" || uni.location.includes(location);
    const matchesStatus =
      admissionStatus === "all" || uni.status === admissionStatus;
    const matchesScore = uni.minScore <= scoreRange[0];
    const matchesIELTS = uni.ieltsRequired <= ieltsRange[0];

    return (
      matchesSearch &&
      matchesLocation &&
      matchesStatus &&
      matchesScore &&
      matchesIELTS
    );
  });

  // Sort universities
  filteredUniversities = [...filteredUniversities].sort((a, b) => {
    switch (sortBy) {
      case "score-asc":
        return a.minScore - b.minScore;
      case "score-desc":
        return b.minScore - a.minScore;
      case "ielts-asc":
        return a.ieltsRequired - b.ieltsRequired;
      case "ielts-desc":
        return b.ieltsRequired - a.ieltsRequired;
      case "match":
      default:
        const matchOrder = { strong: 0, possible: 1, "not-eligible": 2 };
        return (
          matchOrder[a.matchLevel || "not-eligible"] -
          matchOrder[b.matchLevel || "not-eligible"]
        );
    }
  });

  const clearFilters = () => {
    setSearchQuery("");
    setLocation("all");
    setAdmissionStatus("all");
    setScoreRange([60]);
    setIeltsRange([5.0]);
    setSortBy("match");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Universities</h1>
        <p className="text-muted-foreground">
          Browse and filter universities based on your preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filter Panel */}
        <aside
          className={`lg:col-span-1 ${
            showFilters ? "block" : "hidden lg:block"
          }`}
        >
          <Card className="p-6 sticky top-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs"
              >
                Clear All
              </Button>
            </div>

            <div className="space-y-6">
              {/* Search */}
              <div className="space-y-2">
                <Label htmlFor="search">University Name</Label>
                <Input
                  id="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-background"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Bangkok">Bangkok</SelectItem>
                    <SelectItem value="Chiang Mai">Chiang Mai</SelectItem>
                    <SelectItem value="Phuket">Phuket</SelectItem>
                    <SelectItem value="Pattaya">Pattaya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Admission Status */}
              <div className="space-y-2">
                <Label htmlFor="status">Admission Status</Label>
                <Select
                  value={admissionStatus}
                  onValueChange={setAdmissionStatus}
                >
                  <SelectTrigger id="status" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closing-soon">Closing Soon</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Score Range */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Your Entrance Score</Label>
                  <span className="text-sm font-medium text-primary">
                    {scoreRange[0]}
                  </span>
                </div>
                <Slider
                  value={scoreRange}
                  onValueChange={(value) => setScoreRange(value as [number])}
                  min={50}
                  max={100}
                  step={5}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Shows universities you qualify for
                </p>
              </div>

              {/* IELTS Range */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Your IELTS Score</Label>
                  <span className="text-sm font-medium text-primary">
                    {ieltsRange[0].toFixed(1)}
                  </span>
                </div>
                <Slider
                  value={ieltsRange}
                  onValueChange={(value) => setIeltsRange(value as [number])}
                  min={4.0}
                  max={9.0}
                  step={0.5}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Shows universities you qualify for
                </p>
              </div>

              {/* Scholarships */}
              <div className="pt-4 border-t border-border">
                <Label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm">Scholarships Available</span>
                </Label>
              </div>
            </div>
          </Card>
        </aside>

        {/* Results */}
        <main className="lg:col-span-3">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {filteredUniversities.length}
                </span>{" "}
                universities found
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-sm text-muted-foreground">
                Sort by:
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">Best Match</SelectItem>
                  <SelectItem value="score-asc">Score (Low to High)</SelectItem>
                  <SelectItem value="score-desc">
                    Score (High to Low)
                  </SelectItem>
                  <SelectItem value="ielts-asc">IELTS (Low to High)</SelectItem>
                  <SelectItem value="ielts-desc">
                    IELTS (High to Low)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* University Cards Grid */}
          {filteredUniversities.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">
                No universities found matching your criteria
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredUniversities.map((uni) => (
                <Card
                  key={uni.id}
                  className={`p-6 transition-all hover:shadow-lg hover:shadow-primary/5 ${
                    matchColors[uni.matchLevel || "not-eligible"]
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={uni.logo || "/placeholder.svg"}
                      alt={`${uni.name} logo`}
                      className="w-20 h-20 rounded-lg bg-muted flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-semibold text-xl mb-2 text-balance">
                            {uni.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{uni.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className={statusColors[uni.status]}
                        >
                          {uni.status === "open"
                            ? "Applications Open"
                            : uni.status === "closing-soon"
                            ? "Closing Soon"
                            : "Closed"}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            matchBadgeColors[uni.matchLevel || "not-eligible"]
                          }
                        >
                          {uni.matchLevel === "strong"
                            ? "✓ Strong Match"
                            : uni.matchLevel === "possible"
                            ? "~ Possible Match"
                            : "✗ Not Eligible"}
                        </Badge>
                        {uni.scholarships && (
                          <Badge
                            variant="outline"
                            className="bg-chart-5/10 text-chart-5 border-chart-5/20"
                          >
                            <Award className="w-3 h-3 mr-1" />
                            Scholarships
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            Min. Score
                          </p>
                          <p className="font-semibold">{uni.minScore}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            IELTS
                          </p>
                          <p className="font-semibold">{uni.ieltsRequired}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Deadline
                          </p>
                          <p className="font-semibold">{uni.deadline}</p>
                        </div>
                      </div>

                      <Button
                        className="gap-2"
                        variant={
                          uni.matchLevel === "strong" ? "default" : "outline"
                        }
                        asChild
                      >
                        <Link href={`/universities/${uni.id}`}>
                          <TrendingUp className="w-4 h-4" />
                          View Details & Majors
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

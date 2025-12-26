"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  BookOpen,
  DollarSign,
  Clock,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { Major } from "@/lib/types";

const universityData = {
  1: {
    id: 1,
    name: "National Technology University",
    location: "Bangkok, Thailand",
    logo: "/university-logo-tech.jpg",
    status: "open" as const,
    minScore: 80,
    ieltsRequired: 6.0,
    matchLevel: "strong" as const,
    scholarships: true,
    deadline: "May 15, 2025",
    description:
      "A leading technology university focused on engineering, computer science, and innovation. We prepare students for the digital future with state-of-the-art facilities and industry partnerships.",
    established: 1985,
    students: 15000,
    website: "https://ntu.example.com",
    admissionTimeline: [
      {
        phase: "Application Opens",
        date: "January 15, 2025",
        status: "completed",
      },
      {
        phase: "Document Submission",
        date: "February 28, 2025",
        status: "completed",
      },
      { phase: "Entrance Exam", date: "March 20, 2025", status: "completed" },
      {
        phase: "Interview Period",
        date: "April 10-20, 2025",
        status: "current",
      },
      {
        phase: "Results Announcement",
        date: "May 1, 2025",
        status: "upcoming",
      },
      { phase: "Final Registration", date: "May 15, 2025", status: "upcoming" },
    ],
    majors: [
      {
        id: 101,
        name: "Computer Science",
        code: "CS-2025",
        universityId: 1,
        requiredSubjects: ["Mathematics", "Physics", "English"],
        minScore: 85,
        ieltsRequired: 6.5,
        tuitionFee: 120000,
        scholarshipAvailable: true,
        personalityFit: ["INTJ", "INTP", "ENTJ"],
        careerPaths: ["Software Engineer", "Data Scientist", "AI Researcher"],
      },
      {
        id: 102,
        name: "Electrical Engineering",
        code: "EE-2025",
        universityId: 1,
        requiredSubjects: ["Mathematics", "Physics", "Chemistry"],
        minScore: 82,
        ieltsRequired: 6.0,
        tuitionFee: 115000,
        scholarshipAvailable: true,
        personalityFit: ["ISTJ", "INTJ", "ISTP"],
        careerPaths: [
          "Electrical Engineer",
          "Systems Designer",
          "Project Manager",
        ],
      },
      {
        id: 103,
        name: "Mechanical Engineering",
        code: "ME-2025",
        universityId: 1,
        requiredSubjects: ["Mathematics", "Physics"],
        minScore: 80,
        ieltsRequired: 6.0,
        tuitionFee: 110000,
        scholarshipAvailable: false,
        personalityFit: ["ISTP", "ESTP", "ISTJ"],
        careerPaths: [
          "Mechanical Engineer",
          "Design Engineer",
          "Manufacturing Engineer",
        ],
      },
    ],
  },
  // Add more universities as needed
};

const statusColors = {
  open: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  "closing-soon": "bg-destructive/10 text-destructive border-destructive/20",
  closed: "bg-muted text-muted-foreground border-border",
};

export function UniversityDetail({ universityId }: { universityId: number }) {
  const university =
    universityData[universityId as keyof typeof universityData];

  if (!university) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">University not found</p>
          <Button asChild>
            <Link href="/universities">Back to Universities</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href="/universities" className="hover:text-foreground">
          Universities
        </Link>
        <span>/</span>
        <span className="text-foreground">{university.name}</span>
      </div>

      {/* University Header */}
      <Card className="p-6 md:p-8 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={university.logo || "/placeholder.svg"}
            alt={`${university.name} logo`}
            className="w-24 h-24 rounded-lg bg-muted flex-shrink-0"
          />

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-balance">
                  {university.name}
                </h1>
                <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{university.location}</span>
                </div>
              </div>

              <Badge
                variant="outline"
                className={statusColors[university.status]}
              >
                {university.status === "open"
                  ? "Applications Open"
                  : university.status === "closing-soon"
                  ? "Closing Soon"
                  : "Closed"}
              </Badge>
            </div>

            <p className="text-muted-foreground mb-6 text-pretty">
              {university.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  Established
                </p>
                <p className="font-semibold">{university.established}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Students</p>
                <p className="font-semibold">
                  {university.students.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Min. Score</p>
                <p className="font-semibold">{university.minScore}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">IELTS</p>
                <p className="font-semibold">{university.ieltsRequired}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="majors" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="majors">Available Majors</TabsTrigger>
              <TabsTrigger value="timeline">Admission Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="majors" className="space-y-4">
              {university.majors?.map((major) => (
                <MajorCard key={major.id} major={major} />
              ))}
            </TabsContent>

            <TabsContent value="timeline" className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  2025 Admission Timeline
                </h3>

                <div className="space-y-4">
                  {university.admissionTimeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            item.status === "completed"
                              ? "bg-chart-4/20 text-chart-4"
                              : item.status === "current"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.status === "completed" ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-bold">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        {index < university.admissionTimeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-border mt-2" />
                        )}
                      </div>

                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{item.phase}</h4>
                          {item.status === "current" && (
                            <Badge
                              variant="outline"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              In Progress
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Important Dates
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Final Deadline</p>
                <p className="font-semibold text-destructive">
                  {university.deadline}
                </p>
              </div>
              <Button className="w-full gap-2">
                <TrendingUp className="w-4 h-4" />
                Apply Now
              </Button>
            </div>
          </Card>

          {university.scholarships && (
            <Card className="p-6 border-chart-5/50 bg-chart-5/5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-chart-5" />
                Scholarships Available
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Multiple scholarship opportunities based on academic merit, exam
                scores, and English proficiency.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Learn More
              </Button>
            </Card>
          )}

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2">
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-primary hover:underline"
              >
                Official Website →
              </a>
              <a
                href="#"
                className="block text-sm text-primary hover:underline"
              >
                Virtual Campus Tour →
              </a>
              <a
                href="#"
                className="block text-sm text-primary hover:underline"
              >
                Contact Admissions →
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MajorCard({ major }: { major: Major }) {
  return (
    <Card className="p-6 hover:shadow-lg hover:shadow-primary/5 transition-all">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{major.name}</h3>
          <p className="text-sm text-muted-foreground">Code: {major.code}</p>
        </div>
        {major.scholarshipAvailable && (
          <Badge
            variant="outline"
            className="bg-chart-5/10 text-chart-5 border-chart-5/20"
          >
            <Award className="w-3 h-3 mr-1" />
            Scholarship Available
          </Badge>
        )}
      </div>

      {/* AI Personality Fit */}
      {major.personalityFit && major.personalityFit.length > 0 && (
        <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm font-medium text-primary flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            Personality Match
          </p>
          <p className="text-xs text-muted-foreground">
            Recommended for: {major.personalityFit.join(", ")}
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Min. Entrance Score
          </p>
          <p className="font-semibold">{major.minScore}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            IELTS Required
          </p>
          <p className="font-semibold">
            {major.ieltsRequired || "Not required"}
          </p>
        </div>
        {major.tuitionFee && (
          <div>
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              Tuition Fee (Annual)
            </p>
            <p className="font-semibold">
              {major.tuitionFee.toLocaleString()} THB
            </p>
          </div>
        )}
        <div>
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            <GraduationCap className="w-3 h-3" />
            Required Subjects
          </p>
          <p className="text-sm">{major.requiredSubjects.join(", ")}</p>
        </div>
      </div>

      {major.careerPaths && major.careerPaths.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Career Paths:</p>
          <div className="flex flex-wrap gap-2">
            {major.careerPaths.map((career, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {career}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Button className="w-full gap-2 bg-transparent" variant="outline">
        <BookOpen className="w-4 h-4" />
        View Full Details
      </Button>
    </Card>
  );
}

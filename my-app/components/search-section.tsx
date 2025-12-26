"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Search, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

export function SearchSection() {
  const [overallScore, setOverallScore] = useState("");
  const [subject1Score, setSubject1Score] = useState("");
  const [subject2Score, setSubject2Score] = useState("");
  const [mbtiType, setMbtiType] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const ApiRoute = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/universities/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          overallScore,
          subject1Score,
          subject2Score,
          mbtiType,
          englishLevel,
        }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResults(data.universities);
    } catch (error) {
      console.error("Error fetching universities:", error);
    } finally {
      setLoading(false);
    }
  };
  const MockImages = [
    {
      src: "university-logo-arts.jpg",
    },
    {
      src: "university-logo-business.jpg",
    },
    {
      src: "university-logo-medical.jpg",
    },
    {
      src: "university-logo-tech.jpg",
    },
  ];
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * MockImages.length);
    return MockImages[randomIndex].src;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="max-w-5xl mx-auto p-6 md:p-8 bg-card/50 backdrop-blur border-border/50">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Ухаалаг хайлт & Профайл</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="overall-score">Ерөнхий авсан оноо</Label>
            <Input
              id="overall-score"
              type="number"
              placeholder="Жишээ: 85"
              value={overallScore}
              onChange={(e) => setOverallScore(e.target.value)}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject1-score">Хичээл 1 оноо</Label>
            <Input
              id="subject1-score"
              type="number"
              placeholder="Жишээ: 90"
              value={subject1Score}
              onChange={(e) => setSubject1Score(e.target.value)}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject2-score">Хичээл 2 оноо</Label>
            <Input
              id="subject2-score"
              type="number"
              placeholder="Жишээ: 88"
              value={subject2Score}
              onChange={(e) => setSubject2Score(e.target.value)}
              className="bg-background"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="mbti-type">MBTI зан чанар</Label>
            <Input
              id="mbti-type"
              placeholder="Жишээ: INTJ"
              value={mbtiType}
              onChange={(e) => setMbtiType(e.target.value)}
              className="bg-background"
              maxLength={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="english-level">Англи хэлний түвшин</Label>
            <Input
              id="english-level"
              placeholder="Жишээ: B2, IELTS 7.0"
              value={englishLevel}
              onChange={(e) => setEnglishLevel(e.target.value)}
              className="bg-background"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            className="w-full md:w-auto gap-2"
            onClick={() => ApiRoute()}
            disabled={loading}
          >
            <Search className="w-4 h-4" />
            {loading ? "Хайж байна..." : "Их сургууль хайх"}
          </Button>
        </div>

        {results.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((uni) => (
              <Card
                key={uni.id}
                className="p-6 bg-card/50 border border-border/50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col gap-2">
                  <img
                    src={uni.logo || getRandomImage()}
                    alt={`${uni.name} логог`}
                    className="w-14 h-14 rounded-lg bg-muted mb-2"
                  />
                  <h3 className="font-semibold text-lg text-primary">
                    {uni.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {uni.location}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      Тохиромжтой
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-accent/10 text-accent border-accent/20"
                    >
                      Боломжит
                    </Badge>
                  </div>
                  <Button className="mt-4 w-full" variant="default">
                    Дэлгэрэнгүй үзэх
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-muted-foreground">Loading.....</p>
        )}
      </Card>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain } from "lucide-react";
import { getRecommendedFieldsByPersonality } from "@/lib/ai-matching";

const quickQuestions = [
  {
    question: "How do you prefer to make decisions?",
    options: [
      { label: "Logic and analysis", trait: "T" },
      { label: "Values and empathy", trait: "F" },
    ],
  },
  {
    question: "How do you recharge your energy?",
    options: [
      { label: "Spending time alone", trait: "I" },
      { label: "Being with others", trait: "E" },
    ],
  },
  {
    question: "How do you approach new information?",
    options: [
      { label: "Focus on concrete facts", trait: "S" },
      { label: "Explore possibilities", trait: "N" },
    ],
  },
  {
    question: "How do you organize your life?",
    options: [
      { label: "Structured and planned", trait: "J" },
      { label: "Flexible and spontaneous", trait: "P" },
    ],
  },
];

export function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [mbtiResult, setMbtiResult] = useState<string>("");

  const handleAnswer = (trait: string) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentQuestion < quickQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate MBTI (simplified)
      const result = newAnswers.join("");
      setMbtiResult(result);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setMbtiResult("");
  };

  if (showResults) {
    const recommendedFields = getRecommendedFieldsByPersonality(mbtiResult);

    return (
      <Card className="p-6 border-primary/50 bg-primary/5">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Your Personality Type</h3>
          <Badge
            variant="outline"
            className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            {mbtiResult}
          </Badge>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3">Recommended Fields for You:</h4>
          <div className="flex flex-wrap gap-2">
            {recommendedFields.map((field, index) => (
              <Badge key={index} variant="secondary">
                {field}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Based on your personality type, these fields align well with your
          natural strengths and preferences.
        </p>

        <Button
          onClick={resetQuiz}
          className="w-full bg-transparent"
          variant="outline"
        >
          Retake Quiz
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Quick Personality Assessment</h3>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          {quickQuestions.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-full ${
                index < currentQuestion
                  ? "bg-primary"
                  : index === currentQuestion
                  ? "bg-primary/50"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-2">
          Question {currentQuestion + 1} of {quickQuestions.length}
        </p>
        <h4 className="font-medium text-lg mb-4">
          {quickQuestions[currentQuestion].question}
        </h4>

        <div className="space-y-3">
          {quickQuestions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option.trait)}
              className="w-full justify-start"
              variant="outline"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        This is a simplified assessment. For detailed results, consider taking a
        full MBTI test.
      </p>
    </Card>
  );
}

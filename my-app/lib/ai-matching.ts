import type { StudentProfile, University, Major, MatchLevel } from "./types";

export interface MatchResult {
  matchLevel: MatchLevel;
  score: number;
  reasons: string[];
}

export interface ScholarshipEligibility {
  eligible: boolean;
  level: "high" | "medium" | "low" | "none";
  reason: string;
}

// MBTI personality to field mapping
const personalityFieldMapping: Record<string, string[]> = {
  // Analysts
  INTJ: ["Computer Science", "Engineering", "Research", "Strategic Planning"],
  INTP: ["Mathematics", "Physics", "Computer Science", "Philosophy"],
  ENTJ: ["Business Administration", "Law", "Management", "Political Science"],
  ENTP: ["Entrepreneurship", "Marketing", "Innovation", "Debate"],

  // Diplomats
  INFJ: ["Psychology", "Counseling", "Writing", "Social Work"],
  INFP: ["Arts", "Literature", "Psychology", "Humanities"],
  ENFJ: ["Education", "Human Resources", "Public Relations", "Leadership"],
  ENFP: ["Communications", "Creative Arts", "Marketing", "Journalism"],

  // Sentinels
  ISTJ: ["Accounting", "Engineering", "Administration", "Finance"],
  ISFJ: ["Nursing", "Education", "Social Services", "Healthcare"],
  ESTJ: ["Business Management", "Military", "Law Enforcement", "Operations"],
  ESFJ: ["Healthcare", "Education", "Event Planning", "Hospitality"],

  // Explorers
  ISTP: ["Mechanical Engineering", "Aviation", "Technology", "Craftsmanship"],
  ISFP: ["Fine Arts", "Design", "Music", "Photography"],
  ESTP: [
    "Sales",
    "Entrepreneurship",
    "Sports Management",
    "Emergency Services",
  ],
  ESFP: ["Entertainment", "Hospitality", "Event Planning", "Sales"],
};

/**
 * Calculate university match based on student profile
 */
export function calculateUniversityMatch(
  university: University,
  profile: StudentProfile
): MatchResult {
  const reasons: string[] = [];
  let score = 0;

  // Check entrance exam score (40% weight)
  if (profile.examScore) {
    if (profile.examScore >= university.minScore + 10) {
      score += 40;
      reasons.push("Your entrance score exceeds requirements significantly");
    } else if (profile.examScore >= university.minScore + 5) {
      score += 35;
      reasons.push("Your entrance score is well above minimum requirements");
    } else if (profile.examScore >= university.minScore) {
      score += 25;
      reasons.push("You meet the minimum entrance score requirement");
    } else {
      score += 0;
      reasons.push("Your score is below the minimum requirement");
    }
  }

  // Check IELTS score (30% weight)
  if (profile.ieltsScore) {
    if (profile.ieltsScore >= university.ieltsRequired + 1.0) {
      score += 30;
      reasons.push("Your IELTS score is excellent for this university");
    } else if (profile.ieltsScore >= university.ieltsRequired + 0.5) {
      score += 25;
      reasons.push("Your IELTS score is above requirements");
    } else if (profile.ieltsScore >= university.ieltsRequired) {
      score += 20;
      reasons.push("You meet the IELTS requirement");
    } else {
      score += 0;
      reasons.push("Your IELTS score needs improvement");
    }
  }

  // Check scholarship availability (10% weight)
  if (university.scholarships) {
    score += 10;
    reasons.push("Scholarships are available at this university");
  }

  // Location preference (10% weight)
  if (
    profile.preferences?.location &&
    university.location.includes(profile.preferences.location)
  ) {
    score += 10;
    reasons.push("Located in your preferred area");
  }

  // Admission status (10% weight)
  if (university.status === "open") {
    score += 10;
  } else if (university.status === "closing-soon") {
    score += 5;
    reasons.push("Application deadline approaching soon");
  }

  // Determine match level
  let matchLevel: MatchLevel;
  if (score >= 70) {
    matchLevel = "strong";
  } else if (score >= 40) {
    matchLevel = "possible";
  } else {
    matchLevel = "not-eligible";
  }

  return { matchLevel, score, reasons };
}

/**
 * Calculate major match based on personality and scores
 */
export function calculateMajorMatch(
  major: Major,
  profile: StudentProfile
): MatchResult {
  const reasons: string[] = [];
  let score = 0;

  // Check entrance exam score (50% weight)
  if (profile.examScore) {
    if (profile.examScore >= major.minScore + 10) {
      score += 50;
      reasons.push("Your score is highly competitive for this major");
    } else if (profile.examScore >= major.minScore) {
      score += 35;
      reasons.push("You meet the minimum score for this major");
    } else {
      reasons.push("Score is below the minimum requirement");
    }
  }

  // Check IELTS if required (20% weight)
  if (major.ieltsRequired && profile.ieltsScore) {
    if (profile.ieltsScore >= major.ieltsRequired) {
      score += 20;
      reasons.push("IELTS requirement met");
    } else {
      reasons.push("IELTS score needs improvement");
    }
  } else if (!major.ieltsRequired) {
    score += 20; // No IELTS required
  }

  // Check personality fit (30% weight)
  if (profile.mbtiType && major.personalityFit?.includes(profile.mbtiType)) {
    score += 30;
    reasons.push(`Perfect personality match for ${profile.mbtiType} types`);
  } else if (profile.mbtiType) {
    // Check if major field aligns with personality
    const alignedFields = personalityFieldMapping[profile.mbtiType] || [];
    const majorMatchesPersonality = alignedFields.some((field) =>
      major.name.toLowerCase().includes(field.toLowerCase())
    );
    if (majorMatchesPersonality) {
      score += 20;
      reasons.push("This field aligns well with your personality type");
    } else {
      score += 10;
      reasons.push("Consider if this field matches your interests");
    }
  }

  let matchLevel: MatchLevel;
  if (score >= 75) {
    matchLevel = "strong";
  } else if (score >= 50) {
    matchLevel = "possible";
  } else {
    matchLevel = "not-eligible";
  }

  return { matchLevel, score, reasons };
}

/**
 * Check scholarship eligibility
 */
export function checkScholarshipEligibility(
  university: University,
  major: Major,
  profile: StudentProfile
): ScholarshipEligibility {
  if (!university.scholarships && !major.scholarshipAvailable) {
    return {
      eligible: false,
      level: "none",
      reason: "No scholarships available for this program",
    };
  }

  let eligibilityScore = 0;
  const reasons: string[] = [];

  // High entrance score bonus
  if (profile.examScore) {
    if (profile.examScore >= 95) {
      eligibilityScore += 40;
      reasons.push("Excellent entrance score");
    } else if (profile.examScore >= 90) {
      eligibilityScore += 30;
      reasons.push("Outstanding entrance score");
    } else if (profile.examScore >= 85) {
      eligibilityScore += 20;
      reasons.push("Strong entrance score");
    }
  }

  // High IELTS score bonus
  if (profile.ieltsScore) {
    if (profile.ieltsScore >= 7.5) {
      eligibilityScore += 30;
      reasons.push("Excellent English proficiency");
    } else if (profile.ieltsScore >= 7.0) {
      eligibilityScore += 20;
      reasons.push("Strong English proficiency");
    } else if (profile.ieltsScore >= 6.5) {
      eligibilityScore += 10;
      reasons.push("Good English proficiency");
    }
  }

  // Above major requirements
  if (profile.examScore && profile.examScore >= major.minScore + 10) {
    eligibilityScore += 30;
    reasons.push("Score significantly exceeds major requirements");
  }

  let level: "high" | "medium" | "low" | "none";
  let eligible = false;

  if (eligibilityScore >= 70) {
    level = "high";
    eligible = true;
  } else if (eligibilityScore >= 40) {
    level = "medium";
    eligible = true;
  } else if (eligibilityScore >= 20) {
    level = "low";
    eligible = true;
  } else {
    level = "none";
    eligible = false;
  }

  return {
    eligible,
    level,
    reason:
      reasons.length > 0
        ? reasons.join(". ")
        : "Does not meet scholarship criteria",
  };
}

/**
 * Get recommended majors based on MBTI personality
 */
export function getRecommendedFieldsByPersonality(mbtiType: string): string[] {
  return personalityFieldMapping[mbtiType] || [];
}

/**
 * Generate AI insight summary
 */
export function generateAIInsight(
  matchResult: MatchResult,
  scholarshipEligibility: ScholarshipEligibility
): string {
  const insights: string[] = [];

  if (matchResult.matchLevel === "strong") {
    insights.push("This is an excellent match for your profile!");
  } else if (matchResult.matchLevel === "possible") {
    insights.push("You have a good chance of admission.");
  } else {
    insights.push("Consider improving your scores to increase your chances.");
  }

  if (scholarshipEligibility.eligible) {
    if (scholarshipEligibility.level === "high") {
      insights.push("You're highly likely to receive a scholarship.");
    } else if (scholarshipEligibility.level === "medium") {
      insights.push("You may qualify for partial scholarships.");
    } else {
      insights.push("Scholarship opportunities may be available.");
    }
  }

  return insights.join(" ");
}

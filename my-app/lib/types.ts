export type AdmissionStatus = "open" | "closing-soon" | "closed";
export type MatchLevel = "strong" | "possible" | "not-eligible";
export type MBTIType = string; // e.g., 'INTJ', 'ENFP', etc.

export interface University {
  id: number;
  name: string;
  location: string;
  logo: string;
  description?: string;
  status: AdmissionStatus;
  minScore: number;
  ieltsRequired: number;
  matchLevel?: MatchLevel;
  scholarships: boolean;
  deadline: string;
  majors?: Major[];
}

export interface Major {
  id: number;
  name: string;
  code: string;
  universityId: number;
  requiredSubjects: string[];
  minScore: number;
  ieltsRequired?: number;
  tuitionFee?: number;
  scholarshipAvailable: boolean;
  personalityFit?: string[];
  careerPaths?: string[];
}

export interface StudentProfile {
  examScore?: number;
  ieltsScore?: number;
  mbtiType?: MBTIType;
  preferences?: {
    location?: string;
    fieldOfStudy?: string;
    budgetRange?: [number, number];
  };
}

export interface ScholarshipInfo {
  id: number;
  name: string;
  type: "merit" | "score" | "english" | "need-based";
  amount: number | string;
  eligibilityCriteria: {
    minExamScore?: number;
    minIELTS?: number;
    other?: string[];
  };
}

// /app/api/universities/search/route.ts
import { NextRequest, NextResponse } from "next/server";

// Том mock data
const universities = [
  {
    id: 1,
    name: "National Technology University",
    location: "Бангкок, Тайланд",
    minScore: 80,
    ieltsRequired: 6.0,
  },
  {
    id: 2,
    name: "International Business Institute",
    location: "Чианг Май, Тайланд",
    minScore: 75,
    ieltsRequired: 6.5,
  },
  {
    id: 3,
    name: "Medical Sciences University",
    location: "Пхукет, Тайланд",
    minScore: 90,
    ieltsRequired: 7.0,
  },
  {
    id: 4,
    name: "Creative Arts College",
    location: "Паттайя, Тайланд",
    minScore: 70,
    ieltsRequired: 5.5,
  },
  {
    id: 5,
    name: "Engineering Academy",
    location: "Сингапур",
    minScore: 85,
    ieltsRequired: 6.5,
  },
  {
    id: 6,
    name: "International Design School",
    location: "Малайз",
    minScore: 65,
    ieltsRequired: 5.0,
  },
  {
    id: 7,
    name: "Business & Economics University",
    location: "Хонг Конг",
    minScore: 78,
    ieltsRequired: 6.0,
  },
  {
    id: 8,
    name: "Science & Tech Institute",
    location: "Токио, Япон",
    minScore: 88,
    ieltsRequired: 6.5,
  },
  {
    id: 9,
    name: "Arts & Humanities College",
    location: "Сеул, Солонгос",
    minScore: 72,
    ieltsRequired: 5.5,
  },
  {
    id: 10,
    name: "Global Medical University",
    location: "Бангкок, Тайланд",
    minScore: 92,
    ieltsRequired: 7.0,
  },
  {
    id: 11,
    name: "AI & Robotics Institute",
    location: "Шанхай, Хятад",
    minScore: 85,
    ieltsRequired: 6.5,
  },
  {
    id: 12,
    name: "International Law School",
    location: "Сингапур",
    minScore: 80,
    ieltsRequired: 6.0,
  },
  {
    id: 13,
    name: "Computer Science University",
    location: "Чианг Май, Тайланд",
    minScore: 88,
    ieltsRequired: 6.5,
  },
  {
    id: 14,
    name: "Creative Media College",
    location: "Пхукет, Тайланд",
    minScore: 70,
    ieltsRequired: 5.5,
  },
  {
    id: 15,
    name: "Engineering & Design University",
    location: "Хонг Конг",
    minScore: 82,
    ieltsRequired: 6.0,
  },
  {
    id: 16,
    name: "International Hospitality School",
    location: "Паттайя, Тайланд",
    minScore: 68,
    ieltsRequired: 5.5,
  },
  {
    id: 17,
    name: "Tech & Innovation Academy",
    location: "Сингапур",
    minScore: 90,
    ieltsRequired: 6.5,
  },
  {
    id: 18,
    name: "Global Business University",
    location: "Малайз",
    minScore: 77,
    ieltsRequired: 6.0,
  },
  {
    id: 19,
    name: "Medical Research Institute",
    location: "Токио, Япон",
    minScore: 95,
    ieltsRequired: 7.0,
  },
  {
    id: 20,
    name: "Arts & Culture College",
    location: "Сеул, Солонгос",
    minScore: 70,
    ieltsRequired: 5.5,
  },
];

export async function POST(req: NextRequest) {
  try {
    const { examScore, ieltsScore } = await req.json();
    console.log({ examScore, ieltsScore });

    if (!examScore && !ieltsScore) {
      return NextResponse.json(
        { error: "Элсэлтийн оноо эсвэл IELTS оноо шаардлагатай" },
        { status: 400 }
      );
    }

    const results = universities.filter(
      (uni) =>
        (!examScore || uni.minScore <= Number(examScore)) &&
        (!ieltsScore || uni.ieltsRequired <= Number(ieltsScore))
    );

    return NextResponse.json({ universities: results });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

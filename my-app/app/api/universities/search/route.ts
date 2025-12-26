import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

/* ================= MOCK DATA (Монгол) ================= */
const universities = [
  {
    id: 1,
    name: "Улаанбаатарын Технологийн Их Сургууль",
    location: "Улаанбаатар",
    minScore: 80,
    ieltsRequired: 6.0,
  },
  {
    id: 2,
    name: "Булган Олон Улсын Бизнесийн Институт",
    location: "Булган",
    minScore: 75,
    ieltsRequired: 6.5,
  },
  {
    id: 3,
    name: "Эмнэлэг, Эрдэм Судлалын Их Сургууль",
    location: "Дархан",
    minScore: 90,
    ieltsRequired: 7.0,
  },
  {
    id: 4,
    name: "Боловсрол, Урлагийн Коллеж",
    location: "Эрдэнэт",
    minScore: 70,
    ieltsRequired: 5.5,
  },
  {
    id: 5,
    name: "Инженер, Дизайн Академи",
    location: "Улаанбаатар",
    minScore: 85,
    ieltsRequired: 6.5,
  },
  {
    id: 6,
    name: "Олон Улсын Хууль Зүйн Сургууль",
    location: "Дархан",
    minScore: 88,
    ieltsRequired: 7.0,
  },
  {
    id: 7,
    name: "Эрүүл Мэнд, Асрамжийн Их Сургууль",
    location: "Эрдэнэт",
    minScore: 78,
    ieltsRequired: 6.0,
  },
  {
    id: 8,
    name: "Глобал Бизнес Коллеж",
    location: "Булган",
    minScore: 72,
    ieltsRequired: 5.5,
  },
];

/* ===== AI-д зориулагдсан хамгийн жижиг dataset ===== */
const aiUniversities = universities.map((u) => ({
  id: u.id,
  minScore: u.minScore,
  ielts: u.ieltsRequired,
}));

/* ================= API ================= */
export async function POST(req: NextRequest) {
  try {
    const { overallScore, englishLevel, mbtiType } = await req.json();

    const examScore = overallScore ? Number(overallScore) : 0;
    const ieltsScore = englishLevel
      ? Number(englishLevel.replace(/[^\d.]/g, ""))
      : 0;

    /* ===== 1️⃣ Эхлээд backend filter (AI-г дуудахгүй) ===== */
    const basicFiltered = universities.filter(
      (u) => examScore >= u.minScore && ieltsScore >= u.ieltsRequired
    );

    if (basicFiltered.length <= 1) {
      return NextResponse.json({ universities: basicFiltered });
    }

    /* ===== 2️⃣ Gemini зөвхөн ID сонгоно ===== */
    const prompt = `
Return ONLY a JSON array of university IDs.

Rules:
- examScore >= university.minScore
- ielts >= university.ielts
- If multiple match, prioritize by MBTI (${mbtiType})

User:
examScore=${examScore}
ielts=${ieltsScore}

Universities:
${JSON.stringify(aiUniversities)}

Output:
[1,2]
`;

    const aiResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = (aiResponse as any).text ?? "[]";

    const ids: number[] = JSON.parse(text.match(/\[[\d,\s]*\]/)?.[0] ?? "[]");

    /* ===== 3️⃣ ID → БҮРЭН DATA ===== */
    const finalUniversities = universities.filter((u) => ids.includes(u.id));

    return NextResponse.json({ universities: finalUniversities });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "AI error" }, { status: 500 });
  }
}

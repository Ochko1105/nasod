export async function GET() {
  return new Response("Hello, World!");
}
// import { extractDatesRegex } from "@/src/lib/dateRegex";
// import { Tatah } from "@/src/lib/tatax";
// import { extractDatesRegex } from "@/src/lib/dateRegex";
// import { Tatah } from "@/src/lib/tatax";

// import { GoogleGenAI } from "@google/genai";
// import axios from "axios";
// import * as cheerio from "cheerio";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";
// export const revalidate = 60 * 60 * 24; // 1 өдөр

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

// export async function GET(
//   _req: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const universityId = Number((await params).id);
//   if (isNaN(universityId)) {
//     return NextResponse.json(
//       { error: "Invalid university ID" },
//       { status: 400 }
//     );
//   }

//   const config = Tatah[universityId.toString()];
//   if (!config) {
//     return NextResponse.json(
//       { error: "Unsupported university" },
//       { status: 404 }
//     );
//   }

//   try {
//     const { data: html } = await axios.get(config.url);
//     const $ = cheerio.load(html);

//     let text = "";
//     $(config.selector).each((_, el) => {
//       const t = $(el).text().trim();
//       if (config.match(t)) text = t;
//     });

//     let parsed: { start_date: string; end_date: string };

//     try {
//       const prompt = config.prompt(text);
//       const result = await ai.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: [{ role: "user", parts: [{ text: prompt }] }],
//       });

//       const raw = result.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
//       parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
//     } catch {
//       const fallback = extractDatesRegex(text);
//       parsed = {
//         start_date: fallback?.start_date ?? "2026-02-01",
//         end_date: fallback?.end_date ?? "2026-03-01",
//       };
//     }

//     if (!text) {
//       parsed = { start_date: "2026-02-01", end_date: "2026-03-01" };
//     }

//     return NextResponse.json({
//       university_id: universityId,
//       source: config.url,
//       raw_text: text || "No text found",
//       ...parsed,
//     });
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json({ error: "Scrape failed" }, { status: 500 });
//   }
// }

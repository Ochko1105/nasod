import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export type ScrapeConfig = {
//   url: string;
//   selector: string;
//   match: (text: string) => boolean;
//   prompt: (text: string) => string;
// };

// export const Tatah: Record<string, ScrapeConfig> = {
//   "1": {
//     url: "https://elselt.num.edu.mn/?page_id=12",
//     selector: "p",
//     match: (text: string) =>
//       text.includes("Элсэлтийн бүртгэл") && text.includes("явагдана"),
//     prompt: (text: string) => `
// TEXT:
// "${text.replace(/"/g, '\\"')}"
// Return JSON only.
// `,
//   },
//   "2": {
//     url: "https://elselt.edu.mn/page/14",
//     selector: "div",
//     match: (text: string) => text.includes("бүртгэл эхэлнэ"),
//     prompt: (text: string) => `
// TEXT:
// "${text.replace(/"/g, '\\"')}"
// Return JSON only.
// `,
//   },
// };

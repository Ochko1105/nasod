"use client";
import { MONGOL_MONTHS } from "@/src/lib/types/type";
import { useState } from "react";

// Монгол сарыг array-д

export default function UniversityDates() {
  const [dates, setDates] = useState<{
    start_date: string;
    end_date: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDates = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/turshih2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ universityName: "ШУТИС" }),
      });
      const data = await res.json();
      setDates(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // "MM-DD" → "X сарын DD"
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    const [month, day] = dateStr.split("-").map((v) => Number(v));
    const monthText = MONGOL_MONTHS[month - 1]; // array index 0-с эхэлнэ
    return `${monthText} ${day}`;
  };

  return (
    <div className="space-y-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={fetchDates}
      >
        Огноо авах
      </button>

      {loading && <p>Ачааллаж байна...</p>}

      {dates && (
        <div className="space-y-2">
          <div>
            <p className="text-sm text-gray-600">Бүртгэл эхлэх</p>
            <p className="text-base font-semibold">
              {formatDate(dates.start_date)}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Бүртгэл дуусах</p>
            <p className="text-base font-semibold">
              {formatDate(dates.end_date)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

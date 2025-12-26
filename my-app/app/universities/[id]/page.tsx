import { Header } from "@/components/header";
import { UniversityDetail } from "@/components/university-detail";

export const metadata = {
  title: "University Details - UniMatch",
  description:
    "View detailed information about universities, majors, and admission requirements",
};

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen">
      <Header />
      <UniversityDetail universityId={Number.parseInt(id)} />
    </div>
  );
}

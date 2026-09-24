import { notFound } from "next/navigation";
import CareerDetail from "../../components/layout/career/CareerDetail";
import { getCareerJobBySlug, getCareerJobs } from "@/data";

type CareerDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCareerJobs().map((job) => ({ slug: job.slug }));
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const job = getCareerJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <CareerDetail job={job} />;
}

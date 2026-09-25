import { notFound } from "next/navigation";
import InsurancePlanDetail from "../../components/layout/insurance/InsurancePlanDetail";
import { getPlanBySlug, getPlanSlugs } from "@/data";

type InsurancePlanDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPlanSlugs().map((plan) => ({ slug: plan.slug }));
}

export default async function InsurancePlanDetailPage({
  params,
}: InsurancePlanDetailPageProps) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  return <InsurancePlanDetail plan={plan} />;
}
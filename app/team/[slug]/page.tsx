import { notFound } from "next/navigation";
import TeamDetail from "../../components/layout/team/TeamDetail";
import { getTeamMemberBySlug, getTeamMembers } from "@/data";

type TeamDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTeamMembers().map((member) => ({ slug: member.slug }));
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return <TeamDetail member={member} />;
}

import insuranceData from "./siteData.json";

export type RawInsuranceData = typeof insuranceData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

export type InsuranceTopbarData =
  typeof insuranceData.InsuranceIndustries.sections.Topbar.variants.InsuranceTopbar1;
export type InsuranceHeaderData =
  typeof insuranceData.InsuranceIndustries.sections.Header.variants.InsuranceHeader1;
export type InsuranceBannerData =
  typeof insuranceData.InsuranceIndustries.sections.Banner.variants.InsuranceBanner1;
export type InsuranceAboutData =
  typeof insuranceData.InsuranceIndustries.sections.About.variants.InsuranceAbout1;
export type InsuranceAboutBannerData = InsuranceAboutData["banner"];
export type InsurancePlansData =
  typeof insuranceData.InsuranceIndustries.sections.Plans.variants.InsurancePlans1;
export type InsuranceProcessData =
  typeof insuranceData.InsuranceIndustries.sections.Process.variants.InsuranceProcess1;
export type InsuranceChooseData =
  typeof insuranceData.InsuranceIndustries.sections.Choose.variants.InsuranceChoose1;
export type InsuranceTestimonialData =
  typeof insuranceData.InsuranceIndustries.sections.Testimonial.variants.InsuranceTestimonial1;
export type InsuranceCtaBannerData =
  typeof insuranceData.InsuranceIndustries.sections.CtaBanner.variants.InsuranceCtaBanner1;
export type InsurancePartnersData =
  typeof insuranceData.InsuranceIndustries.sections.Partners.variants.InsurancePartners1;
export type InsuranceBlogData =
  typeof insuranceData.InsuranceIndustries.sections.Blog.variants.InsuranceBlog1;
export type InsuranceFooterData =
  typeof insuranceData.InsuranceIndustries.sections.Footer.variants.InsuranceFooter1;
export type InsuranceMissionData =
  typeof insuranceData.InsuranceIndustries.sections.Mission.variants.InsuranceMission1;
export type InsuranceAwardData =
  typeof insuranceData.InsuranceIndustries.sections.Award.variants.InsuranceAward1;
export type InsuranceLegalData =
  typeof insuranceData.InsuranceIndustries.sections.Legal.variants.InsuranceLegal1;
export type InsuranceNotFoundData =
  typeof insuranceData.InsuranceIndustries.sections.NotFound.variants.InsuranceNotFound1;
export type InsuranceContactData =
  typeof insuranceData.InsuranceIndustries.sections.Contact.variants.InsuranceContact1;
export type InsuranceFaqData =
  typeof insuranceData.InsuranceIndustries.sections.Faq.variants.InsuranceFaq1;
export type InsuranceQuoteData =
  typeof insuranceData.InsuranceIndustries.sections.Quote.variants.InsuranceQuote1;
export type InsuranceCareerData =
  typeof insuranceData.InsuranceIndustries.sections.Career.variants.InsuranceCareer1;
export type InsuranceFaqItem = InsuranceFaqData["faqs"][number];
export type InsuranceLegalSectionKey = keyof InsuranceLegalData;
export type InsuranceLegalSection = InsuranceLegalData[InsuranceLegalSectionKey];
export type InsuranceLegalPoint = InsuranceLegalSection["points"][number];
export type InsuranceLegalContact = InsuranceLegalSection["contact"];
export type InsuranceGalleryData =
  typeof insuranceData.InsuranceIndustries.sections.Gallery.variants.InsuranceGallery1;
export type InsuranceGalleryImage = InsuranceGalleryData["images"][number];
export type InsuranceGalleryVideo = InsuranceGalleryData["videos"]["items"][number];
export type InsuranceTeamData =
  typeof insuranceData.InsuranceIndustries.sections.Team.variants.InsuranceTeam1;
export type InsuranceTeamMember = InsuranceTeamData["members"][number];
export type InsuranceStatItem = InsuranceAboutData["stats"][number];
export type InsuranceFeatureItem = InsuranceAboutData["features"][number];

export type InsurancePlanItem = InsurancePlansData["plans"][number];

export type InsuranceProcessStep = InsuranceProcessData["steps"][number];

export type InsuranceChooseBullet = InsuranceChooseData["bulletPoints"][number];
export type InsuranceFloatingBadge = InsuranceChooseData["floatingBadges"][number];

export type InsuranceTestimonialItem =
  InsuranceTestimonialData["testimonialItems"][number];

export type InsuranceCtaButton = InsuranceCtaBannerData["buttons"][number];

export type PartnerItem = InsurancePartnersData["partners"][number];

export type InsuranceBlogPost = InsuranceBlogData["posts"][number];

export type InsuranceFooterColumn = InsuranceFooterData["columns"][number];
export type InsuranceFooterLink = InsuranceFooterColumn["links"][number];
export type InsuranceLegalLink = InsuranceFooterData["legalLinks"][number];
export type InsuranceFooterHour = InsuranceFooterData["footerContact"]["hours"][number];
export type InsuranceCareerPerk = InsuranceCareerData["perks"][number];
export type InsuranceJobItem = InsuranceCareerData["jobs"][number];
const sec = insuranceData.InsuranceIndustries.sections;

export const site = {
  topbar: sec.Topbar.variants.InsuranceTopbar1,
  header: sec.Header.variants.InsuranceHeader1,
  banner: sec.Banner.variants.InsuranceBanner1,
  aboutUs: sec.About.variants.InsuranceAbout1,
  about: sec.About.variants.InsuranceAbout1,
  plans: sec.Plans.variants.InsurancePlans1,
  process: sec.Process.variants.InsuranceProcess1,
  choose: sec.Choose.variants.InsuranceChoose1,
  testimonial: sec.Testimonial.variants.InsuranceTestimonial1,
  ctaBanner: sec.CtaBanner.variants.InsuranceCtaBanner1,
  partners: sec.Partners.variants.InsurancePartners1,
  blog: sec.Blog.variants.InsuranceBlog1,
  footer: sec.Footer.variants.InsuranceFooter1,
  mission: sec.Mission.variants.InsuranceMission1,
  award: sec.Award.variants.InsuranceAward1,
  legal: sec.Legal.variants.InsuranceLegal1,
  gallery: sec.Gallery.variants.InsuranceGallery1,
  team: sec.Team.variants.InsuranceTeam1,
  contact: sec.Contact.variants.InsuranceContact1,
  faq: sec.Faq.variants.InsuranceFaq1,
  quote: sec.Quote.variants.InsuranceQuote1,
  career: sec.Career.variants.InsuranceCareer1,
};

const planItems = sec.Plans.variants.InsurancePlans1.plans as InsurancePlanItem[];

const partnerItems = sec.Partners.variants.InsurancePartners1
  .partners as PartnerItem[];

const blogPosts = sec.Blog.variants.InsuranceBlog1.posts as InsuranceBlogPost[];
const careerJobs = sec.Career.variants.InsuranceCareer1.jobs as InsuranceJobItem[];

export function getPlanBySlug(slug: string): InsurancePlanItem | null {
  return planItems.find((plan) => plan.slug === slug) || null;
}

export function getPlanSlugs(): InsurancePlanItem[] {
  return planItems;
}

export function getPartnerById(id: number): PartnerItem | null {
  return partnerItems.find((partner) => partner.id === id) || null;
}

export function getPartners(): PartnerItem[] {
  return partnerItems;
}

export function getBlogPostBySlug(slug: string): InsuranceBlogPost | null {
  const cleanSlug = slug.replace(/^blog\//, "");
  return (
    blogPosts.find(
      (post) => post.slug === cleanSlug || post.slug.endsWith(cleanSlug),
    ) || null
  );
}

export function getBlogPostSlugs(): InsuranceBlogPost[] {
  return blogPosts;
}

export function getCareerJobs(): InsuranceJobItem[] {
  return careerJobs;
}

export function getCareerJobBySlug(slug: string): InsuranceJobItem | null {
  const cleanSlug = slug.replace(/^career\//, "");
  return careerJobs.find((job) => job.slug === cleanSlug) || null;
}

const teamMembers =
  sec.Team.variants.InsuranceTeam1.members as InsuranceTeamMember[];

export function getTeamMembers(): InsuranceTeamMember[] {
  return teamMembers;
}

export function getTeamMemberBySlug(slug: string): InsuranceTeamMember | null {
  const cleanSlug = slug.replace(/^team\//, "");
  return (
    teamMembers.find(
      (member) =>
        member.slug === cleanSlug || member.slug.endsWith(cleanSlug),
    ) || null
  );
}

export default insuranceData;
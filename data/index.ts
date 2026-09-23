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
export type InsuranceStatItem = InsuranceAboutData["stats"][number];
export type InsuranceFeatureItem = InsuranceAboutData["features"][number];

export type InsurancePlanItem = InsurancePlansData["plans"][number];

export type InsuranceProcessStep = InsuranceProcessData["steps"][number];

export type InsuranceChooseBullet = InsuranceChooseData["bulletPoints"][number];
export type InsuranceFloatingBadge = InsuranceChooseData["floatingBadges"][number];

export type InsuranceRatingBadge = InsuranceTestimonialData["ratingBadges"][number];
export type InsuranceTestimonialItem =
  InsuranceTestimonialData["testimonialItems"][number];

export type InsuranceCtaButton = InsuranceCtaBannerData["buttons"][number];

export type PartnerItem = InsurancePartnersData["partners"][number];

export type InsuranceBlogPost = InsuranceBlogData["posts"][number];

export type InsuranceFooterColumn = InsuranceFooterData["columns"][number];
export type InsuranceFooterLink = InsuranceFooterColumn["links"][number];
export type InsuranceLegalLink = InsuranceFooterData["legalLinks"][number];
export type InsuranceFooterHour = InsuranceFooterData["footerContact"]["hours"][number];

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
};

const planItems = sec.Plans.variants.InsurancePlans1.plans as InsurancePlanItem[];

const partnerItems = sec.Partners.variants.InsurancePartners1
  .partners as PartnerItem[];

const blogPosts = sec.Blog.variants.InsuranceBlog1.posts as InsuranceBlogPost[];

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

export default insuranceData;
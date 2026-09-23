import Bannerpage from "../../shared/Bannerpage";
import PartnersSection from "../../homelayout/Partners";
import { site } from "@/data";

export default function Partners() {
  const partnersData = site.partners;

  const banner = partnersData?.banner || {
    title: "Our Partners",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Partners" },
    ],
    bgImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80",
  };

  return (
    <>
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />
      <PartnersSection />
    </>
  );
}
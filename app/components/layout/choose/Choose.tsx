import Bannerpage from "../../shared/Bannerpage";
import ChooseSection from "../../homelayout/Choose";
import Process from "../../homelayout/Process";
import Ctabanner from "../../shared/CtaBanner";
import { site } from "@/data";

export default function Choose() {
  const chooseData = site.choose;

  const banner = chooseData?.banner || {
    title: "Why Choose Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Why Choose Us" },
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
      

      
      <ChooseSection />
      <div className="mt-10">
      <Process />
      <Ctabanner />
      </div>
    </>
  );
}
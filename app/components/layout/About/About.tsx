import Bannerpage from "../../shared/Bannerpage";
import AboutUs from "../../homelayout/About";
import Process from "../../homelayout/Process";
import Ctabanner from "../../shared/CtaBanner";
import { site } from "@/data";

export default function About() {
  const aboutUs = site.aboutUs;

  const banner = aboutUs?.banner || {
    title: "About Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About Us" },
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
      <AboutUs hideButton />
      <Process />
      <Ctabanner />
    </>
  );
}
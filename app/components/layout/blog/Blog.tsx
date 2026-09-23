import Bannerpage from "../../shared/Bannerpage";
import BlogSection from "../../homelayout/BlogSection";
import { site } from "@/data";

export default function Blog() {
  const blogData = site.blog;

  const banner = blogData?.banner || {
    title: "Our Blog",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Blog" },
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
      <BlogSection />
    </>
  );
}
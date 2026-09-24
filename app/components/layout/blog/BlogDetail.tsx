import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaCommentAlt,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaLink,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import Bannerpage from "../../shared/Bannerpage";
import { site, type InsuranceBlogPost } from "@/data";

type BlogDetailProps = {
  post: InsuranceBlogPost;
};

const articleBylineIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
};

export default function BlogDetail({ post }: BlogDetailProps) {
  const relatedPosts = site.blog.posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 4);
  const detail = post.detail;

  return (
    <>
      <Bannerpage
        title="Blogs Detail"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs Detail" }]}
        bgImage={site.blog.banner.bgImage}
      />

      <main className="bg-[#fbfcfd] py-10 sm:py-12  ">
        <div className="mx-auto grid  items-start gap-6 px-4 sm:px-7 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.92fr)] lg:px-20">
          <article className="min-w-0">
            <div className="mb-2 flex items-center gap-2 text-sm font-extrabold tracking-[0.16em] text-[#0b62c7]">
              <span>{detail.category}</span>
              <span className="h-px w-8 bg-[#0b62c7]" />
            </div>
            <h1 className="max-w-3xl text-3xl font-bold leading-[1.08] text-[#082b5e] sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#082b5e]" />
                {detail.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-[#082b5e]" />
                {detail.readTime}
              </span>
              <span className="flex items-center gap-2">
                <FaCommentAlt className="text-[#082b5e]" />
                {post.comments} Comments
              </span>
              <span className="flex items-center gap-2">
                <FaFileAlt className="text-[#082b5e]" />
                By {detail.author}
              </span>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="mt-6 aspect-16/7 w-full rounded-xl object-cover object-center"
            />
            <p className="mt-5 text-sm leading-[1.8] text-slate-600 sm:text-base">
              {detail.intro}
            </p>

            <div className="space-y-6 mt-3">
              {detail.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-2 text-lg font-bold leading-tight text-[#082b5e] sm:text-2xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-3 text-sm leading-[1.75] text-slate-600 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="grid gap-x-7 gap-y-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0875e1] text-[10px] font-bold text-white">
                            ✓
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-bold text-[#082b5e]">
                    Share This Article
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    {["facebook", "linkedin", "twitter"].map((name) => {
                      const Icon = articleBylineIcons[name];
                      return (
                        <a
                          key={name}
                          href="#share"
                          aria-label={`Share on ${name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf3ff] text-[#0875e1] hover:bg-[#0875e1] hover:text-white"
                        >
                          <Icon />
                        </a>
                      );
                    })}
                    <a
                      href="#share"
                      aria-label="Copy article link"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf3ff] text-[#0875e1] hover:bg-[#0875e1] hover:text-white"
                    >
                      <FaLink />
                    </a>
                  </div>
                </div>
                <div className="flex gap-6 border-t border-slate-200 pt-4 text-sm sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <Link
                    href="/blog"
                    className="font-bold text-[#082b5e] hover:text-[#0875e1]"
                  >
                    ← Previous Post
                  </Link>
                  <Link
                    href="/blog"
                    className="font-bold text-[#082b5e] hover:text-[#0875e1]"
                  >
                    Next Post →
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-6">
            <section className="rounded-xl border border-slate-100 bg-white p-4 shadow-[0_5px_20px_rgba(8,43,94,0.06)] sm:p-5">
              <h2 className="mb-4 text-lg sm:text-xl font-bold text-[#082b5e]">
                Related Articles
              </h2>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex gap-3"
                  >
                    <img
                      src={related.image}
                      alt=""
                      className="h-16 w-24 shrink-0 rounded-lg object-cover"
                    />
                    <span className="min-w-0">
                      <strong className="block text-sm sm:text-base font-bold leading-tight text-[#082b5e] group-hover:text-[#0875e1]">
                        {related.title}
                      </strong>
                      <span className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                        <FaCalendarAlt className="text-[#0875e1]" />
                        {related.detail.date}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-[#edf5ff] p-5 sm:p-6">
              <h2 className="text-xl sm:text-3xl font-bold text-[#082b5e]">
                Need Expert Advice?
              </h2>
              <p className="mt-2 text-sm sm:text-lg leading-relaxed text-slate-600">
                Our insurance experts are here to help you find the right plan
                for you and your family.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-4 flex h-11 items-center justify-center gap-3 rounded-full bg-[#0875e1] text-sm sm:text-base font-bold text-white"
              >
                <FaPhoneAlt />
                +91 98765 43210
              </a>
              <a
                href="mailto:support@insurewise.com"
                className="mt-4 flex items-center gap-3 text-sm sm:text-base text-slate-600"
              >
                <FaEnvelope className="text-[#082b5e]" />
                support@insurewise.com
              </a>
              <p className="mt-3 flex items-center gap-3 text-sm sm:text-base text-slate-600">
                <FaClock className="text-[#082b5e]" />
                Mon - Sat, 9:00 AM - 6:00 PM
              </p>
            </section>

            <section className="rounded-xl bg-[#edf5ff] p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#082b5e]">
                More Insights, Straight to You
              </h2>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                Get the latest insurance tips and updates.
              </p>
              <Link
                href="/blog"
                className="mt-4 flex h-10 items-center justify-center gap-2 rounded-full border-2 border-[#0875e1] text-sm font-bold text-[#0875e1]"
              >
                Explore All Blogs <FaArrowRight />
              </Link>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

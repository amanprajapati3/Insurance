"use client";

import React from "react";
import { site, SectionProps, InsuranceBlogData } from "@/data/index";

// Helper Icon Component
function BlogIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  switch (name) {
    case "document-text":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "comment":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BlogSection({
  className = "",
  limit,
}: SectionProps<InsuranceBlogData> & { limit?: number }) {
  const data = site.blog;

  const badge = data?.badge || "Our Blog";
  const title = data?.title?.normal || "Latest News & Articles";
  const titleMiddle = "";
  const highlightedTitle = data?.title?.highlighted || "Our Blog";
  const description =
    data?.desc ||
    "Stay informed with expert tips, industry updates and helpful guides\nto make better decisions for you and your family.";

  const allPosts = data?.posts || [];

  const posts = typeof limit === "number" ? allPosts.slice(0, limit) : allPosts;

  return (
    <section className={`w-full bg-[#fbfcfd] py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-8">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066ff] text-xs sm:text-sm font-bold mb-1 shadow-sm">
            <BlogIcon name="document-text" className="w-4 h-4 text-[#0066ff]" />
            <span>{badge}</span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-3xl max-w-md sm:text-4xl  font-bold text-[#081f44]  mb-1">
            {title} {titleMiddle && <span>{titleMiddle}</span>}{" "}
            <span className="text-[#0066ff]">{highlightedTitle}</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl whitespace-pre-line font-medium">
            {description}
          </p>
        </div>

        {/* POSTS GRID: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <div
              key={post.id || index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 group"
            >
              <div>
                {/* IMAGE CONTAINER WITH OVERLAPPING FLOATING DATE BADGE */}
                <div className="relative w-full h-56 sm:h-60  bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* FLOATING DATE BADGE */}
                  <div className="absolute right-4 -bottom-5 bg-white text-center px-4 py-2 rounded-2xl shadow-lg border border-slate-100 z-10 flex flex-col items-center justify-center min-w-[62px]">
                    <span className="text-xl sm:text-2xl font-black text-[#081f44] leading-none">
                      {post.day}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 mt-0.5 tracking-wider uppercase">
                      {post.month}
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-3 pt-4 flex flex-col">
                  
                  {/* COMMENT META */}
                  <div className="flex items-center gap-2 text-[#0066ff] text-xs sm:text-sm font-semibold mb-3">
                    <BlogIcon name="comment" className="w-4 h-4 text-[#0066ff]" />
                    <span>{post.comments} Comments</span>
                  </div>

                  {/* POST TITLE */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#134ead] leading-snug mb-3 transition-colors group-hover:text-[#0066ff] line-clamp-2">
                    {post.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-black sm:text-base leading-relaxed mb-0 font-normal line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* SLANTED BUTTON BAR (80% DARK NAVY / 20% BRIGHT BLUE WITH PERFECT SLANT) */}
              <a
                href={`/blog/${post.slug}`}
                className="relative w-full h-13 sm:h-14 mt-auto block overflow-hidden rounded-xl"
              >
                {/* LEFT 80% DARK NAVY BLOCK WITH SLANTED CUT */}
                <div
                  className="absolute inset-0 bg-[#081f44] text-white flex items-center pl-6 font-bold text-xs sm:text-sm transition-colors duration-300 group-hover:bg-[#061735]"
                  style={{
                    clipPath: "polygon(0 0, 82% 0, 75% 100%, 0 100%)",
                  }}
                >
                  <span>{post.readMoreText || "Read More"}</span>
                </div>

                {/* RIGHT 20% BRIGHT BLUE BLOCK WITH MATCHING SLANTED CUT */}
                <div
                  className="absolute inset-0 bg-[#0066ff] text-white flex items-center justify-end pr-6 transition-colors duration-300 group-hover:bg-[#0052cc]"
                  style={{
                    clipPath: "polygon(82% 0, 100% 0, 100% 100%, 75% 100%)",
                  }}
                >
                  <BlogIcon name="arrow-right" className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
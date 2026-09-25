"use client";

import React from "react";
import Link from "next/link";
import Bannerpage from "../../shared/Bannerpage";
import { site } from "@/data";

type SitemapLink = {
  label: string;
  href: string;
};

type SitemapGroup = {
  title: string;
  links: SitemapLink[];
};

// Exact fallback groups matching the screenshot design
const DEFAULT_SITEMAP_GROUPS: SitemapGroup[] = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Awards & Recognition", href: "/awards" },
      { label: "Our Team", href: "/team" },
      { label: "Team Detail", href: "/team/steven-park" },
    ],
  },
  {
    title: "Insurance",
    links: [
      { label: "Insurance Plans", href: "/insurance" },
      { label: "Insurance Plans Detail", href: "/insurance/life-insurance" },
    ],
  },
  {
    title: "Other Pages",
    links: [
      { label: "Partners", href: "/partners" },
      { label: "Get a Quote", href: "/quote" },
      { label: "Career", href: "/career" },
      { label: "Career Detail", href: "/career/insurance-advisor" },
      { label: "Gallery", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Detail", href: "/blog/how-to-choose-right-life-insurance-plan" },
    ],
  },
  {
    title: "Support",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "404 Page", href: "/404" },
    ],
  },
];

export default function Sitemap() {
  const sitemapData = site?.sitemap;

  // Banner details with safe fallbacks
  const banner = sitemapData?.banner || {
    title: "Sitemap",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Sitemap" }],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const groups: SitemapGroup[] =
    sitemapData?.groups && sitemapData.groups.length > 0
      ? sitemapData.groups
      : DEFAULT_SITEMAP_GROUPS;

  return (
    <>
      {/* BANNER SECTION */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      <main className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
          
          {/* OPTIONAL HEADING / DESCRIPTION (IF AVAILABLE) */}
          {sitemapData?.heading && (
            <div className="mb-10 sm:mb-14">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#082b5e] mb-3">
                {sitemapData.heading.title}
              </h1>
              {sitemapData.heading.description && (
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  {sitemapData.heading.description}
                </p>
              )}
            </div>
          )}

          {/* SITEMAP GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-12 sm:gap-y-14">
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col">
                
                {/* CATEGORY TITLE WITH UNDERLINE */}
                <div className="border-b border-[#e2edff] pb-2.5 mb-4 sm:mb-5">
                  <h2 className="text-xl sm:text-[22px] font-bold text-[#082b5e] tracking-tight">
                    {group.title}
                  </h2>
                </div>

                {/* LINK ITEMS LIST */}
                <ul className="space-y-3 sm:space-y-3.5">
                  {group.links.map((link, idx) => (
                    <li key={`${group.title}-${link.href}-${idx}`}>
                      <Link
                        href={link.href}
                        className="text-sm sm:text-[15px] font-semibold text-[#1e3b6e] hover:text-[#0066ff] transition-colors duration-200 inline-block leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
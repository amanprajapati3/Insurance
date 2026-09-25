"use client";

import React from "react";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import { site, type InsuranceLegalSectionKey } from "@/data";

interface LegalProps {
  section?: InsuranceLegalSectionKey;
}

const DEFAULT_BANNER = {
  title: "Privacy Policy",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" },
  ] as { label: string; href?: string }[],
  bgImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80",
};

export default function Legal({ section = "privacy" }: LegalProps) {
  const legalData = site.legal[section];

  const banner = legalData?.banner || DEFAULT_BANNER;
  const points = legalData?.points || [];
  const contact = legalData?.contact;

  return (
    <>
      {/* PAGE BANNER HEADER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      <div className="bg-slate-50/50 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">
          <div className=" mx-auto space-y-10">
            {/* 8 CONTENT POINTS */}
            {points.map((point, index) => (
              <ScrollReveal key={index} direction="up" index={index} staggerChildren={0.1}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#082b5e] tracking-tight leading-tight mb-3">
                  {point.heading}
                </h2>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </ScrollReveal>
            ))}

            {/* CONTACT US */}
            {contact && (
              <ScrollReveal direction="up" delay={0.1} className="pt-6 border-t border-gray-200">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#082b5e] tracking-tight leading-tight mb-3">
                  {contact.heading}
                </h2>
                <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
                  {contact.description}
                </p>
                <div className="space-y-1 text-sm sm:text-base">
                  <p className="text-black">
                    <span className="font-semibold text-[#082b5e]">Email: </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-black hover:text-[#1a73e8] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p className="text-black">
                    <span className="font-semibold text-[#082b5e]">Phone: </span>
                    <a
                      href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                      className="text-black hover:text-[#1a73e8] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Last Updated: {contact.lastUpdated}
                </p>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
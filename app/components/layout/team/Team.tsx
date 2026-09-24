"use client";

import React from "react";
import Bannerpage from "../../shared/Bannerpage";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { site, type InsuranceTeamData } from "@/data";
import Link from "next/link";

const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  pinterest: FaPinterestP,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

export default function Team() {
  const teamData: InsuranceTeamData = site.team;

  const banner = teamData?.banner || {
    title: "Our Team",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Team" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const header = teamData?.header || {
    subtitle: "MEET OUR EXPERTS",
    title: "The People Behind",
    highlightedTitle: "Our Trust",
    description:
      "Meet the dedicated professionals who guide, protect, and support our customers every step of the way.",
  };

  const members = teamData?.members || [];

  return (
    <>
      {/* REUSABLE PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN TEAM CONTENT SECTION */}
      <section className="bg-slate-50/60 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          {/* SECTION HEADER (CENTERED) */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-1">
              <span className="text-sm sm:text-sm font-bold tracking-widest text-[#1a73e8] uppercase">
                {header.subtitle}
              </span>
              {/* <div className="w-10 h-[2px] bg-[#1a73e8]" /> */}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082b5e] tracking-tight leading-tight mb-0">
              {header.title}{" "}
              <span className="text-[#1a73e8]">{header.highlightedTitle}</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-sm lg:text-base leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* TEAM CARDS GRID (1 COL PHONE / 2 COLS TABLET & DESKTOP) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* LEFT IMAGE (top on mobile) */}
                <div className="md:w-2/5 shrink-0 bg-[#071d3d] overflow-hidden">
                  <Link href={`/team/${member.slug}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center aspect-4/3 md:aspect-auto md:min-h-full transition-transform duration-500 hover:scale-105"
                  />
                  </Link>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 py-3 px-4 flex flex-col justify-center items-start">
                  <Link href={`/team/${member.slug}`}>
                  <h3 className="text-lg sm:text-xl font-bold text-[#082b5e] leading-snug">
                    {member.name}
                  </h3>
                  </Link>

                  <p className="mt-0 text-sm  font-bold  text-[#1a73e8] ">
                    {member.designation}
                  </p>

                  <p className="mt-1 text-sm  text-slate-600 ">
                    {member.description}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex items-center gap-2.5 mt-2">
                    {(member.socialLinks || []).map((social) => {
                      const Icon =
                        SOCIAL_ICONS[social.label.toLowerCase()] ??
                        FaTwitter;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-[#eaf2ff] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white flex items-center justify-center transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
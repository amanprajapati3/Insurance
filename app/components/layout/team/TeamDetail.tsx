"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBullseye,
  FaChartBar,
  FaEnvelope,
  FaFacebookF,
  FaGem,
  FaInstagram,
  FaLightbulb,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaShieldAlt,
  FaTwitter,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { site, type InsuranceTeamMember } from "@/data";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

type TeamDetailProps = {
  member: InsuranceTeamMember;
};

export default function TeamDetail({ member }: TeamDetailProps) {
  const teamBanner = site?.team?.banner || {
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  // Safe fallback data extracted directly from screenshot
  const detail = member?.detail || {};
  const label = detail.label || member?.designation || "FOUNDER & CEO";
  const name = member?.name || "Steven Park";
  const headline =
    detail.headline ||
    "Leading with a vision to make insurance simpler, smarter, and more accessible for everyone.";
  const phone = detail.phone || "+91 98765 43210";
  const email = detail.email || "steven@insurewise.com";
  const location = detail.location || "Noida, Uttar Pradesh, India";
  const quote =
    detail.quote || "Reliable insurance builds stronger lives.";
  const aboutTitle = detail.aboutTitle || `About ${name.split(" ")[0]}`;
  const aboutText =
    detail.about ||
    `${name} is the Founder & CEO of InsureWise, with over 15 years of experience in the insurance and financial services industry. His passion lies in creating simple, transparent, and customer-focused insurance solutions that help individuals, families, and businesses feel secure about their future.`;
  
  const socialLinks = member?.socialLinks || [
    { label: "facebook", href: "#" },
    { label: "linkedin", href: "#" },
    { label: "twitter", href: "#" },
    { label: "instagram", href: "#" },
  ];

  const experience = detail.experience || [
    {
      period: "2020 – Present",
      role: "Founder & CEO, InsureWise",
      description:
        "Leading the company towards a more secure and financially empowered future.",
    },
    {
      period: "2015 – 2020",
      role: "Senior Vice President, Global Insurance Firm",
      description:
        "Played a key role in expanding customer base and digital transformation.",
    },
    {
      period: "2010 – 2015",
      role: "Head of Strategy",
      description:
        "Focused on product innovation and market growth.",
    },
    {
      period: "2008 – 2010",
      role: "Financial Consultant",
      description:
        "Advised individuals and businesses on risk management and financial planning.",
    },
  ];

  const expertiseList = [
    { label: "Strategic Planning", icon: FaBullseye },
    { label: "Insurance Innovation", icon: FaLightbulb },
    { label: "Business Growth", icon: FaChartBar },
    { label: "Customer Experience", icon: FaUsers },
    { label: "Risk Management", icon: FaShieldAlt },
    { label: "Team Leadership", icon: FaUserFriends },
  ];

  return (
    <>
      {/* BANNER PAGE */}
      <Bannerpage
        title="Team Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/team" },
          { label: name },
        ]}
        bgImage={teamBanner.bgImage}
      />

      <main className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          
          {/* TOP SECTION: PHOTO + BIO DETAILS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-slate-200/80">
            
            {/* LEFT COLUMN: IMAGE CARD WITH QUOTE OVERLAY */}
            <ScrollReveal direction="left" className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 max-h-[520px] w-full bg-slate-100">
                <Image
                  src={member?.image || "/insurance_img/team-1.jpg"}
                  alt={name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                
                {/* BLUE QUOTE OVERLAY BOX */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a48a3] text-white p-5 rounded-2xl shadow-lg flex items-start gap-3">
                  <FaQuoteLeft className="text-white/80 text-xl shrink-0 mt-1" />
                  <p className="text-sm sm:text-base font-semibold italic leading-snug">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT COLUMN: HEADER + CONTACT + ABOUT + PILLARS */}
            <ScrollReveal direction="right" className="lg:col-span-7 flex flex-col justify-between h-full">
              
              {/* HEADER & CONTACT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-3 border-b border-slate-200/80">
                
                {/* NAME & SOCIALS */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm sm:text-sm font-bold uppercase tracking-wider text-[#1f6de2]">
                      {label}
                    </span>
                    <span className="w-8 h-[2px] bg-[#3078e4] inline-block"></span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#082b5e] tracking-tight mb-3">
                    {name}
                  </h1>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5 font-normal">
                    {headline}
                  </p>

                  {/* SOCIAL BUTTONS */}
                  <div className="flex items-center gap-2.5 mb-5">
                    {socialLinks.map((social, idx) => {
                      const key = social.label.toLowerCase();
                      const Icon = SOCIAL_ICONS[key] || FaFacebookF;
                      return (
                        <a
                          key={idx}
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#f0f5ff] hover:bg-[#0066ff] text-[#1a4686] hover:text-white flex items-center justify-center transition-all duration-200 text-sm shadow-2xs"
                        >
                          <Icon className="w-6 h-6"/>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* CONTACT DETAILS COLUMN */}
                <div className="md:col-span-5 md:border-l md:border-slate-200/80 md:pl-6 flex flex-col justify-center space-y-3.5 text-sm text-slate-600">
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 hover:text-[#0066ff] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f0f5ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:bg-[#0066ff] group-hover:text-white transition-all">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <span className="font-semibold text-sm text-slate-700">{phone}</span>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 hover:text-[#0066ff] transition-colors group"
                  >
                    <div className="w-12 h-12  rounded-full bg-[#f0f5ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:bg-[#0066ff] group-hover:text-white transition-all">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <span className="font-semibold text-sm text-slate-700 truncate">{email}</span>
                  </a>

                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12  rounded-full bg-[#f0f5ff] text-[#0066ff] flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <span className="font-semibold text-sm text-slate-700">{location}</span>
                  </div>
                </div>

              </div>

              {/* ABOUT SECTION */}
              <div className="pt-3">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl sm:text-3xl font-bold text-[#082b5e]">
                    {aboutTitle}
                  </h2>
                  <span className="w-8 h-[2px] bg-[#0066ff] inline-block"></span>
                </div>

                <div className="text-sm sm:text-base  max-w-[650px] text-slate-600 leading-relaxed space-y-3">
                  <p>{aboutText}</p>
                  <p>{detail.about1}</p>
                </div>

                {/* 3 FEATURE PILLARS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 mt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className=" rounded-full text-[#0066ff] flex items-center justify-center shrink-0">
                      <FaGem className="sm:text-5xl text-4xl" />
                    </div>
                    <div>
                      <h4 className="sm:text-lg text-base font-bold text-[#082b5e] leading-tight">
                        Visionary <br /> Leadership
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className=" text-[#0066ff] flex items-center justify-center shrink-0">
                      <FaUsers className="sm:text-5xl text-4xl" />
                    </div>
                    <div>
                      <h4 className="sm:text-lg text-base font-bold text-[#082b5e] leading-tight">
                        Customer <br /> First Approach
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className=" text-[#0066ff] flex items-center justify-center shrink-0">
                      <FaChartBar className="sm:text-5xl text-4xl" />
                    </div>
                    <div>
                      <h4 className="sm:text-lg text-base font-bold text-[#082b5e] leading-tight">
                        Driving <br /> Innovation
                      </h4>
                    </div>
                  </div>
                </div>

              </div>

            </ScrollReveal>

          </div>

          {/* BOTTOM SECTION: EXPERIENCE & EXPERTISE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12">
            
            {/* LEFT COLUMN: EXPERIENCE & JOURNEY TIMELINE */}
            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold text-[#082b5e]">
                  Experience &amp; Journey
                </h2>
                <span className="w-8 h-[2px] bg-[#0066ff] inline-block"></span>
              </div>

              {/* TIMELINE */}
              <div className="relative pl-6 border-l-2 border-[#0066ff]/25 space-y-7 ml-2">
                {experience.map((item: any, idx: number) => (
                  <div key={idx} className="relative">
                    {/* BLUE DOT MARKER */}
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0066ff] ring-4 ring-white" />
                    
                    <span className="text-sm font-bold text-[#0066ff] block mb-0.5">
                      {item.period}
                    </span>
                    
                    <h3 className="text-sm sm:text-lg font-bold text-[#082b5e] mb-1">
                      {item.role}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* RIGHT COLUMN: AREAS OF EXPERTISE & QUOTE CARD */}
            <ScrollReveal direction="right" className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl sm:text-3xl font-bold text-[#082b5e]">
                  Areas of Expertise
                </h2>
                <span className="w-8 h-[2px] bg-[#0066ff] inline-block"></span>
              </div>

              {/* EXPERTISE 2-COLUMN GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {expertiseList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#f0f5ff] rounded-2xl p-3.5 flex items-center gap-3 border border-blue-100/60"
                    >
                      <div className=" text-[#0066ff] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="text-3xl" />
                      </div>
                      <span className="text-sm sm:text-sm font-bold text-[#082b5e]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* LIGHT BLUE STATEMENT QUOTE CARD */}
              <div className="bg-[#f0f5ff] rounded-2xl p-6 sm:p-7 border border-blue-100/60 relative">
                <FaQuoteLeft className="text-[#0066ff] text-2xl mb-3 opacity-90" />
                <p className="text-base sm:text-lg font-bold italic text-[#082b5e] leading-relaxed">
                  &ldquo;My goal is to make insurance simple, transparent, and truly people-focused.&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-blue-200/50">
                  <span className="text-lg font-bold text-[#082b5e] block">
                    — {name}
                  </span>
                  <span className="text-[13px] font-medium text-slate-500 block mt-0.5">
                    {label}, InsureWise
                  </span>
                </div>
              </div>

            </ScrollReveal>

          </div>

          {/* BACK TO TEAM LINK */}
          <ScrollReveal direction="up" className="mt-12 pt-6 border-t border-slate-100">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm sm:text-sm font-bold text-[#0066ff] hover:text-[#082b5e] transition-colors"
            >
              <FaArrowLeft className="text-sm" /> Back to Our Team
            </Link>
          </ScrollReveal>

        </div>
      </main>
    </>
  );
}
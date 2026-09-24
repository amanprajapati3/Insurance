"use client";

import React, { useState } from "react";
import { site, SectionProps, InsuranceChooseData } from "@/data/index";

// Helper Icon Component
function ChooseIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name) {
    case "shield":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "umbrella":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-9 9h18a9 9 0 00-9-9zM12 12v7a2 2 0 01-4 0" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "play":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "chevron-double":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M6 5l7 7-7 7" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      );
    case "close":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Choose({ className = "" }: SectionProps<InsuranceChooseData>) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const data = site.choose;

  const badge = data?.badge || "Why Choose Us";
  const title = data?.title?.normal || "Your Trusted Partner";
  const highlightedTitle = data?.title?.highlighted || "for a Safer Tomorrow.";
  const description =
    data?.desc ||
    "At InsureWise, we go beyond policies — we build long-term relationships based on trust, transparency, and care. Our customer-first approach ensures you and your loved ones stay protected at every stage of life.";

  const quoteBox = {
    title: data?.highlightCard?.title || "Get a Free Quote",
    subtitle: data?.highlightCard?.subtitle || "Quick. Simple. Hassle-Free.",
    videoThumb:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  };

  const features = data?.bulletPoints || [
    "Personalized insurance solutions for your unique needs.",
    "Dedicated support from our experienced team.",
  ];

  const ctaButton = data?.button || {
    label: "Learn More",
    href: "#",
  };

  const mainImage =
    data?.sideImage?.src ||
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80";

  const floatingBadges = data?.floatingBadges || [];
  const topBadgeData = floatingBadges[0];
  const bottomBadgeData = floatingBadges[2];

  const topBadge = {
    title: topBadgeData?.title || "Trusted by",
    value: topBadgeData?.highlight || "98K+ Families",
  };

  const bottomBadge = {
    title: bottomBadgeData?.title || "Protection",
    value: bottomBadgeData?.highlight || "For Every Stage",
  };

  return (
    <section className={`w-full bg-[#072a58] text-white py-8 md:py-12 overflow-hidden relative ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* FLOATING BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b3366] text-white text-sm sm:text-sm font-semibold mb-3 border border-[#0066ff]/40 shadow-sm">
              <ChooseIcon name="shield" className="w-6 h-6 text-[#0084ff]" />
              <span>{badge}</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl max-w-lg sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
              {title}{" "}
              <span className="text-[#0084ff] block sm:inline">{highlightedTitle}</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
              {description}
            </p>

            {/* QUOTE & VIDEO WIDGET BOX */}
            <div className="w-full border-b border-gray-700 py-3 my-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
              
              {/* QUOTE INFO */}
              <div className="flex items-center gap-4">
                <div className="w-13 h-13  sm:w-14 sm:h-14 rounded-full bg-[#0055c4] flex items-center justify-center shrink-0 shadow-md">
                  <ChooseIcon name="umbrella" className="w-78 h-8 text-white" />
                </div>
                <div className="border-l-2 pl-3 border-slate-700/70 ">
                  <h4 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {quoteBox.title}
                  </h4>
                  <p className="text-sm sm:text-sm text-slate-300 font-normal">
                    {quoteBox.subtitle}
                  </p>
                </div>
              </div>

              {/* VIDEO THUMBNAIL WITH PLAY BUTTON */}
              <div
                onClick={() => setIsVideoOpen(true)}
                className="relative  w-36 sm:w-40 h-20 rounded-xl overflow-hidden cursor-pointer group shrink-0 border border-white/20 shadow-lg"
              >
                <img
                  src={quoteBox.videoThumb}
                  alt="Watch Video"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#0066ff] text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                    <ChooseIcon name="play" className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>

            </div>

            {/* FEATURE BULLETS */}
            <div className="flex flex-col gap-3 my-3">
              {features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 text-slate-200 text-sm sm:text-sm font-medium">
                  <ChooseIcon name="chevron-double" className="w-4 h-4 text-[#0084ff] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* 80% WHITE / 20% BLUE BUTTON */}
            <a
              href={ctaButton.href}
              className="inline-flex items-center rounded-full overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 active:scale-95 mt-2"
            >
              <span className="bg-white text-[#041d3d] font-extrabold text-sm sm:text-base px-7 py-3 flex items-center justify-center">
                {ctaButton.label}
              </span>
              <span className="bg-[#0066ff] text-white px-5 py-3.5 flex items-center justify-center group-hover:bg-[#0052cc] transition-colors">
                <ChooseIcon name="arrow-right" className="w-5 h-5" />
              </span>
            </a>

          </div>

          {/* RIGHT IMAGE COLUMN WITH ACCENTS & FLOATING BADGES */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 px-4 sm:px-8">
            <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
              
              {/* TOP-LEFT EXTENDED BLUE ACCENT TAB */}
              <div className="absolute top-6 -left-6 sm:top-5 sm:-left-12 w-32 h-24 bg-[#0066ff] rounded-3xl z-0" />

              {/* BOTTOM-LEFT BLUE BORDER HIGHLIGHT */}
              <div className="absolute bottom-0 -left-3 sm:bottom-0 sm:-left-6 w-24 h-[50%] bg-[#0066ff] rounded-2xl z-0" />

              {/* BOTTOM-RIGHT EXTENDED BLUE BACKDROP BLOCK */}
              <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-3/5 h-[90%] bg-[#0052cc] rounded-3xl z-0" />

              {/* MAIN RECTANGULAR ROUNDED IMAGE */}
              <div className="relative z-10 w-full h-[360px] sm:h-[450px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-slate-800">
                <img
                  src={mainImage}
                  alt="Why Choose Us"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* FLOATING BADGE TOP-LEFT */}
              <div className="absolute top-6 -left-4 sm:top-8 sm:-left-8 z-20 bg-white text-[#0a1c3a] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                <div className="w-14 h-14 sm:w-11 sm:h-11 rounded-full bg-[#e8f2ff] text-[#0066ff] flex items-center justify-center shrink-0">
                  <ChooseIcon name="users" className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-sm text-gray-500 font-semibold leading-tight">
                    {topBadge.title}
                  </p>
                  <p className="text-sm sm:text-sm font-extrabold text-[#0a1c3a]">
                    {topBadge.value}
                  </p>
                </div>
              </div>

              {/* FLOATING BADGE BOTTOM-RIGHT */}
              <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 z-20 bg-white text-[#0a1c3a] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e8f2ff] text-[#0066ff] flex items-center justify-center shrink-0">
                  <ChooseIcon name="shield" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-sm text-gray-500 font-semibold leading-tight">
                    {bottomBadge.title}
                  </p>
                  <p className="text-sm sm:text-sm font-extrabold text-[#0a1c3a]">
                    {bottomBadge.value}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* VIDEO MODAL POPUP */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity duration-300">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close Video"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChooseIcon name="close" className="w-6 h-6" />
            </button>

            {/* VIDEO PLAYER IFRAME */}
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={quoteBox.videoUrl}
                title="InsureWise Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
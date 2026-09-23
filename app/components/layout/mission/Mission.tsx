"use client";

import React from "react";
import Bannerpage from "../../shared/Bannerpage";
import Ctabanner2 from "../../shared/Ctabanner2";
import { site } from "@/data";

export default function Mission() {
  const missionData = (site as any)?.mission;

  const banner = missionData?.banner || {
    title: "Mission & Vision",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Mission & Vision" },
    ],
    bgImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80",
  };

  const vision = missionData?.vision || {
    subtitle: "OUR VISION",
    title: "A Safer, Brighter",
    highlightedTitle: "Tomorrow for Everyone",
    description:
      "To be the most trusted insurance partner, empowering individuals, families, and businesses to live with confidence through innovative solutions, unwavering support, and a commitment to a safer, brighter tomorrow.",
    buttonLabel: "Learn More",
    buttonLink: "#",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    imageOverlayText: "A CLEARER TOMORROW",
  };

  const mission = missionData?.mission || {
    subtitle: "OUR MISSION",
    title: "Protecting",
    highlightedTitle: "What Matters Most",
    description:
      "Our mission is to deliver simple, reliable, and personalized insurance solutions that protect what matters most. We are committed to exceptional service, ethical practices, and long-term relationships, helping our customers navigate life's uncertainties with peace of mind.",
    buttonLabel: "Discover Our Mission",
    buttonLink: "#",
    image:
      "https://images.unsplash.com/photo-1533073526880-2a83e053a479?auto=format&fit=crop&w=1200&q=80",
    imageOverlayText: "FOCUSED ON A SAFER TOMORROW",
  };

  return (
    <>
      {/* PAGE BANNER HEADER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      <div className="bg-slate-50/50 py-8 md:py-12 space-y-16 ">
        {/* SECTION 1: OUR VISION (LEFT CONTENT / RIGHT IMAGE) */}
        <section className="container mx-auto px-4 sm:px-0 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1a73e8] uppercase">
                  {vision.subtitle}
                </span>
                <div className="w-8 h-[2px] bg-[#1a73e8]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[400px] text-[#082b5e] tracking-tight leading-tight">
                {vision.title}{" "}
                <span className="text-[#1a73e8]">{vision.highlightedTitle}</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {vision.description}
              </p>

              <a
                href={vision.buttonLink}
                className="inline-flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300 mt-2"
              >
                <span>{vision.buttonLabel}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* RIGHT IMAGE WITH OVERLAY TEXT */}
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={vision.image}
                alt="Our Vision"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {vision.imageOverlayText && (
                <div className="absolute top-6 right-8 text-right">
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase drop-shadow-md">
                    {vision.imageOverlayText}
                  </span>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* SECTION 2: OUR MISSION (LEFT IMAGE / RIGHT CONTENT) */}
        <section className="container mx-auto px-4 sm:px-0 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* LEFT IMAGE WITH OVERLAY TEXT */}
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 order-2 lg:order-1">
              <img
                src={mission.image}
                alt="Our Mission"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
              {mission.imageOverlayText && (
                <div className="absolute bottom-6 left-8 text-left">
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase drop-shadow-md">
                    {mission.imageOverlayText}
                  </span>
                </div>
              )}
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col items-start space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#1a73e8] uppercase">
                  {mission.subtitle}
                </span>
                <div className="w-8 h-[2px] bg-[#1a73e8]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[400px] text-[#082b5e] tracking-tight leading-tight">
                {mission.title}{" "}
                <span className="text-[#1a73e8]">{mission.highlightedTitle}</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {mission.description}
              </p>

              <a
                href={mission.buttonLink}
                className="inline-flex items-center gap-2 bg-[#082b5e] hover:bg-[#061e42] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300 mt-2"
              >
                <span>{mission.buttonLabel}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

          </div>
        </section>
      </div>

      {/* CALL TO ACTION BANNER */}
      <Ctabanner2 section="mission" />
    </>
  );
}
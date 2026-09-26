"use client";

import React from "react";
import Image from "next/image";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import { site } from "@/data";
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";

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

  const ctaBanner = missionData?.ctaBanner || {
    badge: "We're Here for You",
    title: "Have questions?",
    highlightedTitle: "Get in touch!",
    description:
      "Our experts are ready to help you find the right coverage for you and your family.",
    contactButton: {
      label: "CONTACT US",
      href: "/contact",
    },
    phoneNumber: "+1 234 567 8910",
    phoneHref: "tel:+12345678910",
  };

  return (
    <>
      {/* PAGE BANNER HEADER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      <div className="bg-slate-50/50 py-8 md:py-12 space-y-16">
        {/* SECTION 1: OUR VISION */}
        <section className="container mx-auto px-4 sm:px-0 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <ScrollReveal direction="left" className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-wider text-[#1a73e8] uppercase">
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
            </ScrollReveal>

            {/* RIGHT IMAGE WITH OVERLAY TEXT */}
            <ScrollReveal direction="right" className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src={vision.image}
                alt="Our Vision"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {vision.imageOverlayText && (
                <div className="absolute top-6 right-8 text-right">
                  <span className="text-sm font-semibold tracking-widest text-white/90 uppercase drop-shadow-md">
                    {vision.imageOverlayText}
                  </span>
                </div>
              )}
            </ScrollReveal>

          </div>
        </section>

        {/* SECTION 2: OUR MISSION */}
        <section className="container mx-auto px-4 sm:px-0 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* LEFT IMAGE WITH OVERLAY TEXT */}
            <ScrollReveal direction="left" className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 order-2 lg:order-1">
              <Image
                src={mission.image}
                alt="Our Mission"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
              {mission.imageOverlayText && (
                <div className="absolute bottom-6 left-8 text-left">
                  <span className="text-sm font-semibold tracking-widest text-white/90 uppercase drop-shadow-md">
                    {mission.imageOverlayText}
                  </span>
                </div>
              )}
            </ScrollReveal>

            {/* RIGHT CONTENT */}
            <ScrollReveal direction="right" className="flex flex-col items-start space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-wider text-[#1a73e8] uppercase">
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
            </ScrollReveal>

          </div>
        </section>

        {/* CUSTOM CTA BANNER (MATCHING EXACT DESIGN REFERENCE) */}
        <section className="container mx-auto px-4 sm:px-0 lg:px-12 py-6">
          <div className="relative bg-[#0d2346] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl text-white">
            {/* Decorative background gradients & dot patterns */}
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-6 right-10 grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
              ))}
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              {/* LEFT TEXT & BADGE */}
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 bg-[#1b3a6b] border border-blue-400/20 text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-inner">
                  <BiHeadphone className="w-4 h-4 text-blue-300" />
                  <span>{ctaBanner.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {ctaBanner.title}{" "}
                  <span className="text-[#3b82f6]">{ctaBanner.highlightedTitle}</span>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {ctaBanner.description}
                </p>
              </div>

              {/* RIGHT BUTTONS */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
                {/* Contact Us Pill Button */}
                <a
                  href={ctaBanner.contactButton.href}
                  className="group inline-flex items-center justify-between bg-white hover:bg-slate-100 text-[#0d2346] font-bold text-sm px-2 py-2 rounded-full shadow-lg transition-all duration-300 pl-6"
                >
                  <div className="flex items-center gap-3">
                    <FiMail className="w-4 h-4 text-[#0d2346]" />
                    <span className="tracking-wide">{ctaBanner.contactButton.label}</span>
                  </div>
                  <div className="w-9 h-9 bg-[#1a73e8] group-hover:bg-[#1557b0] rounded-full flex items-center justify-center text-white transition-colors ml-4">
                    <FiArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </a>

                {/* Phone Number Pill Button */}
                <a
                  href={ctaBanner.phoneHref}
                  className="inline-flex items-center justify-center gap-3 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-300"
                >
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FiPhone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="tracking-wide">{ctaBanner.phoneNumber}</span>
                </a>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
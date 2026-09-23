"use client";

import React from "react";
import { site, SectionProps, InsuranceCtaBannerData } from "@/data/index";

// Icon Helper Component
function CtaIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  switch (name) {
    case "headset":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    case "mail":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
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

export default function Ctabanner({ className = "" }: SectionProps<InsuranceCtaBannerData>) {
  const data = site.ctaBanner;

  const badge = data?.badge || "We're Here for You";
  const title = data?.title?.normal || "Have questions?";
  const highlightedTitle = data?.title?.highlighted || "Get in touch!";
  const description =
    data?.desc ||
    "Our experts are ready to help you find the right coverage for you and your family.";

  const buttons = data?.buttons || [];
  const contactBtn = buttons[0];
  const phoneBtn = buttons[1];

  const contactButton = {
    label: contactBtn?.label || "CONTACT US",
    link: contactBtn?.href || "#contact",
  };

  const phoneButton = {
    number: phoneBtn?.label || "+1 234 567 8910",
    link: phoneBtn?.href || "tel:+12345678910",
  };

  return (
    <section className={`w-full pt-8 md:pt-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-0 lg:px-12">
        {/* CTA BANNER MAIN CONTAINER */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#082b5e] overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12">
          
          {/* ================= BACKGROUND GEOMETRIC OVERLAYS ================= */}
          
          {/* 1. LEFT BOTTOM: Large quarter circle */}
          <div className="absolute top-[40%] -left-[22%] w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#0d3b7a]/70 pointer-events-none" />

          {/* 2. RIGHT TOP: Large quarter circle */}
          <div className="absolute -top-[90%] -right-[20%] w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#0d3b7a]/60 pointer-events-none" />

          {/* 3. RIGHT TOP GRID DOTS OVERLAY */}
          <div
            className="absolute top-6 right-8 sm:top-10 sm:right-12 w-28 h-16 sm:w-36 sm:h-20 pointer-events-none opacity-25"
            style={{
              backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* 4. RIGHT BOTTOM: Small quarter circle (Same color as left bottom) */}
          <div className="absolute -bottom-44 -right-32 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#0d3b7a]/70 pointer-events-none" />

          {/* ================= BANNER CONTENT ================= */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* LEFT CONTENT AREA */}
            <div className="max-w-2xl">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium mb-4 border border-white/10 shadow-sm">
                <CtaIcon name="headset" className="w-4 h-4 text-white" />
                <span>{badge}</span>
              </div>

              {/* HEADING */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white  mb-3">
                {title} <span className="text-[#1a73e8]">{highlightedTitle}</span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-slate-200 text-xs sm:text-sm lg:text-base font-normal leading-relaxed opacity-90">
                {description}
              </p>
            </div>

            {/* RIGHT BUTTONS GROUP */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0 w-full sm:w-auto">
              
              {/* BUTTON 1: CONTACT US (White Pill with Embedded Blue Circle Arrow) */}
              <a
                href={contactButton.link}
                className="inline-flex items-center justify-between gap-3 bg-white text-[#082b5e] font-bold text-xs sm:text-sm pl-5 pr-1.5 py-1.5 rounded-full shadow-md hover:bg-slate-50 transition-all duration-300 group w-full sm:w-auto"
              >
                <div className="flex items-center gap-2">
                  <CtaIcon name="mail" className="w-4 h-4 text-[#082b5e]" />
                  <span className="tracking-wide uppercase text-xs sm:text-sm font-extrabold">{contactButton.label}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <CtaIcon name="arrow-right" className="w-4 h-4" />
                </div>
              </a>

              {/* BUTTON 2: PHONE NUMBER (Bright Blue Pill with Embedded White Circle Phone Icon) */}
              <a
                href={phoneButton.link}
                className="inline-flex items-center gap-3 bg-[#1a73e8] text-white font-bold text-xs sm:text-sm pl-1.5 pr-6 py-1.5 rounded-full shadow-md hover:bg-[#1557b0] transition-all duration-300 w-full sm:w-auto"
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#1a73e8] flex items-center justify-center shrink-0">
                  <CtaIcon name="phone" className="w-4 h-4" />
                </div>
                <span className="tracking-wide font-extrabold text-xs sm:text-sm whitespace-nowrap">{phoneButton.number}</span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
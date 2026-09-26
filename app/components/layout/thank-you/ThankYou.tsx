"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "../../shared/ScrollReveal";
import { site, type InsuranceThankYouData } from "@/data";
import {
  FiArrowRight,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMessageCircle,
  FiPhone,
  FiShield,
} from "react-icons/fi";

const HIGHLIGHT_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  mail: FiMail,
  phone: FiPhone,
  shield: FiShield,
  clock: FiClock,
  chat: FiMessageCircle,
  bell: FiBell,
  check: FiCheckCircle,
};

const renderHighlightIcon = (iconName: string) => {
  const Icon = HIGHLIGHT_ICONS[iconName] || FiCheckCircle;
  return <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#0066ff]" />;
};

export default function ThankYou() {
  const thankYouData: InsuranceThankYouData = site.thankYou;

  const badge = thankYouData?.badge || "FORM SUBMITTED SUCCESSFULLY";
  const title = thankYouData?.title || "Thank You";
  const highlightedTitle =
    thankYouData?.highlightedTitle || "for Submitting the Form";
  const description =
    thankYouData?.description ||
    "We have successfully received your details. Our insurance expert will review your request and get back to you shortly with the right guidance.";

  return (
    <main className="bg-white">
      {/* THANK YOU HERO SECTION */}
      <section className="relative overflow-hidden  pt-14 pb-16 ">
        {/* DECORATIVE BACKGROUND SHAPES */}
       

        <div className="relative container mx-auto px-4 sm:px-0 lg:px-12">
          <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center">
            {/* SUCCESS ICON BADGE */}
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-[#0066ff] flex items-center justify-center shadow-lg shadow-blue-200">
              <FiCheck className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>

            <span className="inline-block mt-7 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#0e3877] uppercase bg-white border border-[#d6e6ff] rounded-full px-5 py-2">
              {badge}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-[#082b5e] tracking-tight leading-tight">
              {title}{" "}
              <span className="text-[#0066ff]">{highlightedTitle}</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {description}
            </p>
          </ScrollReveal>
        </div>
      </section>      
    </main>
  );
}

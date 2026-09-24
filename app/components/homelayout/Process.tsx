"use client";

import React from "react";
import { site, SectionProps, InsuranceProcessData } from "@/data/index";

// Icon Helper Component
function ProcessIcon({
  name,
  className = "w-7 h-7",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "document-pencil":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7h4M9 11h2"
          />
        </svg>
      );
    case "document-shield":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h3m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V13"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17c0-2.5 3-3.5 3-3.5s3 1 3 3.5c0 2.2-1.8 3.5-3 4-1.2-.5-3-1.8-3-4z"
          />
        </svg>
      );
    case "shield-check":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "gear":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "file-text":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586zM9 12h6M9 16h4"
          />
        </svg>
      );
    case "clipboard-check":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Process({
  className = "",
}: SectionProps<InsuranceProcessData>) {
  const data = site.process;

  const badge = data?.badge || "Our Process";
  const title = data?.title?.normal || "How It";
  const highlightedTitle = data?.title?.highlighted || "Works";
  const description =
    data?.desc ||
    "Getting insured with InsureWise is simple, transparent, and hassle-free.\nFollow these easy steps to secure your future.";

  const steps = data?.steps || [
    {
      id: 1,
      stepNumber: "01",
      title: "Get a Quote",
      description:
        "Share a few details and get a personalized insurance quote in minutes.",
      icon: "document-pencil",
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Choose Your Plan",
      description:
        "Compare plans and select the coverage that fits your needs.",
      icon: "document-shield",
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Stay Protected",
      description:
        "Complete the process and enjoy peace of mind for a brighter tomorrow.",
      icon: "shield-check",
    },
  ];

  const CIRCLE_BG = ["bg-[#081f44]", "bg-[#0066ff]", "bg-[#081f44]"];

  return (
    <section className={`w-full bg-white pb-8  ${className}`}>
      <div className=" mx-auto   ">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-0">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066ff] text-sm sm:text-sm  font-bold mb-2 shadow-sm">
            <ProcessIcon name="gear" className="w-6 h-6 text-[#0066ff]" />
            <span>{badge}</span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1c3a] tracking-tight leading-tight mb-2">
            {title} <span className="text-[#0066ff]">{highlightedTitle}</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-500 px-4 text-sm sm:text-base leading-relaxed max-w-2xl whitespace-pre-line font-medium">
            {description}
          </p>
        </div>

        {/* 3 PROCESS CARDS GRID */}
        {/* Mobile: 1 col, Tablet: 3 cols (lower content size), Desktop: 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id || index}
              className="relative flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 py-8 sm:py-4 lg:py-6"
            >
              {/* WATERMARK LIGHT BLUE STEP NUMBER */}
              <div className="text-[95px] sm:text-[105px] lg:text-[120px] font-black text-[#eef4fd] leading-none select-none -mb-10 z-0 tracking-tighter">
                {step.stepNumber}
              </div>

              {/* OVERLAPPING CIRCLE ICON WRAPPER */}
              <div className="relative z-10 p-2 rounded-full bg-[#eef4fd] mb-6 shadow-sm">
                <div
                  className={`w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full ${CIRCLE_BG[index % CIRCLE_BG.length]} text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105`}
                >
                  <ProcessIcon
                    name={step.icon}
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                  />
                </div>
              </div>

              {/* STEP TITLE */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0a1c3a] mb-2 sm:mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* STEP DESCRIPTION */}
              <p className="text-gray-500 text-sm sm:text-sm md:text-sm lg:text-sm leading-relaxed max-w-[260px] lg:max-w-[280px] mx-auto font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

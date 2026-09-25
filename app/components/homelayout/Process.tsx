"use client";

import React from "react";
import { site, SectionProps, InsuranceProcessData } from "@/data/index";
import ScrollReveal from "../shared/ScrollReveal";
import { FiFileText, FiSettings } from "react-icons/fi";
import { FaClipboardCheck, FaFileSignature } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const PROCESS_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "document-pencil": FaFileSignature,
  "shield-check": BsShieldCheck,
  gear: FiSettings,
  "file-text": FiFileText,
  "clipboard-check": FaClipboardCheck,
};

// Icon Helper Component
function ProcessIcon({
  name,
  className = "w-7 h-7",
}: {
  name: string;
  className?: string;
}) {
  const Icon = PROCESS_ICONS[name];
  if (Icon) return <Icon className={className} />;

  if (name === "document-shield") return <FiFileText className={className} />;

  return null;
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
        <ScrollReveal direction="up" className="flex flex-col items-center text-center mb-0">
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
        </ScrollReveal>

        {/* 3 PROCESS CARDS GRID */}
        {/* Mobile: 1 col, Tablet: 3 cols (lower content size), Desktop: 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.id || index}
              direction="up"
              index={index}
              staggerChildren={0.15}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { site } from "@/data";

export default function Ctabanner2({
  className = "",
  section = "award",
}: {
  className?: string;
  section?: string;
}) {
  const highlightBox = (site as any)?.[section]?.highlightBox || {
    title: "Driven by Purpose, Recognized by the World",
    description:
      "These achievements motivate us to continue making a positive difference in the lives of individuals, families, and businesses.",
    buttonLabel: "Partner With Us",
    buttonLink: "/contact",
  };

  return (
    <section className={`w-full bg-slate-50/60 pb-8 md:pb-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* BOTTOM HIGHLIGHT BOX */}
        <div className="relative w-full rounded-2xl bg-[#082b5e] overflow-hidden shadow-lg p-6">
          {/* BACKGROUND DECORATIVE CIRCLE */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            {/* LEFT TITLE WITH TROPHY ICON */}
            <div className="flex items-center gap-4 max-w-md shrink-0">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <svg
                  className="w-6 h-6 text-[#1a73e8]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl max-w-[250px] font-bold text-white leading-tight">
                {highlightBox.title}
              </h3>
            </div>

            {/* VERTICAL SEPARATOR LINE (Desktop) */}
            <div className="hidden lg:block w-[1px] h-12 bg-blue-400/20" />

            {/* MIDDLE DESCRIPTION */}
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl">
              {highlightBox.description}
            </p>

            {/* RIGHT BUTTON */}
            <a
              href={highlightBox.buttonLink}
              className="inline-flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300 whitespace-nowrap shrink-0"
            >
              <span>{highlightBox.buttonLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
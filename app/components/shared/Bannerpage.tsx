"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BannerPageProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
  className?: string;
}

export default function Bannerpage({
  title = "About Us",
  breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }],
  bgImage = "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  className = "",
}: BannerPageProps) {
  return (
    <section
      className={`relative md:h-[400px] w-full overflow-hidden bg-[#081f44] ${className}`}
    >
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          preload
        />
        {/* White / 80 - 85% Overlay Layer for optimal contrast */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      </div>

      {/* 2. DECORATIVE TOP ACCENT BARS */}
      <div className="absolute top-0 left-0 right-0 h-3 z-20 pointer-events-none flex justify-between">
        {/* Left Top Ribbon */}
        <div
          className="h-full bg-[#0066ff] w-48 sm:w-64"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
        />
        {/* Right Top Ribbon */}
        {/* <div
          className="h-full bg-[#0066ff] w-36 sm:w-52 hidden sm:block"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
        /> */}
      </div>

      {/* 3. TOP-CENTER FLOATING OVERLAPPING RINGS SVG */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 sm:translate-x-12 z-10 pointer-events-none opacity-80">
        <svg
          className="w-20 h-20 sm:w-28 sm:h-28"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle
            cx="45"
            cy="45"
            r="24"
            stroke="#0066ff"
            strokeWidth="3"
            strokeOpacity="0.4"
          />
          <circle cx="68" cy="62" r="20" stroke="#0066ff" strokeWidth="8" />
        </svg>
      </div>

      {/* 4. BOTTOM-LEFT DECORATIVE TWIN HEARTS SVG */}
      <div className="absolute -bottom-7 -left-2 sm:left-8 z-10 pointer-events-none">
        <svg
          className="w-36 h-32 sm:w-48 sm:h-44 lg:w-56 lg:h-52"
          viewBox="0 0 300 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M166 218 C150 177 105 151 72 129 C39 107 25 80 32 54 C39 27 62 17 87 24 C106 29 119 42 128 56 C142 35 159 17 182 12 C211 5 235 20 242 47 C248 68 243 91 233 111"
            stroke="#0066ff"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M166 218 C176 192 169 165 171 143 C173 119 184 103 202 103 C220 103 229 117 230 137 C250 133 269 141 275 157 C283 180 264 202 238 211 C216 219 190 217 166 218 Z"
            stroke="#0066ff"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 5. BOTTOM-RIGHT ORGANIC LIQUID WAVE SVG */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <svg
          className="w-44 h-28 sm:w-64 sm:h-40 lg:w-96 lg:h-56"
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Light Shadow Wave Layer */}
          <path
            d="M150 250 C 120 180, 220 110, 280 120 C 340 130, 370 70, 400 30 L 400 250 Z"
            fill="#0066ff"
            fillOpacity="0.25"
          />
          {/* Solid Main Wave Layer */}
          <path
            d="M180 250 C 160 190, 240 130, 310 140 C 370 150, 380 90, 400 60 L 400 250 Z"
            fill="#0066ff"
          />
        </svg>
      </div>

      {/* 6. MAIN BANNER CONTENT CONTAINER */}
      <ScrollReveal direction="up" className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-20 py-20 sm:py-24 lg:py-32 flex flex-col justify-center min-h-[280px] sm:min-h-[340px]">
        {/* PAGE TITLE */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold  text-[#081f44] tracking-tight leading-none mb-3">
          {title}
        </h1>

        {/* BREADCRUMB TRAIL */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm sm:text-base font-semibold"
          >
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <span className="text-gray-400 font-normal">/</span>
                  )}
                  {isLast ? (
                    <span className="text-[#0066ff] font-bold">
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-[#0066ff] transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-gray-500">{item.label}</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}
      </ScrollReveal>
    </section>
  );
}

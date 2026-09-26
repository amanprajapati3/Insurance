"use client";

import React from "react";
import { site } from "@/data";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  const notFoundData = (site as any)?.notFound;

  const banner = notFoundData?.banner || {
    title: "404 Error",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "404 Error" }],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const errorCode = notFoundData?.errorCode || "404";
  const title = notFoundData?.title || "Oops! Page Not Found";
  const description =
    notFoundData?.description ||
    "The page you're looking for doesn't exist or may have been moved.";
  const subDescription =
    notFoundData?.subDescription || "Let's get you back on track.";
  const buttonLabel = notFoundData?.buttonLabel || "Back to Home";
  const buttonLink = notFoundData?.buttonLink || "/";

  return (
    <>
      {/* REUSABLE PAGE BANNER */}
      {/* <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      /> */}

      {/* ERROR SECTION */}
      <section className="relative w-full overflow-hidden bg-[#fafcff] py-20 sm:py-28 lg:py-32 flex items-center justify-center min-h-[500px]">
        {/* BACKGROUND SOFT WAVY VECTOR ACCENTS */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 z-0">
          <svg
            className="w-full h-32 sm:h-48 lg:h-64"
            viewBox="0 0 1440 320"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              fill="#e6f0ff"
              d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,240C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">
          {/* 404 GRAPHIC WITH SPARK ACCENTS AND CIRCLE OVERLAY */}
          <div className="relative flex items-center justify-center mb-6">
            {/* SOFT BLUE BACKGROUND CIRCLE OVERLAY */}
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 -z-30 lg:w-72 lg:h-72 rounded-full bg-[#e8f1ff]/80 blur-0 pointer-events-none" />

            {/* LEFT SPARK LINES */}
            <div className="absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
              <span className="w-5 sm:w-7 h-[3.5px] bg-[#0066ff] rounded-full rotate-[15deg]" />
              <span className="w-5 sm:w-7 h-[3.5px] bg-[#0066ff] rounded-full -rotate-[10deg] translate-x-1" />{" "}
            </div>

            {/* 404 TEXT */}
            <h1 className="relative z-10 text-7xl sm:text-9xl lg:text-[140px] font-black text-[#071d3d] tracking-tighter leading-none select-none">
              {errorCode}
            </h1>

            {/* RIGHT SPARK LINES */}
            <div className="absolute -right-8 sm:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
              <span className="w-5 sm:w-7 h-[3.5px] bg-[#0066ff] rounded-full -rotate-[25deg]" />
              <span className="w-5 sm:w-7 h-[3.5px] bg-[#0066ff] rounded-full rotate-[10deg] -translate-x-1" />
            </div>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#071d3d] tracking-tight mb-3">
            {title}
          </h2>

          {/* DESCRIPTION PARAGRAPHS */}
          <div className="text-slate-500 text-sm sm:text-sm lg:text-base font-normal leading-relaxed max-w-md mb-8 space-y-1">
            <p>{description}</p>
            {subDescription && <p>{subDescription}</p>}
          </div>

          {/* BACK TO HOME BUTTON */}
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center gap-2.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 group"
          >
            <span>{buttonLabel}</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </section>
    </>
  );
}

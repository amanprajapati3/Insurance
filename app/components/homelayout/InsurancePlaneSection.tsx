"use client";

import React, { useState, useEffect, useRef } from "react";
import { site, SectionProps, InsurancePlansData } from "@/data/index";

// Helper component for Plan Icons matching exact circular blue styling
function PlanIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "umbrella":
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
            d="M12 3a9 9 0 00-9 9h18a9 9 0 00-9-9zM12 12v7a2 2 0 01-4 0"
          />
        </svg>
      );
    case "car":
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
            d="M8 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 11l2-5h14l2 5M5 11h14v4H5v-4z"
          />
        </svg>
      );
    case "home":
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "plane":
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
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      );
    case "shield":
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
    case "briefcase":
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "paw":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 13a3.5 3.5 0 00-3.5 3.5c0 1.93 2.07 3.5 3.5 3.5s3.5-1.57 3.5-3.5A3.5 3.5 0 0012 13zm-5.5-4a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4zm-8.5-2a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "lock":
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case "ship":
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "user":
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "stethoscope":
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      );
    case "building":
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    default:
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

export default function InsurancePlanSection({
  className = "",
}: SectionProps<InsurancePlansData>) {
  const data = site.plans;

  const badge = data?.badge || "Our Insurance Plans";
  const title = data?.title?.normal || "We Protect What";
  const highlightedTitle = data?.title?.highlighted || "Matters Most";
  const description =
    data?.desc ||
    "At InsureWise, we offer a range of insurance solutions designed to keep you, your loved ones, and your assets secure at every stage of life.";

  const plans = data?.plans || [];

  // Responsive Items per page state: 4 for Desktop (lg), 2 for Tablet (md), 1 for Mobile
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window === "undefined") return 4;
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 4;
  });
  const [currentPage, setCurrentPage] = useState(0);

  // Touch Swipe coordinates
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Screen resize listener for visible tabs logic
  useEffect(() => {
    const handleResize = () => {
      let newItems: number;
      const width = window.innerWidth;
      if (width < 768) {
        newItems = 1; // Mobile: 1 card
      } else if (width < 1024) {
        newItems = 2; // Tablet: 2 cards
      } else {
        newItems = 4; // Desktop: 4 cards
      }
      setItemsPerPage(newItems);
      setCurrentPage((prev) => {
        const newTotal = Math.ceil(plans.length / newItems);
        if (prev >= newTotal && newTotal > 0) return newTotal - 1;
        return prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [plans.length]);

  const totalPages = Math.ceil(plans.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext(); // Swiped left -> Next
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // Swiped right -> Prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className={`relative w-full bg-white pt-5 pb-10 overflow-hidden ${className}`}
    >
      {/* BACKGROUND WAVE OVERLAY (Transits dark navy top into light bottom) */}
      <div className="absolute top-0 left-0 right-0 w-full bg-[#173357] h-[500px] sm:h-[540px] lg:h-[400px] z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24 sm:h-32 lg:h-40 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-5">
          <div className="lg:col-span-7 text-white">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066ff] text-white text-xs sm:text-sm font-bold mb-1 shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>{badge}</span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg tracking-tight">
              {title}{" "}
              <span className="text-[#0084ff] block sm:inline">
                {highlightedTitle}
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="lg:col-span-5">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* CAROUSEL WRAPPER WITH NAVIGATION BUTTONS */}
        <div className="relative flex items-center">
          {/* LEFT SLIDER ARROW (Only visible on Tablet & Desktop) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Page"
            className="hidden sm:flex absolute -left-14 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cce3ff] hover:bg-[#b3d6ff] text-[#0066ff] items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* SLIDE CARDS CONTAINER */}
          <div
            className="w-full overflow-hidden px-1 py-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3"
                >
                  <div className="h-full bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* CARD TOP CONTENT */}
                    <div className="p-3  flex-1 flex flex-col justify-between">
                      <div>
                        {/* ICON & TITLE HEADER */}
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0a2345] text-white flex items-center justify-center shrink-0 shadow-md">
                            <PlanIcon name={plan.icon} className="w-7 h-7" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#0a2345] leading-tight">
                            {plan.title}
                          </h3>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                          {plan.description}
                        </p>
                      </div>

                      {/* LEARN MORE TEXT LINK WITH ARROW */}
                      <div className="mb-0">
                        <a
                          href={plan.button?.href || "#"}
                          className="inline-flex items-center gap-2 text-[#0066ff] font-bold text-sm hover:text-[#0047b3] transition-colors group"
                        >
                          <span>{plan.button?.label || "Learn More"}</span>
                          <svg
                            className="w-4 h-4 fill-current transition-transform duration-200 group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* CARD BOTTOM IMAGE WITH DYNAMIC SVG WAVE CUTOUT (Fits ANY Image perfectly) */}
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
                      {/* SVG Top Concave Wave Overlay */}
                      <svg
                        className="absolute top-0 left-0 right-0 w-full h-9 z-10 text-white pointer-events-none"
                        viewBox="0 0 400 36"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,0 L400,0 L400,8 C350,34 300,38 250,24 C195,6 150,2 105,18 C65,34 30,30 0,22 Z"
                          fill="currentColor"
                        />
                      </svg>

                      {/* Dynamic Image */}
                      <img
                        src={plan.image}
                        alt={plan.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SLIDER ARROW (Only visible on Tablet & Desktop) */}
          <button
            onClick={handleNext}
            aria-label="Next Page"
            className="hidden sm:flex absolute -right-14 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cce3ff] hover:bg-[#b3d6ff] text-[#0066ff] items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* DYNAMIC DOTS PAGINATION (Shows for ALL screens, calculated dynamically) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentPage
                    ? "w-3.5 h-3.5 bg-[#007bff] scale-110"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

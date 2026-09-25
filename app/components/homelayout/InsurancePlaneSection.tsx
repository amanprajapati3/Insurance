"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { site, SectionProps, InsurancePlansData } from "@/data/index";
import ScrollReveal from "../shared/ScrollReveal";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiHome,
  FiInfo,
  FiLock,
  FiSend,
  FiUser,
} from "react-icons/fi";
import {
  FaBuilding,
  FaCar,
  FaHeartbeat,
  FaPaw,
  FaShip,
  FaStethoscope,
  FaUmbrella,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const PLAN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  umbrella: FaUmbrella,
  car: FaCar,
  home: FiHome,
  plane: FiSend,
  shield: BsShieldCheck,
  briefcase: FiBriefcase,
  paw: FaPaw,
  lock: FiLock,
  ship: FaShip,
  user: FiUser,
  stethoscope: FaStethoscope,
  building: FaBuilding,
  "heart-pulse": FaHeartbeat,
};

// Helper component for Plan Icons matching exact circular blue styling
function PlanIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = PLAN_ICONS[name] || FiInfo;
  return <Icon className={className} />;
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end my-7">
          <ScrollReveal direction="left" className="lg:col-span-7 text-white">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066ff] text-white text-sm sm:text-sm font-bold mb-3 shadow-sm">
              <FiInfo className="w-4 h-4" />
              <span>{badge}</span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg tracking-tight">
              {title}{" "}
              <span className="text-[#0084ff] block sm:inline">
                {highlightedTitle}
              </span>
            </h2>
          </ScrollReveal>

          {/* DESCRIPTION */}
          <ScrollReveal direction="right" className="lg:col-span-5">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </ScrollReveal>
        </div>

        {/* CAROUSEL WRAPPER WITH NAVIGATION BUTTONS */}
        <ScrollReveal direction="up" className="relative flex items-center">
          {/* LEFT SLIDER ARROW (Only visible on Tablet & Desktop) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Page"
            className="hidden sm:flex absolute -left-14 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cce3ff] hover:bg-[#b3d6ff] text-[#0066ff] items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <FiArrowLeft className="w-6 h-6" strokeWidth={2.5} />
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
                        <p className="text-gray-500 text-sm sm:text-sm leading-relaxed mb-2 font-normal">
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
                          <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
                      <Image
                        src={plan.image}
                        alt={plan.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center"
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
            <FiArrowRight className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </ScrollReveal>

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

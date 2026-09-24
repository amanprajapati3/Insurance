"use client";

import React, { useState, useEffect, useRef } from "react";
import Bannerpage from "../../shared/Bannerpage";
import { site } from "@/data";

// ANIMATED STAT NUMBER COUNTER COMPONENT
function AnimatedCounter({
  targetValue,
  isDecimal,
  suffix,
}: {
  targetValue: number;
  isDecimal?: boolean;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000; // 2 seconds animation
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease-out quad interpolation
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = start + (targetValue - start) * easeProgress;

            if (frame >= totalFrames) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(currentVal);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.2 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  const formattedValue = isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString();

  return (
    <div
      ref={elementRef}
      className="text-xl sm:text-2xl font-bold text-[#082b5e]"
    >
      {formattedValue}
      {suffix}
    </div>
  );
}

// ICON HELPER FOR STATS
const renderStatIcon = (icon: string) => {
  switch (icon) {
    case "users":
      return (
        <svg
          className="w-10 h-10 text-[#1a73e8]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          className="w-10 h-10 text-[#1a73e8]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "message":
      return (
        <svg
          className="w-10 h-10 text-[#1a73e8]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      );
    case "shield-check":
    default:
      return (
        <svg
          className="w-10 h-10 text-[#1a73e8]"
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
  }
};

export default function Testimonial() {
  const testimonialData = (site as any)?.testimonial;

  const banner = testimonialData?.banner || {
    title: "Testimonials",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Testimonials" }],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const badge = testimonialData?.badge || "CLIENT TESTIMONIALS";
  const title = testimonialData?.title || {
    normal: "Stories That",
    highlighted: "Inspire Us",
  };
  const desc =
    testimonialData?.desc ||
    "Discover how InsureWise has made a difference in the lives of our customers. Their trust motivates us to keep delivering better, every day.";

  const testimonialItems = testimonialData?.testimonialItems || [];
  const stats = testimonialData?.stats || [];

  return (
    <>
      {/* REUSABLE PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN TESTIMONIALS SECTION */}
      <section className="bg-slate-50/50 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          {/* SECTION HEADER */}
          <div className="max-w-2xl mb-8">
            <span className="text-sm sm:text-sm font-bold tracking-widest text-[#0d4081] uppercase mb-1 block">
              {badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082b5e] tracking-tight leading-tight mb-1">
              {title.normal}{" "}
              <span className="text-[#1a73e8]">{title.highlighted}</span>
            </h2>
            <p className="text-slate-800 text-sm sm:text-sm lg:text-base ">
              {desc}
            </p>
          </div>

          {/* TESTIMONIAL CARDS GRID (3 COLUMNS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-12 sm:mb-16">
            {testimonialItems.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* TOP HEADER: AVATAR, NAME, LOCATION & LARGE QUOTE ICON */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border border-slate-100 shadow-sm"
                      />
                      <div>
                        <h3 className="text-sm sm:text-lg font-bold text-[#082b5e] leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium ">
                          {item.location}
                        </p>
                        {/* 5-STAR RATING */}
                        <div className="flex mt-2 items-center gap-1 mb-0">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-6 h-6 text-amber-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* LIGHT BLUE DOUBLE QUOTE ICON */}
                    <div className="text-[#cce0ff] select-none pointer-events-none">
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* QUOTE TEXT */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3 font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* BOTTOM CATEGORY BADGE */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-[#edf4ff] text-[#1a73e8] text-[11px] font-bold tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM STATS BAR WITH ANIMATED COUNTER FROM 0 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {stats.map((stat: any, idx: number) => (
                <div
                  key={stat.id}
                  className={`flex items-center gap-4 ${
                    idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                  }`}
                >
                  {/* ICON CONTAINING CIRCLE */}
                  <div className="w-16 h-16 rounded-full bg-[#eaf2ff] flex items-center justify-center shrink-0">
                    {renderStatIcon(stat.icon)}
                  </div>

                  {/* VALUE AND LABEL */}
                  <div>
                    <AnimatedCounter
                      targetValue={stat.targetValue}
                      isDecimal={stat.isDecimal}
                      suffix={stat.suffix}
                    />
                    <p className="text-slate-500 text-sm sm:text-sm font-semibold mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

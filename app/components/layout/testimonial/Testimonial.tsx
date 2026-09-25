"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import { site } from "@/data";
import { FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

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
const STAT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  users: FiUsers,
  star: FaStar,
  message: FiMessageCircle,
  "shield-check": BsShieldCheck,
};

const renderStatIcon = (icon: string) => {
  const Icon = STAT_ICONS[icon] || BsShieldCheck;
  return <Icon className="w-10 h-10 text-[#1a73e8]" />;
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
          <ScrollReveal direction="up" className="max-w-2xl mb-8">
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
          </ScrollReveal>

          {/* TESTIMONIAL CARDS GRID (3 COLUMNS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-12 sm:mb-16">
            {testimonialItems.map((item: any, index: number) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                index={index}
                staggerChildren={0.1}
                className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* TOP HEADER: AVATAR, NAME, LOCATION & LARGE QUOTE ICON */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        sizes="64px"
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
                            <FaStar
                              key={i}
                              className="w-6 h-6 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* LIGHT BLUE DOUBLE QUOTE ICON */}
                    <div className="text-[#cce0ff] select-none pointer-events-none">
                      <FaQuoteLeft className="w-8 h-8" />
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
              </ScrollReveal>
            ))}
          </div>

          {/* BOTTOM STATS BAR WITH ANIMATED COUNTER FROM 0 */}
          <ScrollReveal direction="up" delay={0.1} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

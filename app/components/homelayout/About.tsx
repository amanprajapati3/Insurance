"use client";

import React, { useState, useEffect, useRef } from "react";
import { site, SectionProps } from "@/data/index";

// Animated Counter Component (Counts up from 0 when visible in viewport)
function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800; // 1.8s
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeProgress * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// Icon helper components
function RenderIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "users":
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "handshake":
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 11H4a2 2 0 00-2 2v2a2 2 0 002 2h3"
          />
        </svg>
      );
    case "growth":
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
    case "heart":
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
    default:
      return null;
  }
}

export default function AboutUs({
  className = "",
  hideButton = false,
}: SectionProps<any> & { hideButton?: boolean }) {
  const data = (site as any)?.aboutUs || (site as any)?.AboutUs;

  const badge = data?.badge || "About InsureWise";
  const title = data?.title?.normal || "Building a Safer";
  const highlightedTitle =
    data?.title?.highlighted || "Tomorrow Together.";
  const desc =
    data?.desc ||
    "At InsureWise, we believe insurance is more than just a policy — it's a promise of a safer, brighter future. Since 2024, we have been dedicated to providing reliable, transparent, and customer-focused insurance solutions that help individuals, families, and businesses stay protected at every stage of life.";

  const stats = data?.stats || [
    {
      id: 1,
      number: 98,
      suffix: "K+",
      label: "People Protected Worldwide",
      icon: "users",
    },
    {
      id: 2,
      number: 361,
      suffix: "K+",
      label: "Satisfied Policy Holders",
      icon: "handshake",
    },
    {
      id: 3,
      number: 76,
      suffix: "K+",
      label: "Years of Trusted Growth",
      icon: "growth",
    },
  ];

  const features = data?.features || [
    { id: 1, title: "Life Insurance", icon: "shield" },
    { id: 2, title: "Home Insurance", icon: "home" },
    { id: 3, title: "Health Insurance", icon: "heart" },
    { id: 4, title: "Travel Insurance", icon: "plane" },
  ];

  const button = data?.button || {
    label: "Learn More About Us",
    href: "/about-us",
  };

  const images = {
    main: {
      src:
        data?.image?.src ||
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1200&auto=format&fit=crop",
      alt: data?.image?.alt || "Happy family protected with insurance",
    },
    inset: {
      src:
        data?.secondaryImage?.src ||
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
      alt: data?.secondaryImage?.alt || "Insurance advisor consultation",
    },
    overlayText: data?.caption || "Protecting What Matters Most.",
  };

  return (
    <section className={`w-full py-8 lg:py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 items-stretch">
          {/*  LEFT VERTICAL STATS COLUMN  */}
          <div className="order-3  w-full lg:w-[200px] xl:w-[220px] lg:order-1 lg:col-span-2 bg-[#f3f7fd] rounded-l-2xl p-6 flex flex-col justify-between divide-y divide-gray-200/80 shadow-sm shrink-0">
            {stats.map((stat: any, index: number) => (
              <div
                key={stat.id || index}
                className="flex flex-col items-center text-center py-6 first:pt-0 last:pb-0"
              >
                {/* Blue Circular Icon Wrapper */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#0052cc] text-white flex items-center justify-center mb-4 shadow-md shadow-blue-600/20">
                  <RenderIcon name={stat.icon} className="w-8 h-8" />
                </div>

                {/* Animated Stat Value */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c3a] tracking-tight mb-1">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </h3>

                {/* Label */}
                <p className="text-xs sm:text-sm font-semibold text-gray-500 max-w-[150px] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* ================= CENTER IMAGE SECTION (EXPANDED LEFTWARD) ================= */}
          <div className="order-2 lg:order-2 lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] lg:min-h-full w-full rounded-r-2xl overflow-hidden shadow-sm flex-1">
            {/* Main Primary Image */}
            <img
              src={images.main.src}
              alt={images.main.alt}
              className="w-full h-full object-cover object-center rounded-r-2xl"
            />

            {/* Bottom-Left Blue Slanted Overlay Banner */}
            <div className="absolute md:-bottom-7 sm:-bottom-9  sm:h-44 -left-5 w-[67%] bg-[#0052cc] p-5 sm:p-6 rounded-t-[36px] rotate-12 rounded-bl-2xl text-white z-10 shadow-lg">
              <p className="text-base -rotate-12 sm:text-lg lg:text-xl ml-2 mr-20 pr-3 font-semibold leading-tight mb-3">
                {images.overlayText}
              </p>
              {/* White Dash Line */}
              <div className="w-12 mt-4 hidden md:flex -rotate-12 h-[3px] md:ml-5 bg-white rounded-full" />
            </div>

            {/* Bottom-Right Inset Image with Thick Curved White Border */}
            <div className="absolute bottom-0 right-0 w-[49%] h-[30%] sm:h-[32%] rounded-2xl overflow-hidden border-[2px] sm:border-[4px] border-white z-20 shadow-xl">
              <img
                src={images.inset.src}
                alt={images.inset.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT SECTION ================= */}
          <div className="order-1 lg:order-3 lg:col-span-5 flex flex-col justify-center lg:pl-4">
            {/* BADGE WITH ICON */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066ff] text-xs sm:text-sm md:text-base font-bold w-fit mb-4">
              {/* Building/Document Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
                <path d="M6 7h4v2H6V7zm6 0h2v2h-2V7zm-6 4h4v2H6v-2zm6 0h2v2h-2v-2z" />
              </svg>
              <span>{badge}</span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c3a] leading-[1.15] mb-5 tracking-tight">
              {title} <span className="text-[#0066ff]">{highlightedTitle}</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              {desc}
            </p>

            {/* FEATURES (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {features.map((feature: any, idx: number) => (
                <div
                  key={feature.id || idx}
                  className="flex items-center gap-3"
                >
                  {/* Circular Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-[#e8f2ff] text-[#0066ff] flex items-center justify-center shrink-0">
                    <RenderIcon name={feature.icon} className="w-7 h-7" />
                  </div>
                  {/* Feature Title */}
                  <span className="text-[#0a1c3a] font-bold text-sm sm:text-base">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* DIVIDER LINE */}
            {!hideButton && <div className="w-full h-[1px] bg-gray-200 mb-8" />}

            {/* DUAL-COLOR PILL BUTTON */}
            {!hideButton && (
              <div>
                <a
                  href={button.href}
                  className="inline-flex items-center rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {/* 70% Navy Blue Part */}
                  <span className="bg-[#0b2147] hover:bg-[#071633] text-white px-7 py-3.5 sm:px-8 sm:py-3.5 font-semibold text-sm sm:text-base transition-colors duration-200">
                    {button.label}
                  </span>

                  {/* 30% Bright Sky Blue Part with Arrow */}
                  <span className="bg-[#007bff] hover:bg-[#0060c7] text-white px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { site, SectionProps } from "@/data/index";
import ScrollReveal from "../shared/ScrollReveal";
import {
  FiArrowRight,
  FiFileText,
  FiHeart,
  FiHome,
  FiSend,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

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
const ABOUT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  users: FiUsers,
  handshake: FaHandshake,
  growth: FiTrendingUp,
  shield: BsShieldCheck,
  home: FiHome,
  heart: FiHeart,
  plane: FiSend,
};

function RenderIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ABOUT_ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
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
          <ScrollReveal direction="left" className="order-3  w-full lg:w-[200px] xl:w-[220px] lg:order-1 lg:col-span-2 bg-[#f3f7fd] rounded-l-2xl p-6 flex flex-col justify-between divide-y divide-gray-200/80 shadow-sm shrink-0">
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
                <p className="text-sm sm:text-sm font-semibold text-gray-500 max-w-[150px] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </ScrollReveal>

          {/* ================= CENTER IMAGE SECTION (EXPANDED LEFTWARD) ================= */}
          <ScrollReveal direction="scale" className="order-2 lg:order-2 lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] lg:min-h-full w-full rounded-r-2xl overflow-hidden shadow-sm flex-1">
            {/* Main Primary Image */}
            <Image
              src={images.main.src}
              alt={images.main.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center rounded-r-2xl"
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
              <Image
                src={images.inset.src}
                alt={images.inset.alt}
                fill
                sizes="(max-width: 1024px) 49vw, 20vw"
                className="object-cover object-center"
              />
            </div>
          </ScrollReveal>

          {/* ================= RIGHT CONTENT SECTION ================= */}
          <ScrollReveal direction="right" className="order-1 lg:order-3 lg:col-span-5 flex flex-col justify-center lg:pl-4">
            {/* BADGE WITH ICON */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066ff] text-sm sm:text-sm md:text-base font-bold w-fit mb-4">
              {/* Building/Document Icon */}
              <FiFileText className="w-4 h-4 fill-current" />
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
                    <FiArrowRight className="w-5 h-5" />
                  </span>
                </a>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

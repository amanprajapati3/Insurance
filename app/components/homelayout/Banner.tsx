"use client";

import React, { useState, useEffect, useCallback } from "react";
import { site, SectionProps, InsuranceBannerData } from "@/data/index";

interface BannerSlideItem {
  id: number;
  badge: string;
  title: string;
  highlightedTitle?: string;
  postTitle?: string;
  desc: string;
  buttons: Array<{
    label: string;
    href: string;
    variant?: string;
  }>;
  image: {
    src: string;
    alt: string;
  };
}

export default function Banner({
  data = site.banner,
  className = "",
}: SectionProps<InsuranceBannerData>) {
  // Extract slides or fallback to single slide from json
  const rawSlides = data.slides;

  const slides: BannerSlideItem[] =
    rawSlides && rawSlides.length > 0
      ? rawSlides
      : [
          {
            id: 1,
            badge: "HOME INSURANCE",
            title: "Let's plan your",
            highlightedTitle: "home",
            postTitle: "insurance",
            desc:
              "A safer home today for a brighter tomorrow. Protect what matters most with InsureWise.",
            buttons: [
              {
                label: "Get a Free Quote",
                href: "/contact",
                variant: "primary",
              },
            ],
            image: {
              src: "/insurance/family-home-insurance.jpg",
              alt: "Happy family sitting together at home",
            },
          },
        ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play interval
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext, isHovered, totalSlides]);

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#0a2140] min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images for Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image.src}
            alt={slide.image.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* MOBILE OVERLAY: Semi-transparent dark blue overlay over the bg image */}
      <div className="block md:hidden absolute inset-0 bg-[#0a2140]/75 z-10" />

      {/* DESKTOP SLANTED OVERLAY: SVG cutting overlay with semi-transparent navy & bright blue accents */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <defs>
          {/* Main Navy Gradient with Transparency */}
          <linearGradient id="navyOverlayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#081e3a" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#0a2345" stopOpacity="0.85" />
          </linearGradient>

          {/* Electric Blue Accent Gradient */}
          <linearGradient id="brightBlueAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007bff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0052cc" stopOpacity="0.85" />
          </linearGradient>

          {/* Secondary Light Blue Accent */}
          <linearGradient id="lightBlueAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0088ff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#005cd6" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Outer Cyan/Light Blue Slanted Accent Bar */}
        <polygon points="460,0 515,0 655,600 600,600" fill="url(#lightBlueAccent)" />

        {/* Inner Electric Blue Slanted Accent Bar */}
        <polygon points="415,0 475,0 615,600 555,600" fill="url(#brightBlueAccent)" />

        {/* Main Semi-Transparent Navy Section */}
        <polygon points="0,0 435,0 570,600 0,600" fill="url(#navyOverlayGrad)" />

        {/* Top edge subtle tab accent line */}
        <polygon points="0,0 435,0 430,6 0,6" fill="#007bff" opacity="0.9" />
      </svg>

      {/* SLIDE CONTENT AREA */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 w-full py-12 ">
        <div className="max-w-lg  text-white">
          {/* BADGE WITH DASH */}
          <div className="flex items-center gap-3 text-sm sm:text-sm font-bold tracking-[0.2em] text-slate-200 uppercase mb-2">
            <span>{currentSlide.badge}</span>
            <span className="w-10 sm:w-14 h-[2px] bg-slate-300/40 rounded-full" />
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-3xl  md:min-h-[190px] sm:text-6xl  font-bold text-white  mb-4 sm:mb-5 drop-shadow-sm">
            {currentSlide.title}{" "}
            {currentSlide.highlightedTitle && (
              <span className="text-[#0084ff]">{currentSlide.highlightedTitle}</span>
            )}
            {currentSlide.postTitle ? ` ${currentSlide.postTitle}` : ""}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed max-w-lg mb-8 sm:mb-10 font-normal drop-shadow-sm">
            {currentSlide.desc}
          </p>

          {/* BUTTON(S) */}
          {currentSlide.buttons && currentSlide.buttons.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
              {currentSlide.buttons.map((btn, bIdx) => (
                <a
                  key={bIdx}
                  href={btn.href}
                  className="inline-flex items-center gap-3 rounded-full bg-[#007bff] hover:bg-[#0062cc] text-white px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{btn.label}</span>
                  {/* Right Arrow Icon */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}

          {/* BOTTOM THREE LINE INDICATORS */}
          <div className="flex items-center gap-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 sm:w-10 bg-[#0084ff]"
                    : "w-6 sm:w-8 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP NAVIGATION BUTTONS (Hidden on Mobile) */}
      {totalSlides > 1 && (
        <>
          {/* LEFT SLIDER BUTTON */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 text-white items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* RIGHT SLIDER BUTTON */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/25 hover:bg-white/40 text-white items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
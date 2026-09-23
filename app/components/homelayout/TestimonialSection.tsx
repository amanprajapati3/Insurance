"use client";

import React, { useState, useRef, useCallback } from "react";
import { site, SectionProps } from "@/data/index";

// Icon Helper Component
function TestimonialIcon({
  name,
  className = "w-5 h-5",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "chat":
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      );
    case "quote":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      );
    case "star":
      return (
        <svg className={className} fill="#ffb800" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    case "people":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );
    case "google":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      );
    case "chevron-left":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      );
    case "chevron-right":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TestimonialSection({
  className = "",
}: SectionProps<any>) {
  const data = (site as any)?.testimonials || (site as any)?.Testimonials;

  const badge = data?.badge || "Testimonials";
  const title = data?.title || "Real Stories.";
  const highlightedTitle = data?.highlightedTitle || "Lasting Protection.";
  const description =
    data?.description ||
    "Thousands of individuals and families trust InsureWise for a safer and more secure future. Here's what they have to say about their experience with us.";

  const avgRating = data?.avgRating || { score: "4.9", label: "Avg. Rating" };
  const googleReviews = data?.googleReviews || {
    score: "4.7",
    label: "Google Reviews",
  };

  const testimonials = data?.items || [
    {
      id: 1,
      quote:
        "InsureWise made the entire process so simple and hassle-free. Their team explained everything clearly and helped me choose the right plan for my family. I now feel more confident about our future. Highly recommended!",
      name: "Priya Sharma",
      role: "Working Professional",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      quote:
        "Finding the right health insurance used to be overwhelming, but InsureWise broke down every option transparently. Exceptional customer service and prompt responses whenever I needed support!",
      name: "Rajesh Kumar",
      role: "Business Owner",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      quote:
        "The claim settlement process was remarkably quick when my family needed it most. No hidden clauses, no delays. Truly a trusted insurance partner you can rely on.",
      name: "Ananya Patel",
      role: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      quote:
        "Great pricing and customized coverage! I was able to bundle home and auto insurance easily while saving a significant amount on annual premiums.",
      name: "Vikram Malhotra",
      role: "Senior Consultant",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, [testimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className={`w-full bg-white pt-8 md:pt-12 overflow-hidden ${className}`}
    >
      <div className="container mx-auto  px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT FIXED OVERVIEW SECTION */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066ff] text-xs sm:text-sm font-bold mb-5 shadow-sm">
                <TestimonialIcon
                  name="chat"
                  className="w-6 h-6 text-[#0066ff]"
                />
                <span>{badge}</span>
              </div>

              {/* HEADING */}
              <h2 className="text-3xl sm:text-4xl  md:pr-4 lg:text-5xl font-bold text-[#081f44] tracking-tight leading-[1.15] mb-5">
                {title}{" "}
                <span className="text-[#0066ff] block sm:inline">
                  {highlightedTitle}
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
                {description}
              </p>
            </div>

            {/* RATING CARDS CONTAINER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* CARD 1: AVG RATING */}
              <div className="bg-[#f4f8ff] rounded-2xl p-2 flex items-center gap-3.5 border border-slate-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#0b3374] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <TestimonialIcon name="people" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#4267a1] leading-tight">
                    {avgRating.label} {avgRating.score}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <TestimonialIcon
                        key={i}
                        name="star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD 2: GOOGLE REVIEWS */}
              <div className="bg-[#f4f8ff] rounded-2xl p-2 flex items-center gap-3.5 border border-slate-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                  <TestimonialIcon name="google" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#3861a1] leading-tight flex items-center gap-1.5">
                    <span>{googleReviews.label}</span>
                    <span className="text-sm font-extrabold">
                      {googleReviews.score}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <TestimonialIcon
                        key={i}
                        name="star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SMOOTH SLIDING TESTIMONIAL CAROUSEL WITH VERTICAL DIVIDER */}
          <div className="lg:col-span-7 lg:border-l lg:border-gray-200/80 lg:pl-12 pt-8 lg:pt-0 relative">
            <div
              className="w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* CAROUSEL SLIDER WRAPPER */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((item: any) => (
                  <div
                    key={item.id}
                    className="w-full shrink-0 flex flex-col justify-between pr-2"
                  >
                    {/* QUOTE ICON BADGE */}

                    {/* QUOTE STATEMENT */}
                    <div className="sm:flex sm:gap-4 gap-1">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e8f2ff] text-[#081f44] flex items-center justify-center mb-6 shadow-sm">
                        <TestimonialIcon
                          name="quote"
                          className="w-6 h-6 sm:w-7 sm:h-7 text-[#081f44]"
                        />
                      </div>
                      <p className="text-gray-600  min-h-[190px] sm:min-h-[160px] max-w-[450px] text-base sm:text-lg lg:text-xl leading-relaxed font-normal mb-2 min-h-[100px] sm:min-h-[110px]">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* THIN SEPARATOR LINE */}
                    <div className="w-full pt-3 border-t-2 border-gray-300 mb-0" />

                    {/* AUTHOR INFORMATION */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#e8f2ff] shadow-sm"
                      />
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-[#0b50be] leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 font-normal mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTROLS (PREV, DOTS, NEXT) */}
            <div className="flex items-center gap-3 mt-8">
              {/* PREV BUTTON */}
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full bg-[#e8f2ff] hover:bg-[#d8e8ff] text-[#0066ff] flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-sm"
              >
                <TestimonialIcon name="chevron-left" className="w-5 h-5" />
              </button>

              {/* DOT INDICATORS */}
              <div className="flex items-center gap-2 mx-1">
                {testimonials.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === currentIndex
                        ? "w-3 h-3 bg-[#0066ff] scale-100"
                        : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              {/* NEXT BUTTON */}
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full bg-[#e8f2ff] hover:bg-[#d8e8ff] text-[#0066ff] flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-sm"
              >
                <TestimonialIcon name="chevron-right" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

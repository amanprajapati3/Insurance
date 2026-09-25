"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaBriefcase,
  FaCar,
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaFileContract,
  FaGraduationCap,
  FaHeadset,
  FaHeart,
  FaHeartbeat,
  FaHome,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaPiggyBank,
  FaPlane,
  FaShieldAlt,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import { site, type InsurancePlanItem } from "@/data";

type InsurancePlanDetailProps = {
  plan: InsurancePlanItem;
};

// Sidebar Plan Icon Resolver
const SIDEBAR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "life-insurance": FaUsers,
  "health-insurance": FaHeartbeat,
  "motor-insurance": FaCar,
  "travel-insurance": FaPlane,
  "home-insurance": FaHome,
  "business-insurance": FaBriefcase,
  "child-education-plan": FaGraduationCap,
  "retirement-plan": FaPiggyBank,
};

// Detail Icon Resolver
const PLAN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: FaShieldAlt,
  users: FaUsers,
  heart: FaHeart,
  heartbeat: FaHeartbeat,
  car: FaCar,
  plane: FaPlane,
  home: FaHome,
  briefcase: FaBriefcase,
  "graduation-cap": FaGraduationCap,
  "piggy-bank": FaPiggyBank,
  wallet: FaWallet,
  "file-contract": FaFileContract,
  "chart-line": FaChartLine,
  "money-bill": FaMoneyBillWave,
  headset: FaHeadset,
};

export default function InsurancePlanDetail({ plan }: InsurancePlanDetailProps) {
  const router = useRouter();
  const currentSlug = plan.slug;

  // Reusable widgets data (single JSON source used on every details page)
  const needAssistance = site.needAssistance;
  const ctaBanner = site.planCtaBanner;
  const ctaDescription = ctaBanner.description.replace(
    "{plan}",
    plan.title.toLowerCase(),
  );

  // Sidebar List of items fallback
  const allPlans = site?.plans?.plans || [
    { slug: "life-insurance", title: "Life Insurance" },
    { slug: "health-insurance", title: "Health Insurance" },
    { slug: "motor-insurance", title: "Motor Insurance" },
    { slug: "travel-insurance", title: "Travel Insurance" },
    { slug: "home-insurance", title: "Home Insurance" },
    { slug: "business-insurance", title: "Business Insurance" },
    { slug: "child-education-plan", title: "Child Education Plan" },
    { slug: "retirement-plan", title: "Retirement Plan" },
  ];

  // Selected or default copy
  const detail = site.planDetails[plan.slug as keyof typeof site.planDetails] || {
    eyebrow: plan.title.toUpperCase(),
    titleStart: "Protect What Matters With",
    titleHighlight: plan.title,
    intro:
      plan.description ||
      "Comprehensive insurance protection designed to keep you and your family secure against unpredictable life events.",
    whyTitle: `Why Choose ${plan.title}?`,
    whyDesc: `A thoughtful ${plan.title.toLowerCase()} plan helps you stay prepared for life's uncertainties and protect what you value most.`,
    pillars: [
      { icon: "shield", label: "Financial Security" },
      { icon: "users", label: "Long-Term Benefits" },
      { icon: "heart", label: "Peace of Mind" },
    ],
    benefits: [
      {
        title: "Financial Security",
        description: "Provides financial support to your family when needed.",
        icon: "money-bill",
      },
      {
        title: "Comprehensive Cover",
        description: "Helps clear obligations and emergency expenses.",
        icon: "shield",
      },
      {
        title: "Expert Guidance",
        description: "Get advice tailored to your long-term goals.",
        icon: "users",
      },
      {
        title: "Peace of Mind",
        description: "Builds a stable foundation for your future.",
        icon: "heart",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Choose a Plan",
        description: "Select a plan that fits your needs.",
      },
      {
        number: "02",
        title: "Pay Premium",
        description: "Make regular premium payments.",
      },
      {
        number: "03",
        title: "Stay Protected",
        description: "Receive financial support when you need it.",
      },
    ],
  };

  return (
    <>
      {/* BANNER SECTION */}
      <Bannerpage
        title="Insurance Plans"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insurance Plans", href: "/insurance" },
          { label: plan.title },
        ]}
        bgImage={
          site?.plans?.banner?.bgImage ||
          "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg"
        }
      />

      <main className="bg-[#f8fafc] py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">

          {/* MOBILE / TABLET PLAN SELECTOR */}
          <ScrollReveal direction="up" className="mb-6 lg:hidden">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
              <label
                htmlFor="plan-selector"
                className="block text-sm font-extrabold text-[#082b5e] mb-3"
              >
                Select a Plan
              </label>
              <div className="relative">
                <select
                  id="plan-selector"
                  value={currentSlug}
                  onChange={(e) => router.push(`/insurance/${e.target.value}`)}
                  className="w-full appearance-none cursor-pointer rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 pr-10 text-sm font-bold text-[#082b5e] focus:border-[#0066ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff]/20"
                >
                  {allPlans.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#0066ff]" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT SIDEBAR */}
            <ScrollReveal direction="left" className="hidden lg:block lg:col-span-4 xl:col-span-3 space-y-6 lg:sticky lg:top-6">
              
              {/* NAVIGATION WIDGET */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-2xs">
                <h3 className="text-base sm:text-xl font-bold text-[#082b5e] mb-4 pb-2 border-b border-slate-100">
                  Insurance Plans
                </h3>
                <div className="space-y-1.5">
                  {allPlans.map((item) => {
                    const isActive = item.slug === currentSlug;
                    const ItemIcon = SIDEBAR_ICONS[item.slug] || FaShieldAlt;
                    return (
                      <Link
                        key={item.slug}
                        href={`/insurance/${item.slug}`}
                        className={`flex items-center justify-between p-3 rounded-xl text-sm sm:text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-[#0066ff] text-white shadow-xs"
                            : "bg-white hover:bg-[#f0f5ff] text-[#082b5e]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <ItemIcon
                            className={`text-xl sm:text-3xl shrink-0 ${
                              isActive ? "text-white" : "text-[#0066ff]"
                            }`}
                          />
                          <span className="text-[16px]">{item.title}</span>
                        </div>
                        {isActive && (
                          <FaArrowRight className="text-lg shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* NEED ASSISTANCE WIDGET */}
              <div className="bg-[#eef5ff] rounded-2xl border border-blue-100 p-6 text-center shadow-2xs">
                <div className="w-16 h-16 rounded-full bg-white text-[#0066ff] flex items-center justify-center mx-auto mb-3 shadow-xs">
                  {(() => {
                    const WidgetIcon = PLAN_ICONS[needAssistance.icon] || FaHeadset;
                    return <WidgetIcon className="text-5xl" />;
                  })()}
                </div>
                <h4 className="text-base sm:text-xl font-bold text-[#082b5e] mb-1">
                  {needAssistance.title}
                </h4>
                <p className="text- sm:text-lg text-slate-600 leading-relaxed mb-4">
                  {needAssistance.description}
                </p>
                <a
                  href={`tel:${needAssistance.phone}`}
                  className="flex items-center justify-center gap-2 text-sm sm:text-lg  font-bold text-[#082b5e] mb-4 hover:text-[#0066ff] transition-colors"
                >
                  <FaPhoneAlt className="text-sm text-[#0066ff]" />
                  <span>{needAssistance.phoneDisplay}</span>
                </a>
                <Link
                  href={needAssistance.buttonHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold sm:text-lg text-sm px-5 py-2.5 rounded-full w-full transition-all duration-200 shadow-xs"
                >
                  <span>{needAssistance.buttonLabel}</span>
                  <FaArrowRight className="text-lg" />
                </Link>
              </div>

            </ScrollReveal>

            {/* MAIN CONTENT AREA */}
            <ScrollReveal direction="right" className="lg:col-span-8 xl:col-span-9 space-y-10">
              
              {/* TOP HEADER + HERO IMAGE + PILLARS */}
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  
                  {/* TEXT CONTENT */}
                  <div className="md:col-span-7 md:mt-2">
                    <span className="text-sm sm:text-[13px] font-bold tracking-widest text-[#0066ff] uppercase block mb-1">
                      {detail.eyebrow}
                    </span>
                    
                    <h1 className="text-2xl sm:text-3xl  font-bold text-[#082b5e] leading-tight mb-3">
                      {detail.titleStart}{" "}
                      <span className="text-[#0066ff]">
                        {detail.titleHighlight}
                      </span>
                    </h1>

                    <p className="text-sm sm:text-lg max-w-[400px] text-slate-600 leading-relaxed font-normal mb-2">
                      {detail.intro}
                    </p>

                    {/* 3 COLUMN FEATURE PILLARS */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center">
                      {detail.pillars.map((item, idx) => {
                        const Icon = PLAN_ICONS[item.icon] || FaShieldAlt;
                        return (
                          <div
                            key={idx}
                            className={`flex flex-col items-center justify-center px-1 ${
                              idx < detail.pillars.length - 1
                                ? "border-r border-slate-200/80"
                                : ""
                            }`}
                          >
                            <div className=" rounded-lg  text-[#0066ff] flex items-center justify-center mb-1.5">
                              <Icon className="text-xl sm:text-5xl" />
                            </div>
                            <span className="text-sm sm:text-base  font-bold text-[#082b5e] leading-tight">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* RIGHT PLAN IMAGE */}
                  <div className="md:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-4/3 sm:aspect-1/1 bg-slate-100">
                      <Image
                        src={plan.image || "/insurance_img/life-plan.jpg"}
                        alt={plan.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* WHY CHOOSE SECTION */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#082b5e]">
                    {detail.whyTitle}
                  </h2>
                  <span className="w-10 mt-2 h-[2px] bg-[#0066ff] inline-block"></span>
                </div>

                <p className="text-sm sm:text-base max-w-xl text-slate-600 leading-relaxed mb-6">
                  {detail.whyDesc}
                </p>

                {/* 2x2 BENEFIT CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {detail.benefits.map((item, idx) => {
                    const Icon = PLAN_ICONS[item.icon] || FaShieldAlt;
                    return (
                      <div
                        key={idx}
                        className="bg-[#f0f5ff] rounded-2xl p-5 border border-blue-100/60 flex items-start gap-4 hover:shadow-xs transition-all duration-200"
                      >
                        <div className=" text-[#0066ff] flex items-center justify-center shrink-0 ">
                          <Icon className="text-xl sm:text-4xl " />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-[#082b5e] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* HOW IT WORKS SECTION */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#082b5e]">
                    How It Works
                  </h2>
                  <span className="w-10 h-[2px] bg-[#0066ff] inline-block"></span>
                </div>

                {/* 3 STEPS GRID WITH ARROWS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {detail.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className=" relative flex  justify-between"
                    >
                      <div className="flex gap-2 ">
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#eef5ff] text-[#0066ff] font-bold text-base sm:text-xl flex items-center justify-center">
                            {step.number}
                          </span>
                        
                        </div>
                        <div className="mt-4">
                        <h3 className="text-sm sm:text-base font-bold text-[#082b5e] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                         </div>
                           {idx < detail.steps.length - 1 && (
                            <FaArrowRight className="hidden mt-10 md:block text-[#0066ff] text-xl sm:text-2xl" />
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CTA BANNER CARD (EXACT TO SCREENSHOT) */}
              <div className="bg-gradient-to-r from-[#eef5ff] via-[#e8f1ff] to-[#f0f5ff] rounded-3xl border border-blue-100  relative overflow-hidden shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                  
                  {/* LEFT TEXT & BUTTON */}
                  <div className="lg:col-span-5 p-3">
                    <h2 className="text-xl  font-bold text-[#082b5e] mb-2 leading-snug">
                      {ctaBanner.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 font-medium">
                      {ctaDescription}
                    </p>
                    <Link
                      href={ctaBanner.buttonHref}
                      className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-sm sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <span>{ctaBanner.buttonLabel}</span>
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>

                  {/* MIDDLE CHECKLIST (2x2 GRID) */}
                  <div className="lg:col-span-4 grid grid-cols-1 ml-3 md:ml-0 gap-2">
                    {ctaBanner.checklist.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                          <FaCheckCircle className="text-sm" />
                        </div>
                        <span className="text-sm font-semibold text-[#082b5e]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* RIGHT IMAGE CUTOUT */}
                  <div className="lg:col-span-3 block">
                    <div className="relative w-full h-[180px] sm:rounded-r-2xl overflow-hidden shadow-xs">
                      <Image
                        src={ctaBanner.image}
                        alt="Safer Tomorrow"
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover object-center"
                        onError={(e) => {
                          // Fallback image if custom image doesn't exist
                          (e.target as HTMLImageElement).src =
                            plan.image || "/insurance_img/life-plan.jpg";
                        }}
                      />
                      <div className="absolute left-0 bg-linear-to-r from-white via-transparent to-transparent"></div>
                    </div>
                  </div>

                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </main>
    </>
  );
}
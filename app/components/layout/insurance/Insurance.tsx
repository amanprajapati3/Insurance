"use client";

import React from "react";
import Image from "next/image";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import { site } from "@/data";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiHome,
  FiSend,
  FiUsers,
} from "react-icons/fi";
import {
  FaCar,
  FaGraduationCap,
  FaHeartbeat,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const INSURANCE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: BsShieldCheck,
  "heart-pulse": FaHeartbeat,
  car: FaCar,
  plane: FiSend,
  home: FiHome,
  briefcase: FiBriefcase,
  "graduation-cap": FaGraduationCap,
  users: FiUsers,
};

// ICON RENDER HELPER FUNCTION
const renderCardIcon = (iconName: string) => {
  const Icon = INSURANCE_ICONS[iconName] || FiUsers;
  return <Icon className="w-7 h-7" />;
};

export default function Insurance() {
  const plansData = (site as any)?.plans;

  const banner = plansData?.banner || {
    title: "Insurance Plans",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Insurance Plans" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const plans = plansData?.plans || [];

  return (
    <>
      {/* REUSABLE PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN INSURANCE PLANS GRID SECTION */}
      <section className="bg-slate-50/60 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          
          {/* CARDS GRID: 4 COLUMNS DESKTOP, 2 COLUMNS TABLET, 1 COLUMN MOBILE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((item: any, index: number) => {
              const detailsLink = item.button?.href || `/insurance/${item.slug}`;

              return (
                <ScrollReveal
                  key={item.id}
                  direction="up"
                  index={index}
                  staggerChildren={0.1}
                  className="bg-white rounded-xl border overflow-hidden border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  {/* TOP IMAGE WITH BOTTOM-LEFT OVERLAY ICON BADGE */}
                  <div>
                    <div className="relative h-48 w-full group">
                      <a href={detailsLink} className="relative block w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </a>

                      {/* NAVY BLUE CIRCULAR ICON BADGE WITH WHITE 2PX BORDER */}
                      <div className="absolute -bottom-7 left-5 w-14 h-14 rounded-full bg-[#0b2f66] border-2 border-white text-white flex items-center justify-center shadow-md z-10">
                        {renderCardIcon(item.icon)}
                      </div>
                    </div>

                    {/* CARD DETAILS */}
                    <div className="pt-8 px-3 pb-2">
                      {/* TITLE (CLICKABLE) */}
                      <h3 className="text-base sm:text-lg font-extrabold text-[#071d3d] leading-snug hover:text-[#0066ff] transition-colors">
                        <a href={detailsLink}>{item.title}</a>
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-slate-600  min-h-[70px] text-sm sm:text-[15px] mt-0">
                        {item.description}
                      </p>

                      {/* FEATURES / CHECKPOINTS LIST */}
                      {item.features && item.features.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {item.features.map((feature: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm sm:text-sm font-semibold text-slate-700"
                            >
                              {/* BLUE CHECKMARK CIRCLE ICON */}
                              <div className="w-4 h-4 rounded-full bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                                <FiCheck className="w-2.5 h-2.5" strokeWidth={3} />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* BOTTOM LINK BUTTON */}
                  <div className="px-5 sm:px-6 pb-6 pt-2">
                    <a
                      href={detailsLink}
                      className="inline-flex items-center gap-1.5 text-[#0066ff] font-bold text-sm sm:text-sm hover:gap-2.5 transition-all duration-300"
                    >
                      <span>{item.button?.label || "View Details"}</span>
                      <FiArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
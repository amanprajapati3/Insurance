"use client";

import React from "react";
import Bannerpage from "../../shared/Bannerpage";
import { site } from "@/data";

// ICON RENDER HELPER FUNCTION
const renderCardIcon = (iconName: string) => {
  switch (iconName) {
    case "shield":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "heart-pulse":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "car":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4h4v6h-2a3 3 0 01-6 0H9a3 3 0 01-6 0H1V9h2z" />
        </svg>
      );
    case "plane":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "home":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "graduation-cap":
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case "users":
    default:
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
  }
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
            {plans.map((item: any) => {
              const detailsLink = item.button?.href || `/insurance/${item.slug}`;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border overflow-hidden border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  {/* TOP IMAGE WITH BOTTOM-LEFT OVERLAY ICON BADGE */}
                  <div>
                    <div className="relative h-48 w-full group">
                      <a href={detailsLink} className="block w-full h-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                                <svg
                                  className="w-2.5 h-2.5"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
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
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
"use client";

import React from "react";
import { site, SectionProps, InsurancePartnersData } from "@/data/index";

// Helper Component for Handshake / Partner Icon
function PartnerBadgeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.364 4.636a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414 0L12 5.343l-2.829 2.828a1 1 0 01-1.414 0L5.636 6.05a1 1 0 011.414-1.414l1.414 1.414L11.293 3.22a1 1 0 011.414 0l2.829 2.829 1.414-1.414a1 1 0 011.414 0zM2.808 9.879a1 1 0 011.414 0l3.535 3.535a1 1 0 01-1.414 1.414L2.808 11.293a1 1 0 010-1.414zm18.384 0a1 1 0 010 1.414l-3.535 3.535a1 1 0 01-1.414-1.414l3.535-3.535a1 1 0 011.414 0zM8.464 15.536l2.122-2.122a1 1 0 011.414 0l2.122 2.122a1 1 0 01-1.414 1.414L12 16.243l-2.122 2.121a1 1 0 01-1.414-1.414z" />
    </svg>
  );
}

export default function Partners({ className = "" }: SectionProps<InsurancePartnersData>) {
  const data = site.partners;

  const badge = data?.badge || "Our Partners";
  const title = data?.title?.normal || "Trusted Partners for";
  const highlightedTitle = data?.title?.highlighted || "a Brighter Tomorrow";
  const description =
    data?.desc ||
    "We collaborate with leading insurance providers to bring you reliable coverage,\ngreater choices, and complete peace of mind.";

  const partners =
    data?.partners ||
    [
      { id: 1, name: "HDFC Life", logo: "/partners/hdfc.jpg" },
      { id: 2, name: "ICICI Prudential", logo: "/partners/icici.jpg" },
      { id: 3, name: "LIC", logo: "/partners/lic.jpg" },
      { id: 4, name: "SBI Life", logo: "/partners/sbi.jpg" },
      { id: 5, name: "Max Life", logo: "/partners/max.jpg" },
      { id: 6, name: "Tata AIA", logo: "/partners/tata.jpg" },
      { id: 7, name: "Bajaj Allianz", logo: "/partners/bajaj.jpg" },
      { id: 8, name: "Kotak Life", logo: "/partners/kotak.jpg" },
      { id: 9, name: "Birla Sun Life", logo: "/partners/birla.jpg" },
      { id: 10, name: "PNB MetLife", logo: "/partners/pnb.jpg" },
    ];

  return (
    <section className={`w-full bg-[#fbfcfd] pt-8 md:pt-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-8">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2ff] text-[#0066ff] text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <PartnerBadgeIcon className="w-4 h-4 text-[#0066ff]" />
            <span>{badge}</span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-3xl sm:text-4xl  font-bold text-[#081f44] max-w-lg mb-2">
            {title} <span className="text-[#0066ff] block sm:inline">{highlightedTitle}</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl whitespace-pre-line font-medium">
            {description}
          </p>
        </div>

        {/* PARTNERS GRID:
            Mobile (<768px): 2 Columns (grid-cols-2) -> [2, 2, 2, 2, 2]
            Tablet (768px - 1024px): 4 Columns (md:grid-cols-4) -> [4, 4, 2]
            Desktop (>=1024px): 5 Columns (lg:grid-cols-5) -> [5, 5]
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 max-w-7xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 flex items-center justify-center min-h-[110px] sm:min-h-[120px] shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-auto h-16 sm:h-24 object-contain max-w-full"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
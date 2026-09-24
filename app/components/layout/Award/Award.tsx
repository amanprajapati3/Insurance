"use client";

import React from "react";
import Bannerpage from "../../shared/Bannerpage";
import Ctabanner2 from "../../shared/Ctabanner2";
import { site } from "@/data";

export default function Award() {
  const awardData = (site as any)?.award;

  const banner = awardData?.banner || {
    title: "Awards",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Awards" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const header = awardData?.header || {
    subtitle: "OUR ACHIEVEMENTS",
    title: "Recognized for",
    highlightedTitle: "Excellence",
    description:
      "Explore some of the prestigious awards and recognitions received throughout our journey, reflecting our commitment to trusted service, innovation, and customer satisfaction.",
  };

  const awardsList = awardData?.awardsList || [
    {
      id: 1,
      year: "2026",
      title: "Excellence Award",
      description:
        "Recognized for outstanding performance and commitment to excellence in the insurance industry.",
      image: "/trophy/trophy_1.png",
    },
    {
      id: 2,
      year: "2025",
      title: "Best Industry Performance",
      description:
        "Awarded for exceptional industry performance and service standards.",
      image: "/trophy/trophy_2.png",
    },
    {
      id: 3,
      year: "2025",
      title: "Leadership Recognition",
      description:
        "Honoured for strong leadership and contribution to sustainable growth.",
      image: "/trophy/trophy_3.png",
    },
    {
      id: 4,
      year: "2024",
      title: "Customer Trust Award",
      description:
        "Recognized for building long-lasting relationships and delivering trusted solutions.",
      image: "/trophy/trophy_4.png",
    },
    {
      id: 5,
      year: "2024",
      title: "Innovation in Insurance",
      description:
        "Awarded for innovative solutions that create greater value for our customers.",
      image: "/trophy/trophy_5.png",
    },
    {
      id: 6,
      year: "2023",
      title: "Social Impact Award",
      description:
        "Recognized for our commitment to community well-being and a safer tomorrow.",
      image: "/trophy/trophy_6.png",
    },
  ];

  const highlightBox = awardData?.highlightBox || {
    title: "Driven by Purpose, Recognized by the World",
    description:
      "These achievements motivate us to continue making a positive difference in the lives of individuals, families, and businesses.",
    buttonLabel: "Partner With Us",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* REUSABLE PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN AWARDS CONTENT SECTION */}
      <section className="bg-slate-50/60 py-8 md:pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-1">
              <span className="text-sm sm:text-sm font-bold tracking-widest text-[#1a73e8] uppercase">
                {header.subtitle}
              </span>
              <div className="w-10 h-[2px] bg-[#1a73e8]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082b5e] tracking-tight leading-tight mb-2">
              {header.title}{" "}
              <span className="text-[#1a73e8]">{header.highlightedTitle}</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-sm lg:text-base leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* AWARDS GRID (3 COLUMNS x 2 ROWS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-5">
            {awardsList.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-row items-stretch min-h-[170px]"
              >
                {/* LEFT DARK NAVY TROPHY CONTAINER */}
                <div className="w-1/3 min-w-[160px] bg-[#071d3d]  flex items-center justify-center shrink-0 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full  min-w-[120px] drop-shadow-lg"
                  />
                </div>

                {/* RIGHT DETAILS CONTAINER */}
                <div className="w-2/3 p-4 flex flex-col justify-center items-start">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#eaf2ff] text-[#1a73e8] text-[11px] font-extrabold tracking-wide mb-2">
                    {item.year}
                  </span>

                  <h3 className="text-sm sm:text-base font-bold text-[#082b5e] leading-snug mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-700 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM HIGHLIGHT BOX */}
      <Ctabanner2 />
    </>
  );
}
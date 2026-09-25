"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import { site, InsuranceJobItem, InsuranceCareerPerk } from "@/data";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiSearch,
  FiSend,
  FiUsers,
} from "react-icons/fi";
import { FaHeart, FaStar } from "react-icons/fa";

const PERK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "users-growth": FiUsers,
  briefcase: FiBriefcase,
  heart: FaHeart,
  star: FaStar,
};

export default function Career() {
  const careerData = (site as any)?.career;

  const banner = careerData?.banner || {
    title: "Career",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Career" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const perks: InsuranceCareerPerk[] = careerData?.perks || [];
  const positionsHeader = careerData?.positionsHeader || {};
  const initialJobs: InsuranceJobItem[] = careerData?.jobs || [];

  // Filter & Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");

  // Extract unique departments and locations for dropdowns
  const departments = useMemo(() => {
    const depts = new Set(initialJobs.map((j) => j.department));
    return ["All Departments", ...Array.from(depts)];
  }, [initialJobs]);

  const locations = useMemo(() => {
    const locs = new Set(initialJobs.map((j) => j.location));
    return ["All Locations", ...Array.from(locs)];
  }, [initialJobs]);

  // Filtered jobs list
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept =
        selectedDept === "All Departments" || job.department === selectedDept;
      const matchesLoc =
        selectedLoc === "All Locations" || job.location === selectedLoc;

      return matchesSearch && matchesDept && matchesLoc;
    });
  }, [initialJobs, searchTerm, selectedDept, selectedLoc]);

  // Helper function to render perk icons matching exact screenshot design
  const renderPerkIcon = (iconName: string) => {
    const Icon = PERK_ICONS[iconName] || FiSend;
    return <Icon className="w-10 h-10 text-[#0066ff]" />;
  };

  return (
    <>
      {/* PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN CAREER SECTION */}
      <section className="bg-[#f8fafc] py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          
          {/* TOP 4 PERKS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
            {perks.map((perk, index) => (
              <ScrollReveal
                key={perk.id}
                direction="up"
                index={index}
                staggerChildren={0.1}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                {/* ICON BADGE */}
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  {renderPerkIcon(perk.icon)}
                </div>
                {/* TEXT CONTENT */}
                <div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#082b5e] leading-snug">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mt-0.5">
                    {perk.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* OPEN POSITIONS HEADER & SEARCH FILTERS */}
          <ScrollReveal direction="up" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            
            {/* TITLE & DESCRIPTION */}
            <div>
              <span className="text-sm sm:text-sm font-bold tracking-wider text-[#082b5e] uppercase block mb-0">
                {positionsHeader.badge || "OPEN POSITIONS"}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#082b5e] tracking-tight leading-tight mb-0">
                {positionsHeader.title || "Find Your Next Opportunity"}
              </h2>
              <p className="text-slate-600 text-sm sm:text-sm md:text-base leading-relaxed max-w-2xl">
                {positionsHeader.description ||
                  "Explore our current job openings and take the next step in your career with InsureWise."}
              </p>
            </div>

            

          </ScrollReveal>

          {/* JOB LISTINGS */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <ScrollReveal
                  key={job.id}
                  direction="up"
                  index={index}
                  staggerChildren={0.1}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 lg:gap-8"
                >
                  {/* LEFT DETAILS */}
                  <div className="md:w-5/12 lg:w-5/12">
                    {/* TITLE & BADGE */}
                    <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#082b5e]">
                        {job.title}
                      </h3>
                      <span className="bg-[#edf4ff] text-[#0066ff] font-bold text-[11px] sm:text-sm px-2.5 py-0.5 rounded-full">
                        {job.type}
                      </span>
                    </div>

                    {/* METADATA ICONS ROW */}
                    <div className="flex  flex-wrap items-center gap-y-1.5 gap-2 text-sm font-semibold text-slate-500">
                      
                      {/* DEPARTMENT */}
                      <div className="flex items-center gap-1.5">
                        <FiBriefcase className="w-5 h-5 text-slate-700 shrink-0" />
                        <span className="text-sm">{job.department}</span>
                      </div>

                      {/* LOCATION */}
                      <div className="flex items-center gap-1.5">
                        <FiMapPin className="w-5 h-5 text-slate-700 shrink-0" />
                        <span className="text-sm"> {job.location}</span>
                      </div>

                      {/* POSTED TIME */}
                      <div className="flex items-center gap-1.5">
                        <FiClock className="w-5 h-5 text-slate-700 shrink-0" />
                        <span className="text-sm">{job.posted}</span>
                      </div>

                    </div>
                  </div>

                  {/* MIDDLE DESCRIPTION WITH SEPARATING BORDER */}
                  <div className="md:w-5/12  lg:w-4/12 md:px-6 md:border-l md:border-slate-200/80">
                    <p className="text-sm sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {job.description}
                    </p>
                  </div>

                  {/* RIGHT ACTION BUTTON WITH SLUG */}
                  <div className="md:w-2/12 flex items-center justify-start md:justify-end shrink-0 pt-2 md:pt-0">
                    <Link
                      href={`/career/${job.slug}`}
                      className="inline-flex items-center gap-2 bg-[#f0f5ff] hover:bg-[#0066ff] text-[#0066ff] hover:text-white font-bold px-5 py-2.5 rounded-full text-sm sm:text-sm transition-all duration-300 shadow-2xs group border border-blue-200/60 hover:border-[#0066ff]"
                    >
                      <span>View Details</span>
                      <FiArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                </ScrollReveal>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                  <FiSearch className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#082b5e] mb-1">
                  No Job Openings Found
                </h3>
                <p className="text-sm sm:text-sm text-slate-500">
                  Try adjusting your search criteria or clear filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDept("All Departments");
                    setSelectedLoc("All Locations");
                  }}
                  className="mt-4 text-sm font-bold text-[#0066ff] hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
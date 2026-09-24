"use client";

import React, { useState } from "react";
import Bannerpage from "../../shared/Bannerpage";
import { site, type InsuranceFaqItem } from "@/data";
import { FaHeadphonesAlt } from "react-icons/fa";


export default function Faq() {
  const faqData = site.faq;

  const banner = faqData?.banner || {
    title: "FAQS",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "FAQS" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const headerSection = faqData?.headerSection || {};
  const faqsList: InsuranceFaqItem[] = faqData?.faqs || [];
  const supportCard = faqData?.supportCard || {};

  // Accordion state: Open first FAQ ("01") by default as seen in the mockup
  const [openId, setOpenId] = useState<string | null>("01");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN FAQ SECTION */}
      <section className="bg-[#f8fafc] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          
          {/* EQUAL HEIGHT FLEX/GRID LAYOUT - ALIGNS LEFT AND RIGHT COLUMN BOTTOMS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT COLUMN: GENERAL FAQS */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full">
              <div>
                {/* SECTION HEADER */}
                <div className="mb-6">
                  <span className="text-sm sm:text-sm font-bold tracking-widest text-[#082b5e]  block mb-0">
                    {headerSection.badge || "GENERAL FAQS"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#082b5e] tracking-tight leading-tight mb-1">
                    {headerSection.title?.normal || "Common Questions,"}{" "}
                    <span className="text-[#0066ff]">
                      {headerSection.title?.highlighted || "Simple Answers"}
                    </span>
                  </h2>
                  <p className="text-slate-800 text-sm sm:text-sm md:text-base leading-relaxed">
                    {headerSection.description ||
                      "We've answered the most common questions to help you understand our insurance plans, policies and services. If you still need assistance, our team is always here to help."}
                  </p>
                </div>

                {/* ACCORDION LIST */}
                <div className="space-y-2">
                  {faqsList.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? "bg-[#edf4ff] border-blue-200/80 shadow-sm"
                            : "bg-white border-slate-200/80 hover:border-blue-200"
                        }`}
                      >
                        {/* ACCORDION HEADER BUTTON */}
                        <button
                          onClick={() => toggleFaq(item.id)}
                          type="button"
                          className="w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-3 sm:gap-4 pr-2">
                            {/* NUMBER BADGE */}
                            <span
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 font-extrabold text-sm sm:text-sm transition-colors ${
                                isOpen
                                  ? "bg-[#0066ff] text-white"
                                  : "bg-[#e8f1ff] text-[#0066ff]"
                              }`}
                            >
                              {item.id}
                            </span>

                            {/* QUESTION TITLE */}
                            <h3 className="text-sm sm:text-sm md:text-[15px] font-bold text-[#082b5e] leading-snug">
                              {item.question}
                            </h3>
                          </div>

                          {/* TOGGLE ICON (+ / -) */}
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#dbe8ff] text-[#0066ff] flex items-center justify-center shrink-0">
                            {isOpen ? (
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                              </svg>
                            ) : (
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                            )}
                          </div>
                        </button>

                        {/* ACCORDION ANSWER CONTENT */}
                        {isOpen && (
                          <div className="px-4 pb-4 sm:px-5 sm:pb-4 pt-0">
                            <p className="pl-10 sm:pl-12 text-sm sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: STILL HAVE QUESTIONS CARD */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between h-full">
              <div className="bg-[#edf4ff] rounded-3xl border border-slate-200/80  flex flex-col justify-between h-full shadow-sm">
                
                {/* TOP CONTENT */}
                <div>
                  {/* AGENT PHOTO */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 h-60 sm:h-84 w-full shadow-sm">
                    <img
                      src={supportCard.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"}
                      alt="Customer Support"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="text-2xl pl-5 sm:text-3xl md:text-4xl font-bold text-[#082b5e] mb-2 leading-tight">
                    {supportCard.title || "Still Have Questions?"}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base px-5 leading-relaxed mb-6">
                    {supportCard.description ||
                      "Our friendly team is always here to help you with personalized guidance."}
                  </p>

                  {/* CALL TO ACTION BUTTON */}
                  <a
                    href={`tel:${supportCard.phone?.replace(/\s+/g, "") || "+919876543210"}`}
                    className="w-[87%] ml-5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/20 text-base mb-6 cursor-pointer"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.37z" />
                    </svg>
                    <span>{supportCard.phone || "+91 98765 43210"}</span>
                  </a>

                  {/* EMAIL & WORKING HOURS */}
                  <div className="space-y-3 ml-5 pt-2 pb-6 border-b border-slate-200/80">
                    <div className="flex items-center gap-3 text-slate-700 text-sm sm:text-sm font-medium">
                      <svg className="w-8 h-8 text-[#0066ff] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">{supportCard.email || "support@insurewise.com"}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-700 text-sm sm:text-sm font-medium">
                      <svg className="w-8 h-8 text-[#0066ff] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{supportCard.hours || "Mon - Sat, 9:00 AM - 6:00 PM"}</span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM BANNER NOTE - ALIGNS PERFECTLY WITH LEFT COLUMN BOTTOM */}
                <div className="pt-5 flex justify-center mb-5 items-center gap-4">
                  <div className=" rounded-full  text-[#0066ff] flex items-center justify-center shrink-0 ">
                    <FaHeadphonesAlt className="w-11 sm:w-16 sm:h-16 h-11"/>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base max-w-[140px] font-bold text-[#082b5e] leading-snug">
                      {supportCard.footerTitle || "We're just a call or message away."}
                    </h4>
                    <p className="text-[13px]  text-slate-500 font-medium mt-0.5">
                      {supportCard.footerSubtext || "Your peace of mind is our priority."}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
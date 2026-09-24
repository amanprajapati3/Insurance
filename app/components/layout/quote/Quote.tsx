"use client";

import React, { useState } from "react";
import Bannerpage from "../../shared/Bannerpage";
import { site } from "@/data";
import { MdOutlineCurrencyRupee } from "react-icons/md";


export default function Quote() {
  const quoteData = (site as any)?.quote;

  const banner = quoteData?.banner || {
    title: "Get A Quote",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Get A Quote" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const formSection = quoteData?.formSection || {};
  const infoSection = quoteData?.infoSection || {};

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    insuranceType: "Select insurance type",
    city: "",
    preferredPlan: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [value]: value, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted successfully!");
  };

  return (
    <>
      {/* PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN QUOTE SECTION */}
      <section className="bg-[#f8fafc] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          
          {/* EQUAL HEIGHT TWO-COLUMN GRID - ALIGNS BOTTOM ON DESKTOP, STACKS ON MOBILE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            
            {/* LEFT COLUMN: REQUEST A QUOTE FORM */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-slate-200/80 shadow-sm">
              <div>
                {/* SECTION HEADER */}
                <div className="mb-6">
                  <span className="text-sm sm:text-sm font-bold tracking-wider text-[#082b5e] uppercase block mb-1">
                    {formSection.badge || "REQUEST A QUOTE"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#082b5e] tracking-tight leading-tight mb-2">
                    {formSection.title || "Tell Us About Your Needs"}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {formSection.description ||
                      "Fill in the details below and we'll share the best insurance options for you."}
                  </p>
                </div>

                {/* FORM FIELDS */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
                    
                    {/* FULL NAME */}
                    <div>
                      <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm sm:text-sm placeholder-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* PHONE NUMBER */}
                    <div>
                      <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm sm:text-sm placeholder-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* EMAIL ADDRESS */}
                    <div>
                      <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm sm:text-sm placeholder-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* INSURANCE TYPE */}
                    <div>
                      <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                        Insurance Type *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </span>
                        <select
                          name="insuranceType"
                          value={formData.insuranceType}
                          onChange={handleChange}
                          className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-700 rounded-xl py-3 pl-10 pr-8 text-sm sm:text-sm outline-none transition-all appearance-none cursor-pointer"
                        >
                          {(formSection.insuranceTypes || [
                            "Select insurance type",
                            "Health Insurance",
                            "Life Insurance",
                            "Motor Insurance",
                            "Property Insurance",
                          ]).map((type: string, idx: number) => (
                            <option key={idx} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* CITY */}
                    <div>
                      <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                        City *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="Enter your city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm sm:text-sm placeholder-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* PREFERRED PLAN */}
                    <div>
                      <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                        Preferred Plan (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="preferredPlan"
                          placeholder="Any preference?"
                          value={formData.preferredPlan}
                          onChange={handleChange}
                          className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm sm:text-sm placeholder-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                  </div>

                  {/* ADDITIONAL MESSAGE */}
                  <div>
                    <label className="block text-sm sm:text-sm font-bold text-[#082b5e] mb-1.5">
                      Additional Message (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us more about your requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#f0f5ff] border border-transparent focus:border-[#0066ff] focus:bg-white text-slate-800 rounded-xl p-3 pl-10 text-sm sm:text-sm placeholder-slate-400 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* CHECKBOX */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0066ff] rounded border-slate-300 focus:ring-[#0066ff] cursor-pointer"
                    />
                    <label htmlFor="agree" className="text-sm text-slate-600 font-medium cursor-pointer">
                      {formSection.checkboxText || "I agree to be contacted by InsureWise for consultation."}
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 text-sm sm:text-sm cursor-pointer"
                    >
                      <span>{formSection.buttonText || "Get My Quote"}</span>
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* SECURITY NOTE */}
                  <div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 font-medium pt-1">
                    <svg className="w-3.5 h-3.5 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>{formSection.securityText || "Your information is safe with us."}</span>
                  </div>

                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: INFO CARDS */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-6 h-full">
              
              {/* TOP IMAGE CARD */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-[40%]  shrink-0 group">
                <img
                  src={infoSection.image || "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80"}
                  alt="Protect What Matters Most"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* DARK BLUE OVERLAY AT BOTTOM */}
                <div className="absolute bottom-0  rounded-t-2xl inset-x-0 bg-[#082b5e]/95 p-4 text-white flex items-end justify-between backdrop-blur-xs">
                  <div className="md:max-w-[200px]">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 leading-snug">
                      {infoSection.cardTitle || "Protect What Matters Most"}
                    </h3>
                    <p className="text-sm text-slate-300 font-normal">
                      {infoSection.cardSubtitle || "The right insurance plan for you and your loved ones."}
                    </p>
                  </div>
                  {/* DECORATIVE LINE */}
                  <div className="w-8 h-0.5 bg-slate-400 shrink-0 mb-1"></div>
                </div>
              </div>

              {/* BOTTOM CARD: WHY GET A QUOTE FROM US */}
              <div className="bg-[#edf4ff] rounded-3xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between flex-1 shadow-sm">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold md:text-2xl text-[#082b5e] mb-5">
                    {infoSection.whyTitle || "Why Get a Quote from Us?"}
                  </h3>

                  {/* FEATURE LIST */}
                  <div className="space-y-4">
                    
                    {/* FEATURE 1 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white    text-[#0066ff]  flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-lg font-bold text-[#082b5e]">Personalized Plans</h4>
                        <p className="text-sm text-slate-600 mt-0.5">Get plans tailored to your needs.</p>
                      </div>
                    </div>

                    {/* FEATURE 2 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white    text-[#0066ff] flex items-center justify-center shrink-0 shadow-sm mt-0.5 font-extrabold text-sm sm:text-base">
                        <MdOutlineCurrencyRupee className="w-8 h-8"/>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-lg font-bold text-[#082b5e]">Competitive Rates</h4>
                        <p className="text-sm text-slate-600 mt-0.5">Compare the best options.</p>
                      </div>
                    </div>

                    {/* FEATURE 3 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white    text-[#0066ff]  flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-lg font-bold text-[#082b5e]">Expert Support</h4>
                        <p className="text-sm text-slate-600 mt-0.5">Our advisors are always here to help.</p>
                      </div>
                    </div>

                    {/* FEATURE 4 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white    text-[#0066ff]  flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-lg font-bold text-[#082b5e]">Quick Response</h4>
                        <p className="text-sm text-slate-600 mt-0.5">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>

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
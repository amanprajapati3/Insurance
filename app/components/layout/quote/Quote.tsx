"use client";

import React, { useState } from "react";
import Image from "next/image";
import Bannerpage from "../../shared/Bannerpage";
import { site } from "@/data";
import ScrollReveal from "../../shared/ScrollReveal";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import {
  FiArrowRight,
  FiChevronDown,
  FiClock,
  FiFileText,
  FiLock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";


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
            <ScrollReveal direction="left" className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-slate-200/80 shadow-sm">
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
                          <FiUser className="w-4 h-4" />
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
                          <FiPhone className="w-4 h-4" />
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
                          <FiMail className="w-4 h-4" strokeWidth={2} />
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
                          <BsShieldCheck className="w-4 h-4" />
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
                          <FiChevronDown className="w-4 h-4" strokeWidth={2} />
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
                          <FiMapPin className="w-4 h-4" strokeWidth={2} />
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
                          <FiFileText className="w-4 h-4" strokeWidth={2} />
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
                        <FiMessageCircle className="w-4 h-4" strokeWidth={2} />
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
                      <FiArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* SECURITY NOTE */}
                  <div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 font-medium pt-1">
                    <FiLock className="w-3.5 h-3.5 text-[#0066ff]" strokeWidth={2} />
                    <span>{formSection.securityText || "Your information is safe with us."}</span>
                  </div>

                </form>
              </div>
            </ScrollReveal>

            {/* RIGHT COLUMN: INFO CARDS */}
            <ScrollReveal direction="right" className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-6 h-full">
              
              {/* TOP IMAGE CARD */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-[40%]  shrink-0 group">
                <Image
                  src={infoSection.image || "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80"}
                  alt="Protect What Matters Most"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                        <BsShieldCheck className="w-8 h-8" />
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
                        <FiUsers className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-lg font-bold text-[#082b5e]">Expert Support</h4>
                        <p className="text-sm text-slate-600 mt-0.5">Our advisors are always here to help.</p>
                      </div>
                    </div>

                    {/* FEATURE 4 */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white    text-[#0066ff]  flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        <FiClock className="w-8 h-8" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-lg font-bold text-[#082b5e]">Quick Response</h4>
                        <p className="text-sm text-slate-600 mt-0.5">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
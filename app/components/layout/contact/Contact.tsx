"use client";

import React, { useState } from "react";
import Bannerpage from "../../shared/Bannerpage";
import { site } from "@/data";

// FEATURE CARD ICON RENDER HELPER
const renderFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case "phone":
      return (
        <svg className="w-7 md:w-9 md:h-9 h-7 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "mail":
      return (
        <svg className="w-7 h-7 md:w-9 md:h-9 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg className="w-7 h-7 md:w-9 md:h-9 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "chat":
    default:
      return (
        <svg className="w-7 h-7 md:w-9 md:h-9 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
  }
};

export default function Contact() {
  const contactData = (site as any)?.contact;

  const banner = contactData?.banner || {
    title: "Contact Us",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact Us" },
    ],
    bgImage:
      "/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg",
  };

  const featureCards = contactData?.featureCards || [];
  const formSection = contactData?.formSection || {};
  const infoCard = contactData?.infoCard || {};
  const locationsSection = contactData?.locationsSection || {};

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Select a subject",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you shortly.");
  };

  return (
    <>
      {/* PAGE BANNER */}
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      {/* MAIN CONTACT SECTION */}
      <section className="bg-[#f8fafc] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          
          {/* TOP 4 CONTACT FEATURE CARDS */}
          <div className="grid grid-cols-1 shadow-md shadow-blue-200 rounded-xl py-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {featureCards.map((card: any) => (
              <a
                key={card.id}
                href={card.href || "#"}
                className="p-5 border-r border-r-slate-300 transition-all duration-300 flex gap-4 group"
              >
                {/* BLUE CIRCLE ICON CONTAINER */}
                <div className="w-12 md:w-16 md:h-16 h-12 rounded-full bg-[#edf4ff] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  {renderFeatureIcon(card.icon)}
                </div>

                {/* TEXT CONTENT */}
                <div>
                  <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                    {card.title}
                  </h4>
                  <p className="text-sm font-bold text-[#082b5e] mt-0.5 group-hover:text-[#0066ff] transition-colors">
                    {card.value}
                  </p>
                  <p className="text-[12px] text-slate-600 font-medium mt-0.5">
                    {card.subtext}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* MAIN FORM AND RIGHT-SIDE CONTENT (EQUAL HEIGHT ALIGNED AT BOTTOM) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-10 md:mb-16">
            
            {/* LEFT COLUMN: CONTACT FORM */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between h-full">
              <div>
                <span className="text-sm sm:text-sm font-bold tracking-widest text-[#0e3877] uppercase block mb-1">
                  {formSection.badge || "SEND US A MESSAGE"}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#082b5e] tracking-tight mb-2">
                  {formSection.title?.normal || "We'd Love to"}{" "}
                  <span className="text-[#0066ff]">
                    {formSection.title?.highlighted || "Hear From You"}
                  </span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-sm md:text-base mb-6 sm:mb-8">
                  {formSection.description ||
                    "Fill out the form and our team will get back to you shortly."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* FULL NAME & EMAIL ADDRESS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#0066ff] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#0066ff] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* PHONE NUMBER & SUBJECT */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#0066ff] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-sm text-slate-800 outline-none focus:border-[#0066ff] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        {(formSection.subjects || ["Select a subject"]).map(
                          (sub: string, idx: number) => (
                            <option key={idx} value={sub}>
                              {sub}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#0066ff] focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 text-sm sm:text-sm cursor-pointer"
                  >
                    <span>{formSection.buttonLabel || "Send Message"}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: INFO CARD */}
            <div className="bg-[#f0f6ff] rounded-2xl border border-slate-200/80 flex flex-col justify-between h-full">
              <div>
                {/* CARD TOP IMAGE WITH GRAPHIC BANNER */}
                <div className="relative rounded-xl overflow-hidden mb-6 h-56 sm:h-64 shadow-sm group">
                  <img
                    src={infoCard.image}
                    alt="Let's Connect"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* OVERLAY GRAPHIC TEXT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                    <span className="text-white max-w-[100px] -rotate-12 text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                      Insurance for a Brighter Tomorrow
                    </span>
                  </div>
                </div>

                {/* HEADLINE & DESCRIPTION */}
                <h3 className="text-xl sm:text-2xl pl-5 font-bold text-[#082b5e] mb-3">
                  {infoCard.title || "Let's Connect for a Safer Tomorrow"}
                </h3>
                <p className="text-slate-600 pl-5 text-sm sm:text-base max-w-[500px] leading-relaxed mb-6">
                  {infoCard.description}
                </p>

                {/* CHECKMARK BULLETS */}
                <div className="space-y-3 pl-5 pb-5">
                  {(infoCard.highlights || []).map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0066ff] text-white flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-[16px] font-bold text-slate-800">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* OUR LOCATIONS & GOOGLE MAP SECTION */}
          <div>
            {/* MAP & LOCATION CARDS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT SIDE: GOOGLE MAP EMBED */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative min-h-[340px] h-full bg-slate-200">
                <iframe
                  title="InsureWise Head Office Map"
                  src={locationsSection.mapEmbedUrl}
                  className="w-full h-full min-h-[340px] border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* RIGHT SIDE: HEADING & 3 OFFICE LOCATION CARDS */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                
                {/* HEADING SECTION */}
                <div className="mb-3">
                  <span className="text-sm sm:text-sm font-bold tracking-widest text-[#13448d] uppercase block mb-0">
                    {locationsSection.badge || "OUR LOCATIONS"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#082b5e] tracking-tight mb-2">
                    {locationsSection.title?.normal || "Visit"}{" "}
                    <span className="text-[#0066ff]">
                      {locationsSection.title?.highlighted || "Our Offices"}
                    </span>
                  </h2>
                  <p className="text-slate-800 text-sm sm:text-base">
                    {locationsSection.description}
                  </p>
                </div>

                {/* 3 OFFICE CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
                  {(locationsSection.offices || []).map((office: any) => (
                    <div
                      key={office.id}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="">
                        {/* OFFICE BUILDING PHOTO */}
                        <div className="h-28 w-full overflow-hidden">
                          <img
                            src={office.image}
                            alt={office.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* OFFICE DETAILS */}
                        <div className="p-2">
                          <h4 className="text-sm font-bold text-[#082b5e] mb-0">
                            {office.name}
                          </h4>
                          <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed mb-4">
                            {office.address}
                          </p>
                        </div>
                      </div>

                      {/* GET DIRECTIONS LINK */}
                      <div className="p-2 pt-0">
                        <a
                          href={office.mapLink || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0066ff] hover:gap-2 transition-all"
                        >
                          <span>Get Directions</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
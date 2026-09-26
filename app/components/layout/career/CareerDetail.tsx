"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaFileUpload,
  FaGraduationCap,
  FaHeart,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import Bannerpage from "../../shared/Bannerpage";
import ScrollReveal from "../../shared/ScrollReveal";
import type { InsuranceJobItem } from "@/data";

type CareerDetailProps = {
  job: InsuranceJobItem;
};

const benefitIcons = [FaBriefcase, FaChartLine, FaShieldAlt, FaChartLine, FaUsers, FaGraduationCap, FaHeart, FaLeaf];

export default function CareerDetail({ job }: CareerDetailProps) {
  const [submitted, setSubmitted] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const detail = job.detail;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    setResume(event.target.files?.[0] ?? null);
  }

  function clearResume() {
    setResume(null);
    if (resumeInputRef.current) {
      resumeInputRef.current.value = "";
    }
  }

  return (
    <>
      <Bannerpage
        title="Career Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Career", href: "/career" },
          { label: job.title },
        ]}
        bgImage="/insurance_img/online-insurance-concept-insurance-assurance-icons-including-family-health-real-estate-car-financial-risk-management-concept-online-insurance.jpg"
      />

      <main className="bg-[#f7faff] py-8 md:py-12">
        <div className="mx-auto grid max-w-300 items-start gap-4 px-4 sm:px-0 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] ">
          <ScrollReveal direction="left" className="rounded-[10px] bg-white px-5 py-6 shadow-[0_8px_28px_rgba(8,43,94,0.06)] sm:px-7 sm:py-7">
            <div className="border-b border-slate-200 pb-5">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#0875e1] px-3 py-1 text-[13px] font-extrabold text-white">{job.type}</span>
                <span className="rounded-full bg-[#eaf3ff] px-3 py-1 text-[13px] font-extrabold text-[#0875e1]">On-Site</span>
              </div>
              <h1 className="text-2xl font-bold leading-tight text-[#082b5e] sm:text-4xl">{job.title}</h1>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium text-slate-500">
                <span className="flex items-center gap-2"><FaBriefcase className="text-[#082b5e]" />{job.department}</span>
                <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#082b5e]" />{job.location}</span>
                <span className="flex items-center gap-2"><FaClock className="text-[#082b5e]" />{job.posted}</span>
                <span className="flex items-center gap-2"><FaUsers className="text-[#082b5e]" />{detail.experience}</span>
              </div>
            </div>

            <DetailSection title="Job Overview">
              <p>{detail.overview}</p>
            </DetailSection>

            <DetailSection title="Key Responsibilities">
              <BulletList items={detail.responsibilities} />
            </DetailSection>

            <DetailSection title="Requirements">
              <BulletList items={detail.requirements} />
            </DetailSection>

            <section className="pt-5">
              <h2 className="mb-4 text-base font-bold text-[#082b5e] sm:text-3xl">What We Offer</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
                {detail.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  const words = benefit.split(" ");
                  const firstLine = words.length > 1 ? words.slice(0, -1).join(" ") : benefit;
                  const secondLine = words.length > 1 ? words[words.length - 1] : "";
                  return (
                    <div key={benefit} className="flex min-w-0 items-center gap-2">
                      <span className="flex h-12 w-12 md:w-14 md:h-14 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ff] text-[#0875e1]"><Icon className="h-4 w-4" /></span>
                      <span className="text-[14px] font-semibold leading-tight text-slate-500">{firstLine}<br />{secondLine}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-3 lg:sticky lg:top-6">
            <section className="rounded-[10px] bg-[#edf5ff] p-5 sm:p-6">
              <h2 className="text-lg font-bold sm:text-2xl text-[#082b5e]">Apply for This Position</h2>
              <p className="mt-1 text-[15px] leading-relaxed text-slate-500">Fill in the details below to apply for this job.</p>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <Field label="Full Name *" icon={<FaUsers />} type="text" placeholder="Enter your full name" required />
                <Field label="Email Address *" icon={<FaEnvelope />} type="email" placeholder="Enter your email address" required />
                <Field label="Phone Number *" icon={<FaPhoneAlt />} type="tel" placeholder="Enter your phone number" required />
                <div>
                  <label htmlFor="resume" className="mb-1 block text-[15px] font-semibold text-[#315477]">Upload Resume *</label>
                  <div className="flex h-9 items-stretch rounded-md bg-white">
                    <label htmlFor="resume" className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 overflow-hidden px-3 text-[15px]">
                      {resume ? (
                        <>
                          <FaCheckCircle className="shrink-0 text-[#0875e1]" />
                          <span className="truncate font-semibold text-[#315477]">{resume.name}</span>
                          <span className="shrink-0 text-[13px] text-slate-400">{formatFileSize(resume.size)}</span>
                        </>
                      ) : (
                        <>
                          <FaFileUpload className="shrink-0 text-[#0875e1]" />
                          <span className="truncate text-slate-500">Choose file</span>
                        </>
                      )}
                    </label>
                    {resume ? (
                      <button
                        type="button"
                        onClick={clearResume}
                        aria-label={`Remove ${resume.name}`}
                        title="Remove file"
                        className="flex w-9 shrink-0 items-center justify-center border-l border-slate-100 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <FaTimes />
                      </button>
                    ) : (
                      <span className="flex shrink-0 items-center border-l border-slate-100 px-3 font-bold text-[#315477]">Browse</span>
                    )}
                  </div>
                  <input ref={resumeInputRef} id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required onChange={handleResumeChange} className="sr-only" />
                </div>
                <div>
                  <label htmlFor="cover-letter" className="mb-1 block text-[15px] font-semibold text-[#315477]">Cover Letter (Optional)</label>
                  <textarea id="cover-letter" name="coverLetter" placeholder="Write a short cover letter..." className="h-14 w-full resize-none rounded-md bg-white px-3 py-2 text-[15px] text-slate-600 outline-none ring-[#0875e1] placeholder:text-slate-400 focus:ring-1" />
                </div>
                <button type="submit" className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#0875e1] text-[15px] font-bold text-white transition hover:bg-[#082b5e]">
                  {submitted ? "Application Ready" : "Submit Application"} <FaArrowRight />
                </button>
                <p className="flex items-center justify-center gap-2 text-[15px] text-slate-500"><FaShieldAlt className="text-[#082b5e]" />Your information is safe with us.</p>
              </form>
            </section>

            <section className="rounded-[10px] bg-[#edf5ff] p-5 sm:p-6">
              <h2 className="text-base sm:text-xl font-bold text-[#082b5e]">About InsureWise</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-500">At InsureWise, we believe in creating a safer, brighter tomorrow for everyone. Join a team that&apos;s passionate about making a real difference in people&apos;s lives.</p>
              <Link href="/about-us" className="mt-3 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#0875e1]">Learn More About Us <FaArrowRight /></Link>
            </section>

            <section className="flex items-center gap-4 rounded-[10px] bg-white p-5 shadow-[0_8px_28px_rgba(8,43,94,0.06)] sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-[#0875e1]"><FaPhoneAlt /></span>
              <div>
                <p className="text-[15px] font-semibold text-[#315477]">Have Questions?</p>
                <a href="tel:+919876543210" className="block text-xl font-extrabold text-[#0875e1]">+91 98765 43210</a>
                <p className="text-[14px] text-slate-500">Our HR team is here to help you.</p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 py-5 last:border-0">
      <h2 className="mb-3 text-base font-bold text-[#082b5e] sm:text-3xl">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-500 sm:text-base">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => <li key={item} className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0875e1]" /><span>{item}</span></li>)}
    </ul>
  );
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function Field({ label, icon, type, placeholder, required }: { label: string; icon: React.ReactNode; type: string; placeholder: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-[15px] font-semibold text-[#315477]">{label}</label>
      <div className="flex h-9 items-center gap-2 rounded-md bg-white px-3">
        <span className="text-[#082b5e]">{icon}</span>
        <input type={type} placeholder={placeholder} required={required} className="min-w-0 flex-1 bg-transparent text-[15px] text-slate-600 outline-none placeholder:text-slate-400" />
      </div>
    </div>
  );
}

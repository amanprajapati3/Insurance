"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { site } from "@/data";

const NAVY = "#0B2A57";
const ACCENT_BLUE = "#1D6DF2";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  pinterest: FaPinterestP,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

export default function Footer() {
  const { footer } = site;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: NAVY }} className="mt-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src={footer.logoImage}
              alt={footer.siteName}
              width={170}
              height={48}
              className="h-12 sm:h-24 w-auto "
            />
            <p className="mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-white">
              {footer.desc}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/20"
                >
                  {(() => {
                    const Icon = SOCIAL_ICONS[social.label] ?? FaTwitter;
                    return <Icon className="h-6 w-6" />;
                  })()}
                </a>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: ACCENT_BLUE }} />
              <span className="text-sm text-blue-100/80">{footer.followText}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white">
              {footer.columns[0].title}
            </h3>
            <ul className="mt-5 space-y-3">
              {footer.columns[0].links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-blue-100/80 transition-colors hover:text-white"
                  >
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-white">
              {footer.footerContact.title}
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-blue-200">
                    {footer.footerContact.callLabel}
                  </span>
                  <a
                    href={footer.footerContact.phoneHref}
                    className="text-sm text-blue-100/90 hover:text-white"
                  >
                    {footer.footerContact.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-blue-200">
                    {footer.footerContact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${footer.footerContact.email}`}
                    className="text-sm text-blue-100/90 hover:text-white"
                  >
                    {footer.footerContact.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-blue-200">
                    {footer.footerContact.officeLabel}
                  </span>
                  <span className="text-sm leading-relaxed text-blue-100/90">
                    {footer.footerContact.address}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  <Clock className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-blue-200">
                    {footer.footerContact.hoursLabel}
                  </span>
                  {footer.footerContact.hours.map((line) => (
                    <span key={line} className="block text-sm text-blue-100/90">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          {/* Side block: heading + image grid + CTA */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold leading-snug text-white">
              {footer.sideBlock.title}{" "}
              <span style={{ color: ACCENT_BLUE }}>{footer.sideBlock.highlightedTitle}</span>
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {footer.sideBlock.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden w-[130px] h-[90px] rounded-lg"
                >
                  <Image src={src} alt="" fill className=" h-fit w-fit " />
                </div>
              ))}
            </div>

            <Link
              href={footer.sideBlock.button.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-110"
              style={{ backgroundColor: ACCENT_BLUE }}
            >
              {footer.sideBlock.button.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-blue-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm sm:px-6 md:flex-row lg:px-8">
          <p className="text-blue-100/70">{footer.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {footer.legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-3">
                <Link
                  href={link.href}
                  className="text-blue-100/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
                {index < footer.legalLinks.length - 1 && (
                  <span className="text-blue-100/30">|</span>
                )}
              </span>
            ))}

            {footer.backToTop && (
              <>
                <span className="hidden h-4 w-px bg-white/20 sm:block" />
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-blue-100/80 transition-colors hover:text-white"
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: ACCENT_BLUE }}
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </span>
                  Back to Top
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
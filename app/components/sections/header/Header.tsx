"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { site } from "@/data";

// Exact brand colors sampled from the reference design
const NAVY = "#0B1C39";
const HEADER_BLUE = "#0060E6";

// Half-pentagon shape: flat bottom & sides, angled top corners
const PENTAGON_CLIP =
  "polygon(14% 0%, 86% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)";

const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  pinterest: FaPinterestP,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

export default function Header() {
  const { topbar, header } = site;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* ---------------- Top Bar ---------------- */}
      <div
        style={{ backgroundColor: NAVY }}
        className="relative z-20 text-white"
      >
        <div className="mx-auto flex items-center justify-between px-4 py-2 text-sm sm:px-6 sm:text-sm lg:px-5">
          {/* Address & Email — Desktop (Shifted right to give room to the overlapping logo badge) */}
          <div className="hidden items-center gap-6 pl-48 md:flex lg:pl-84">
            <span className="inline-flex items-center gap-2 font-medium text-white/90">
              <MapPin className="h-3.5 w-3.5 text-white" />
              {topbar.address}
            </span>
            <a
              href={`mailto:${topbar.email}`}
              className="inline-flex items-center gap-2 font-medium text-white/90 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-white" />
              {topbar.email}
            </a>
          </div>

          {/* Email — Mobile */}
          <a
            href={`mailto:${topbar.email}`}
            className="flex items-center gap-2 text-white/90 md:hidden"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{topbar.email}</span>
          </a>

          {/* Social Links & Get a Quote CTA Button */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-6 md:gap-20">
            <div className="flex items-center gap-3">
              {topbar.socialLinks.map((social) => {
                const Icon =
                  SOCIAL_ICONS[social.label.toLowerCase()] ?? FaTwitter;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>

            <Link
              href={topbar.button.href}
              className="hidden rounded-md px-4 py-1.5 text-sm font-bold text-white shadow-sm transition-all hover:brightness-110 sm:inline-block"
              style={{ backgroundColor: HEADER_BLUE }}
            >
              {topbar.button.label}
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------- Main Header Bar ---------------- */}
      <div className="relative z-20 bg-[#0060E6]">
        <div className="mx-auto flex  items-stretch">
          {/* 1. OVERLAPPING HALF PENTAGON LOGO BADGE */}
          <div className="relative z-30 shrink-0">
            {/* Outer Pentagon with Wide White/20 Opacity Border */}
            <div className="absolute sm:-top-14 left-2 sm:w-[270px] w-[220px] -top-6 h-[100px] md:-top-11 sm:left-0 md:w-[360px] sm:h-[160px]">
              {/* Background Shape */}
              <Image
                src="/logo12.png"
                alt=""
                fill
                className="object-contain "
                priority
              />

              {/* Website Logo */}
              <div className="absolute p-2 inset-0 flex items-center justify-center px-6 pt-2 sm:px-8 sm:pt-3">
                <Link href="/" className="block">
                  <Image
                    src={header.site.logo.light}
                    alt={header.site.siteName}
                    width={180}
                    height={52}
                    className=" w-auto object-contain h-12 sm:h-14 md:h-[70px]"
                    priority
                  />
                </Link>
              </div>
            </div>
            {/* Spacer block to maintain correct width layout */}
            <div className="w-44 sm:w-56 md:w-64" />
          </div>

          {/* 2. BRIGHT BLUE SECTION WITH SLANTED CUT & TOP CURVE */}
          <div
            className="relative flex py-1.5 flex-1 items-center justify-between"
            style={{ backgroundColor: HEADER_BLUE }}
          >
            {/* Navigation Links */}
            <nav className="hidden items-center gap-6 pl-32 lg:flex xl:gap-8">
              {header.nav.map((item) => {
                const active = isActive(item.href);
                const hasChildren =
                  Array.isArray(item.children) && item.children.length > 0;
                const isOpen = hoveredItem === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative py-5 text-[17px] font-semibold transition-colors ${
                        active ? "text-white" : "text-white/90 hover:text-white"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {item.label}
                        {hasChildren && (
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </span>
                      {active && (
                        <span className="absolute bottom-3 left-0 h-0.5 w-full rounded-full bg-white" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <div
                        className={`absolute left-0 top-full z-50 min-w-[220px] transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "translate-y-0 opacity-100 visible"
                            : "translate-y-2 opacity-0 invisible"
                        }`}
                      >
                        <div className="mt-4 overflow-hidden rounded-xl bg-white py-2 shadow-2xl shadow-black/25 ring-1 ring-black/5">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group flex items-center justify-between px-5 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-200 hover:bg-[#eaf1ff] hover:text-[#0066ff]"
                            >
                              <span>{child.label}</span>
                              <ChevronRight className="h-4 w-4 text-[#0066ff] opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Trigger Button */}
            <div className="ml-auto flex items-center pr-4 lg:hidden">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                className="my-auto flex h-10 w-10 items-center justify-center rounded-md text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Top Curve + Slanted Right Edge Overlay */}
            <div className="absolute right-6 top-0 hidden h-full w-24 translate-x-full lg:block">
              <svg
                viewBox="0 0 100 80"
                preserveAspectRatio="none"
                className="h-full w-full fill-current"
                style={{ color: HEADER_BLUE }}
              >
                {/* Top smooth curve with a much wider, more diagonal slant */}
                <path d="M 0,0 L 15,0 Q 32,0 40,12 L 95,80 L 0,80 Z" />
              </svg>
            </div>
          </div>

          {/* 3. RIGHT SIDE CONTACT CONTENT (SOLID WHITE BG) */}
          <div className="hidden shrink-0 items-center justify-end bg-white py-3 pl-20 pr-4 lg:flex">
            <div className="flex items-center gap-3.5">
              {/* Dark Navy Circle Phone Icon */}
              <a
                href={header.phoneBlock.phoneHref}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
                style={{ backgroundColor: NAVY }}
              >
                <Phone className="h-5 w-5 fill-current" />
              </a>

              {/* Phone Text Block */}
              <div className="leading-tight">
                <span className="block text-sm font-semibold text-slate-500">
                  {header.phoneBlock.label || "Emergency call"}
                </span>
                <a
                  href={header.phoneBlock.phoneHref}
                  className="block text-base font-extrabold whitespace-nowrap"
                  style={{ color: NAVY }}
                >
                  {header.phoneBlock.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Mobile Drawer  */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute inset-y-0 left-0 flex w-72 max-w-[85%] flex-col text-white shadow-2xl transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ backgroundColor: NAVY }}
        >
          {/* Mobile Header with Same Original Logo */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={header.site.logo.normal}
                alt={header.site.siteName}
                width={140}
                height={40}
                className="h-16  w-auto object-contain  p-1 rounded"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
            {header.nav.map((item) => {
              const active = isActive(item.href);
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;
              const isOpen = openDropdown === item.label;

              if (hasChildren) {
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        active
                          ? "bg-white/15 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Child Items */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-3 mt-1 space-y-1 border-l-2 border-white/15 pl-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#0084ff]" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Phone & CTA Footer */}
          <div className="space-y-4 border-t border-white/10 px-5 py-5">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: HEADER_BLUE }}
              >
                <Phone className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <span className="block text-sm text-white/60">
                  {header.phoneBlock.label || "Emergency call"}
                </span>
                <a
                  href={header.phoneBlock.phoneHref}
                  className="block text-sm font-bold"
                >
                  {header.phoneBlock.phone}
                </a>
              </div>
            </div>

            <Link
              href={topbar.button.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm"
              style={{ backgroundColor: HEADER_BLUE }}
            >
              {topbar.button.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

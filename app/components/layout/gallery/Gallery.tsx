"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Bannerpage from "../../shared/Bannerpage";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  X,
  ZoomIn,
} from "lucide-react";
import { site } from "@/data";
import ScrollReveal from "../../shared/ScrollReveal";

interface LightboxItem {
  id: number;
  title: string;
  src: string;
  thumbnail?: string;
  date?: string;
}

const INITIAL_IMAGE_COUNT = 8;
const INITIAL_VIDEO_COUNT = 4;

function getYoutubeEmbedUrl(src: string): string | null {
  const clean = src.trim();

  let match = clean.match(/youtube\.com\/embed\/([\w-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  match = clean.match(/youtube\.com\/watch\?v=([\w-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  match = clean.match(/youtu\.be\/([\w-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;

  return null;
}

function getYoutubeId(src: string): string | null {
  const embed = getYoutubeEmbedUrl(src);
  if (!embed) return null;

  const match = embed.match(/embed\/([\w-]{11})/);
  return match ? match[1] : null;
}

function isYouTube(src: string): boolean {
  return getYoutubeEmbedUrl(src) !== null;
}

function VideoPlayer({
  src,
  title,
}: {
  src: string;
  title?: string;
}) {
  if (isYouTube(src)) {
    const embed = getYoutubeEmbedUrl(src)!;
    const separator = embed.includes("?") ? "&" : "?";

    return (
      <iframe
        src={`${embed}${separator}autoplay=1&rel=0`}
        title={title || "Video"}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <video
      src={src}
      controls
      autoPlay
      playsInline
      className="w-full h-full object-contain bg-black"
    />
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <ScrollReveal direction="up" className="mb-10 md:mb-12">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-sm sm:text-sm font-bold tracking-widest text-[#1a73e8] uppercase">
          Explore
        </span>
        <div className="w-10 h-[2px] bg-[#1a73e8]" />
      </div>

      <div className="flex items-center gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082b5e] tracking-tight leading-tight whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[3px] bg-[#1a73e8] max-w-[140px] flex-1" />
      </div>

      <p className="text-slate-600 text-sm sm:text-sm lg:text-base leading-relaxed mt-3 max-w-2xl">
        {description}
      </p>
    </ScrollReveal>
  );
}

function LoadMoreButton({
  expanded,
  hiddenCount,
  onClick,
}: {
  expanded: boolean;
  hiddenCount: number;
  onClick: () => void;
}) {
  return (
    <div className="flex justify-center mt-8 md:mt-10">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={expanded}
        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1a73e8] hover:bg-[#0f5cba] text-white text-sm sm:text-base font-semibold tracking-wide shadow-lg shadow-[#1a73e8]/25 hover:shadow-xl hover:shadow-[#1a73e8]/35 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8] focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
      >
        {expanded ? "Show Less" : "Load More"}

        {!expanded && (
          <span className="text-white/70 text-xs font-medium">
            (+{hiddenCount})
          </span>
        )}

        <ChevronRight
          className={`w-4 h-4 transition-transform duration-300 ${
            expanded
              ? "-rotate-90 group-hover:-translate-x-1"
              : "group-hover:translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function Gallery() {
  const galleryData = site.gallery;

  const banner = galleryData?.banner || {
    title: "Gallery",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Gallery" },
    ],
    bgImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80",
  };

  const header = galleryData?.header || {
    title: "Our Gallery",
    description:
      "A glimpse into the moments, people, and partnerships behind our trusted insurance journey.",
  };

  const images = galleryData?.images || [];

  const videoSection = galleryData?.videos || {
    title: "Our Videos",
    description: "",
    items: [] as LightboxItem[],
  };

  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [videoIndex, setVideoIndex] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const videoItems = videoSection.items as LightboxItem[];
  const allImages = images as LightboxItem[];

  const visibleImages = showAllImages
    ? allImages
    : allImages.slice(0, INITIAL_IMAGE_COUNT);

  const visibleVideos = showAllVideos
    ? videoItems
    : videoItems.slice(0, INITIAL_VIDEO_COUNT);

  const hasMoreImages = allImages.length > INITIAL_IMAGE_COUNT;
  const hasMoreVideos = videoItems.length > INITIAL_VIDEO_COUNT;

  const hiddenImageCount = Math.max(
    0,
    allImages.length - INITIAL_IMAGE_COUNT,
  );
  const hiddenVideoCount = Math.max(
    0,
    videoItems.length - INITIAL_VIDEO_COUNT,
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setImageIndex(null);
      setVideoIndex(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const renderLightbox = () => {
    const isImage = imageIndex !== null;

    const items = isImage ? visibleImages : visibleVideos;

    const index = isImage ? imageIndex : videoIndex;

    if (index === null) return null;
    if (index < 0 || index >= items.length) return null;

    const kind: "image" | "video" = isImage ? "image" : "video";

    const onClose = () =>
      isImage ? setImageIndex(null) : setVideoIndex(null);

    const onIndexChange = (next: number) =>
      isImage ? setImageIndex(next) : setVideoIndex(next);

    return (
      <div
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <button
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#1a73e8] disabled:opacity-30 disabled:hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onIndexChange(Math.max(0, index - 1));
          }}
          disabled={index <= 0}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#1a73e8] disabled:opacity-30 disabled:hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onIndexChange(Math.min(items.length - 1, index + 1));
          }}
          disabled={index >= items.length - 1}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[75vh]  rounded-xl overflow-hidden">
            {kind === "image" ? (
              <Image
                key={items[index].id}
                src={items[index].src}
                alt={items[index].title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            ) : (
              <VideoPlayer
                key={`v-${items[index].id}`}
                src={items[index].src}
                title={items[index].title}
              />
            )}
          </div>

          <div className="flex items-center justify-between mt-4 text-white">
            <div className="min-w-0">
              <p className="text-sm sm:text-base font-semibold truncate">
                {items[index]?.title}
              </p>

              {items[index]?.date && (
                <p className="text-sm sm:text-sm text-white/60 mt-1">
                  {items[index].date}
                </p>
              )}
            </div>

            <span className="text-sm sm:text-sm text-white/70 font-medium shrink-0 ml-4">
              {index + 1} / {items.length}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Bannerpage
        title={banner.title}
        breadcrumbs={banner.breadcrumbs}
        bgImage={banner.bgImage}
      />

      <section className="bg-slate-50/60 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-0 lg:px-12">
          <SectionHeading
            title={header.title}
            description={header.description}
          />

          {/* IMAGES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {visibleImages.map((item, index) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                index={index}
                staggerChildren={0.1}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-[#081f44]"
              >
                <button
                  type="button"
                  className="relative block w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8]"
                  onClick={() =>
                    setImageIndex(
                      visibleImages.findIndex((img) => img.id === item.id),
                    )
                  }
                  aria-label={`View ${item.title}`}
                >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#081f44]/0 group-hover:bg-[#081f44]/50 transition-colors duration-300" />

                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {item.title}
                </div>

                <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#1a73e8] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {hasMoreImages && (
            
              <LoadMoreButton
                expanded={showAllImages}
                hiddenCount={hiddenImageCount}
                onClick={() => setShowAllImages((prev) => !prev)}
              />
          )}

          {/* VIDEOS SECTION */}
          {videoItems.length > 0 && (
            <div className="mt-16 md:mt-24">
              <SectionHeading
                title={videoSection.title}
                description={videoSection.description}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {visibleVideos.map((item, index) => (
                  <ScrollReveal
                    key={item.id}
                    direction="up"
                    index={index}
                    staggerChildren={0.1}
                    className="group"
                  >
                    {/* VIDEO THUMBNAIL CARD */}
                    <button
                      type="button"
                      className="relative w-full overflow-hidden rounded-2xl cursor-pointer aspect-video bg-[#081f44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8]"
                      onClick={() =>
                        setVideoIndex(
                          visibleVideos.findIndex((v) => v.id === item.id),
                        )
                      }
                      aria-label={`Play ${item.title}`}
                    >
                      <Image
                        src={
                          item.thumbnail ||
                          (getYoutubeId(item.src)
                            ? `https://img.youtube.com/vi/${getYoutubeId(item.src)}/hqdefault.jpg`
                            : "")
                        }
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-[#081f44]/10 group-hover:bg-[#081f44]/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm border border-white/40 text-white rounded-full flex items-center justify-center scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[#1a73e8] transition-all duration-300 shadow-xl">
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                        </div>
                      </div>

                      {/* EXPAND ICON */}
                      <div className="absolute top-3 right-3 w-9 h-9 bg-black/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </button>

                    {/* VIDEO TITLE */}
                    <div className="mt-3 px-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#082b5e] leading-snug line-clamp-2">
                        {item.title}
                      </h3>

                      {/* VIDEO DATE */}
                      {item.date && (
                        <p className="text-sm sm:text-sm text-slate-500 mt-1.5">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {hasMoreVideos && (
                <ScrollReveal direction="up">
                  <LoadMoreButton
                    expanded={showAllVideos}
                    hiddenCount={hiddenVideoCount}
                    onClick={() => setShowAllVideos((prev) => !prev)}
                  />
                </ScrollReveal>
              )}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX DIALOG */}
      {renderLightbox()}
    </>
  );
}

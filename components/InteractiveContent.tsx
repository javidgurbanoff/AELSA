"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const images = [
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
];

type Direction = "left" | "right";

const INTERVAL = 3500;

export default function InteractiveContent() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>("left");
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number, dir: Direction) => {
      if (animating || index === current) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + images.length) % images.length);
        setAnimating(false);
        setProgressKey((k) => k + 1);
      }, 350);
    },
    [animating, current],
  );

  const nextSlide = useCallback(() => {
    goTo(current + 1, "left");
  }, [current, goTo]);

  const prevSlide = useCallback(() => {
    goTo(current - 1, "right");
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(nextSlide, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      setProgressKey((k) => k + 1);
    }
    if (e.key === "ArrowRight") {
      nextSlide();
      setProgressKey((k) => k + 1);
    }
    if (e.key === " ") {
      e.preventDefault();
      setPaused((p) => !p);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      dx < 0 ? nextSlide() : prevSlide();
      setProgressKey((k) => k + 1);
    }
    touchStartX.current = null;
  };

  const getSlideClasses = (index: number) => {
    const base =
      "absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-[350ms] ease-in-out";
    if (index !== current) return `${base} opacity-0 pointer-events-none`;
    if (animating)
      return `${base} opacity-0 ${direction === "left" ? "-translate-x-8" : "translate-x-8"}`;
    return `${base} opacity-100 translate-x-0`;
  };

  return (
    <section className="py-24 px-6 flex justify-center bg-background relative">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">
            Interactive Sea Technology
          </p>
          <h2 className="text-5xl font-black text-text leading-tight">
            One click and it's interactive
          </h2>
          <p className="text-lg text-muted max-w-lg">
            Whether you're developing marine monitoring systems, designing ocean
            data platforms, or preparing research tools, AELSA Sea Technology
            helps you create interactive and engaging solutions.
          </p>
          <ul className="space-y-3 text-muted">
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span>
              Easy-to-use ocean monitoring tools
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span>
              50+ interactive marine data modules
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span>
              Advanced visualization for sea analytics
            </li>
          </ul>
          <Link href="/what-we-do">
            <button className="mt-4 px-6 py-3 rounded-full cursor-pointer border border-white/10 bg-surface/60 text-text backdrop-blur-xl transition-all hover:bg-surface hover:text-primary">
              Explore sea technology
            </button>
          </Link>
        </div>

        {/* RIGHT — Carousel */}
        <div
          className="relative flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Image carousel"
          aria-roledescription="carousel"
        >
          <div className="relative w-[420px]">
            <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-2xl p-2 group">
              {/* Slides */}
              <div
                className="relative rounded-xl overflow-hidden aspect-[4/3]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Sea Technology slide ${index + 1}`}
                    className={getSlideClasses(index)}
                  />
                ))}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none rounded-l-xl z-10" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/20 to-transparent pointer-events-none rounded-r-xl z-10" />
                {!paused && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
                    <div
                      key={progressKey}
                      className="h-full bg-primary/70 rounded-full"
                      style={{
                        animation: `fillBar ${INTERVAL}ms linear forwards`,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Nav buttons */}
              <button
                onClick={() => {
                  prevSlide();
                  setProgressKey((k) => k + 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/80 text-text border border-white/10 backdrop-blur-xl hover:text-primary hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setProgressKey((k) => k + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/80 text-text border border-white/10 backdrop-blur-xl hover:text-primary hover:scale-105 transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <button
                onClick={() => setPaused((p) => !p)}
                className="w-7 h-7 rounded-full flex items-center justify-center border border-white/10 text-text/60 hover:text-text transition-colors"
                aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
              >
                {paused ? (
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="currentColor"
                  >
                    <path d="M0 0l10 6-10 6V0z" />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="currentColor"
                  >
                    <rect x="0" y="0" width="3.5" height="12" />
                    <rect x="6.5" y="0" width="3.5" height="12" />
                  </svg>
                )}
              </button>

              <div className="flex gap-2.5 items-center">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      goTo(index, index > current ? "left" : "right")
                    }
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === current ? "true" : undefined}
                    className={`rounded-full cursor-pointer transition-all duration-200 border-none outline-none ${
                      index === current
                        ? "w-4 h-2.5 bg-primary ring-2 ring-primary/25"
                        : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs text-text/50 tabular-nums min-w-[32px] text-center">
                {current + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}

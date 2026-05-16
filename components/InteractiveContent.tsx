"use client";
import { useState } from "react";
import Link from "next/link";

const images = [
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
];

export default function InteractiveContent() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-6 flex justify-center bg-transparent relative">
      {/* subtle ambient layer (NOT a full background) */}
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
            <button
              className="
              mt-4
              px-6
              py-3
              rounded-full

              border
              border-white/10

              bg-surface/60
              text-text

              backdrop-blur-xl

              transition-all
              hover:bg-surface
              hover:text-primary
            "
            >
              Explore sea technology
            </button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-[420px]">
            {/* glass frame */}
            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-surface/40
              backdrop-blur-2xl
              p-2
            "
            >
              <img
                src={images[current]}
                alt="Sea Technology"
                className="rounded-xl w-full object-cover"
              />
            </div>

            {/* controls */}
            <button
              onClick={prevSlide}
              className="
                absolute
                left-2
                top-1/2
                -translate-y-1/2

                w-10 h-10
                rounded-full

                bg-surface/80
                text-text

                border
                border-white/10

                backdrop-blur-xl

                hover:text-primary
              "
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="
                absolute
                right-2
                top-1/2
                -translate-y-1/2

                w-10 h-10
                rounded-full

                bg-surface/80
                text-text

                border
                border-white/10

                backdrop-blur-xl

                hover:text-primary
              "
            >
              ›
            </button>
          </div>

          {/* dots */}
          <div className="flex gap-3 mt-6">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  w-2.5 h-2.5 rounded-full cursor-pointer transition
                  ${index === current ? "bg-primary" : "bg-white/20"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

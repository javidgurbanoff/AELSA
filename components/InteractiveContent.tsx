"use client";
import { useState } from "react";

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
    <section className="py-24 px-6 flex justify-center bg-[#F5F9FC]">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
            Interactive Sea Technology
          </p>

          <h2 className="text-5xl font-bold text-[#0B1F3A] leading-tight">
            One click and it's interactive
          </h2>

          <p className="text-lg text-gray-600 max-w-lg">
            Whether you're developing marine monitoring systems, designing ocean
            data platforms, or preparing research tools, AELSA Sea Technology
            helps you create interactive and engaging solutions.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              Easy-to-use ocean monitoring tools
            </li>

            <li className="flex items-center gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              50+ interactive marine data modules
            </li>

            <li className="flex items-center gap-3">
              <span className="text-purple-600 font-bold">✓</span>
              Advanced visualization for sea analytics
            </li>
          </ul>

          <button className="mt-4 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
            Explore sea technology
          </button>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-[420px]">
            <img
              src={images[current]}
              alt="Sea Technology"
              className="rounded-2xl shadow-xl w-full object-cover"
            />

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
            >
              ›
            </button>
          </div>

          <div className="flex gap-3 mt-6">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === current ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

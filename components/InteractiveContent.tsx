"use client";
import { useState } from "react";

const images = [
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
  "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
];

const InteractiveContent = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 flex justify-center">
      <div className="text-center space-y-6 max-w-3xl ">
        <h2 className="text-4xl font-bold text-[#38BDF8]">
          Interactive Sea Technology
        </h2>

        <p className="text-white text-lg">One click and it’s interactive</p>

        {/* Image Slider */}
        <div className="relative mt-8">
          <img
            src={images[current]}
            alt="Slide"
            className="w-full h-64 object-cover rounded-xl"
          />

          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-white text-black rounded"
            >
              Prev
            </button>

            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-[#38BDF8] text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContent;

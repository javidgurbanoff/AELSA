"use client";

import Navbar from "@/components/navbar";

const stats = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-[#0A2540]">
      <Navbar />

      <div className="pt-24 text-white max-w-4xl px-6">
        <h1 className="text-4xl font-bold mb-4">What is new this week?</h1>

        <div className="flex gap-6 mt-6">
          {stats.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt="news"
              className="w-64 h-40 object-cover rounded-lg"
            />
          ))}
        </div>

        <p className="mt-6 text-lg text-slate-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          dolor! Pariatur libero eaque quos eveniet soluta eligendi odit illum
          ex quod voluptates laboriosam nisi, labore officia sint a velit
          commodi!
        </p>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Navbar from "@/components/navbar";

const tutorials = [
  {
    id: 1,
    title: "Getting Started",
    description:
      "Learn how to create your account, navigate the dashboard, and begin using the platform effectively.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Advanced Tips",
    description:
      "Discover powerful tools and hidden features that help you work faster and smarter.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Platform Overview",
    description:
      "Understand the complete ecosystem of AELSA technologies and how each component works together.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Tutorial() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F9FC]">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-[#0B1F3A]">
              Tutorials
            </h1>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Learn how to use the AELSA platform through step-by-step video
              tutorials designed to help you get started quickly.
            </p>
          </div>

          <div className="grid gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
              >
                <iframe
                  className="w-full md:w-1/2 aspect-video rounded-xl"
                  src={tutorial.videoUrl}
                  title={tutorial.title}
                  frameBorder="0"
                  allowFullScreen
                />

                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-3">
                    {tutorial.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {tutorial.description}
                  </p>

                  <button className="mt-5 w-fit px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] rounded-lg hover:bg-[#12325C] transition">
                    Watch Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

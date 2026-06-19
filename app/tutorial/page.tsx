"use client";

import React from "react";
import Navbar from "@/components/navbar";

const tutorials = [
  {
    id: 1,
    title: "Getting Started",
    description:
      "Learn how to create your account, navigate the dashboard, and begin using the AELSA platform effectively from day one.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Tips",
    description:
      "Discover powerful tools and features inside the AELSA ecosystem that help your team work faster and extract more from live ocean data.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Advanced",
  },
  {
    id: 3,
    title: "Platform Overview",
    description:
      "Understand the complete AELSA technology stack — how autonomous units, the AI engine, and the analytics dashboard work together.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Overview",
  },
];

export default function Tutorial() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Learn
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-text leading-tight">
              Platform Tutorials
            </h1>
            <p className="mt-4 text-muted text-lg max-w-xl">
              Step-by-step video guides to help you get the most out of AELSA's
              autonomous marine technology platform.
            </p>
          </div>

          {/* Tutorial list */}
          <div className="flex flex-col gap-6">
            {tutorials.map((tutorial, index) => (
              <div
                key={tutorial.id}
                className="
                  group flex flex-col md:flex-row gap-0
                  overflow-hidden rounded-2xl
                  border border-white/10
                  bg-surface/40 backdrop-blur-xl
                  hover:border-primary/30
                  transition-all duration-300
                "
              >
                {/* Video */}
                <div className="relative w-full md:w-1/2 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    frameBorder="0"
                    allowFullScreen
                  />
                  {/* Subtle number overlay */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-background/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-black text-primary">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col justify-center p-8">
                  {tutorial.tag && (
                    <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      {tutorial.tag}
                    </span>
                  )}
                  <h2 className="text-2xl font-black text-text mb-3">
                    {tutorial.title}
                  </h2>
                  <p className="text-muted leading-relaxed text-sm">
                    {tutorial.description}
                  </p>
                  <button
                    className="
                      mt-6 w-fit px-5 py-2.5 text-sm font-semibold cursor-pointer
                      rounded-xl border border-white/10
                      bg-surface/60 text-text
                      hover:border-primary/30 hover:text-primary
                      transition-all duration-200
                    "
                  >
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

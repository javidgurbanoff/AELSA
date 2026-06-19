"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorImage?: string;
  tag?: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Autonomous units now monitor the Arctic shelf",
    description:
      "AELSA deployed 4 new surface units across the Arctic shelf this quarter, delivering live bioacoustic and temperature data where no infrastructure existed before.",
    image:
      "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
    date: "Mar 17, 2026",
    readTime: "6 min read",
    author: "AELSA Research Team",
    tag: "Deployment",
  },
  {
    id: 2,
    title: "AI engine hits 98% forecast accuracy in North Sea trials",
    description:
      "Six months of open-water testing confirmed our sea state prediction model reaches 98% accuracy at the 72-hour horizon — exceeding all benchmark targets.",
    image:
      "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    author: "AELSA Engineering",
    tag: "AI",
  },
  {
    id: 3,
    title: "Partnership with Meyer Werft expands sensor coverage",
    description:
      "A new integration agreement with Meyer Werft embeds AELSA sensor suites into next-generation cruise vessels, adding 12 active data nodes to our global network.",
    image:
      "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
    date: "Jan 14, 2026",
    readTime: "5 min read",
    author: "AELSA Partnerships",
    tag: "Partnership",
  },
  {
    id: 4,
    title: "1.6M daily data streams — what that means for ocean science",
    description:
      "Every 24 hours, AELSA processes over 1.6 million individual readings. Here's how we handle that volume and what the data is already revealing about shifting ocean patterns.",
    image:
      "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
    date: "Dec 3, 2025",
    readTime: "10 min read",
    author: "AELSA Data Science",
    tag: "Data",
  },
  {
    id: 5,
    title: "Runner-up at the Global Marine Innovation Awards 2025",
    description:
      "AELSA was recognised as runner-up in the Autonomous Systems category at this year's Global Marine Innovation Awards, competing against 140 entries from 38 countries.",
    image:
      "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
    date: "Nov 19, 2025",
    readTime: "4 min read",
    author: "AELSA Communications",
    tag: "Award",
  },
  {
    id: 6,
    title: "How we achieved 99.98% uptime in year one",
    description:
      "Hardware redundancy, edge computing, and a satellite-first comms architecture — the engineering decisions behind AELSA's reliability record explained.",
    image:
      "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
    date: "Oct 7, 2025",
    readTime: "12 min read",
    author: "AELSA Engineering",
    tag: "Infrastructure",
  },
];

const INITIAL_COUNT = 3;

export default function News() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Latest News
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-text leading-tight">
            From the ocean floor
            <br />
            to your feed
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            Research findings, deployment updates, and technology insights from
            the AELSA team.
          </p>
        </div>

        {/* Featured first article */}
        {visibleArticles[0] && (
          <div className="mb-8 group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl cursor-pointer hover:border-primary/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto">
                <img
                  src={visibleArticles[0].image}
                  alt={visibleArticles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                {visibleArticles[0].tag && (
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                    {visibleArticles[0].tag}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-black text-text leading-tight">
                  {visibleArticles[0].title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {visibleArticles[0].description}
                </p>
                <div className="flex items-center mt-6 gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                    {visibleArticles[0].author[0]}
                  </div>
                  <span className="text-sm text-muted">
                    {visibleArticles[0].author}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-sm text-muted">
                    {visibleArticles[0].date}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-sm text-muted">
                    {visibleArticles[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid for remaining articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.slice(1).map((article) => (
            <div
              key={article.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl cursor-pointer hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {article.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-background/70 backdrop-blur-md border border-white/10 text-primary">
                    {article.tag}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-xs text-muted mb-2">
                  {article.date} · {article.readTime}
                </p>
                <h2 className="text-base font-black text-text leading-snug line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">
                  {article.description}
                </p>

                {/* Author */}
                <div className="flex items-center mt-4 gap-2">
                  {article.authorImage ? (
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-6 h-6 rounded-full object-cover border border-white/10"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                      {article.author[0]}
                    </div>
                  )}
                  <span className="text-xs text-muted">{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="px-8 py-3 rounded-full border border-white/10 text-text text-sm font-medium hover:border-primary/40 hover:text-primary backdrop-blur-xl transition-all duration-200 cursor-pointer"
            >
              Load more articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

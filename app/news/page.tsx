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
  tag: string;
  category:
    | "Deployment"
    | "AI"
    | "Partnership"
    | "Data"
    | "Award"
    | "Infrastructure";
};

const articles: Article[] = [
  {
    id: 1,
    title: "Autonomous units now monitor the Arctic shelf",
    description:
      "AELSA deployed 4 new surface units across the Arctic shelf this quarter, delivering live bioacoustic and temperature data where no infrastructure existed before.",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&auto=format&fit=crop",
    date: "Mar 17, 2026",
    readTime: "6 min read",
    author: "AELSA Research Team",
    tag: "Deployment",
    category: "Deployment",
  },
  {
    id: 2,
    title: "AI engine hits 98% forecast accuracy in North Sea trials",
    description:
      "Six months of open-water testing confirmed our sea state prediction model reaches 98% accuracy at the 72-hour horizon — exceeding all benchmark targets.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    author: "AELSA Engineering",
    tag: "AI",
    category: "AI",
  },
  {
    id: 3,
    title: "Partnership with Meyer Werft expands sensor coverage",
    description:
      "A new integration agreement with Meyer Werft embeds AELSA sensor suites into next-generation cruise vessels, adding 12 active data nodes to our global network.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&auto=format&fit=crop",
    date: "Jan 14, 2026",
    readTime: "5 min read",
    author: "AELSA Partnerships",
    tag: "Partnership",
    category: "Partnership",
  },
  {
    id: 4,
    title: "1.6M daily data streams — what that means for ocean science",
    description:
      "Every 24 hours, AELSA processes over 1.6 million individual readings. Here's how we handle that volume and what the data is already revealing about shifting ocean patterns.",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&auto=format&fit=crop",
    date: "Dec 3, 2025",
    readTime: "10 min read",
    author: "AELSA Data Science",
    tag: "Data",
    category: "Data",
  },
  {
    id: 5,
    title: "Runner-up at the Global Marine Innovation Awards 2025",
    description:
      "AELSA was recognised as runner-up in the Autonomous Systems category at this year's Global Marine Innovation Awards, competing against 140 entries from 38 countries.",
    image:
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&auto=format&fit=crop",
    date: "Nov 19, 2025",
    readTime: "4 min read",
    author: "AELSA Communications",
    tag: "Award",
    category: "Award",
  },
  {
    id: 6,
    title: "How we achieved 99.98% uptime in year one",
    description:
      "Hardware redundancy, edge computing, and a satellite-first comms architecture — the engineering decisions behind AELSA's reliability record explained.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    date: "Oct 7, 2025",
    readTime: "12 min read",
    author: "AELSA Engineering",
    tag: "Infrastructure",
    category: "Infrastructure",
  },
];

const categories = [
  "All",
  "Deployment",
  "AI",
  "Partnership",
  "Data",
  "Award",
  "Infrastructure",
] as const;
type Category = (typeof categories)[number];

const tagColors: Record<string, string> = {
  Deployment: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  AI: "bg-primary/10 text-primary border-primary/20",
  Partnership: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Data: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Award: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Infrastructure: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const INITIAL_COUNT = 3;

export default function News() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");
  const [newsletterPending, setNewsletterPending] = useState(false);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleSubscribe = async () => {
    if (!newsletterEmail.includes("@")) {
      setNewsletterMsg("Please enter a valid email.");
      return;
    }
    setNewsletterPending(true);
    setNewsletterMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      setNewsletterMsg(data.message);
      if (res.ok) setNewsletterEmail("");
    } catch {
      setNewsletterMsg("Something went wrong. Please try again.");
    } finally {
      setNewsletterPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
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

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-background border-primary"
                  : "bg-surface/40 text-muted border-white/10 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted self-center">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Featured first article */}
        {visibleArticles[0] && (
          <div
            className="mb-8 group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl cursor-pointer hover:border-primary/30 transition-all duration-500"
            onMouseEnter={() => setHoveredId(visibleArticles[0].id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto min-h-[280px]">
                <img
                  src={visibleArticles[0].image}
                  alt={visibleArticles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border ${tagColors[visibleArticles[0].tag]}`}
                >
                  {visibleArticles[0].tag}
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs text-muted mb-3">
                  {visibleArticles[0].date} · {visibleArticles[0].readTime}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-text leading-tight">
                  {visibleArticles[0].title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {visibleArticles[0].description}
                </p>
                <div className="flex items-center mt-6 gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-black text-primary">
                    {visibleArticles[0].author[0]}
                  </div>
                  <p className="text-sm font-semibold text-text">
                    {visibleArticles[0].author}
                  </p>
                </div>
                <button className="mt-6 w-fit px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 bg-surface/60 text-text hover:border-primary/30 hover:text-primary transition-all duration-200">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted">
            No articles in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.slice(1).map((article) => (
              <div
                key={article.id}
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl cursor-pointer hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border ${tagColors[article.tag]}`}
                  >
                    {article.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted mb-2">
                    {article.date} · {article.readTime}
                  </p>
                  <h2 className="text-base font-black text-text leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                        {article.author[0]}
                      </div>
                      <span className="text-xs text-muted">
                        {article.author}
                      </span>
                    </div>
                    <span
                      className={`text-xs transition-all duration-200 ${hoveredId === article.id ? "text-primary translate-x-1" : "text-muted"}`}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Stay Updated
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-text mb-3">
              Get AELSA updates in your inbox
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Monthly roundups of our latest deployments, research findings, and
              technology releases.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 h-12 px-4 rounded-xl bg-background/40 text-text border border-white/10 outline-none focus:border-primary/40 text-sm"
              />
              <button
                onClick={handleSubscribe}
                disabled={newsletterPending}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  newsletterPending
                    ? "bg-muted/30 text-muted cursor-not-allowed"
                    : "bg-primary text-background hover:brightness-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)]"
                }`}
              >
                {newsletterPending ? "Sending..." : "Subscribe"}
              </button>
            </div>
            {newsletterMsg && (
              <p
                className={`mt-4 text-sm ${
                  newsletterMsg.includes("success")
                    ? "text-accent"
                    : "text-red-400"
                }`}
              >
                {newsletterMsg}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

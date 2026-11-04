"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Waves, Cpu, Globe, Shield, Activity, Zap } from "lucide-react";

const missionCards = [
  {
    category: "Autonomy",
    title: "Self-navigating ocean units",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-muted">
          AELSA's autonomous surface units operate continuously without human
          intervention, collecting real-time data across remote ocean zones
          where traditional monitoring is impossible.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            "Zero crew needed",
            "24/7 operation",
            "Storm resistant",
            "Solar powered",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-primary font-bold">✓</span> {f}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    category: "AI Analytics",
    title: "72-hour sea state forecasting",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-muted">
          Our prediction engine processes multi-sensor streams in real time,
          delivering 98% accurate sea state forecasts up to 72 hours ahead to
          support safe and efficient maritime operations.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {["98% accuracy", "72hr horizon", "Multi-sensor", "Real-time"].map(
            (f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="text-primary font-bold">✓</span> {f}
              </div>
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    category: "Coverage",
    title: "Active in 78 countries",
    src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-muted">
          From the North Sea to the Pacific, AELSA systems are deployed across
          78 countries, providing continuous visibility into the world's most
          strategically important ocean corridors.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            "78 countries",
            "All major oceans",
            "Polar regions",
            "Coastal zones",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-primary font-bold">✓</span> {f}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    category: "Reliability",
    title: "99.98% system uptime",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-muted">
          Built for the harshest marine environments, our hardware and cloud
          infrastructure maintained 99.98% uptime over the last 12 months across
          all active deployments.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            "99.98% uptime",
            "Redundant comms",
            "Edge computing",
            "Satellite-first",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-primary font-bold">✓</span> {f}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    category: "Data",
    title: "1.6M live streams per day",
    src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-muted">
          Every day, AELSA processes over 1.6 million individual data streams
          covering temperature, salinity, current velocity, wave height, and
          bioacoustic signatures in real time.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            "1.6M streams/day",
            "6 sensor types",
            "Live dashboard",
            "API access",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-primary font-bold">✓</span> {f}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const values = [
  {
    icon: Waves,
    title: "Ocean First",
    description:
      "Every decision we make starts with the question: does this help us understand the ocean better?",
  },
  {
    icon: Cpu,
    title: "Autonomous by Design",
    description:
      "We build systems that operate without human intervention — reliable, self-sufficient, and always on.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Our infrastructure spans 78 countries. We think in ocean corridors, not national borders.",
  },
  {
    icon: Shield,
    title: "Reliability Above All",
    description:
      "99.98% uptime isn't a marketing number. It's the standard we hold ourselves to every day.",
  },
  {
    icon: Activity,
    title: "Real-Time or Nothing",
    description:
      "Stale data is useless at sea. Everything we build delivers insights the moment they're generated.",
  },
  {
    icon: Zap,
    title: "AI-Native",
    description:
      "Machine learning is embedded into every layer of our stack — not bolted on as an afterthought.",
  },
];

const stats = [
  { value: "12,480+", label: "Active Units" },
  { value: "78", label: "Countries" },
  { value: "98%", label: "AI Accuracy" },
  { value: "1.6M", label: "Daily Streams" },
];

export default function OurMission() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  const cards = missionCards.map((card, index) => (
    <Card key={index} card={card} index={index} layout />
  ));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto mb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Our Mission
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-text leading-tight max-w-2xl">
            Making the ocean observable,
            <br />
            understandable, and actionable
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            Explore the technology and values driving AELSA's approach to
            autonomous marine intelligence.
          </p>
        </div>
        <Carousel items={cards} />
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <p className="text-3xl md:text-4xl font-black text-text">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl h-[320px] md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1400&auto=format&fit=crop"
            alt="Ocean mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Since 2022
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-text max-w-lg leading-tight">
              Built for the ocean. Driven by intelligence.
            </h2>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-text">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 cursor-default ${
                  activeValue === index
                    ? "border-primary/40 bg-primary/5 -translate-y-1"
                    : "border-white/10 bg-surface/40 backdrop-blur-xl"
                }`}
              >
                {activeValue === index && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeValue === index
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-surface/60 border border-white/10"
                  }`}
                >
                  <value.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeValue === index ? "text-primary" : "text-muted"
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg font-black mb-2 transition-colors duration-300 ${
                    activeValue === index ? "text-primary" : "text-text"
                  }`}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-xl p-10 md:p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
                Join Us
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-text mb-4">
                Ready to monitor the ocean?
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Start with a free trial and see how AELSA can transform your
                maritime operations with real-time ocean intelligence.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="/auth/register"
                  className="px-8 py-3 rounded-full bg-primary text-background font-semibold hover:brightness-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 rounded-full border border-white/10 bg-surface/60 text-text font-semibold hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Navbar from "@/components/navbar";
import StatisticsCard from "@/components/StatisticsCard";
import { ArrowUpRight, Activity, Cpu, Globe, Shield } from "lucide-react";
import { Highlighter } from "@/components/ui/HighLighter";
import type { LucideIcon } from "lucide-react";

interface Stat {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  {
    title: "Active Sea Devices",
    value: "12,480+",
    description: "Deployed worldwide",
    icon: Cpu,
  },
  {
    title: "Global Coverage",
    value: "78 Countries",
    description: "Across major oceans",
    icon: Globe,
  },
  {
    title: "System Uptime",
    value: "99.98%",
    description: "Last 12 months",
    icon: Shield,
  },
  {
    title: "Live Data Streams",
    value: "1.6M / day",
    description: "Processed in real-time",
    icon: Activity,
  },
];

export default function Statistics() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 px-6">
        {/* Stats section */}
        <section className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Platform Statistics
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-text">
              Global Impact, Real-Time
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Real-time performance and global reach of AELSA sea technology
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  relative overflow-hidden
                  rounded-2xl
                  bg-surface/40 backdrop-blur-xl
                  border border-white/10
                  hover:border-primary/30
                  hover:-translate-y-1
                  transition-all duration-300
                  p-6
                "
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text/30" />
                </div>

                <h2 className="text-4xl font-black text-text">{stat.value}</h2>
                <p className="mt-1 text-sm font-semibold text-text/70">
                  {stat.title}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-24 border-t border-white/10" />

        {/* Highlighter section */}
        <section className="flex flex-col items-center justify-center gap-8 text-center">
          <p className="text-xl max-w-2xl leading-relaxed text-text">
            The{" "}
            <Highlighter action="underline" color="var(--color-primary)">
              Sea Technology
            </Highlighter>{" "}
            will be developed by{" "}
            <Highlighter
              action="highlight"
              color="rgba(var(--color-primary-rgb), 0.2)"
            >
              AELSA Technologies
            </Highlighter>{" "}
            soon.
          </p>

          <StatisticsCard />
        </section>
      </div>
    </div>
  );
}

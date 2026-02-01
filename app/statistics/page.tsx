"use client";

import Navbar from "@/components/navbar";
import { ArrowUpRight, Activity, Cpu, Globe, Shield } from "lucide-react";

const stats = [
  {
    title: "Active Sea Devices",
    value: "12,480+",
    description: "Deployed worldwide",
    icon: Cpu,
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Global Coverage",
    value: "78 Countries",
    description: "Across major oceans",
    icon: Globe,
    color: "from-emerald-400 to-teal-600",
  },
  {
    title: "System Uptime",
    value: "99.98%",
    description: "Last 12 months",
    icon: Shield,
    color: "from-indigo-400 to-purple-600",
  },
  {
    title: "Live Data Streams",
    value: "1.6M / day",
    description: "Processed in real-time",
    icon: Activity,
    color: "from-orange-400 to-rose-600",
  },
];

export default function Statistics() {
  return (
    <div className="min-h-screen bg-[#F5F9FC]">
      <Navbar />

      <div className="pt-28 px-6">
        <section className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#38BDF8]">
              Platform Statistics
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Real-time performance and global impact of AELSA sea technology
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`absolute  inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.color}`}
                />

                <div className="p-6">
                  <div className="flex  items-center justify-between">
                    <stat.icon className="w-8 h-8 text-slate-700" />
                    <ArrowUpRight className="w-5 h-5 text-slate-400" />
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {stat.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

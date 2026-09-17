"use client";

import Navbar from "@/components/navbar";
import { Cpu, Globe, Activity, Shield, Waves, Zap } from "lucide-react";

const products = [
  {
    icon: Cpu,
    name: "Autonomous Surface Units",
    tag: "Hardware",
    description:
      "Self-navigating ocean units that operate 24/7 without human intervention, collecting real-time data across remote ocean zones.",
    features: ["Self-navigating", "24/7 operation", "Remote deployment"],
  },
  {
    icon: Zap,
    name: "AI Prediction Engine",
    tag: "Software",
    description:
      "Our core AI model forecasts sea states up to 72 hours ahead with 98% accuracy using multi-sensor input streams.",
    features: ["72hr forecasting", "98% accuracy", "Multi-sensor input"],
  },
  {
    icon: Activity,
    name: "Real-Time Dashboard",
    tag: "Platform",
    description:
      "A live analytics dashboard that visualizes ocean data streams, system health, and predictive insights in one place.",
    features: ["Live data streams", "System health", "Custom alerts"],
  },
  {
    icon: Waves,
    name: "Ocean Sensor Suite",
    tag: "Hardware",
    description:
      "Multi-sensor arrays measuring temperature, salinity, current velocity, wave height, and bioacoustic signatures simultaneously.",
    features: ["6 sensor types", "Simultaneous capture", "High precision"],
  },
  {
    icon: Globe,
    name: "Global Coverage Network",
    tag: "Infrastructure",
    description:
      "A satellite-first communications architecture connecting all deployed units across 78 countries with 99.98% uptime.",
    features: ["78 countries", "Satellite comms", "99.98% uptime"],
  },
  {
    icon: Shield,
    name: "Data Security Layer",
    tag: "Security",
    description:
      "End-to-end encrypted data pipelines with role-based access control and full audit logging for all marine data streams.",
    features: ["E2E encryption", "Role-based access", "Audit logging"],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Products
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-text leading-tight">
              Everything you need to
              <br />
              monitor the ocean
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              From autonomous hardware to AI-powered software — AELSA delivers a
              complete marine intelligence stack built for modern ocean
              operations.
            </p>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 border border-primary/20 bg-primary/5 px-2 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-lg font-black text-text mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {product.description}
                </p>

                <ul className="space-y-1.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description:
      "For individual researchers and small teams getting started with ocean monitoring.",
    featured: false,
    cta: "Get Started",
    href: "/auth/register",
    features: [
      "Up to 3 autonomous units",
      "Real-time dashboard access",
      "72hr sea state forecasting",
      "Email support",
      "1GB data storage",
      "Basic analytics",
    ],
  },
  {
    name: "Professional",
    price: "$899",
    period: "/month",
    description:
      "For growing teams that need more units, more data, and deeper analytics.",
    featured: true,
    cta: "Start Free Trial",
    href: "/auth/register",
    features: [
      "Up to 20 autonomous units",
      "Advanced AI prediction engine",
      "Custom alert thresholds",
      "Priority support",
      "50GB data storage",
      "Full analytics suite",
      "API access",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For large-scale deployments across multiple ocean zones with custom requirements.",
    featured: false,
    cta: "Contact Us",
    href: "/contact",
    features: [
      "Unlimited autonomous units",
      "Dedicated AI model training",
      "Custom sensor integration",
      "24/7 dedicated support",
      "Unlimited data storage",
      "White-label options",
      "SLA guarantee",
      "On-premise deployment",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-text leading-tight">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Choose the plan that fits your deployment scale. Upgrade or
              downgrade at any time.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border-primary/50 bg-primary/5 backdrop-blur-xl scale-105"
                    : "border-white/10 bg-surface/40 backdrop-blur-xl hover:border-primary/30"
                }`}
              >
                {plan.featured && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded-full">
                      Most Popular
                    </span>
                  </>
                )}

                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-black text-text">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <Link href={plan.href}>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${
                      plan.featured
                        ? "bg-primary text-background hover:brightness-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)]"
                        : "border border-white/10 bg-surface/60 text-text hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-muted mt-12">
            All plans include a 14-day free trial. No credit card required.{" "}
            <Link
              href="/contact"
              className="text-primary hover:opacity-70 transition-opacity"
            >
              Contact us
            </Link>{" "}
            with any questions.
          </p>
        </div>
      </div>
    </div>
  );
}

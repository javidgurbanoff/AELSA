"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24">
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          {/* Small Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-muted">
              Next Generation Marine Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-text md:text-7xl">
            Intelligent
            <span className="block text-primary">Sea Technology</span>
            for the Modern Ocean
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            AELSA delivers advanced maritime analytics, autonomous monitoring,
            and AI-powered ocean systems engineered for modern marine
            operations.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/auth/register"
              className="rounded-full bg-primary px-8 py-4 font-semibold text-background transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(14,165,233,0.35)]"
            >
              Get Started
            </Link>

            <Link
              href="/what-we-do"
              className="rounded-full border border-white/10 bg-surface/60 px-8 py-4 text-text backdrop-blur-xl transition-all duration-300 hover:bg-surface"
            >
              Explore Platform
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-text">24/7</h3>
              <p className="mt-2 text-sm tracking-wide text-muted">
                Real-Time Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-text">98%</h3>
              <p className="mt-2 text-sm tracking-wide text-muted">
                Prediction Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-text">AI</h3>
              <p className="mt-2 text-sm tracking-wide text-muted">
                Ocean Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden h-[650px] items-center justify-center lg:flex">
          {/* Outer Orb */}
          <div className="absolute h-[520px] w-[520px] rounded-full border border-white/10 bg-surface/40 backdrop-blur-3xl" />

          {/* Middle Orb */}
          <div className="absolute h-[380px] w-[380px] rounded-full border border-primary/20 bg-primary/5 backdrop-blur-2xl" />

          {/* Inner Orb */}
          <div className="absolute h-[220px] w-[220px] rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-2xl" />

          {/* Floating Card */}
          <div className="absolute left-0 top-24 rounded-2xl border border-white/10 bg-surface/70 p-5 backdrop-blur-2xl shadow-2xl">
            <p className="text-sm text-muted">Ocean Status</p>
            <h3 className="mt-2 text-2xl font-bold text-text">Stable</h3>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-24 right-0 rounded-2xl border border-white/10 bg-surface/70 p-5 backdrop-blur-2xl shadow-2xl">
            <p className="text-sm text-muted">AI Forecast</p>
            <h3 className="mt-2 text-2xl font-bold text-primary">Active</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

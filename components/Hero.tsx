"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        pt-16
        flex
        items-center
        bg-gradient-to-b
        from-[#0A2540]
        to-[#0A2540]
        overflow-hidden
      "
    >
      {/* Soft marine glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Intelligent
            <span className="block text-[#38BDF8]">Sea Technology</span>
            Built for Tomorrow
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            AELSA delivers next-generation marine intelligence, real-time ocean
            analytics, and AI-driven solutions for modern maritime systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/auth/register"
              className="px-8 py-3 rounded-full bg-[#38BDF8] hover:bg-[#5ED0FA] text-[#0A2540] font-semibold transition"
            >
              Get Started
            </Link>

            <Link
              href="/what-we-do"
              className="px-8 py-3 rounded-full border border-white/25 hover:bg-white/10 text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-[420px] h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#38BDF8]/25 to-transparent blur-3xl" />
            <div className="absolute inset-14 rounded-full border border-white/10 backdrop-blur-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

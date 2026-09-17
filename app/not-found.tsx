"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">
        <p className="text-6xl font-black text-primary tracking-widest">404</p>

        <h1 className="mt-4 text-4xl md:text-5xl font-black text-text leading-tight">
          Page not found
        </h1>

        <p className="mt-4 text-lg text-muted leading-relaxed">
          The page you're looking for might be unavailable, moved, or deleted.
        </p>

        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&h=300&fit=crop"
            alt="Ocean"
            className="w-full max-w-[420px] h-[260px] object-cover rounded-2xl border border-white/10 mx-auto"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-primary text-background font-semibold hover:brightness-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-muted hover:text-primary transition-colors duration-200"
          >
            Contact support →
          </Link>
        </div>
      </div>
    </main>
  );
}

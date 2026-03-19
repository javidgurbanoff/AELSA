"use client";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A2540] to-[#020617] px-6 py-24">
      <div className="text-center max-w-xl">
        <p className="text-5xl font-extrabold text-[#38BDF8] tracking-widest">
          404
        </p>

        <h1 className="mt-4 text-4xl sm:text-6xl font-bold text-white">
          Oops! Page not found
        </h1>

        <p className="mt-6 text-lg text-slate-300 leading-relaxed">
          The page you're looking for might be unavailable, moved, or deleted.
        </p>

        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Ocean"
            className="w-[420px] h-[260px] object-cover rounded-xl shadow-2xl mx-auto border border-white/10"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          <a
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0FB9B1] text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Go back home
          </a>

          <a
            href="/contact"
            className="text-sm font-semibold text-slate-300 hover:text-[#38BDF8] transition"
          >
            Contact support →
          </a>
        </div>
      </div>
    </main>
  );
}

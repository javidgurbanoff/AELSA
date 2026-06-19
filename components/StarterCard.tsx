import React from "react";
import Link from "next/link";

const StarterCard = () => {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted">
            Join the Future of Marine Technology
          </span>
        </div>

        <h2 className="mt-8 text-5xl md:text-6xl font-black text-text">
          Your Journey Starts Here
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Explore intelligent marine systems, real-time analytics, and the next
          generation of ocean innovation with AELSA.
        </p>

        <div className="mt-10">
          <Link
            href="/auth/register"
            className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-primary
          px-8
          py-4
          font-semibold
          text-background
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_50px_rgba(14,165,233,0.45)]
        "
          >
            Get Started
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12">
          <div>
            <h3 className="text-3xl font-bold text-text">24/7</h3>
            <p className="mt-2 text-muted">Ocean Monitoring</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-text">98%</h3>
            <p className="mt-2 text-muted">Prediction Accuracy</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-text">AI</h3>
            <p className="mt-2 text-muted">Powered Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterCard;

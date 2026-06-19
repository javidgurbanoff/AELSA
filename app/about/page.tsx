"use client";

import FAQs from "@/components/accordion";
import Colleagues_Info from "@/components/Colleagues_Info";
import Navbar from "@/components/navbar";

const pillars = [
  {
    title: "Our Mission",
    body: "To build sustainable, reliable, and autonomous maritime systems that solve real-world ocean challenges through cutting-edge AI and unmanned technologies.",
  },
  {
    title: "Our Vision",
    body: "To become the global standard for intelligent marine monitoring — making ocean data accessible, actionable, and continuous for every operator.",
  },
  {
    title: "Our Values",
    body: "Innovation, reliability, precision, and a relentless drive to push the boundaries of what autonomous sea technology can achieve.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-28 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-text leading-tight">
            Built for the ocean.
            <br />
            Driven by intelligence.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-primary">
              AELSA Technologies
            </span>{" "}
            — where autonomous engineering meets marine innovation to make the
            world's oceans observable, understandable, and actionable.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="
                p-6 rounded-2xl
                border border-white/10
                bg-surface/40 backdrop-blur-xl
                hover:border-primary/30 hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="w-8 h-[2px] bg-primary mb-4 rounded-full" />
              <h3 className="text-xl font-black text-text mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FAQs />
      <Colleagues_Info />
    </div>
  );
}

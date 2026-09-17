"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "AELSA's autonomous marine systems helped us monitor ocean conditions in real time with remarkable accuracy.",
      name: "Javid Gurbanov",
      designation: "Fullstack Developer",
      src: "/images/team/team-1.jpg",
    },
    {
      quote:
        "The AI-powered analytics transformed how we process maritime data and make operational decisions.",
      name: "Xaliq Guliyev",
      designation: "Business Management",
      src: "/images/team/team-2.jpg",
    },
    {
      quote:
        "Reliable, intelligent, and beautifully engineered. AELSA is pushing marine innovation forward.",
      name: "Berzamin Eyvazov",
      designation: "Ground Control Station Engineer",
      src: "/images/team/team-3.jpg",
    },
    {
      quote:
        "Their autonomous monitoring systems provided insights we simply couldn't obtain before.",
      name: "Huseyn Rasulov",
      designation: "Software Engineer (Autonomy)",
      src: "/images/team/team-4.jpg",
    },
    {
      quote:
        "Their autonomous monitoring systems provided insights we simply couldn't obtain before.",
      name: "Ramil Aliyev",
      designation: "Social Media & Data Analyst",
      src: "/images/team/team-5.jpg",
    },
    {
      quote:
        "Their autonomous monitoring systems provided insights we simply couldn't obtain before.",
      name: "Cahid Mamishzade",
      designation: "Team Captain & ML Engineer",
      src: "/images/team/team-6.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-32">
      {/* Glow Effects */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-primary font-bold tracking-[0.4em]">04</div>
          <p className="text-accent font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-text">
            Trusted By Innovators
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted">
            Discover how AELSA helps organizations leverage intelligent marine
            technology, autonomous systems, and real-time ocean analytics.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}

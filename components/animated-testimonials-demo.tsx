"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "AELSA's autonomous marine systems helped us monitor ocean conditions in real time with remarkable accuracy.",
      name: "Sarah Chen",
      designation: "Marine Systems Engineer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "The AI-powered analytics transformed how we process maritime data and make operational decisions.",
      name: "Michael Rodriguez",
      designation: "Ocean Technology Director",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Reliable, intelligent, and beautifully engineered. AELSA is pushing marine innovation forward.",
      name: "Emily Watson",
      designation: "Research Lead",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Their autonomous monitoring systems provided insights we simply couldn't obtain before.",
      name: "James Kim",
      designation: "Maritime Operations Manager",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Glow Effects */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />

      {/* Huge Background Text */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[180px]
          font-black
          text-primary/[0.03]
          select-none
          pointer-events-none
        "
      >
        AELSA
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-primary font-bold tracking-[0.4em]">04</div>

          <p className="text-accent font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-background">
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

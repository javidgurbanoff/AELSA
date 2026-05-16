"use client";

import Navbar from "@/components/navbar";
import Footer from "./features/Footer/Footer";
import Partner from "@/components/partner";
import InteractiveContent from "@/components/InteractiveContent";
import Hero from "@/components/Hero";
import NewsRoom from "@/components/NewsRoom";
import TimelineDemo from "@/components/timeline-demo";
import Accordion from "@/components/accordion";
import StarterCard from "@/components/StarterCard";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <InteractiveContent />
      </section>
      <section>
        <Accordion />
      </section>
      <section>
        <TimelineDemo />
      </section>
      <section>
        <NewsRoom />
      </section>
      <section>
        <AnimatedTestimonialsDemo />
      </section>
      <section>
        <StarterCard />
      </section>
      <section>
        <Partner />
      </section>
      <Footer />
    </main>
  );
}

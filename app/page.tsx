"use client";

import Navbar from "@/components/navbar";
import Footer from "./features/Footer/Footer";
import Partner from "@/components/partner";
import InteractiveContent from "@/components/InteractiveContent";
import Hero from "@/components/Hero";
import NewsRoom from "@/components/NewsRoom";
import Accordion from "@/components/accordion";
import StarterCard from "@/components/StarterCard";
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
      <section></section>
      <section>
        <NewsRoom />
        <StarterCard />
      </section>
      <section>
        <Partner />
      </section>
      <Footer />
    </main>
  );
}

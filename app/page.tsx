"use client";

import Navbar from "@/components/navbar";
import Footer from "./features/Footer/Footer";
import Partner from "@/components/partner";
import InteractiveContent from "@/components/InteractiveContent";
import Hero from "@/components/Hero";
import NewsRoom from "@/components/NewsRoom";

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
        <NewsRoom />
      </section>

      <section>
        <Partner />
      </section>

      <Footer />
    </main>
  );
}

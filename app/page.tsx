"use client";

import Navbar from "@/components/navbar";
import Footer from "./features/Footer/Footer";
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
        <NewsRoom />
      </section>

      <Footer />
    </main>
  );
}

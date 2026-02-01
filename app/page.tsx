"use client";

import Navbar from "@/components/navbar";
//import Footer from "@/app/features/footer/footer";//
import Hero from "@/components/Hero";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="">
        <Hero />
      </section>
      <section className="">
        <BentoGrid>
          <div />
        </BentoGrid>
      </section>
      {/* Footer */}?{" "}
    </main>
  );
}

"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const missionCards = [
  {
    category: "Autonomy",
    title: "Self-navigating ocean units",
    src: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
    content: (
      <p className="text-base leading-relaxed">
        AELSA's autonomous surface units operate continuously without human
        intervention, collecting real-time data across remote ocean zones where
        traditional monitoring is impossible.
      </p>
    ),
  },
  {
    category: "AI Analytics",
    title: "72-hour sea state forecasting",
    src: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
    content: (
      <p className="text-base leading-relaxed">
        Our prediction engine processes multi-sensor streams in real time,
        delivering 98% accurate sea state forecasts up to 72 hours ahead to
        support safe and efficient maritime operations.
      </p>
    ),
  },
  {
    category: "Coverage",
    title: "Active in 78 countries",
    src: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
    content: (
      <p className="text-base leading-relaxed">
        From the North Sea to the Pacific, AELSA systems are deployed across 78
        countries, providing continuous visibility into the world's most
        strategically important ocean corridors.
      </p>
    ),
  },
  {
    category: "Reliability",
    title: "99.98% system uptime",
    src: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
    content: (
      <p className="text-base leading-relaxed">
        Built for the harshest marine environments, our hardware and cloud
        infrastructure maintained 99.98% uptime over the last 12 months across
        all active deployments.
      </p>
    ),
  },
  {
    category: "Data",
    title: "1.6M live streams per day",
    src: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
    content: (
      <p className="text-base leading-relaxed">
        Every day, AELSA processes over 1.6 million individual data streams
        covering temperature, salinity, current velocity, wave height, and
        bioacoustic signatures in real time.
      </p>
    ),
  },
];

export default function OurMission() {
  const cards = missionCards.map((card, index) => (
    <Card key={index} card={card} index={index} layout />
  ));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-10 px-6">
        <div className="max-w-7xl mx-auto mb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Our Mission
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-text leading-tight max-w-2xl">
            Making the ocean observable,
            <br />
            understandable, and actionable
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            Explore the technology and values driving AELSA's approach to
            autonomous marine intelligence.
          </p>
        </div>

        <Carousel items={cards} />
      </section>
    </div>
  );
}

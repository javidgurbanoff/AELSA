import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Milestone
          </p>
          <h4 className="mb-4 text-2xl font-black text-text">
            Full Autonomous Deployment
          </h4>
          <p className="mb-6 text-base text-muted leading-relaxed">
            AELSA launched its first fleet of fully autonomous marine monitoring
            units across the North Sea, delivering real-time ocean analytics to
            five partner organizations.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Deployed 12 autonomous surface units",
              "Real-time data streaming to 5 partners",
              "99.4% uptime over 6-month trial",
              "AI model trained on 2M+ ocean data points",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-muted text-sm"
              >
                <span className="text-primary font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`AELSA deployment ${i + 1}`}
                className="h-20 md:h-44 lg:h-60 w-full rounded-2xl object-cover border border-white/10"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Research & Development
          </p>
          <h4 className="mb-4 text-2xl font-black text-text">
            AI Engine & Sensor Suite
          </h4>
          <p className="mb-4 text-base text-muted leading-relaxed">
            Our engineering team finalized the core AI prediction engine and
            integrated a multi-sensor suite capable of measuring temperature,
            salinity, current velocity, and bioacoustic signatures
            simultaneously.
          </p>
          <p className="mb-6 text-base text-muted leading-relaxed">
            Lab trials exceeded all accuracy benchmarks, reaching 98% prediction
            accuracy for sea state forecasting up to 72 hours ahead.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`AELSA R&D ${i + 1}`}
                className="h-20 md:h-44 lg:h-60 w-full rounded-2xl object-cover border border-white/10"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Foundation
          </p>
          <h4 className="mb-4 text-2xl font-black text-text">
            AELSA is Founded
          </h4>
          <p className="mb-6 text-base text-muted leading-relaxed">
            A small team of marine engineers and AI researchers came together
            with a shared mission: make the ocean observable, understandable,
            and actionable through autonomous technology.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Founded with a 6-person core team",
              "First prototype unit built in 4 months",
              "Seed funding secured from maritime investors",
              "First open-water test completed successfully",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-muted text-sm"
              >
                <span className="text-primary font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
              "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`AELSA founding ${i + 1}`}
                className="h-20 md:h-44 lg:h-60 w-full rounded-2xl object-cover border border-white/10"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-background">
      <Timeline data={data} />
    </div>
  );
}

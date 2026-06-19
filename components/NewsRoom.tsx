"use client";

import React from "react";

const photos = [
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Runner-up-480x360.jpg?media=1726085813",
    date: "27 Feb, 2026",
    text: "New contract has been developed by our Company",
  },
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/10/Skarmbild-2025-10-15-101603-480x360.png?media=1726085813",
    date: "31 Mar, 2026",
    text: "Ships have been sailed over past 4 years",
  },
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/09/MEYER_STFT_2s-480x360.jpg?media=1726085813",
    date: "16 Jun, 2026",
    text: "Still waiting for the agreements? Join us now!",
  },
  {
    img: "https://usercontent.one/wp/www.seatech.se/wp-content/uploads/2025/02/SeaTech_Master_Shot01-lighthouse-480x360.webp?media=1726085813",
    date: "24 Jul, 2026",
    text: "Will new technologies gather for the next TechnoFest?",
  },
];

const NewsRoom = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Latest Updates
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-text">
            Newsroom
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Discover the latest developments, partnerships, innovations, and
            achievements shaping the future of AELSA Technologies.
          </p>
        </div>

        {/* Featured News */}
        <div
          className="
            group
            mb-12
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-primary/30
          "
        >
          <div className="grid lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={photos[0].img}
                alt="Featured News"
                className="
                  h-full
                  min-h-[320px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div className="flex flex-col justify-center p-10">
              <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                Featured Story
              </span>

              <h3 className="text-3xl font-bold text-text">{photos[0].text}</h3>

              <p className="mt-4 text-muted">
                Explore the latest milestone achieved by AELSA Technologies and
                learn how our engineering innovations continue to shape the
                future of marine intelligence.
              </p>

              <button
                className="
                  mt-8
                  w-fit
                  rounded-full
                  bg-primary
                  px-6
                  py-3
                  font-semibold
                  text-background
                  transition-all
                  duration-300
                  hover:brightness-110
                  hover:shadow-[0_0_30px_rgba(14,165,233,0.35)]
                  cursor-pointer
                "
              >
                Read Full Story
              </button>
            </div>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {photos.slice(1).map((photo, index) => (
            <article
              key={index}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]
              "
            >
              <div className="overflow-hidden">
                <img
                  src={photo.img}
                  alt={photo.text}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-accent">{photo.date}</p>

                <h3 className="mt-3 text-xl font-bold leading-snug text-text">
                  {photo.text}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Stay informed about the latest marine innovations, events,
                  partnerships, and technology developments from AELSA.
                </p>

                <button
                  className="
                    mt-6
                    font-semibold
                    text-primary
                    transition-all
                    duration-300
                    cursor-pointer
                    group-hover:translate-x-2
                  "
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsRoom;

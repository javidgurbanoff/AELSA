import React from "react";

const StarterCard = () => {
  return (
    <section className="w-full flex justify-center py-24 bg-gradient-to-b from-[#0A2540]/95 via-[#102A43]/95 to-[#0A2540]/95">
      <div className="max-w-4xl w-full text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Your journey starts here
        </h2>

        <p className="mt-4 text-slate-300 text-lg">
          Join AELSA and explore the future of interactive sea technology.
        </p>
        <div className="mt-8">
          <button className="px-8 py-3 rounded-full cursor-pointer  bg-[#38BDF8] hover:bg-[#5ED0FA] text-[#0A2540] font-semibold transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default StarterCard;

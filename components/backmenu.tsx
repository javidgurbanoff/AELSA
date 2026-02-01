import React from "react";
import Link from "next/link";

const Backmenu = () => {
  return (
    <div className="absolute top-4 left-4 z-50">
      <Link
        href="/"
        className="
          inline-block text-lg font-semibold
          text-[#0A2540]
          bg-white
          border border-[#0A2540]
          rounded-full
          px-6 py-2
          transition-all duration-300
          hover:bg-[#0A2540]
          hover:text-[#38BDF8]
          shadow-sm
        "
      >
        ← Back to Menu
      </Link>
    </div>
  );
};

export default Backmenu;

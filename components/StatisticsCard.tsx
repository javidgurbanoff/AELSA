"use client";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
      </svg>
    ),
    title: "Ocean Monitoring",
    description:
      "Autonomous surface units continuously collect and transmit live ocean data across all major deployment zones.",
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
      </svg>
    ),
    title: "AI Prediction",
    description:
      "Our AI engine forecasts sea states up to 72 hours ahead with 98% accuracy using multi-sensor input streams.",
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
      </svg>
    ),
    title: "Global Coverage",
    description:
      "Active deployments across 78 countries, providing continuous visibility into the world's most critical ocean zones.",
  },
];

export default function Card() {
  return (
    <div className="mt-12 flex justify-center gap-6 flex-wrap">
      {cardData.map((card, i) => (
        <div
          key={i}
          className="group relative w-[300px] transition-all duration-[480ms] cubic-bezier-custom hover:-translate-y-4"
          style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
        >
          {/* Back layers */}
          <div
            className="
              absolute inset-0 rounded-[22px] bg-primary/20
              transition-all duration-[480ms]
              -top-[4%] left-1/2 -translate-x-1/2 w-[90%] h-[90%]
              group-hover:rotate-[-8deg] group-hover:top-0 group-hover:w-full group-hover:h-full
              z-[-1]
            "
            style={{
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              transformOrigin: "bottom",
            }}
          />
          <div
            className="
              absolute inset-0 rounded-[22px] bg-primary/10
              transition-all duration-[480ms]
              -top-[8%] left-1/2 -translate-x-1/2 w-[80%] h-[80%]
              group-hover:rotate-[8deg] group-hover:top-0 group-hover:w-full group-hover:h-full
              z-[-2]
            "
            style={{
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              transformOrigin: "bottom",
            }}
          />

          {/* Main card */}
          <div
            className="
              flex flex-col items-start gap-6 p-9
              rounded-[22px]
              bg-surface/60 backdrop-blur-xl
              border border-white/10
              text-text
              transition-all duration-[480ms]
            "
            style={{
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div className="text-primary">{card.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-text mb-2">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

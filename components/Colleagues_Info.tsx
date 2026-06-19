import React from "react";

const colleagues = [
  {
    id: 1,
    name: "Anna Johnson",
    role: "Marine Data Engineer",
    bio: "Works on ocean monitoring systems and real-time analytics for offshore and coastal platforms.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "David Lee",
    role: "AI Research Specialist",
    bio: "Builds intelligent tools for sea technology, automation, and predictive monitoring systems.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sara Kim",
    role: "Product Designer",
    bio: "Designs clear and user-friendly interfaces for marine platforms, dashboards, and digital tools.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Michael Carter",
    role: "Ocean Systems Analyst",
    bio: "Focuses on performance insights, data interpretation, and system optimization across marine networks.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

const Colleagues_Info = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-text">
            Founding Story
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the people behind AELSA — the experience, ideas, and drive
            pushing marine innovation forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {colleagues.map((person) => (
            <div
              key={person.id}
              className="
                group overflow-hidden rounded-2xl
                border border-white/10
                bg-surface/40 backdrop-blur-xl
                hover:border-primary/30 hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-text">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {person.role}
                </p>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colleagues_Info;

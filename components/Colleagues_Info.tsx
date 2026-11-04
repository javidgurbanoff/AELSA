const colleagues = [
  {
    id: 1,
    name: "Javid Gurbanov",
    role: "Fullstack Developer",
    bio: "Works on ocean monitoring systems and real-time analytics for offshore and coastal platforms.",
    src: "/images/team/team-1.jpg",
  },
  {
    id: 2,
    name: "David Lee",
    role: "AI Research Specialist",
    bio: "Builds intelligent tools for sea technology, automation, and predictive monitoring systems.",
    src: "/images/team/team-2.jpg",
  },
  {
    id: 3,
    name: "Sara Kim",
    role: "Product Designer",
    bio: "Designs clear and user-friendly interfaces for marine platforms, dashboards, and digital tools.",
    src: "/images/team/team-3.jpg",
  },
  {
    id: 4,
    name: "Michael Carter",
    role: "Ocean Systems Analyst",
    bio: "Focuses on performance insights, data interpretation, and system optimization across marine networks.",
    src: "/images/team/team-4.jpg",
  },
  {
    id: 5,
    name: "Michael Carter",
    role: "Ocean Systems Analyst",
    bio: "Focuses on performance insights, data interpretation, and system optimization across marine networks.",
    src: "/images/team/team-5.jpg",
  },
  {
    id: 6,
    name: "Michael Carter",
    role: "Ocean Systems Analyst",
    bio: "Focuses on performance insights, data interpretation, and system optimization across marine networks.",
    src: "/images/team/team-6.jpg",
  },
];

const Colleagues_Info = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            The Team
          </p>

          <h2 className="text-4xl font-black text-text md:text-5xl">
            Founding Story
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Meet the people behind AELSA — the experience, ideas, and drive
            pushing marine innovation forward.
          </p>
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {colleagues.map((person) => (
            <div
              key={person.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-surface/40
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
              "
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={person.src}
                  alt={person.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Information */}
              <div className="p-6">
                <h3 className="text-xl font-black text-text">{person.name}</h3>

                <p className="mt-1 text-sm font-semibold text-primary">
                  {person.role}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
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

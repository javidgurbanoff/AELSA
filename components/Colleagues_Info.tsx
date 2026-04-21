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
    <section className="py-20 px-6 bg-[#F5F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-center text-[#0A2540] mb-4 text-5xl font-semibold">
            Founding Story
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the people behind our company and discover the experience,
            ideas, and innovation that help drive our sea technology forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {colleagues.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#0A2540]">
                  {person.name}
                </h2>

                <p className="mt-2 text-[#38BDF8] font-medium">{person.role}</p>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
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

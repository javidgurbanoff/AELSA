import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const stats = [
  { label: "Active Units", value: "12,480+", sub: "Deployed worldwide" },
  { label: "Global Coverage", value: "78", sub: "Countries" },
  { label: "System Uptime", value: "99.98%", sub: "Last 12 months" },
  { label: "Live Streams", value: "1.6M/day", sub: "Processed in real-time" },
];

const quickLinks = [
  {
    label: "Account Settings",
    href: "/account",
    desc: "Manage your email and password",
  },
  { label: "News", href: "/news", desc: "Latest AELSA updates" },
  {
    label: "Tutorial",
    href: "/tutorial",
    desc: "Learn how to use the platform",
  },
];

export default async function Dashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Dashboard
          </p>
          <h1 className="text-4xl font-black text-text">Welcome back</h1>
          <p className="mt-2 text-muted">{user.email}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="text-3xl font-black text-text mt-2">{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group block rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-black text-text group-hover:text-primary transition-colors">
                {link.label}
              </p>
              <p className="text-sm text-muted mt-1">{link.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

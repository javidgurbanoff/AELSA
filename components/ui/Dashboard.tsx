"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function DashBoard() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on outside click
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/profile", label: "Public Profile" },
    { href: "/account", label: "Account Settings" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-primary transition-colors duration-300"
      >
        <User size={16} />
        Account
      </button>

      {open && (
        <div className="absolute right-0 top-8 z-50 w-48 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-2xl shadow-2xl p-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                pathname === href
                  ? "text-primary bg-primary/10"
                  : "text-muted hover:text-text hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

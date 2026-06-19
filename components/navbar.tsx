"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { InteractiveHoverButton } from "./interactive-hover-button";
import DashBoard from "@/components/ui/Dashboard";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/news", label: "News" },
    { href: "/missions", label: "Our Missions" },
    { href: "/statistics", label: "Statistics" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
        <div
          className="
            mx-auto flex h-16 max-w-7xl items-center justify-between
            rounded-2xl
            border border-white/10
            bg-surface/60 backdrop-blur-2xl
            px-6
            shadow-[0_8px_40px_rgba(14,165,233,0.08)]
          "
        >
          {/* Logo */}
          <Link href="/" className="group">
            <h1
              className="
                text-2xl font-black tracking-[0.18em] text-text
                transition-opacity duration-300 group-hover:opacity-70
              "
            >
              AELSA
            </h1>
          </Link>

          {/* Status badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-surface/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-muted font-medium">
              Systems Online
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  text-sm font-semibold tracking-wide transition-colors duration-300
                  ${pathname === href ? "text-primary" : "text-muted hover:text-primary"}
                `}
              >
                {label}
              </Link>
            ))}

            <DashBoard />

            <Link href="/auth/register">
              <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-text transition hover:bg-surface md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            fixed top-24 left-1/2 z-40
            w-[92%] -translate-x-1/2
            rounded-2xl
            border border-white/10
            bg-surface/80 backdrop-blur-2xl
            p-6 shadow-2xl
          "
        >
          {/* Mobile status badge */}
          <div className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 bg-surface/60 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-muted font-medium">
              Systems Online
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`
                  px-3 py-2.5 rounded-xl text-sm font-semibold tracking-wide
                  transition-all duration-200
                  ${
                    pathname === href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted hover:text-text hover:bg-surface/60"
                  }
                `}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 mt-2">
              <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

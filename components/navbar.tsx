"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "./interactive-hover-button";
import DashBoard from "@/components/ui/Dashboard";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/news", label: "News" },
    { href: "/missions", label: "Our Missions" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
        <div
          className={`
            mx-auto flex h-16 max-w-7xl items-center justify-between
            rounded-2xl border border-white/10 backdrop-blur-2xl px-6
            transition-all duration-300
            ${scrolled ? "bg-surface/80 shadow-[0_8px_40px_rgba(14,165,233,0.08)]" : "bg-surface/40 shadow-none"}
          `}
        >
          <Link href="/" className="group">
            <h1 className="text-2xl font-black tracking-[0.18em] text-text transition-opacity duration-300 group-hover:opacity-70">
              AELSA
            </h1>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  pathname === href
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
            <DashBoard />
            <Link href="/auth/register">
              <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-text transition hover:bg-surface md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed top-24 left-1/2 z-40 w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-2xl p-6 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                  pathname === href
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted hover:text-text hover:bg-surface/60"
                }`}
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

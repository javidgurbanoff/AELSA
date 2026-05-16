"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import SearchRatio from "./SearchRadio";
import { InteractiveHoverButton } from "./interactive-hover-button";
import DashBoard from "@/components/ui/Dashboard";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/news", label: "NEWS" },
    { href: "/what-we-do", label: "WHAT WE DO" },
    { href: "/statistics", label: "STATISTICS" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
        <div
          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between

            rounded-2xl

            border
            border-white/10

            bg-surface/60
            backdrop-blur-2xl

            px-6

            shadow-[0_8px_40px_rgba(14,165,233,0.08)]
          "
        >
          {/* Logo */}
          <Link href="/" className="group">
            <h1
              className="
                text-2xl
                font-black
                tracking-[0.18em]
                text-text
                transition-opacity
                duration-300
                group-hover:opacity-70
              "
            >
              AELSA
            </h1>
          </Link>

          {/* Search */}
          <div className="hidden md:block">
            <SearchRatio />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="
                  text-sm
                  font-semibold
                  tracking-wide
                  text-muted
                  transition-colors
                  duration-300
                  hover:text-primary
                "
              >
                {label}
              </Link>
            ))}

            <DashBoard />

            <Link href="/auth/register">
              <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-xl
              p-2
              text-text
              transition
              hover:bg-surface
              md:hidden
            "
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            fixed
            top-24
            left-1/2
            z-40
            w-[92%]
            -translate-x-1/2

            rounded-2xl
            border
            border-white/10

            bg-surface/80
            backdrop-blur-2xl

            p-6
            shadow-2xl
          "
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="
                  text-sm
                  font-medium
                  tracking-wide
                  text-muted
                  transition-colors
                  hover:text-text
                "
              >
                {label}
              </Link>
            ))}

            <div className="pt-4">
              <Link href="/auth/register">
                <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

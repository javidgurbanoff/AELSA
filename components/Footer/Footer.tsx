import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const quickLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Missions", href: "/missions" },
      { label: "News", href: "/news" },
      { label: "Tutorial", href: "/tutorial" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Products", href: "/products" },
      { label: "Pricing", href: "/pricing" },
      { label: "Statistics", href: "/statistics" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/about#faq" },
      { label: "Account", href: "/account" },
      { label: "Register", href: "/auth/register" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebook />, label: "Facebook", href: "#" },
  { icon: <FaTwitter />, label: "Twitter", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
  { icon: <FaGithub />, label: "GitHub", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group inline-block">
              <h2 className="text-2xl font-black tracking-[0.18em] text-text transition-opacity duration-300 group-hover:opacity-70">
                AELSA
              </h2>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Autonomous marine systems and intelligent sea technology built for
              the modern ocean.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted hover:text-primary transition-colors duration-200 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {quickLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} AELSA Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a
              href="#"
              className="hover:text-text transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-text transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

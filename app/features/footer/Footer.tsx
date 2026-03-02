import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { title: "About Us", links: ["Company", "Team", "Career", "Blog"] },
    {
      title: "Services",
      links: ["Web Design", "Development", "Marketing", "Consulting"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "FAQ", "Community"],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook", href: "#" },
    { icon: <FaTwitter />, label: "Twitter", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { icon: <FaGithub />, label: "GitHub", href: "#" },
  ];

  return (
    <footer className=" text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="group">
                <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#38BDF8] to-[#0FB9B1] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  AELSA
                </div>
              </Link>
            </div>
            <p className="text-sm">
              Empowering innovation through cutting-edge technology solutions
              and exceptional service.
            </p>
          </div>

          {quickLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <p>© {new Date().getFullYear()} TechCorp. All rights reserved.</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

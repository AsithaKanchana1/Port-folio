import React from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiHeart,
  FiFacebook,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/AsithaKanchana1",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/asithakanchana/",
    label: "LinkedIn",
  },
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/asithakanchana01",
    label: "Facebook",
  },
  {
    icon: FiYoutube,
    href: "https://youtube.com/@ASI_SOLUTION",
    label: "YouTube",
  },
  { icon: FaWhatsapp, href: "https://wa.me/94701336364", label: "WhatsApp" },
  { icon: FiMail, href: "mailto:asitha.contact.me@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-xs">
                A
              </span>
              <span className="font-bold text-gray-900 dark:text-white">
                Asitha<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Software Engineering student passionate about building innovative
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.page ? (
                    <Link
                      to={link.page}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                asitha.contact.me@gmail.com
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sri Lanka 🇱🇰
              </p>
              <p className="text-sm text-accent font-medium">
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            © {currentYear} Asitha Kanchana. Made with{" "}
            <FiHeart size={11} className="text-red-400" />
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 dark:text-gray-500 hover:text-accent dark:hover:text-accent hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

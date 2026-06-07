import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

// Circular avatar — uses public/profile.jpg, falls back to initials
const NavAvatar = () => {
  const [err, setErr] = useState(false);
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-accent shrink-0">
      {!err ? (
        <img
          src="/profile.jpg"
          alt="Asitha"
          className="w-full h-full object-cover object-top"
          onError={() => setErr(true)}
        />
      ) : (
        <div className="w-full h-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
      )}
    </div>
  );
};

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog", isPage: true },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const scrollTo = (id) => {
    if (!isHomePage) return; // handled by Link
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const renderLink = (link, isMobile = false) => {
    const baseClass = isMobile
      ? "block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      : "text-sm font-medium transition-colors duration-200 hover:text-accent";

    const activeClass = "text-accent";
    const inactiveClass = "text-gray-600 dark:text-gray-300";

    if (link.isPage) {
      const active = location.pathname.startsWith("/blog");
      return (
        <Link
          key={link.id}
          to="/blog"
          onClick={() => setMobileOpen(false)}
          className={`${baseClass} ${active ? activeClass : inactiveClass}`}
        >
          {link.label}
        </Link>
      );
    }

    if (!isHomePage) {
      return (
        <Link
          key={link.id}
          to="/"
          onClick={() => setMobileOpen(false)}
          className={`${baseClass} ${inactiveClass}`}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <button
        key={link.id}
        onClick={() => scrollTo(link.id)}
        className={`${baseClass} ${inactiveClass} cursor-pointer`}
      >
        {link.label}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <NavAvatar />
          <span className="font-bold text-gray-900 dark:text-white text-base">
            Asitha<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => renderLink(link))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Resume */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            <FiDownload size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => renderLink(link, true))}
          </nav>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            <FiDownload size={14} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

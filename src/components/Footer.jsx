/**
 * Footer.jsx - Professional Portfolio Footer Component
 * 
 * Provides a comprehensive footer with:
 * - Brand information and personal summary
 * - Quick navigation links
 * - Social media integration
 * - Contact information
 * - Copyright and legal links
 * 
 * Features:
 * - Responsive 3-column layout (1 column on mobile)
 * - Smooth scroll animations
 * - Professional styling with dark theme
 * - Social media integration
 * - Proper semantic HTML structure
 * 
 * Dependencies:
 * - framer-motion: For entrance animations
 * - SocialMediaBar: For social media icons
 * - Assets: Logo and branding elements
 */

import React from "react";
import { motion } from "framer-motion";
import { SocialMediaBar } from "./SocialMedia";
import { logo } from "../assets";

/**
 * Main Footer Component
 * 
 * Layout structure:
 * - Brand section: Logo, name, and personal description
 * - Quick links: Navigation to main sections
 * - Contact & Social: Social media and contact info
 * - Bottom section: Copyright and legal links
 */
const Footer = () => {
  // Dynamic copyright year - automatically updates each year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content - Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section - Company/Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Logo and Name */}
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
              <p className="text-white text-lg font-bold">
                ASITHA KANCHANA
              </p>
            </div>
            
            {/* Personal Description */}
            <p className="text-secondary text-sm text-center md:text-left max-w-xs">
              Software Engineering Student passionate about creating innovative solutions 
              and learning new technologies.
            </p>
          </motion.div>

          {/* Quick Links Section - Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-center">
              {/* Internal navigation links - smooth scroll to sections */}
              <a href="#about" className="text-secondary hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#work" className="text-secondary hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#contact" className="text-secondary hover:text-white transition-colors duration-300">
                Contact
              </a>
              {/* External link - opens resume in new tab */}
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Social Media & Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            
            {/* Social Media Icons */}
            <div className="mb-4">
              <SocialMediaBar size="md" justify="center" gap="gap-3" />
            </div>
            
            {/* Contact Information */}
            <div className="text-secondary text-sm text-center md:text-right">
              <p className="mb-1">asitha.contact.me@gmail.com</p>
              <p>Available for opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800/50 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center"
        >
          {/* Copyright Notice */}
          <p className="text-secondary text-sm">
            © {currentYear} Asitha Kanchana. All rights reserved.
          </p>
          
          {/* Legal Links - Placeholder for future legal pages */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-secondary hover:text-white text-xs transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary hover:text-white text-xs transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

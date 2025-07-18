/**
 * Hero.jsx - Portfolio Hero Section Component
 * 
 * The hero section is the first thing visitors see on the portfolio.
 * It combines personal branding with interactive elements and social media.
 * 
 * Features:
 * - Dynamic typewriter effect showcasing skills
 * - Social media integration for immediate connection
 * - 3D computer model for visual appeal
 * - Scroll indicator to guide user navigation
 * - Responsive design for all screen sizes
 * 
 * Layout structure:
 * - Left side: Introduction text, skills, social media
 * - Right side: 3D computer canvas
 * - Bottom: Scroll indicator
 * 
 * Dependencies:
 * - typewriter-effect: For dynamic text animation
 * - framer-motion: For smooth animations
 * - SocialMediaBar: For social media icons
 * - ComputersCanvas: For 3D computer model
 */

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SocialMediaBar } from "./SocialMedia";
import Typewriter from "typewriter-effect";

/**
 * Main Hero Component
 * 
 * Creates an engaging first impression with:
 * - Personal introduction and branding
 * - Dynamic skill showcase via typewriter effect
 * - Social media links for immediate connection
 * - Interactive 3D elements
 * - Clear navigation guidance
 */
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      {/* Main Content Container */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        
        {/* Decorative Line Element */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />  {/* Purple dot */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />   {/* Gradient line */}
        </div>

        {/* Main Text Content */}
        <div>
          {/* Main Heading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Asitha</span>
          </h1>
          
          {/* Dynamic Subheading with Skills Showcase */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do
            <Typewriter
              options={{
                strings: ["Mobile App Development", "Web Development", "Ai & ML"],
                autoStart: true,        // Start animation immediately
                loop: true,             // Repeat infinitely
                loopCount: Infinity,    // Infinite loops
                deleteSpeed: "natural", // Natural typing speed for deletion
                pauseFor: 1000,         // Pause between skill changes (1 second)
              }}
            />
          </p>
          
          {/* Social Media Links - Early Connection Opportunity */}
          <motion.div 
            className="mt-8"
            // Delayed entrance animation for better flow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <SocialMediaBar 
              size="md"           // Medium-sized icons
              gap="gap-4"         // Comfortable spacing
              justify="start"     // Left-aligned with text
            />
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Model - Visual Interest */}
      <ComputersCanvas />

      {/* Scroll Indicator - User Navigation Guide */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">  {/* Smooth scroll to About section */}
          {/* Scroll indicator container */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* Animated scroll dot */}
            <motion.div
              animate={{
                y: [0, 24, 0],  // Bounce animation (up-down-up)
              }}
              transition={{
                duration: 1.5,      // Animation duration
                repeat: Infinity,   // Infinite repeat
                repeatType: "loop", // Loop animation
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

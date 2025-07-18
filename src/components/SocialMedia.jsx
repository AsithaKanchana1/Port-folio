/**
 * SocialMedia.jsx - Comprehensive Social Media Integration Component
 * 
 * This component provides multiple ways to display social media links across the portfolio:
 * - Horizontal bars for sections like Hero and Footer
 * - Contact section with call-to-action buttons
 * - Optional floating sidebar
 * - Grid layout for dedicated social media pages
 * 
 * Features:
 * - Responsive design for all screen sizes
 * - Smooth animations with Framer Motion
 * - Touch-friendly mobile interactions
 * - Accessibility support with proper ARIA labels
 * - Customizable sizing, spacing, and alignment
 * 
 * Dependencies:
 * - react-icons/fa: Font Awesome icons for better cross-platform compatibility
 * - framer-motion: For smooth animations and interactions
 * - tailwindcss: For responsive styling
 */

import React from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedin,   // LinkedIn icon
  FaGithub,     // GitHub icon
  FaFacebook,   // Facebook icon
  FaYoutube,    // YouTube icon
  FaWhatsapp,   // WhatsApp icon
  FaInstagram,  // Instagram icon
  FaTwitter     // Twitter/X icon
} from "react-icons/fa";

/**
 * Social Media Links Configuration
 * 
 * To update your social media links:
 * 1. Replace the URL with your actual profile link
 * 2. Keep the same structure for consistency
 * 3. Colors follow each platform's brand guidelines
 * 
 * URL Format Examples:
 * - LinkedIn: https://www.linkedin.com/in/your-username/
 * - GitHub: https://github.com/your-username
 * - YouTube: https://youtube.com/@your-channel-name
 * - WhatsApp: https://wa.me/your-phone-number (include country code, no + or spaces)
 * - Facebook: https://facebook.com/your-profile
 * - Instagram: https://instagram.com/your-username
 * - Twitter: https://twitter.com/your-username
 */
const socialMediaLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/asithakanchana/", //LinkedIn Profile Link
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-blue-600 hover:bg-blue-700",  // LinkedIn brand blue background
    borderColor: "border-blue-500"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/AsithaKanchana1", // GitHub Profile Link
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-gray-700 hover:bg-gray-600",  // GitHub dark background
    borderColor: "border-gray-600"
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/share/14EaKhgas5L/", //  Facebook profile Link
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-blue-500 hover:bg-blue-600",  // Facebook brand blue
    borderColor: "border-blue-400"
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com/@ASI_SOLUTION", // YouTube channel Link
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-red-600 hover:bg-red-700",    // YouTube brand red
    borderColor: "border-red-500"
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/94701336364", //WhatsApp Number (Sri Lanka +94)
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-green-600 hover:bg-green-700",  // WhatsApp brand green
    borderColor: "border-green-500"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "#", // TODO: Replace Instagram profile Link (Currently im not active)
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",  // Instagram gradient
    borderColor: "border-pink-400"
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "#", // ⚠️ TODO: Replace with your Twitter/X profile
    color: "text-white",              // White icons for better contrast
    bgColor: "bg-sky-500 hover:bg-sky-600",    // Twitter brand light blue
    borderColor: "border-sky-400"
  }
];

/**
 * Individual Social Media Button Component
 * 
 * This is the core reusable component that renders each social media icon.
 * It handles animations, interactions, and responsive sizing.
 * 
 * Props:
 * @param {Object} social - Social media object containing icon, url, colors
 * @param {number} index - Position in array (used for staggered animations)
 * @param {string} size - Size variant: 'sm', 'md', 'lg', 'xl'
 * @param {boolean} showLabel - Whether to show platform name on hover
 * 
 * Features:
 * - Touch-friendly sizing (minimum 40px for good UX)
 * - Staggered entrance animations
 * - Hover and tap interactions
 * - Accessibility with proper ARIA labels
 * - React Icons for cross-platform compatibility
 */
const SocialButton = ({ social, index, size = "md", showLabel = false }) => {
  // Responsive button sizes - ensures touch-friendly targets on mobile  
  const sizeClasses = {
    sm: "w-8 h-8 p-1.5 sm:w-10 sm:h-10 sm:p-2",     // 32px mobile, 40px desktop
    md: "w-10 h-10 p-2 sm:w-12 sm:h-12 sm:p-2.5",   // 40px mobile, 48px desktop
    lg: "w-12 h-12 p-2.5 sm:w-16 sm:h-16 sm:p-3",   // 48px mobile, 64px desktop
    xl: "w-16 h-16 p-3 sm:w-20 sm:h-20 sm:p-4"      // 64px mobile, 80px desktop
  };

  // Icon sizes using Tailwind's text sizing for consistency with responsive behavior
  const iconSizes = {
    sm: "text-sm sm:text-lg",    // 14px mobile, 18px desktop
    md: "text-lg sm:text-2xl",   // 18px mobile, 24px desktop
    lg: "text-xl sm:text-3xl",   // 20px mobile, 30px desktop
    xl: "text-2xl sm:text-4xl"   // 24px mobile, 36px desktop
  };

  // Get the React Icon component from the social media object
  const IconComponent = social.icon;

  // Prevent rendering if URL is empty or just hash
  if (!social.url || social.url === "#") {
    return null;
  }

  return (
    <motion.a
      href={social.url}
      target="_blank"  // Opens in new tab
      rel="noopener noreferrer"  // Security best practice for external links
      className={`
        ${sizeClasses[size]} 
        ${social.color}     // White text for all icons
        ${social.bgColor}   // Platform-specific colored backgrounds
        border-2 ${social.borderColor}  // Platform-specific colored borders
        flex items-center justify-center
        relative            // For absolute positioned glow effect
        rounded-full        // Circular buttons
        transition-all duration-300  // Smooth transitions
        hover:scale-110     // Slight scale on hover
        hover:shadow-2xl    // Strong shadow on hover
        group               // For child element hover states
        shadow-lg shadow-black/30  // Strong shadow for definition
        overflow-hidden     // Hide glow overflow
        ${showLabel ? 'flex-col gap-1 py-3' : ''}  // Vertical layout for labels
      `.replace(/\s+/g, ' ').trim()}  // Clean up whitespace
      // Entrance animation - slides up with opacity fade
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.15,  // Increased staggered animation delay
        duration: 0.5,        // Longer animation duration
        type: "spring",       // Spring animation for bounce effect
        stiffness: 100,       // Spring stiffness
        damping: 15           // Spring damping for smooth finish
      }}
      // Enhanced interaction animations
      whileHover={{ 
        scale: 1.15,          // Larger scale on hover
        y: -5,                // Lift effect on hover
        transition: { duration: 0.2 }
      }}    
      whileTap={{ 
        scale: 0.9,           // More pronounced shrink on tap
        y: 0,                 // Reset lift on tap
        transition: { duration: 0.1 }
      }}
      aria-label={`Visit ${social.name} profile`}  // Accessibility
    >
      <IconComponent 
        className={`${iconSizes[size]} transition-all duration-300 drop-shadow-lg relative z-10`}
        style={{ filter: 'none' }}  // Ensure no filters are applied
      />
      
      {showLabel && (
        <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
          {social.name}
        </span>
      )}
      
      {/* Animated background glow effect - moved to pseudo-element to avoid nesting issues */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${social.name === 'LinkedIn' ? '#0077b5' : 
                                                  social.name === 'GitHub' ? '#333' :
                                                  social.name === 'Facebook' ? '#1877f2' :
                                                  social.name === 'YouTube' ? '#ff0000' :
                                                  social.name === 'WhatsApp' ? '#25d366' :
                                                  social.name === 'Instagram' ? '#e4405f' :
                                                  social.name === 'Twitter' ? '#1da1f2' : '#fff'} 0%, transparent 70%)`
        }}
      />
    </motion.a>
  );
};

/**
 * Horizontal Social Media Bar Component
 * 
 * Used in: Hero section, Footer, and other horizontal layouts
 * Perfect for displaying social media icons in a row
 * Features responsive horizontal scrolling to prevent mobile overflow
 * 
 * Mobile Behavior:
 * - Icons remain in single horizontal row
 * - Smooth horizontal scrolling when icons exceed screen width
 * - Hidden scrollbars for clean appearance
 * - Snap scrolling for better user experience
 * - Touch-friendly momentum scrolling on iOS
 * 
 * Props:
 * @param {string} size - Icon size: 'sm', 'md', 'lg', 'xl'
 * @param {boolean} showLabels - Show platform names below icons
 * @param {string} className - Additional CSS classes
 * @param {string} justify - Flexbox justification: 'start', 'center', 'end', 'between'
 * @param {string} gap - Spacing between icons: 'gap-2', 'gap-4', 'gap-6', etc.
 * @param {boolean} responsive - Enable responsive horizontal scrolling (default: true)
 */
export const SocialMediaBar = ({ 
  size = "md", 
  showLabels = false, 
  className = "",
  justify = "center",
  gap = "gap-4",
  responsive = true
}) => {
  // Flexbox justify-content options for different alignments
  const justifyClasses = {
    start: "justify-start",      // Left aligned
    center: "justify-center",    // Center aligned (default)
    end: "justify-end",          // Right aligned
    between: "justify-between"   // Spaced evenly with space between
  };

  // Filter out social media links with empty or placeholder URLs
  const validSocialLinks = socialMediaLinks.filter(social => 
    social.url && social.url !== "#" && social.url.trim() !== ""
  );

  // Responsive classes to handle mobile overflow with horizontal scrolling
  const responsiveClasses = responsive 
    ? "flex flex-nowrap overflow-x-auto scrollbar-hide max-w-full px-2 snap-x snap-mandatory " + justifyClasses[justify]
    : "flex " + justifyClasses[justify];

  return (
    <motion.div 
      className={`${responsiveClasses} ${gap} ${className}`}
      // Container entrance animation
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {validSocialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          className="flex-shrink-0 snap-center"  // Prevent shrinking and enable snap points
          // Staggered entrance animation for each icon
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          <SocialButton 
            social={social}
            index={index}
            size={size}
            showLabel={showLabels}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Vertical Social Media Sidebar Component
 * 
 * Creates a floating sidebar with social media icons
 * Useful for persistent social media access across the site
 * Currently commented out in App.jsx but can be enabled
 * 
 * Props:
 * @param {string} position - Sidebar position: 'left' or 'right'
 * @param {string} size - Icon size
 * @param {string} className - Additional CSS classes
 * 
 * Features:
 * - Fixed positioning (stays in place while scrolling)
 * - Centered vertically on screen
 * - Entrance animation from the side
 * - High z-index to stay above other content
 */
export const SocialMediaSidebar = ({ 
  position = "left", 
  size = "md",
  className = "" 
}) => {
  // Position classes for left or right side placement
  const positionClasses = {
    left: "left-4",   // 16px from left edge
    right: "right-4"  // 16px from right edge
  };

  return (
    <motion.div 
      className={`
        fixed ${positionClasses[position]} top-1/2 transform -translate-y-1/2 z-40
        flex flex-col gap-3 ${className}
      `}
      // Slides in from the side with opacity fade
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}  // Delayed entrance for better UX
    >
      {socialMediaLinks.map((social, index) => (
        <SocialButton 
          key={social.name}
          social={social}
          index={index}
          size={size}
        />
      ))}
    </motion.div>
  );
};

/**
 * Social Media Grid Component
 * 
 * Displays social media icons in a grid layout
 * Useful for dedicated social media sections or larger displays
 * 
 * Props:
 * @param {number} columns - Number of columns: 2, 3, 4, 5, 6, 7
 * @param {string} size - Icon size
 * @param {boolean} showLabels - Show platform names
 * @param {string} className - Additional CSS classes
 * 
 * Responsive behavior:
 * - Grid adapts to screen size
 * - Icons maintain touch-friendly sizes
 * - Proper spacing for readability
 */
export const SocialMediaGrid = ({ 
  columns = 4, 
  size = "lg", 
  showLabels = true,
  className = "" 
}) => {
  // Grid column classes for different layouts
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3", 
    4: "grid-cols-4",   // Default - works well for most cases
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7"
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {socialMediaLinks.map((social, index) => (
        <SocialButton 
          key={social.name}
          social={social}
          index={index}
          size={size}
          showLabel={showLabels}
        />
      ))}
    </div>
  );
};

/**
 * Contact Social Media Section Component
 * 
 * Special component designed for the Contact section
 * Combines social media icons with call-to-action messaging
 * Features enhanced animations and mobile-responsive layout
 * 
 * Features:
 * - Engaging headline and description with entrance animations
 * - Large, prominent social media icons with staggered animations
 * - Quick WhatsApp contact button for instant messaging
 * - Mobile-responsive layout that prevents overflow
 * - Optimized spacing and enhanced animations
 * 
 * Usage: Placed below the contact form to provide alternative contact methods
 * 
 * Props:
 * @param {string} className - Additional CSS classes
 */
export const ContactSocialMedia = ({ className = "" }) => {
  return (
    <motion.div 
      className={`text-center ${className}`}
      // Enhanced entrance animation - slides up with opacity fade
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: 0.3, 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {/* Section Heading with typewriter effect */}
      <motion.h3 
        className="text-white text-xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Let's Connect!
      </motion.h3>
      
      {/* Encouraging description with slide-in animation */}
      <motion.p 
        className="text-secondary text-sm mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Feel free to reach out through any of these platforms
      </motion.p>
      
      {/* Social Media Icons - responsive layout with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
      >
        <SocialMediaBar 
          size="lg" 
          gap="gap-3 sm:gap-6"  // Smaller gap on mobile, larger on desktop
          responsive={true}     // Enable mobile-responsive behavior
          className="mb-6"
        />
      </motion.div>
      
      {/* Quick Contact Button - WhatsApp for instant messaging */}
      <motion.div 
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="https://wa.me/94701336364" // User's actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm font-medium shadow-lg"
          // Enhanced interactive animations
          whileHover={{ 
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
          }}   
          whileTap={{ 
            scale: 0.95,
            y: 0
          }}
          // Floating animation
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💬 Quick WhatsApp Chat
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

/**
 * Main Social Media Component (Default Export)
 * 
 * This is a versatile component that can render different variants
 * based on the 'variant' prop. Acts as a component factory.
 * 
 * Variants:
 * - 'bar': Horizontal bar (default)
 * - 'sidebar': Floating sidebar
 * - 'grid': Grid layout
 * - 'contact': Contact section with call-to-action
 * 
 * Usage Examples:
 * <SocialMedia /> // Default horizontal bar
 * <SocialMedia variant="sidebar" position="left" />
 * <SocialMedia variant="grid" columns={3} />
 * <SocialMedia variant="contact" />
 * 
 * Props:
 * @param {string} variant - Component variant to render
 * @param {...props} props - Additional props passed to the selected variant
 */
const SocialMedia = ({ variant = "bar", ...props }) => {
  switch (variant) {
    case "sidebar":
      return <SocialMediaSidebar {...props} />;
    case "grid":
      return <SocialMediaGrid {...props} />;
    case "contact":
      return <ContactSocialMedia {...props} />;
    default:
      return <SocialMediaBar {...props} />;
  }
};

export default SocialMedia;
import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable TechCard Component
 * A beautiful animated card for displaying technology/skill icons
 * 
 * Dependencies:
 * - framer-motion (for animations)
 * - tailwindcss (for styling)
 * 
 * Usage:
 * <TechCard 
 *   name="React" 
 *   icon="/path/to/react-icon.png" 
 *   index={0} 
 *   size="md" 
 *   theme="purple" 
 * />
 */

const TechCard = ({ 
  name, 
  icon, 
  index = 0, 
  size = "md", 
  theme = "purple",
  delay = 0.1,
  className = "",
  onClick = null 
}) => {
  // Size variants
  const sizeVariants = {
    sm: "w-20 h-20",
    md: "w-28 h-28", 
    lg: "w-36 h-36",
    xl: "w-44 h-44"
  };

  // Icon size variants
  const iconSizeVariants = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16", 
    xl: "w-20 h-20"
  };

  // Theme variants
  const themeVariants = {
    purple: "from-purple-600 to-blue-600",
    green: "from-green-600 to-teal-600",
    orange: "from-orange-600 to-red-600",
    pink: "from-pink-600 to-purple-600",
    blue: "from-blue-600 to-cyan-600",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    cyberpunk: "from-cyan-400 via-purple-500 to-pink-500",
    gold: "from-yellow-500 to-orange-600",
    matrix: "from-green-400 to-green-600",
    fire: "from-red-500 via-orange-500 to-yellow-500"
  };

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * delay,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeVariants[size]} relative group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${themeVariants[theme]} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
      
      {/* Card content */}
      <div className="relative w-full h-full bg-gray-900 rounded-xl border border-gray-800 p-4 flex flex-col items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
        {/* Icon */}
        <motion.img 
          src={icon} 
          alt={name} 
          className={`${iconSizeVariants[size]} object-contain mb-2 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Name */}
        <p className="text-white text-xs text-center font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

/**
 * TechCardGrid Component
 * Grid layout for multiple TechCards with staggered animations
 */
export const TechCardGrid = ({ 
  technologies, 
  columns = "auto", 
  gap = "gap-6",
  size = "md",
  theme = "purple",
  className = ""
}) => {
  const gridCols = {
    auto: "grid-cols-auto-fit",
    2: "grid-cols-2",
    3: "grid-cols-3", 
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6"
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gap} justify-items-center ${className}`}>
      {technologies.map((tech, index) => (
        <TechCard
          key={tech.name}
          name={tech.name}
          icon={tech.icon}
          index={index}
          size={size}
          theme={theme}
        />
      ))}
    </div>
  );
};

/**
 * Alternative: Flex layout for TechCards
 */
export const TechCardFlex = ({ 
  technologies, 
  justify = "center",
  wrap = true,
  gap = "gap-6",
  size = "md", 
  theme = "purple",
  className = ""
}) => {
  const justifyVariants = {
    start: "justify-start",
    center: "justify-center", 
    end: "justify-end",
    between: "justify-between",
    around: "justify-around"
  };

  return (
    <div className={`flex ${justifyVariants[justify]} ${wrap ? 'flex-wrap' : ''} ${gap} ${className}`}>
      {technologies.map((tech, index) => (
        <TechCard
          key={tech.name}
          name={tech.name}
          icon={tech.icon}
          index={index}
          size={size}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default TechCard;

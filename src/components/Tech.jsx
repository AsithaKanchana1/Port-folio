import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import TechCard from "./ui/TechCard";

const Tech = () => (
  <div>
    <motion.div variants={textVariant()} className="mb-10">
      <p className={`${styles.sectionSubText} text-center`}>
        What I work with
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies
      </h2>
    </motion.div>
    
    <div className="flex flex-row flex-wrap justify-center gap-6">
      {technologies.map((technology, index) => (
        <TechCard 
          key={technology.name} 
          name={technology.name}
          icon={technology.icon}
          index={index}
          size="lg"           // Options: sm, md, lg, xl
          theme="cyberpunk"   // Options: purple, green, orange, pink, blue, gradient, cyberpunk, gold, matrix, fire
          delay={0.15}        // Stagger delay between cards
        />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Tech, "");

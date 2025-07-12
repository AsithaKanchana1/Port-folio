import { Link } from "react-router-dom";
import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  // tailwind,
  nodejs,
  hiddensrilanka,
  androidstudio,
  canva,
  docker,
  figma,
  brain,
  linux,
  vstudio,
  typescript,
  gitHub,
  git,
  ethicalhacker,
  ousl,
  manim,
  
} from "../assets";
import { b } from "maath/dist/index-0332b2ed.esm";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "FRONT END", icon: reactjs },
  { title: "ANDROID DEV", icon: androidstudio },
  { title: "CONTANRIZATION", icon: docker },
  { title: "UI/UX DESIGN", icon: figma },
  { title: "TECHNICAL SUPPORT", icon: brain },
];

export const technologies = [
  { name: "ANDROID", icon: androidstudio },
  { name: "LINUX", icon: linux },
  { name: "DOCKER", icon: docker },
  { name: "GITHUB", icon: gitHub },
  { name: "JAVA", icon: java },
  { name: "PYTHON", icon: python },
  { name: "FIGMA", icon: figma },
  { name: "CANVA", icon: canva },
  { name: ".NET", icon: vstudio },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "TYPE SCRIPT", icon: typescript },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  // Custermize to My Needs 
  //ousl
  {
    title: "Studying Software Engineering",
    company_name: "Cisco Networking Academy",
    icon: ousl,
    iconBg: "#161329",
    date: "Jan 2024 - On-Going",
    link: "#", // <-- Add your URL here
    points: [
      "Enrolled in the Bachelor of Software Engineering program at the Open University of Sri Lanka,",
      "actively completing second-year coursework in advanced programming and system architecture.",
    ],
  },
  //Cisco Ethical Hacker Badge
  {
    title: "Cisco Certified Ethical Hacker",
    company_name: "Cisco Networking Academy",
    icon: ethicalhacker,
    iconBg: "#161329",
    date: "8th July 2025",
    link: "https://www.credly.com/badges/0be5c035-e2b8-4b8b-8bd0-a51e3ff5317a/public_url", // <-- Add URL here
    points: [
      "Gained a solid foundation in network security...",
      "covering key topics like threat intelligence...",
    ],
  },

  // add more content here
];

export const projects = [
  // project section
  //Hidden SriLanka
  {
    name: "Hidden Sri Lanka",
    description:
      "Android Native app that allows users to explore hidden traveling places in Sri Lanka by suggesting based on user location",
    tags: [
      { name: "Android", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "FireBase", color: "pink-text-gradient" },
      { name: "University Project", color: "yellow-text-gradient" },
    ],
    image: hiddensrilanka,
    source_code_link: "https://github.com/AsithaKanchana1/Hidden-Sri-Lanka",
  },
  {
    name: "Manim Custom Script",
    description:
      "A custom script for Manim that generates animations based on user input, allowing for dynamic and interactive visualizations",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Manim", color: "green-text-gradient" },
      { name: "Script", color: "yellow-text-gradient" },
    ],
    image: manim,
    source_code_link: "https://github.com/AsithaKanchana1/Manim_SVG_Animation",
  },

];

/**
 * Contact.jsx - Contact Form and Social Media Integration
 * 
 * This component provides a comprehensive contact solution:
 * - Professional contact form with validation
 * - EmailJS integration for form submissions
 * - 3D Earth canvas for visual appeal
 * - Social media integration for alternative contact methods
 * 
 * Features:
 * - Real-time form validation
 * - Email format validation
 * - Loading states with user feedback
 * - Success/error messaging
 * - Responsive layout (stacked on mobile, side-by-side on desktop)
 * - Social media links for alternative contact options
 * 
 * Dependencies:
 * - @emailjs/browser: For sending emails from the client-side
 * - framer-motion: For smooth animations
 * - React hooks: useState, useRef for form management
 */

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ContactSocialMedia } from "./SocialMedia";
import "../index.css";

/**
 * Reusable Input Field Component
 * 
 * Creates consistent form inputs with proper styling and accessibility
 * 
 * Props:
 * @param {string} label - Display label for the input
 * @param {string} value - Current input value
 * @param {function} onChange - Change handler function
 * @param {string} placeholder - Placeholder text
 * @param {string} name - Input name attribute
 * @param {string} type - Input type (text, email, etc.)
 */
const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

/**
 * Main Contact Component
 * 
 * Handles the complete contact experience including:
 * - Form state management
 * - Email validation and submission
 * - User feedback and error handling
 * - Integration with EmailJS service
 * - Social media contact alternatives
 */
const Contact = () => {
  // Form reference for EmailJS submission
  const formRef = useRef();
  
  // Form state management
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // UI state management
  const [loading, setLoading] = useState(false);      // Submission loading state
  const [emailError, setEmailError] = useState("");  // Email validation errors
  const [nameError, setNameError] = useState("");    // Name validation errors
  const [confirmation, setConfirmation] = useState("");  // Success/error messages

  /**
   * Handles form input changes
   * Updates the form state when user types in any field
   * 
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  /**
   * Validates email format using regex
   * Ensures proper email structure before submission
   * 
   * @param {string} email - Email address to validate
   * @returns {boolean} - True if email is valid
   */
  const validateEmail = (email) => {
    // Standard email validation regex
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  /**
   * Handles form submission
   * Validates inputs, sends email via EmailJS, and provides user feedback
   * 
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors and messages
    setEmailError("");
    setNameError("");
    setConfirmation("");

    // Client-side validation
    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    // Start loading state
    setLoading(true);

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,    // EmailJS service ID (from env)
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // EmailJS template ID (from env)
        {
          from_name: form.name,                     // Sender's name
          to_name: "Asitha Kanchana",              // Recipient name (you)
          from_email: form.email,                   // Sender's email
          to_email: "asitha.contact.me@gmail.com", // Your email address
          message: form.message,                    // Message content
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // EmailJS public key (from env)
      )
      .then(
        () => {
          // Success: email sent successfully
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");

          // Clear form after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        // Error: email sending failed
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  /**
   * Component Render
   * 
   * Layout structure:
   * 1. Main contact section with form and 3D Earth
   * 2. Social media section below for alternative contact methods
   * 
   * Responsive behavior:
   * - Desktop: Form and Earth side-by-side
   * - Mobile: Stacked vertically (form on top, Earth below)
   */
  return (
    <>
      {/* Main Contact Section */}
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        
        {/* Contact Form Section */}
        <motion.div 
          variants={slideIn("left", "tween", 0.2, 1)} 
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Section Header */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me</h3>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            
            {/* Name Input Field */}
            <InputField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Insert Your name here..."
              type="text"
            />
            {/* Name validation error display */}
            {nameError && <span className="text-red-500">{nameError}</span>}

            {/* Email Input Field */}
            <InputField
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              type="email"
            />
            {/* Email validation error display */}
            {emailError && <span className="text-red-500">{emailError}</span>}

            {/* Message Input Field */}
            <InputField
              label="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say...?"
              type="text"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            
            {/* Success/Error Message Display */}
            {confirmation && <p className="text-green-500">{confirmation}</p>}
          </form>
        </motion.div>

        {/* 3D Earth Canvas Section */}
        <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)} 
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      
      {/* Social Media Contact Section */}
      {/* Provides alternative contact methods below the main form */}
      <div className="mt-16">
        <ContactSocialMedia />
      </div>
    </>
  );
};

/**
 * Export Contact component wrapped with SectionWrapper HOC
 * 
 * SectionWrapper provides:
 * - Consistent section styling and spacing
 * - Scroll-triggered animations
 * - Section ID for navigation
 * - Responsive padding and layout
 * 
 * The "contact" ID allows navigation links to scroll to this section
 */
export default SectionWrapper(Contact, "contact");

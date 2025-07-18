/**
 * App.jsx - Main Portfolio Application Component
 * 
 * This is the root component that orchestrates the entire portfolio.
 * It handles routing, layout structure, and component composition.
 * 
 * Structure:
 * 1. Hero section with introduction and 3D elements
 * 2. About section with personal overview
 * 3. Experience timeline
 * 4. Technologies showcase
 * 5. Projects portfolio
 * 6. Contact form with social media
 * 7. Professional footer
 * 
 * Features:
 * - Single-page application (SPA) with smooth scrolling
 * - Responsive design for all screen sizes
 * - Optional floating social media sidebar
 * - Background hero pattern
 * - Consistent dark theme throughout
 * 
 * Dependencies:
 * - react-router-dom: For future routing capabilities
 * - All portfolio components
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works, Footer, SocialMedia } from './components';

/**
 * Main App Component
 * 
 * Assembles all portfolio sections in the proper order
 * with consistent styling and responsive behavior
 */
const App = () => {
  return (
    <BrowserRouter
      future={{
        // React Router v7 compatibility flags
        v7_startTransition: true,    // Enable concurrent features
        v7_relativeSplatPath: true,  // New relative path handling
      }}
    >
      <div className="relative z-0 bg-primary">
        
        {/* Optional: Fixed Social Media Sidebar */}
        {/* Uncomment the line below to enable a floating social media sidebar */}
        {/* Provides persistent access to social media across all sections */}
        {/* <SocialMedia variant="sidebar" position="left" size="md" /> */}
        
        {/* Hero Section with Background Pattern */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />  {/* Navigation bar with links and resume */}
          <Hero />    {/* Main introduction with 3D computer and social media */}
        </div>
        
        {/* Main Content Sections */}
        <About />      {/* Personal overview and service cards */}
        <Experience /> {/* Timeline of education and certifications */}
        <Tech />       {/* Technology skills showcase */}
        <Works />      {/* Project portfolio with descriptions */}
        
        {/* Contact Section with Earth Canvas */}
        <div className="relative z-0">
          <Contact />    {/* Contact form and social media options */}
          {/* Optional: Animated stars background */}
          {/* <StarsCanvas /> */}
        </div>
        
        {/* Professional Footer */}
        <Footer />  {/* Brand info, quick links, social media, and copyright */}
      </div>
    </BrowserRouter>
  );
};

export default App;

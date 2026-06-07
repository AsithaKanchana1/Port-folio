import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Core components loaded eagerly
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Works from "./components/Works";
import BlogSection from "./components/BlogSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Blog pages loaded lazily — only fetched when user navigates to /blog
const BlogListPage = lazy(() => import("./pages/BlogListPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

// Simple loading skeleton shown while lazy chunks load
const PageLoader = () => (
  <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      <p className="text-sm text-gray-400 dark:text-gray-500">Loading...</p>
    </div>
  </div>
);

// Main single-page portfolio
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Works />
    <BlogSection />
    <Contact />
    <Footer />
  </>
);

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Cloudflare _redirects handles unknown paths → index.html
                This catch-all handles any React-side mismatches */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

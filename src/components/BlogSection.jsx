import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog/index.json')
      .then(r => r.json())
      .then(data => {
        setPosts(data.slice(0, 3)); // Show only 3 most recent
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              05 — Writing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-2">
              Blog
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
              Thoughts on software engineering, projects, and learning.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors whitespace-nowrap shrink-0"
          >
            All posts <FiArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Posts */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 1, 2].map(i => (
              <div key={i} className="h-40 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 text-gray-400 dark:text-gray-500">
            <p>No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Tag */}
                  {post.tags?.[0] && (
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-accent font-medium mb-3">
                      {post.tags[0]}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={11} />
                      {formatDate(post.date)}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <FiClock size={11} />
                        {post.readTime}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile "All posts" link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all posts <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

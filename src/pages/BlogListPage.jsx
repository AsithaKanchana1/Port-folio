import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from 'react-icons/fi';

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/blog/index.json')
      .then(r => r.json())
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch { return dateStr; }
  };

  // Collect all tags
  const allTags = ['All', ...new Set(posts.flatMap(p => p.tags || []))];
  const filteredPosts = selectedTag === 'All'
    ? posts
    : posts.filter(p => (p.tags || []).includes(selectedTag));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors mb-6"
          >
            <FiArrowLeft size={14} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
            Writing about software engineering, projects, and things I learn.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Tag Filter */}
        {!loading && allTags.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag !== 'All' && <FiTag size={11} />}
                {tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="space-y-6">
            {[0, 1, 2].map(i => (
              <div key={i} className="h-32 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
            ))}
          </div>
        )}

        {/* Post List */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500">
            <p className="text-5xl mb-4">📭</p>
            <p className="font-medium">No posts found</p>
            {selectedTag !== 'All' && (
              <button
                onClick={() => setSelectedTag('All')}
                className="mt-3 text-sm text-accent hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        )}

        {!loading && filteredPosts.length > 0 && (
          <div className="space-y-4">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent/50 dark:hover:border-accent/50 bg-white dark:bg-gray-900 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Date column */}
                  <div className="shrink-0 sm:w-28">
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      <FiCalendar size={11} />
                      {formatDate(post.date)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {(post.tags || []).map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-accent font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-bold text-gray-900 dark:text-white text-lg leading-snug mb-1 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-2">
                      {post.excerpt}
                    </p>
                    {post.readTime && (
                      <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
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

        {/* Blog Writing Guide */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-6 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
              ✍️ Writing a new post?
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Add a new <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">.md</code> file to{' '}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">public/blog/</code> and add its metadata
              to{' '}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-xs">public/blog/index.json</code>. Then build and deploy!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiArrowLeft, FiCalendar, FiClock, FiTag } from "react-icons/fi";

// react-markdown v9 compatible component overrides
const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-black text-gray-900 dark:text-white mt-8 mb-4 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),
  // In react-markdown v9, `pre` wraps code blocks, `code` covers both inline and block.
  // We style `pre` as the dark block wrapper and `code` to detect inline vs block.
  pre: ({ children }) => (
    <pre className="bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-xl p-5 overflow-x-auto my-6 font-mono text-sm leading-relaxed">
      {children}
    </pre>
  ),
  code: ({ className, children }) => {
    // If className is present, this is a fenced code block (inside <pre>)
    const isBlock = Boolean(className);
    return isBlock ? (
      <code className={`${className} text-gray-200 font-mono text-sm`}>
        {children}
      </code>
    ) : (
      <code className="bg-gray-100 dark:bg-gray-800 text-accent px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200 dark:border-gray-700">
        {children}
      </code>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-5 py-2 my-6 bg-purple-50 dark:bg-purple-900/10 rounded-r-xl italic text-gray-500 dark:text-gray-400">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-1.5 my-4 text-gray-600 dark:text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-1.5 my-4 text-gray-600 dark:text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  hr: () => <hr className="border-gray-200 dark:border-gray-700 my-8" />,
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900 dark:text-white">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-600 dark:text-gray-300">{children}</em>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="rounded-xl max-w-full h-auto my-6 mx-auto border border-gray-200 dark:border-gray-700"
      loading="lazy"
    />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold px-4 py-2.5 text-left border border-gray-200 dark:border-gray-700">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="text-gray-600 dark:text-gray-300 px-4 py-2.5 border border-gray-200 dark:border-gray-700">
      {children}
    </td>
  ),
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(false);

    Promise.all([
      fetch("/blog/index.json").then((r) => r.json()),
      fetch(`/blog/${slug}.md`).then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.text();
      }),
    ])
      .then(([posts, md]) => {
        const meta = posts.find((p) => p.slug === slug);
        if (!meta) throw new Error("Not found");
        setPost(meta);
        setContent(md);
        setLoading(false);
        document.title = `${meta.title} — Asitha Kanchana`;
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    return () => {
      document.title = "Asitha Kanchana";
    };
  }, [slug]);

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 pt-24">
        <div className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-8" />
          <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
          <div className="h-4 w-48 bg-gray-100 dark:bg-gray-800/50 rounded mb-12" />
          {[100, 83, 91, 75, 88].map((w, i) => (
            <div
              key={i}
              className={`h-4 rounded mb-3 bg-gray-100 dark:bg-gray-800/50 w-${w < 80 ? "[75%]" : w < 90 ? "[83%]" : "full"}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Error / 404
  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-6xl mb-4">📄</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Post not found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          This post doesn't exist or may have been moved.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-colors"
        >
          <FiArrowLeft size={14} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Post header */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-24 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-6">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-300 truncate max-w-xs">
              {post.title}
            </span>
          </nav>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-accent font-medium"
                >
                  <FiTag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <FiCalendar size={13} />
              {formatDate(post.date)}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <FiClock size={13} />
                {post.readTime}
              </span>
            )}
            <span>
              By{" "}
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Asitha Kanchana
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Markdown content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {content}
          </ReactMarkdown>
        </motion.article>

        {/* Navigation footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors font-medium"
          >
            <FiArrowLeft size={14} />
            All Posts
          </Link>
          <Link
            to="/"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors font-medium"
          >
            Portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;

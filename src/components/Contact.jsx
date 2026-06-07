import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiFacebook,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "asitha.contact.me@gmail.com",
    href: "mailto:asitha.contact.me@gmail.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@AsithaKanchana1",
    href: "https://github.com/AsithaKanchana1",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "asithakanchana",
    href: "https://www.linkedin.com/in/asithakanchana/",
  },
  {
    icon: FiFacebook,
    label: "Facebook",
    value: "asithakanchana01",
    href: "https://www.facebook.com/asithakanchana01",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+94 70 133 6364",
    href: "https://wa.me/94701336364",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Valid email required";
    }
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Asitha Kanchana",
          from_email: form.email,
          to_email: "asitha.contact.me@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none transition-colors ${
      errors[field]
        ? "border-red-400 dark:border-red-600 focus:border-red-400"
        : "border-gray-200 dark:border-gray-700 focus:border-accent dark:focus:border-accent"
    }`;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            06 — Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-2">
            Get In Touch
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            Have a project or opportunity in mind? Send me a message or reach
            out on social.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Asitha Kanchana"
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Asitha, I'd love to work with you on..."
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/30"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Feedback */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <FiCheck size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <FiAlertCircle size={16} />
                  Something went wrong. Try emailing me directly.
                </div>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Or reach out directly
            </h3>
            {socialLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-accent group-hover:border-accent transition-colors shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

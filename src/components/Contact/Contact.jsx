import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_pa9vnci",
        "template_h9vthgf",
        form.current,
        "vcnBOX7E_oDai2ZcK"
      )
      .then(() => {
        setIsSubmitting(false);
        form.current.reset();
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans w-full overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl"></div>

      <ToastContainer />

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-8 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            I'd love to hear from you — reach out for any questions!
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Main form */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Connect With Me
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Mahamudul Hasan Milon"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                  isSubmitting
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/30"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {/* Alternative contact */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-center text-sm">
                Or email me directly at{" "}
                <a
                  href="mahamudulhasanmilon553@gmail.com"
                  className="text-purple-400 hover:text-pink-400 transition-colors font-medium"
                >
                  mahamudulhasanmilon553@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">💨</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Quick Response
            </h4>
            <p className="text-gray-400 text-sm">Reply within 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">👨‍💻</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Available for Work
            </h4>
            <p className="text-gray-400 text-sm">Open to opportunities</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🚀</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Let's Collaborate
            </h4>
            <p className="text-gray-400 text-sm">
              Open to interesting projects
            </p>
          </div>
        </div>
      </div>

      {/* Add custom CSS for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;

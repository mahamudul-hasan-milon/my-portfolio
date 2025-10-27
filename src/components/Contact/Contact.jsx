import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pa9vnci",
        "template_h9vthgf",
        form.current,
        "vcnBOX7E_oDai2ZcK"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
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
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 w-full mx-auto font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16 max-w-[600px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium leading-relaxed">
          I'd love to hear from you — reach out for any questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-[600px] bg-[#0d081f]/90 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-4">
          Connect With Me
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 sm:py-4 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

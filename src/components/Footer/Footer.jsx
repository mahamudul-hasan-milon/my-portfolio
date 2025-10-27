import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 w-full">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">
          Md. Mahamudul Hasan Milon
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base hover:text-purple-500 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-2xl sm:text-3xl">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/m.h.milon.212672",
            },
            { icon: <FaTwitter />, link: "https://x.com/m_h_milon553" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/mahamudulhasan_milon/",
            },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@milon2226" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base text-gray-400 mt-6">
          © 2025 Md. Mahamudul Hasan Milon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">
          Md. Mahamudul Hasan Milon
        </h2>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
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
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
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
              rel=""
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Md. Mahamudul Hasan Milon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

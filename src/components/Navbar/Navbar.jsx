import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import "../../App.css";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SocialLinks = ({ mobile = false, className = "" }) => (
  <div
    className={`flex space-x-4 ${
      mobile ? "mt-6 pt-6 border-t border-gray-800" : ""
    } ${className}`}
  >
    <a
      href="https://github.com/mahamudul-hasan-milon"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2 rounded-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110"
      aria-label="GitHub"
    >
      <FaGithub
        size={20}
        className="text-gray-400 group-hover:text-white transition-colors duration-300"
      />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        GitHub
      </span>
    </a>
    <a
      href="https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2 rounded-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-110"
      aria-label="LinkedIn"
    >
      <FaLinkedin
        size={20}
        className="text-gray-400 group-hover:text-white transition-colors duration-300"
      />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        LinkedIn
      </span>
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide on scroll down, show on scroll up
      setShowNavbar(currentScroll < lastScrollY || currentScroll < 100);
      setIsScrolled(currentScroll > 50);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scrollspy
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 150;
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll on click
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Resume download handler
  const handleDownloadResume = () => {
    // Replace with actual resume URL or file path
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mahamudul_Hasan_Milon_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Animated border effect */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        {/* Background with gradient */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? "bg-gradient-to-b from-gray-950/95 via-gray-950/90 to-gray-950/85 backdrop-blur-xl shadow-lg shadow-purple-500/10"
              : "bg-gradient-to-b from-gray-950/50 via-gray-950/30 to-transparent backdrop-blur-sm"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 relative z-10">
          {/* Logo with gradient */}
          <div className="group relative">
            <button
              onClick={() => handleClick("home")}
              className="text-xl sm:text-2xl font-bold cursor-pointer select-none"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                MH Milon
              </span>
            </button>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => handleClick(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                  )}
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SocialLinks className="mr-4" />
            <button
              onClick={handleDownloadResume}
              className="group relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <SocialLinks className="md:hidden" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              {isOpen ? (
                <IoMdClose className="text-xl text-purple-500 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <MdMenu className="text-xl text-purple-500 transition-transform duration-300 hover:rotate-180" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-900 border-l border-gray-800 shadow-2xl md:hidden transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="text-xl font-bold">
                <span className="text-purple-500">&lt;</span>
                <span className="text-white">Menu</span>
                <span className="text-purple-500">/&gt;</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-colors duration-300"
              >
                <IoMdClose className="text-xl text-purple-500" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`w-full px-4 py-4 rounded-xl text-left transition-all duration-300 flex items-center ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-white border-l-4 border-purple-500"
                        : "text-gray-400 hover:text-white hover:bg-gray-900/50"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Download Resume Button for Mobile */}
            <button
              onClick={handleDownloadResume}
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </button>

            {/* Social Links for Mobile */}
            <div className="mt-auto pt-8">
              <div className="text-center text-gray-500 text-sm mb-4">
                Connect with me
              </div>
              <SocialLinks mobile />
            </div>

            {/* Copyright for Mobile */}
            <div className="mt-8 text-center text-xs text-gray-600">
              © 2025 MH Milon. All rights reserved.
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>

      {/* Add styles for smooth transitions */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;

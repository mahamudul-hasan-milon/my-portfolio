import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../App.css";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
];

const SocialLinks = ({ mobile = false }) => (
  <div className={`flex space-x-4 ${mobile ? "mt-4" : ""}`}>
    <a
      href="https://github.com/mahamudul-hasan-milon"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
    >
      <FaGithub size={22} />
    </a>
    <a
      href="https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
    >
      <FaLinkedin size={22} />
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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 
      ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } 
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-semibold cursor-pointer select-none">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">M H</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Milon</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex">
          <SocialLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <IoMdClose
              className="text-3xl text-[#8245ec] cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <MdMenu
              className="text-3xl text-[#8245ec] cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[72px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] bg-[#050414]/90 backdrop-blur-xl rounded-2xl shadow-xl md:hidden transition-all duration-300 
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-white transition-colors duration-300 ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleClick(item.id)}>{item.label}</button>
            </li>
          ))}
          <SocialLinks mobile />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

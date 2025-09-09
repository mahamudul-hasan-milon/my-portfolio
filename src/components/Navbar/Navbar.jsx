import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      className="text-gray-300 hover:text-[#8245ec]"
    >
      <FaGithub size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-[#8245ec]"
    >
      <FaLinkedin size={24} />
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar background & hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // show/hide navbar on scroll direction
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNavbar(false); // scrolling down → hide
      } else {
        setShowNavbar(true); // scrolling up → show
      }

      // background when scrolled
      setIsScrolled(currentScroll > 50);

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scrollspy for active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 150; // offset
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] 
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } 
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">M H</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Milon</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
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
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <MdMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-white ${
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

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "../../App.css";

// Constants
const NAV_CONFIG = {
  menuItems: [
    { id: "about", label: "About", mobileIcon: "👤" },
    { id: "skills", label: "Skills", mobileIcon: "💡" },
    { id: "experience", label: "Experience", mobileIcon: "🚀" },
    { id: "work", label: "Projects", mobileIcon: "📁" },
    { id: "education", label: "Education", mobileIcon: "🎓" },
    { id: "contact", label: "Contact", mobileIcon: "📞" },
  ],
  socialLinks: [
    {
      href: "https://github.com/mahamudul-hasan-milon",
      IconComponent: FaGithub,
      label: "GitHub",
      color: "purple",
      tooltip: "View my GitHub profile",
    },
    {
      href: "https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/",
      IconComponent: FaLinkedin,
      label: "LinkedIn",
      color: "blue",
      tooltip: "Connect on LinkedIn",
    },
  ],
  resume: {
    url: "/resume.pdf",
    filename: "Mahamudul_Hasan_Milon_Resume.pdf",
  },
};

// Custom Hooks
const useNavbarScroll = (threshold = 50, hideThreshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsVisible(
        currentScroll < lastScrollY || currentScroll < hideThreshold,
      );
      setIsScrolled(currentScroll > threshold);
      setLastScrollY(currentScroll);
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [lastScrollY, threshold, hideThreshold]);

  return { isScrolled, isVisible };
};

const useActiveSection = (sections, offset = 150) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + offset;
      let found = false;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          scrollPos >= element.offsetTop &&
          scrollPos < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section.id);
          found = true;
          break;
        }
      }

      if (!found && scrollPos < 100) {
        setActiveSection("home");
      }
    };

    const throttledScrollSpy = throttle(handleScrollSpy, 100);
    window.addEventListener("scroll", throttledScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", throttledScrollSpy);
  }, [sections, offset]);

  return activeSection;
};

// Utility Functions
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Sub-components
const AnimatedLogo = ({ onClick }) => (
  <button
    onClick={onClick}
    className="group relative cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1"
    aria-label="Scroll to home"
  >
    <div className="relative">
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        M H Milon
      </span>
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
  </button>
);

const SocialIcon = ({ href, IconComponent, label, color, tooltip }) => {
  const colorClasses = {
    purple: "hover:border-purple-500 hover:text-purple-400",
    blue: "hover:border-blue-500 hover:text-blue-400",
    pink: "hover:border-pink-500 hover:text-pink-400",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${colorClasses[color]}`}
      aria-label={label}
    >
      {IconComponent && (
        <IconComponent
          size={18}
          className="text-gray-400 group-hover:text-current transition-colors duration-300"
        />
      )}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="bg-gray-900 text-gray-300 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {tooltip}
        </div>
      </div>
    </a>
  );
};

const DesktopNavItem = ({ item, isActive, onClick }) => (
  <li className="relative group list-none">
    <button
      onClick={() => onClick(item.id)}
      className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? "text-white bg-gradient-to-r from-purple-900/20 to-pink-900/20"
          : "text-gray-400 hover:text-white hover:bg-gray-900/30"
      }`}
      aria-label={`Scroll to ${item.label}`}
    >
      {item.label}
      {isActive && (
        <div className="ml-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse inline-block"></div>
      )}
    </button>
    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
  </li>
);

// Mobile Nav Item (with icons)
const MobileNavItem = ({ item, isActive, onClick }) => (
  <li>
    <button
      onClick={() => onClick(item.id)}
      className={`w-full px-4 py-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between ${
        isActive
          ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-white border-l-4 border-purple-500"
          : "text-gray-400 hover:text-white hover:bg-gray-900/30"
      }`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-lg">{item.mobileIcon}</span>
        <span className="font-medium">{item.label}</span>
      </div>
      {isActive && (
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
      )}
    </button>
  </li>
);

const DesktopNav = ({ activeSection, onItemClick }) => (
  <div className="hidden lg:flex items-center space-x-1">
    <nav className="flex items-center space-x-1">
      {NAV_CONFIG.menuItems.map((item) => (
        <DesktopNavItem
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
          onClick={onItemClick}
        />
      ))}
    </nav>

    <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-4"></div>

    <div className="flex items-center space-x-3">
      {NAV_CONFIG.socialLinks.map((link) => (
        <SocialIcon
          key={link.label}
          href={link.href}
          IconComponent={link.IconComponent}
          label={link.label}
          color={link.color}
          tooltip={link.tooltip}
        />
      ))}

      <button
        onClick={() =>
          downloadFile(NAV_CONFIG.resume.url, NAV_CONFIG.resume.filename)
        }
        className="group relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all duration-300 overflow-hidden"
        aria-label="Download resume"
      >
        <span className="relative z-10 flex items-center space-x-2">
          <FaDownload className="text-sm" />
          <span>Resume</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>
    </div>
  </div>
);

const MobileNav = ({ isOpen, onClose, activeSection, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 w-full sm:w-96 lg:hidden z-50">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0014] via-[#11001f] to-[#07000f]"></div>

          <div className="absolute inset-0 border-l border-purple-900/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent"></div>
          </div>

          <div className="relative h-full flex flex-col p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="text-lg font-bold text-white">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  M H Milon
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500 transition-all duration-300"
                aria-label="Close menu"
              >
                <IoMdClose className="text-xl text-purple-400" />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-2">
                {NAV_CONFIG.menuItems.map((item) => (
                  <MobileNavItem
                    key={item.id}
                    item={item}
                    isActive={activeSection === item.id}
                    onClick={onItemClick}
                  />
                ))}
              </ul>
            </nav>

            <button
              onClick={() => {
                downloadFile(NAV_CONFIG.resume.url, NAV_CONFIG.resume.filename);
                onClose();
              }}
              className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all duration-300 flex items-center justify-center space-x-3"
              aria-label="Download resume"
            >
              <FaDownload className="text-lg" />
              <span className="text-lg">Download Resume</span>
            </button>

            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <div className="text-center text-gray-400 text-sm mb-4">
                Connect with me
              </div>
              <div className="flex justify-center space-x-4">
                {NAV_CONFIG.socialLinks.map((link) => (
                  <SocialIcon
                    key={link.label}
                    href={link.href}
                    IconComponent={link.IconComponent}
                    label={link.label}
                    color={link.color}
                    tooltip={link.tooltip}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-600">
              <div className="mb-1">
                © {new Date().getFullYear()} Md. Mahamudul Hasan Milon
              </div>
              <div className="text-gray-700">
                Full Stack Web Developer(MERN)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileMenuToggle = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 group"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    {isOpen ? (
      <IoMdClose className="text-xl text-purple-400 transition-transform duration-300 group-hover:rotate-90" />
    ) : (
      <MdMenu className="text-xl text-purple-400 transition-transform duration-300 group-hover:rotate-180" />
    )}
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </button>
);

const NavbarBackground = ({ isScrolled, isMenuOpen }) => (
  <>
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 via-30% to-transparent"></div>

    <div
      className={`absolute inset-0 transition-all duration-700 ${
        isMenuOpen
          ? "bg-gray-950/95 backdrop-blur-xl"
          : isScrolled
            ? "bg-gradient-to-b from-gray-950/95 via-gray-950/90 to-gray-950/85 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
            : "bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  </>
);

// Main Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, isVisible } = useNavbarScroll();
  const activeSection = useActiveSection(NAV_CONFIG.menuItems);

  const handleItemClick = useCallback((id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    scrollToSection("home");
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const navbarClasses = useMemo(
    () =>
      `fixed top-0 w-full z-50 transition-all duration-700 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isMenuOpen ? "bg-gray-950" : ""}`,
    [isVisible, isMenuOpen],
  );

  return (
    <>
      <nav className={navbarClasses}>
        <NavbarBackground isScrolled={isScrolled} isMenuOpen={isMenuOpen} />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              <AnimatedLogo onClick={handleLogoClick} />

              <DesktopNav
                activeSection={activeSection}
                onItemClick={handleItemClick}
              />

              <div className="lg:hidden flex items-center space-x-3">
                <div className="flex space-x-2">
                  {NAV_CONFIG.socialLinks.slice(0, 2).map((link) => (
                    <SocialIcon
                      key={link.label}
                      href={link.href}
                      IconComponent={link.IconComponent}
                      label={link.label}
                      color={link.color}
                      tooltip={link.tooltip}
                    />
                  ))}
                </div>
                <MobileMenuToggle isOpen={isMenuOpen} onClick={toggleMenu} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        onItemClick={handleItemClick}
      />

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
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

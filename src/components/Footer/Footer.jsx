import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black text-white pt-16 pb-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Name with gradient */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Md. Mahamudul Hasan Milon
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Full Stack Developer | Creating innovative solutions with modern
            technologies
          </p>
        </div>

        {/* Navigation Links with improved styling */}
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="group relative px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300"
            >
              <span className="relative z-10 text-gray-300 group-hover:text-white">
                {item.name}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Social Media Icons with enhanced design */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/m.h.milon.212672",
              label: "Facebook",
              color: "from-blue-600 to-blue-800",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/m_h_milon553",
              label: "Twitter",
              color: "from-sky-500 to-sky-700",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/",
              label: "LinkedIn",
              color: "from-blue-700 to-blue-900",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/mahamudulhasan_milon/",
              label: "Instagram",
              color: "from-pink-500 to-purple-600",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/@milon2226",
              label: "YouTube",
              color: "from-red-600 to-red-800",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-transparent transition-all duration-300 hover:scale-110"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div className="relative z-10 text-xl sm:text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Ring effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-full group-hover:animate-ping-slow"></div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-b from-gray-950 to-black text-gray-500 text-sm">
              Connect With Me
            </span>
          </div>
        </div>

        {/* Copyright and additional info */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-500 mb-2">
            Crafted with passion and modern technologies
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} Md. Mahamudul Hasan Milon. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-700 mt-2">
            Designed & Developed with React, Tailwind CSS
          </p>
        </div>

        {/* Quick contact info */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <a
            href="mahamudulhasanmilon553@gmail.com"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            📧 mahamudulhasanmilon553@gmail.com
          </a>
          <a
            href="+8801773593797"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            📞 +8801773593797
          </a>
        </div>
      </div>

      {/* Add custom animation for ping effect */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

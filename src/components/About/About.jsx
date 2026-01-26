import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import profileImage from "../../assets/profile2.jpg";
import "../../App.css";

const About = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/mahamudul-hasan-milon",
      label: "GitHub",
      color: "hover:shadow-purple-500/30",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/md-mahamudul-hasan-milon-91aa81230/",
      label: "LinkedIn",
      color: "hover:shadow-blue-500/30",
    },

    {
      icon: <SiGmail />,
      href: "mahamudulhasanmilon553@gmail.com",
      label: "Email",
      color: "hover:shadow-red-500/30",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full font-sans py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left relative z-10">
            {/* Animated greeting */}
            <div className="mb-4">
              <span className="text-lg sm:text-xl font-medium text-gray-400">
                Hello, This is
              </span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                MH Milon
              </span>
            </h1>

            {/* Typewriter animation with enhanced styling */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
                Passionate
                <span className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                  <Typewriter
                    words={[
                      "Full Stack Web Developer",
                      "Android App Developer",
                      "Problem Solver",
                      "Tech Enthusiast",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
              <div className="w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              A passionate developer specializing in creating modern, scalable
              applications. I transform ideas into powerful digital experiences
              with clean code and innovative solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
              {[
                { value: "10+", label: "Projects" },
                { value: "0+", label: "Years Exp" },
                { value: "100%", label: "Dedication" },
                { value: "∞", label: "Passion" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://drive.google.com/file/d/1_0UJzY7vXZ4lzoFcIjESAkPYm6TbxCnL/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden flex items-center justify-center space-x-2"
              >
                <span className="relative z-10">Download Resume</span>
                <FaDownload className="relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-purple-500 text-white font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-gray-500 text-sm mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 ${link.color} hover:scale-110 transition-all duration-300`}
                    aria-label={link.label}
                  >
                    <div className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Glowing effect container */}
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-20 animate-pulse delay-1000"></div>

              {/* Profile image with gradient border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gray-950"></div>
                <img
                  src={profileImage}
                  alt="MH Milon"
                  className="relative w-full h-full rounded-full object-cover z-10 border-4 border-transparent hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float-delayed">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center animate-float-slow">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="relative py-24 px-4 md:px-8 lg:px-16 xl:px-20 font-sans w-full mx-auto max-w-[1300px] overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </h2>
        <div className="relative w-48 h-1 mx-auto mt-6 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full blur-sm"></div>
        </div>
        <p className="text-gray-300 mt-4 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          A showcase of my featured projects, highlighting technical expertise
          and innovative solutions across various domains.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Card gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden h-full">
              {/* Image container with gradient overlay */}
              <div className="relative p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-4 mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed text-center">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-xs sm:text-sm font-semibold text-gray-300 rounded-full px-3 py-1.5 hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-500/50 hover:text-purple-200 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View details hint */}
                <div className="mt-6 text-center">
                  <span className="text-xs font-medium text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                    Click to view details →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Backdrop with gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-black/95 backdrop-blur-xl"
            onClick={handleCloseModal}
          ></div>

          {/* Modal container */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl h-auto max-h-[90vh] overflow-y-auto overflow-hidden animate-slideUp">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>

            {/* Close Button */}
            <div className="relative flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-300 hover:scale-110 bg-gray-800/50 hover:bg-gray-700/50 w-10 h-10 rounded-full flex items-center justify-center"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-6 lg:px-8 pb-10 gap-8">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl object-cover w-full max-h-64 sm:max-h-80 md:max-h-96 transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 md:pl-2 flex flex-col justify-center">
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4
               bg-gradient-to-r from-purple-400 to-pink-400
               bg-clip-text text-transparent"
                >
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-xs sm:text-sm font-semibold text-gray-300 rounded-full px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-300 px-6 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 border border-gray-700"
                  >
                    <span className="relative z-10">View Code</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
                  >
                    <span className="relative z-10">View Live</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add these styles to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
};

export default Work;

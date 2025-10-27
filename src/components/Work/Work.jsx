import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-4 md:px-8 lg:px-16 xl:px-20 font-sans relative w-full mx-auto max-w-[1300px]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 mb-4 line-clamp-3 text-sm sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 sm:p-6">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl h-auto overflow-hidden relative">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-6 lg:px-8 pb-10 gap-6">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-xl object-contain shadow-2xl w-full max-h-64 sm:max-h-80 md:max-h-96"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-2 py-1"
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
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-800 hover:bg-purple-600 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

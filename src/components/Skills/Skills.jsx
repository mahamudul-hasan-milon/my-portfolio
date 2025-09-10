import React from "react";
import { SkillsInfo } from "./../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-10 md:px-8 lg:px-16 xl:px-20 font-sans bg-skills-gradient clip-path-custom w-full mx-auto"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            {/* Category Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex items-center justify-center space-x-2
                    bg-gray-800 border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center
                    overflow-hidden transform transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-lg group"
                >
                  {/* Shining overlay */}
                  <span
                    className="absolute top-0 left-[-75%] w-3/4 h-full bg-white opacity-20 rotate-12 transform -translate-x-full 
                    group-hover:animate-shine pointer-events-none"
                  ></span>

                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 relative z-10"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 relative z-10">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

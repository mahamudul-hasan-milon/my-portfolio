import { SkillsInfo } from "./../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 font-sans bg-skills-gradient clip-path-custom w-full"
    >
      {/* Section Title */}
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-lg font-medium">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills Categories */}
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-6 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-6 sm:py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105"
          >
            {/* Category Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center justify-center
                  bg-gray-800 border-2 border-gray-700 rounded-3xl py-2 px-3 text-center
                  overflow-hidden transform transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-lg group"
                >
                  {/* Shining overlay */}
                  <span
                    className="absolute top-0 left-[-75%] w-3/4 h-full bg-white opacity-20 rotate-12 
                    transform -translate-x-full group-hover:animate-shine pointer-events-none"
                  ></span>

                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 relative z-10 mb-1"
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

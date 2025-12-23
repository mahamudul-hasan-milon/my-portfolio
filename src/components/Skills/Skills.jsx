import { SkillsInfo } from "./../../constants";
import {
  FaCode,
  FaTools,
  FaDatabase,
  FaServer,
  FaPalette,
  FaMobile,
} from "react-icons/fa";

const Skills = () => {
  const categoryIcons = {
    Frontend: <FaCode className="text-3xl" />,
    Backend: <FaServer className="text-3xl" />,
    Databases: <FaDatabase className="text-3xl" />,
    "Tools & Others": <FaTools className="text-3xl" />,
    "UI/UX": <FaPalette className="text-3xl" />,
    Mobile: <FaMobile className="text-3xl" />,
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 font-sans w-full overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold relative z-10">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
              <div className="w-full h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full blur-sm"></div>
            </div>
          </div>
          <p className="text-gray-400 mt-8 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I've mastered through hands-on projects and
            continuous learning
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SkillsInfo.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden h-full">
                {/* Category Header */}
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 text-purple-400">
                        {categoryIcons[category.title] || (
                          <FaTools className="text-3xl" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {category.skills.length} skills
                        </p>
                      </div>
                    </div>
                    <div className="text-3xl text-gray-700 group-hover:text-purple-500 transition-colors duration-300">
                      →
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/0 via-purple-900/10 to-purple-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Skill content */}
                        <div className="relative p-4 flex flex-col items-center justify-center text-center">
                          {/* Skill icon with gradient border */}
                          <div className="relative mb-3">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300">
                              <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                          </div>

                          {/* Skill name */}
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>

                          {/* Experience level indicator */}
                          <div className="mt-3 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                              style={{
                                width: `${Math.min(
                                  100,
                                  ((skillIndex % 5) + 3) * 20
                                )}%`,
                                transition: "width 1s ease-in-out",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill count badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 text-xs font-bold">
                  {category.skills.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-center">
              Proficiency Levels
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-sm text-gray-400">Advanced</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
                <span className="text-sm text-gray-400">Intermediate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-400">Learning</span>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Continuously expanding my skillset with new technologies
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
        .group:hover .animate-shine {
          animation: shine 0.75s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;

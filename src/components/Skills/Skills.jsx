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
    Frontend: <FaCode className="text-xl" />,
    Backend: <FaServer className="text-xl" />,
    Databases: <FaDatabase className="text-xl" />,
    "Tools & Others": <FaTools className="text-xl" />,
    "UI/UX": <FaPalette className="text-xl" />,
    Mobile: <FaMobile className="text-xl" />,
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold relative z-10">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              SKILLS
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools that I have mastered through hands-on
            projects and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {categoryIcons[category.title] || <FaTools />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.skills.length} skills
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

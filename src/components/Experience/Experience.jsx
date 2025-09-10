import { experiences } from "../../constants";
import "../../App.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 -mt-25 sm:px-8 md:px-12 lg:px-20 font-sans bg-skills-gradient clip-path-custom-2 w-full mx-auto"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-full mx-auto">
          A collection of my professional experiences highlighting roles,
          responsibilities, and contributions across different organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line → only show on laptop */}
        <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-full hidden lg:block"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`mb-12 flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Timeline circle → only show on laptop */}
            <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10 hidden lg:flex">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full mb-10 lg:max-w-md p-6 lg:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_10px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "lg:mr-44" : "lg:ml-44"
              }`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {experience.desc}
              </p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

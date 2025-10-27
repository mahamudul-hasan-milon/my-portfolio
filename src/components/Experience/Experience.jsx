import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden font-sans py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      {/* Section Title */}
      <div className="max-w-[1200px] mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-lg font-medium max-w-[800px] mx-auto leading-relaxed">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white/20 h-full hidden lg:block"></div>

        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className={`relative flex flex-col lg:flex-row items-center mb-16 ${
              idx % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-[#8245ec] bg-gray-700 flex justify-center items-center z-10">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`bg-gray-900/80 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-[#8245ec]/40 shadow-[0_0_20px_5px_rgba(130,69,236,0.5)] w-full lg:w-[45%] transform transition-transform duration-300 hover:scale-105 ${
                idx % 2 === 0
                  ? "lg:ml-8 lg:translate-x-0"
                  : "lg:mr-8 lg:translate-x-0"
              } mt-10 lg:mt-0`}
            >
              <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {exp.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">{exp.date}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {exp.desc}
              </p>

              <div>
                <h5 className="text-white font-medium mb-2">Skills:</h5>
                <ul className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec]/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm"
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

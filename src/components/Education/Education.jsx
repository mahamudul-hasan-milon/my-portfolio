import { education } from "./../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-sans relative w-full max-w-[1200px] mx-auto"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          My education has been a journey of continuous learning and
          development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center vertical line for lg screens */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white/20 h-full hidden lg:block"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col lg:flex-row items-center mb-16 ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute lg:left-1/2 transform -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-purple-500 bg-gray-700 flex justify-center items-center z-10 hidden lg:flex">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 lg:p-8 shadow-[0_0_20px_5px_rgba(130,69,236,0.4)] w-full lg:w-[45%] transform transition-transform duration-300 hover:scale-105 mt-10 lg:mt-0 ${
                index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"
              }`}
            >
              <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
                <div className="w-16 h-12 sm:w-20 sm:h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">{edu.date}</p>
                </div>
              </div>

              <p className="mt-2 text-gray-400 font-medium">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

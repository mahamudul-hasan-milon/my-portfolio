import { education } from "./../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 -mt-15 sm:px-8 md:px-12 lg:px-20 font-sans bg-skills-gradient clip-path-custom-3 w-full mx-auto"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-full mx-auto">
          My education has been a journey of continuous learning and
          development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line → only show on laptop */}
        <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 lg:-translate-x-0 w-1 bg-white h-full hidden lg:block"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-12 flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Timeline circle → only show on laptop */}
            <div className="absolute lg:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 lg:w-16 lg:h-16 rounded-full flex justify-center items-center z-10 hidden lg:flex">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full mb-10 lg:max-w-md p-6 lg:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_10px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "lg:ml-44" : "lg:mr-44"
              }`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-12 sm:w-20 sm:h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-semibold">
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

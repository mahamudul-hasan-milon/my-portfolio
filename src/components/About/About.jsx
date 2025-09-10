import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/profile2.jpg";
import "../../App.css";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 w-full px-4 md:px-8 lg:px-16 xl:px-20 font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            This is
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            M H Milon
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I'm a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Web Developer",
                  "Android App Developer",
                  "UI/UX Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            This is Mahamudul Hasan Milon, a passionate Fullstack Web Developer
            and Android App Developer who loves turning ideas into powerful
            digital experiences. With a blend of technical expertise and
            creative design, I build modern, user-friendly and scalable
            applications.
          </p>
          <a
            href="https://drive.google.com/file/d/16gDSVUWbg82PfdUZENTUVxQV9VkzrlZv/view"
            target="_blank"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="M H Milon"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 rounded-full border-purple-700 object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

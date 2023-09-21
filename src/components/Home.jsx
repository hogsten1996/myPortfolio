import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jacob Hogsten
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          "As a dedicated web developer, I excel in creating digital experiences
          that are not only functional but also exceptional. My expertise lies
          in developing web applications that offer seamless adaptability across
          devices, ensuring a flawless user experience. Precision is paramount
          in my work, and every detail is meticulously fine-tuned for optimal
          performance."
        </p>
        <div>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white group border-2 w-[155px] px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 cursor-pointer"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Jake, it's nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              "Outside of coding and always trying to learn new technologies, I
              love to hang out with my lovely wife and my family. My wife is
              also a software developer so we like to challenge one another and
              grow our skill sets. I try to stay active and weight train
              regularly and live a balanced life style."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

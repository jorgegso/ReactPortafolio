import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0E1117] text-gray-300 ">
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="w-full max-w-[1000px] grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>  
          <div></div> 
        </div>
        <div className="w-full max-w-[1000px]  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>hi nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I’m a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive full-stack web
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


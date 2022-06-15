import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
const Skill = () => {
  return (
    <div name="skill" className="w-full h-screen bg-[#01010D] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* col 1 */}
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-pink-600 py-1 ">
            Experience
          </p>
          <p className="py-4 mt-3">
            These are the technologies i've worked with
          </p>
        </div>
        {/* col 2 */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500">
            <img className="w-20 mx-auto my-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500">
            <img className="w-20 mx-auto my-4" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500">
            <img className="w-20 mx-auto my-4" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500">
            <img className="w-20 mx-auto my-4" src={GitHub} alt="HTML icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500">
            <img className="w-20 mx-auto my-4" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
